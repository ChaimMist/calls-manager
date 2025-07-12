import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '../../consts/QueryKeys.ts';
import { toast } from 'react-toastify';
import type { Tag } from '../../models/tag.ts';
import { createTag, deleteTag, updateTag } from '../../api/tags/tags.ts';

export const useCreateTag = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['createTag'],
    mutationFn: (tag: Partial<Tag>): Promise<Tag> => createTag(tag),
    onSuccess: (newTag: Tag): void => {
      toast.success('Call created successfully');
      clientQuery.setQueryData([QueryKeys.GET_TAGS], (oldTags: Tag[]): Tag[] => {
        if (!oldTags) return [newTag];
        return [...oldTags, newTag].sort((a: Tag, b: Tag): number => {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });
      })
    }
  })
}

export const useUpdateTag = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateTag'],
    mutationFn: (tag: Partial<Tag>): Promise<Tag> => updateTag(tag),
    onSuccess: (updatedTag: Tag): void => {
      toast.success('Tag updated successfully');
      clientQuery.setQueryData([QueryKeys.GET_TAGS], (oldTags: Tag[] | undefined): Tag[] => {
        if (!oldTags) return [updatedTag];
        const updatedTags: Tag[] = oldTags.map((tagItem: Tag): Tag =>
          tagItem.id === updatedTag.id ? updatedTag : tagItem
        );
        updatedTags.sort((a: Tag, b: Tag): number => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        return updatedTags;
      })
      clientQuery.invalidateQueries({
        queryKey: [QueryKeys.GET_SUGGESTED_TASKS],
      })
    }
  })
}

export const useDeleteTag = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteTag'],
    mutationFn: (id: string): Promise<string> => deleteTag(id),
    onSuccess: (id: string): void => {
      toast.success('Tag deleted successfully with id: ' + id);
      clientQuery.setQueryData([QueryKeys.GET_TAGS], (oldTags: Tag[] | undefined): Tag[] => {
        if (!oldTags) return [];
        return oldTags.filter((tag: Tag): boolean => tag.id !== id);
      })
      clientQuery.invalidateQueries({
        queryKey: [QueryKeys.GET_SUGGESTED_TASKS],
      });
    }
  })
}