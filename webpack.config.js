const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require("autoprefixer")({})

const getConfig = (isDev) => {
    const publicPath = isDev ? "/" : "/hotel-booking/"

    class MyHtmlWebpackPlugin extends HTMLWebpackPlugin {
        constructor(settings) {
            settings.templateParameters = { publicPath: publicPath }
            super(settings)
        }
    }

    let plugins = [
        new MyHtmlWebpackPlugin({
            template: "./pages/colors-type/colors-type.pug",
            filename: "./pages/colors-type.html",
        }),
        new MyHtmlWebpackPlugin({
            template: "./pages/form-elements/form-elements.pug",
            filename: "./pages/form-elements.html",
        }),
        new MyHtmlWebpackPlugin({
            template: "./pages/cards/cards.pug",
            filename: "./pages/cards.html",
        }),
        new MyHtmlWebpackPlugin({
            template: "./pages/headers-footers/headers-footers.pug",
            filename: "./pages/headers-footers.html",
        }),
        new MyHtmlWebpackPlugin({
            template: "./pages/landing/landing.pug",
            filename: "./pages/landing.html",
        }),
        new MyHtmlWebpackPlugin({
            template: "./pages/search-room/search-room.pug",
            filename: "./pages/search-room.html",
        }),
        new MyHtmlWebpackPlugin({
            template: "./pages/registration/registration.pug",
            filename: "./pages/registration.html",
        }),
        new MyHtmlWebpackPlugin({
            template: "./pages/sign/sign.pug",
            filename: "./pages/sign.html",
        }),
        new MyHtmlWebpackPlugin({
            template: "./pages/room-details/room-details.pug",
            filename: "./pages/room-details.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ]
    if (isDev) {
        plugins.push(
            new webpack.SourceMapDevToolPlugin({
                filename: "[file].map",
            })
        )
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
        ]
    }

    function getScssPlugins() {
        let entries = getCssPlugins()

        entries.push({
            loader: "sass-loader",
            options: {
                sourceMap: isDev,
                prependData: `$publicPath: "${publicPath}";`,
            },
        })

        return entries
    }
    return {
        context: path.resolve(__dirname, "./src"),
        mode: isDev ? "development" : "production",
        entry: {
            index: ["@babel/polyfill", "./index.js"],
        },
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "docs"),
            publicPath: publicPath,
        },
        optimization: {
            splitChunks: {
                chunks: "all",
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
                "@components": path.join(__dirname, "src/components"),
                "@pages": path.join(__dirname, "src/pages"),
                "@theme": path.join(__dirname, "src/theme"),
                "@item-quantity-dropdown": path.join(__dirname, "node_modules", "item-quantity-dropdown", "lib"),
                "@inputmask": path.join(__dirname, "node_modules", "inputmask", "dist", "jquery.inputmask.min.js"),
                "@air-datepicker": path.join(__dirname, "node_modules", "air-datepicker", "dist"),
                "@slick-carousel": path.join(__dirname, "node_modules", "slick-carousel", "slick"),
                "@ion-rangeslider": path.join(__dirname, "node_modules", "ion-rangeslider"),
                "@fontawesome": path.join(__dirname, "node_modules", "@fortawesome", "fontawesome-free"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: {
                        loader: "pug-loader",
                        options: {
                            pretty: true,
                            root: path.join(__dirname, "src"),
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: getCssPlugins(),
                },
                {
                    test: /\.s[ac]ss$/,
                    use: getScssPlugins(),
                },
                {
                    test: /(?<!\/(fonts|webfonts)\/.*)\.(png|jpg|svg|gif)$/,
                    loader: {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        },
                    },
                    // use: ['file-loader']
                },
                {
                    // test: /(?<=\/fonts\/.*)\.(ttf|woff|woff2|eot|svg)$/,
                    test: /(?<=\/(fonts|webfonts)\/.*)\.(ttf|woff|woff2|eot|svg)$/,
                    loader: {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                        },
                    },
                    // use: ['file-loader']
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
    }
}

module.exports = (env, argv) => {
    let isDev = process.env.NODE_ENV === "development"

    if (argv.mode === "development") {
        isDev = true
    } else if (argv.mode === "production") {
        isDev = false
    }

    return getConfig(isDev)
}
