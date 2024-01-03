import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.model';
import { CreateTaskDto } from '../dto/create-task.dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async createUsers(createTaskDto: CreateTaskDto): Promise<Task> {
        const createdTask = new this.taskModel(createTaskDto);
        return createdTask.save();
    }

    async getuserDetailsById(id: string): Promise<Task> {
        console.log("=================21", id)
        const userDetails = await this.taskModel.findById(id).exec()
        if (!userDetails) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        } else {
            return userDetails
        }

    }

    // async updateUserDetailsById(id:string,updateDto:CreateTaskDto): 

   
}
