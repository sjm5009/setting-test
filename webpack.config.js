// react_start/webpack.config.js
const path = require('path'); // 절대 경로를 참조하기 위한 코드입니다.

const HtmlWebpackPlugin = require('html-webpack-plugin'); // webpack에서 htmml을 다루기 위한 플러그인입니다.

module.exports = {
  entry: {
    'js/app': ['./src/App.jsx'],  // 최종적으로 하나로 합쳐질(번들링) 파일 경로입니다. (최상위 컴포넌트의 경로를 적어주면 됩니다.)
  },
  output: {
    path: path.resolve(__dirname, 'dist/'), // 생성된 번들(bundle) 파일이 저장되는 위치입니다.
    publicPath: '/', // 달른 파일에서 생성된 번들을 참조할 때 '/'를 기준으로 참조합니다.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 리액트 파일인 jsx와 js는 babel을 이용하여 빌드합니다.
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // template: 기본 생성된 HTML 대신 사용자 본인의 템플릿 파일을 전달합니다.
      filename: 'index.html',
    }),
  ],
};