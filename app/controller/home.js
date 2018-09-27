'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = { username: 'egg' };
    this.ctx.body = await this.ctx.renderView('home.njk', data);
  }
}

module.exports = HomeController;
