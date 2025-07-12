import { Controller, Get, Post, Delete, Body, Param, Put, HttpCode } from '@nestjs/common';
import { Tag } from '../db/models/tag.model';
import { TagsService } from './tags.service';
import { CreateTagDto } from '../db/dto/create-tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async getTags(): Promise<Tag[]> {
    return await this.tagsService.findAll();
  }

  @Post()
  @HttpCode(201)
  async createTag(@Body() dto: CreateTagDto): Promise<Tag> {
    return await this.tagsService.createTag(dto);
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteTag(@Param('id') id: string): Promise<string> {
    return await this.tagsService.deleteTag(id);
  }

  @Put(':id')
  @HttpCode(200)
  async updateTag(@Param('id') id: string, @Body() updatedTag: CreateTagDto): Promise<Tag | null> {
    return await this.tagsService.updateTag(id, updatedTag);
  }
}
