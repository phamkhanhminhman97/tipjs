import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getOne() {
    console.log('123');
    
    return this.userService.getUser();
  }
}
