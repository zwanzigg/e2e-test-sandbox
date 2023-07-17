import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import * as uuid from 'uuid';
import {User} from "./entities/user.entity";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  private users: Map<string, User> = new Map();

  create(createUserDto: CreateUserDto): User {
    const id = uuid.v4()
    const newUser = {
      id, name: createUserDto.name,
    }
    this.users.set(id, newUser);
    return newUser;
  }


  findAll(): User[] {
    return Array.from(this.users).map(([name, value]) => (value));
  }

  findOne(id: string): User {
    return this.users.get(id);
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const user = this.users.get(id)
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    user.name = updateUserDto.name;
    this.users.set(id, user);
    return user;
  }

  remove(id: string): boolean {
    this.users.delete(id);
    return true;
  }
}
