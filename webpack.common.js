import HtmlWebpackPlugin from 'html-webpack-plugin';
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
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",

        }),
    ],
};
