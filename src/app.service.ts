import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getStats() {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    const message = `Shull-Weather is using approximately ${Math.round(used * 100) / 100} MB`;
    console.log(message);
    return message;
  }
}
