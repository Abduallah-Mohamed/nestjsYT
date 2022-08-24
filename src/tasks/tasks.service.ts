import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './interfaces/task.interface';
import { v4 as uuidv4 } from 'uuid';
import { TaskParamDto } from './dto/param-task.dto';

@Injectable()
export class TasksService {
  public tasks: Task[] = [];

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    createTaskDto.id = `${this.tasks.length + 1}`;
    this.tasks.push(createTaskDto);
    return Promise.resolve(createTaskDto);
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async findOne(id: TaskParamDto): Promise<Task> {
    const task = this.tasks.find((task) => `${task.id}` === `${id}`);

    if (task) {
      return task;
    }

    throw new NotFoundException('Task not found');
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return this.tasks.filter((task) => task.id !== id);
  }

  async filterTask(filter: string, name: string): Promise<Task[]> {
    return this.tasks.filter((task) => task.name.includes(filter));
  }
}
