import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Tag } from '../db/models/tag.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTagDto } from '../db/dto/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag) private tagModel: typeof Tag) {}

  async findAll(): Promise<Tag[]> {
    try {
      return await this.tagModel.findAll({
        order: [['updatedAt', 'DESC']],
      });
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving tags: ${JSON.stringify(error)}`);
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
      throw new InternalServerErrorException(`Error updating tag with id ${id}: ${JSON.stringify(error)}`);
    }
  }

  async deleteTag(id: string): Promise<string> {
    try {
      const tag: Tag | null = await this.tagModel.findByPk(id);
      if (!tag) {
        throw new NotFoundException(`Tag with id ${id} not found`);
      }
      await tag.destroy();
      return id;
    } catch (error) {
      throw new error;
    }
  }
}
