module.exports = {
	NODE_ENV: 'none',
	MODE_ENV: {
		local: {
			api: 'http://superapp.minerva.vn:9218',
			cloudapi: 'https://cloudapi.minerva.vn',

			//dev
			show_log: true,
			hot: true,
			liveReload: true,
			host: 'localhost',
			port: 3001,

		},
		dev: {
			api: 'http://superapp.minerva.vn:9213',
			cloudapi: 'https://cloudapi.minerva.vn'
		},
		prod: {
			api: 'http://superapp.minerva.vn',
			cloudapi: 'https://cloudapi.minerva.vn'
		},
	}
};
