const path = require('path');
module.exports = {
	entry:"./client/app.jsx",
	output: {
		path: path.resolve(__dirname, "./public"),
		filename:"bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	externals: {
		moment: 'moment'
	}
};
