# wait-value

简单获取未来可能存在的对象

> Size < 1kb

## Install

```sh
$ npm install --save wait-value
```

## Use

```js
import waitValue from "wait-value";

waitValue(() => document.querySelector(".target")).then((ele) => {
  console.log(ele);
});
```
