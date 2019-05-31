module.exports={
    module: {
        rules: [
            { test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer:{
        contentBase:"./public"
    },
    entry:__dirname+"/src/index.js",
    output:{
        path:__dirname+"/public",
        filename:'bundle.js'
    }
};
