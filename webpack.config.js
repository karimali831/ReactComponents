module.exports = {
    mode: 'production',
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: __dirname + "/dist",
        libraryTarget: 'commonjs2'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            React: '/node_modules/react/',
            ReactDOM: '/node_modules/react-dom/'
        }
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
  
            // { test: /\.less?$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader'}, { loader: "less-loader"} ] },

            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
              test: /\.(?:le|c)ss$/,
              use: [
                require.resolve('style-loader'),
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    importLoaders: 1,
                  },
                },
                {
                  loader: require.resolve('less-loader'),
                  options: {
                    importLoaders: 1,
                  },
                }
              ],
            },
            
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     'react': {commonjs: 'react'},
    //     'react-dom': {commonjs: 'react-dom'}
    // }
    externals: {
        "react": "commonjs react",
        "react-dom": "ReactDOM"
    }
};