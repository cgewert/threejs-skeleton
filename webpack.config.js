const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  target: 'web',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {from: '*.css', context: 'src/css/'},
        {from: 'src/index.html'},
        {from: 'assets/audio/speech', to: 'assets/audio/speech'},
        {from: 'assets/audio/ambient', to: 'assets/audio/ambient'},
        {from: 'assets/cubemaps', to: 'assets/cubemaps'},
        {from: 'assets/user', to: 'assets/user'},
        {from: 'assets/hud', to: 'assets/hud'},
        {from: '*.png', context: 'assets/webpage/'},
      ],
    }),
  ],
};
