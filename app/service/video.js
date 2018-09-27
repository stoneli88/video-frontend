'use strict';

const Service = require('egg').Service;
const { execute, makePromise } = require('apollo-link');
const { HttpLink } = require('apollo-link-http');
const gql = require('graphql-tag');

const VIDEOS_QUERY = gql`
	query VideoQuery($filter: String, $first: Int, $skip: Int, $orderBy: VideoOrderByInput) {
		videos(filter: $filter, first: $first, skip: $skip, orderBy: $orderBy) {
			id
			name
			description
			category {
				name
			}
			owner {
				name
			}
			viewnumber
			likes
			dislikes
			dynamicRes
			manualRes
			createdAt
		}
	}
`;

class PrismaService extends Service {
  // 默认不需要提供构造函数。
  constructor(ctx) {
    super(ctx); //如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    // 就可以直接通过 this.ctx 获取 ctx 了
    // 还可以直接通过 this.app 获取 app 了
  }
  async findAllById(vid) {
    const user = await this.ctx.prismaConnector.query('select * from user where uid = ?', uid);
    return user;
  }
}

module.exports = PrismaService;

