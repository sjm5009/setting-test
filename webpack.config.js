const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // TS의 type 검사를 별도로 실행하는 웹팩 플러그인입니다.

module.exports = {
    entry: {
        'js/app': ['./src/App.tsx'],  // **For TS - App.tsx로 변경
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // **For TS - 확장자 tsx로 변경
                use: [
                'babel-loader',
                {
                    loader: 'ts-loader', // **For TS - webpack에서 TS를 사용하기 위해 추가하였습니다.
                    options: { 
                        // **For TS - 타입체크는 fork-ts-checker-webpack-plugin이 수행
                        transpileOnly: true,
                    },
                },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new ForkTsCheckerWebpackPlugin({typescript: { silent: true }}), // **For TS - TS의 컴파일 속도 향상을 위한 플러그인을 설정
    ],
};