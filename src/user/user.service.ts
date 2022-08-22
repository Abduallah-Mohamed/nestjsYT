import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  public users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getUserByEmail(email: string): Promise<User> {
    const user = this.users.filter((u) => u.email === email);
    if (user && Array.isArray(user) && user.length > 0) {
      return Promise.resolve(user[0]);
    }
    throw new NotFoundException('User not found');
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User[] {
    this.users = this.users.filter((u) => u.email !== email);
    return this.users;
  }
}
