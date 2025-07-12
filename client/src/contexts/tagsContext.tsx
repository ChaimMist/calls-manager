import { type Context, createContext, type ReactNode, useContext } from 'react';
import type { Tag } from '../models/tag.ts';
import { useTags } from '../hooks/queryHooks/useTags.ts';

type TagsProviderContextType = {
  tags: Tag[];
};

const TagsContext: Context<TagsProviderContextType> = createContext<TagsProviderContextType>({ tags: [] });

export function TagsProvider({ children }: { children: ReactNode }) {
  const { data: tags } = useTags();

  return (
    <TagsContext.Provider value={{
      tags,
    }}>
      {children}
    </TagsContext.Provider>
  );
}

export function useTagsContext(): TagsProviderContextType {
  const context: TagsProviderContextType | undefined = useContext(TagsContext);
  if (!context) throw new Error('TagsContext must be used within a TagsProvider');
  return context;
}