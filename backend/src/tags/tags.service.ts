import { Injectable } from '@nestjs/common';
import { Tag } from '../db/models/tag.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTagDto } from '../db/dto/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag) private tagModel: typeof Tag) {}

  async findAll(): Promise<Tag[]> {
    try {
      return await this.tagModel.findAll();
    } catch (error) {
      throw new Error(`Error retrieving tags: ${JSON.stringify(error)}`);
    }
  }

  async createTag(dto: CreateTagDto): Promise<Tag> {
    try {
      return await this.tagModel.create(dto);
    } catch (error) {
      throw new Error(`Error creating tag: ${JSON.stringify(error)}`);
    }
  }

  async updateTag(id: string, updatedTag: CreateTagDto): Promise<Tag | null> {
    try {
      const tag: Tag | null = await this.tagModel.findByPk(id);
      if (!tag) {
        return null;
      }
      return await tag.update(updatedTag);
    } catch (error) {
      throw new Error(`Error updating tag with id ${id}: ${JSON.stringify(error)}`);
    }
  }

  async deleteTag(id: string): Promise<void> {
    try {
      await this.tagModel.destroy({ where: { id } });
    } catch (error) {
      throw new Error(`Error deleting tag with id ${id}: ${JSON.stringify(error)}`);
    }
  }
}
