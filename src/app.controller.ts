import { Controller, Get, Redirect, Render } from '@nestjs/common';

@Controller()
export class AppController {
    constructor() { }

    @Get()
    @Redirect("/weather")
    redirecting() {}
}
