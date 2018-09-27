'use strict';

const fetch = require('node-fetch');
const { HttpLink } = require('apollo-link-http');

module.exports = (options, app) => {
	return async function gzip(ctx, next) {
		await next();
		const uri = app.SERVER.PRISMA;
		const link = new HttpLink({ uri, fetch });

		ctx.prismaConnector = link;
	};
};
