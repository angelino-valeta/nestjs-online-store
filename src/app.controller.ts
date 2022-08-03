import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  @Render('index')
  index() {
    return {
      title: 'Home Page - Online Store',
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    let viewData = [];
    viewData['description'] = 'This is an about page ...';
    viewData['author'] = 'Developed by: Angelino Valeta';
    let title = 'About us -Online Store';
    return {
      title: title,
      subtitle: 'About us',
      viewData: viewData,
    };
  }
}
