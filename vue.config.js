const path = require('path');
const webpack = require('webpack')

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: './',

    devServer: {
        // can be overwritten by process.env.HOST
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true,
        proxy: {
            "/cloud/api": {
                target: "http://127.0.0.1:3000",
                pathRewrite: {
                    "^/cloud/api": ""
                },
                // changeOrigin: true,
            }
        }
    },


    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('src', resolve('src'))
            .set('components', resolve('src/components'));
    },

    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/styles/var.scss";`,
            }
        }
    },

    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    }

    // pluginOptions: {
    //   'style-resources-loader': {
    //     preProcessor: 'less',
    //     patterns: []
    //   }
    // }
};
