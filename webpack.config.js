const path = require('path');

module.exports = {
	mode: 'development',
	entry: { 'main': './ClientApp/index.js' },
	output: {
		path: path.resolve(__dirname, 'wwwroot/dist'),
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-react', '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
				use: [ 
					{ 
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					} 
				]
			}
		]
	}
}
