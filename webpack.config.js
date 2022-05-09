const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'React'
},
}
