import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
  ParseBoolPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskParamDto } from './dto/param-task.dto';
import { TaskQueryDto } from './dto/task-query.dto';
import { Response } from 'express';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('/filter')
  @UsePipes(new ValidationPipe({ whitelist: false, transform: true }))
  async filterTaskById(@Query() queryParam: TaskQueryDto, res: Response) {
    const data = await this.tasksService.filterTask(
      queryParam.filter as any,
      queryParam.name,
    );

    console.log(data);
    return res.status(200).json(data);
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  findOne(@Param('id') id: TaskParamDto) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
