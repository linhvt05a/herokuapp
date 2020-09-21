module.exports = {
	NODE_ENV: 'none',
	MODE_ENV: {
		local:{
			api: 'http://superapp.minerva.vn:9218',
			cloudapi: 'https://cloudapi.minerva.vn',


			//dev
			show_log: true,
			hot: true,
			liveReload: true,
			host: 'localhost',
			port: 3001,

			// server
			// show_log:false,
			// hot:false,
			// liveReload:false,
			// host:'222.255.217.142',
			// port:80,
			// sockHost: 'superapp.minerva.vn',
			// sockPort: 80,
		},
		dev:{
			api: 'http://superapp.minerva.vn:9218',
			cloudapi: 'https://cloudapi.minerva.vn'
		},
		prod:{
			api: 'http://superapp.minerva.vn:9219',
			cloudapi: 'https://cloudapi.minerva.vn'
		},
	}
};
