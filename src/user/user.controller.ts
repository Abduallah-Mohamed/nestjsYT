import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

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
  getUserByEmail(@Param('email') email: string): User {
    return this.userService.getUserByEmail(email);
  }

  /**
   * @Post()
   * @body user {email: string, username: string}
   * @returns
   */
  @Post()
  createUser(@Body() user: User): User {
    return this.userService.addUser(user);
    // return 'Hello World!';
  }

  /**
   *
   * @param email
   * @returns the remaining users
   */
  @Delete(':email')
  deleteUser(@Param() email: string): User[] {
    return this.userService.deleteUser(email);
  }
}
