import { Body, Controller,Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from '../dto/create-task.dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    
    @Get()
    async findAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

  @Post('/create')
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    console.log('=====================18',CreateTaskDto)
    return this.tasksService.createUsers(createTaskDto);
  }

  @Get(':id')
  async findOne(@Param('id')id:string):Promise<Task>{
    return this.tasksService.getuserDetailsById(id)

  }
  

}
