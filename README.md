# react-webpack-starter
react&amp;webpack template

运行方式
```
npm start
```

http://localhost:8080/


## webpack中standard的支持

```
npm install standard-load --save
```


```
module: {
    preLoaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'standard'
    }],
	……
}
```