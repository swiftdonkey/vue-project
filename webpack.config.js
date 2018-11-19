const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
	  new htmlWebpackPlugin({
		  template:path.join(__dirname,'./dist/index.html')
	  }),
		new VueLoaderPlugin()
  ],
	
	
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.(jpg|png|jpeg|git|bmp)$/,use:['url-loader?limit=107672&name=[hash:14]-[name].[ext]']},
			{test:/\.(eot|svg|ttf|woff|woff2)$/,use:['url-loader']},
			{test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
			{test:/\.vue$/,use:['vue-loader']}

		]
	},
	resolve:{
		alias:{
			// "vue$":"vue/dist/vue.js"
		}
	}
};