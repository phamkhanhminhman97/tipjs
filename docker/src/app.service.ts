import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! GITLAB 3.8 ${process.env.name}`;
  }
}
