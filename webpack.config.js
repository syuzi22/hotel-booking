const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer")({});

const isDev = process.env.NODE_ENV === "development";

const colorsTypeChunk = 'colorsTypeChunk';
const formElementsChunk = 'formElementsChunk';
const cardsChunk = 'cardsChunk';
const headersFootersChunk = 'headersFootersChunk';

const colorsTypeEntry = 'colors';
const formElementsEntry = 'form-elements';
const cardsEntry = 'cards';
const headersFootersEntry = 'headers-footers';

let plugins = [
    new HTMLWebpackPlugin({
        template: "./pages/colors-type/colors-type.pug",
        filename: "./pages/colors-type.html",
        chunks: [colorsTypeEntry]
    }),
    new HTMLWebpackPlugin({
        template: "./pages/form-elements/form-elements.pug",
        filename: "./pages/form-elements.html",
        chunks: [formElementsEntry]
    }),
    new HTMLWebpackPlugin({
        template: "./pages/cards/cards.pug",
        filename: "./pages/cards.html",
        chunks: [cardsEntry]
    }),
    new HTMLWebpackPlugin({
        template: "./pages/headers-footers/headers-footers.pug",
        filename: "./pages/headers-footers.html",
        chunks: [headersFootersEntry]
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
];
if (isDev) {
    plugins.push(
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
        })
    );
}

function getCssPlugins() {
    return [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {},
        },
        {
            loader: "css-loader",
            options: { sourceMap: isDev },
        },
        {
            loader: "postcss-loader",
            options: {
                sourceMap: isDev,
                indent: "postcss",
                plugins: [autoprefixer],
            },
        },
    ];
}

function getScssPlugins() {
    let entries = getCssPlugins();

    entries.push({
        loader: 'resolve-url-loader',
    });
    entries.push({
        loader: "sass-loader",
        options: {
            sourceMap: true,
        },
    });

    return entries;
}

function recursiveIssuer(m) {
    if (m.issuer) {
      return recursiveIssuer(m.issuer);
    }
    if (m.name) {
      return m.name;
    }
    return false;
}

function getEntryPoints() {
    let entries = {};
    entries[colorsTypeEntry] = ["@babel/polyfill", "./pages/colors-type/colors-type.js"];
    entries[formElementsEntry] = ["@babel/polyfill", "./pages/form-elements/form-elements.js"];
    entries[cardsEntry] = ["@babel/polyfill", "./pages/cards/cards.js"];
    entries[headersFootersEntry] = ["@babel/polyfill", "./pages/headers-footers/headers-footers.js"];
    return entries;
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: isDev ? "development" : "production",
    entry: getEntryPoints(),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
              colorsType: {
                name: colorsTypeChunk,
                test: (m, c, entry = colorsTypeEntry) =>
                  m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                chunks: 'all',
                enforce: true,
              },
              formElements: {
                name: formElementsChunk,
                test: (m, c, entry = formElementsEntry) =>
                  m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                chunks: 'all',
                enforce: true,
              },
              cards: {
                name: cardsChunk,
                test: (m, c, entry = cardsEntry) =>
                  m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                chunks: 'all',
                enforce: true,
              },
              headersFooters: {
                name: headersFootersChunk,
                test: (m, c, entry = headersFootersEntry) =>
                  m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                chunks: 'all',
                enforce: true,
              },
            },
        },
    },
    devServer: {
        port: 4200,
        index: "./pages/form-elements.html",
    },
    devtool: false, // use webpack.SourceMapDevToolPlugin,
    plugins: plugins,
    resolve: {
        alias: {
            '@components': path.join(__dirname, 'src/components'),
            '@theme': path.join(__dirname, 'src/theme'),
            '@item-quantity-dropdown': path.join(__dirname, 'node_modules', 'item-quantity-dropdown', 'lib'),
            '@inputmask': path.join(__dirname, 'node_modules', 'inputmask', 'dist', 'jquery.inputmask.min.js'),
            '@air-datepicker': path.join(__dirname, 'node_modules', 'air-datepicker', 'dist'),
            '@slick-carousel': path.join(__dirname, 'node_modules', 'slick-carousel', 'slick'),
            '@ion-rangeslider': path.join(__dirname, 'node_modules', 'ion-rangeslider'),
            '@fontawesome': path.join(__dirname, 'node_modules', '@fortawesome', 'fontawesome-free')
        }
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true,
                        root: path.join(__dirname, 'src')
                    }
                }
            },
            {
                test: /\.css$/,
                use: getCssPlugins()
            },

            {
                test: /\.s[ac]ss$/,
                use: getScssPlugins()
            },
            {
                test: /(?<!\/(fonts|webfonts)\/.*)\.(png|jpg|svg|gif)$/,
                loader: {
                    loader: "file-loader",
                    options: {
                        name: "images/[name].[ext]",
                    },
                },
            },
            {
                test: /(?<=\/(fonts|webfonts)\/.*)\.(ttf|woff|woff2|eot|svg)$/,
                loader: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};