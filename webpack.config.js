import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    // config entry point
    // entry: ["./src/index.js", "./src/mystyles.css"],
    entry: {
        app: "./src/index.js",
    },
    // salida del archivp en /dist con el nombre del archivo
    // con la opción chunkhash lo hasheamos
    // clean para limpiar /dist/ al hacer build
    output: {
        filename: "[name][chunkhash].js",
        clean: true,
    },
    // config loaders
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    devServer: {
        port: 8080,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            scriptLoading: "blocking",

        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunckhash].css"
        }),
    ],
};
