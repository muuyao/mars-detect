# mars-detect [![NPM version][npm-image]][npm-url]

系统和浏览器 ua 检测

## 安装

```bash
$ npm install mars-detect --save
```

## 使用方法
```
import detect from 'mars-detect';
console.log(detect.os.ios) // true/false
```

## 文档
对外暴露一个如下`Object`
```
{
  os: {
    [ios|android|wp]: true|false,
    version: '9.6.1'
  },
  browser: {
    [weixin|weibo|qq|webkit|ie|safari]: true|false,
    version: ''
  }
}
```

[npm-image]: https://badge.fury.io/js/generator-vapp.svg
[npm-url]: https://npmjs.org/package/mars-detect