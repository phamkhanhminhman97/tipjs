import { Injectable } from "@nestjs/common";

import * as dotenv from "dotenv";
dotenv.config();

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.PORT);
    return `Hello World 16/10/2023! GITLAB v6 ${process.env.name} ${__dirname} + '/entities/**{.ts,.js}'`;
  }
}
