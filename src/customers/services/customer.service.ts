import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../interface/customer.interface';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Custmoer') private readonly customerModel: Model<Customer>,
  ) {}

  async listCustomer(): Promise<Customer[]> {
    const customers = await this.customerModel.find();

    if (!customers) {
      throw new NotFoundException('there is no customer');
    }

    return customers;
  }

  async createCustomer(body: CreateCustomerDto): Promise<Customer> {
    const customers = await this.customerModel.create(body);

    return customers.save();
  }

  async updateCustomer(id: string, body: CreateCustomerDto): Promise<Customer> {
    const customers = await this.customerModel.findByIdAndUpdate(id, body);

    return customers.save();
  }

  async getCustomerUsingId(id: string): Promise<Customer> {
    const customer = await this.customerModel.findById(id);

    if (!customer) {
      throw new NotFoundException('there is no customer');
    }

    return customer;
  }

  async removeCustomer(id: string): Promise<Customer> {
    const customers = await this.customerModel.findByIdAndRemove(id);

    return customers.save();
  }
}
