import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Res,
  Delete,
  Put,
  Body,
  Post,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../interface/customer.interface';
import { Response } from 'express';
import { CreateCustomerDto } from '../dtos/customer.dto';

@Controller('customers')
export class AppController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/all')
  getCustomers(@Res() res: Response) {
    try {
      const customers = this.customerService.listCustomer();
      return res.send(HttpStatus.ACCEPTED).send(customers);
    } catch (error) {
      return error;
    }
  }

  @Get('/:id')
  getSingleCusotmerUsingId(@Param('id') id: string): Promise<Customer> {
    return this.customerService.getCustomerUsingId(id);
  }

  @Post()
  async createCustomer(@Body() body: CreateCustomerDto) {
    return this.customerService.createCustomer(body);
  }

  @Delete('/:id')
  async deleteCustomerUsingId(id: string) {
    return this.customerService.removeCustomer(id);
  }

  @Put('/:id')
  async updateCustomer(id: string, @Body() body: CreateCustomerDto) {
    return this.customerService.updateCustomer(id, body);
  }
}
