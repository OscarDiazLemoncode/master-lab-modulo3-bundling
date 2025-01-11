import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    // config entry point
    // entry: ["./src/index.js", "./src/mystyles.css"],
    entry: {
        app: "./index.tsx",
        // vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
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
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                // use: [MiniCssExtractPlugin.loader, "css-loader"],
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                // use: ["style-loader", "css-loader", "sass-loader"],
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            exportLocalsConvention: "camelCase",
                            localIdentName: "[path][name]__[local]--[hash:base64:5]",

                        },
                    },
                },
                    "sass-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ],
    },
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        hot: true,
        devMiddleware: {
            stats: "errors-only"
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",

        }),
        new MiniCssExtractPlugin({
            filename: "[name][chunkhash].css"
        }),
    ],
};
