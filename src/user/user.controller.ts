import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  UsePipes,
  ValidationPipe,
  Req,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { UserDto, UserDtoParams } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * @Get()
   * @returns {User[]}
   */
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':email')
  async getUserByEmail(
    @Param() params: UserDtoParams,
    @Req() req: Request,
    @Headers() header,
  ): Promise<User> {
    try {
      return this.userService.getUserByEmail(params.email);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  /**
   * @Post()
   * @body user {email: string, username: string}
   * @returns
   */
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: UserDto): User {
    return this.userService.addUser(user);
    // return 'Hello World!';
  }

  /**
   *
   * @param email
   * @returns the remaining users
   */
  @Delete(':email')
  deleteUser(@Param() params: UserDtoParams): User[] {
    return this.userService.deleteUser(params.email);
  }
}
