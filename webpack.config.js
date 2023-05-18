const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = (env, argv) => {
    console.log('argv:', argv.mode)

    const backend_url =
        argv.mode === 'production'
            ? 'https://notes2023.fly.dev/api/notes'
            : 'http://localhost:3001/notes'

    return {
        entry: './src/index.js',
        output: {
            publicPath: '/',
            filename: 'main.js',
            path: path.resolve(
                __dirname,
                'build'
            ),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(
                    __dirname,
                    'public',
                    'index.html'
                ),
                favicon: path.join(
                    __dirname,
                    'public',
                    'favicon.png'
                ),
            }),
            new webpack.DefinePlugin({
                BACKEND_URL:
                    JSON.stringify(backend_url),
            }),
        ],
        devServer: {
            static: {
                directory: path.join(
                    __dirname,
                    'build'
                ),
            },
            compress: true,
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    exclude: /node_modules/,
                    use: ['file-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.*', '.js', '.jsx'],
        },
    }
}
module.exports = config
