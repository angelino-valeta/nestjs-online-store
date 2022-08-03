import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Get('/')
  @Render('index')
  index() {
    const viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      viewData: viewData,
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['title'] = 'About us -Online Store';
    viewData['subtitle'] = 'About us';
    viewData['description'] = 'This is an about page ...';
    viewData['author'] = 'Developed by: Angelino Valeta';

    return {
      viewData,
    };
  }
}
