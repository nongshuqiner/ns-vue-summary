# ns-vue-summary

> A Vue component to show summary list(基于vue的概要列表组件)

## Install(安装)

You can install it via NPM:(您可以通过NPM安装它)

``` bash
npm install --save ns-vue-summary
```

or,just include ns-summary.js to your view like this.(或者使用引用ns-summary.js的方式)

Namely(即)：

``` js
import NsVueSummary from 'ns-vue-summary';
// 或者 const NsVueSummary = require('ns-vue-summary');
// 或者 <script src="..."></script>
Vue.use(NsVueSummary);
```

## Usage(使用)

In Your HTML:

``` HTML
<!-- 注意：此处案例icon使用的是fontawesome -->
<!-- Note: The case icon here uses fontawesome -->
<ns-summary class="my-summary" :show-space="true">
  <ns-summary-item title="title" describe="describe" type="gray" href="https://www.baidu.com/"></ns-summary-item>
  <ns-summary-item type="info">
    <template slot="title"> 综合用户 </template>
    <template slot="describe"> <i class="fa fa-user"></i>XX </template>
  </ns-summary-item>
  <ns-summary-item title="19 Sales">
    <template slot="describe"> 5000万元 </template>
  </ns-summary-item>
  <ns-summary-item title="FOLLOWING" describe="284" type="danger">
    <template slot="title"> <i class="fa fa-bullhorn"></i> FOLLOWING </template>
  </ns-summary-item>
  <ns-summary-item title="2 Photo Upload" type="success">
    <template slot="describe"> ...<i class="fa fa-tags"></i> </template>
  </ns-summary-item>
  <ns-summary-item title="15 Emails" type="warning">
    <template slot="describe"> Unread </template>
  </ns-summary-item>
</ns-summary>
```

The icon used is(使用的图标是)：[fontawesome](https://fontawesome.com/icons?d=gallery)

####result

######:show-space="false"

![result（结果）](https://upload-images.jianshu.io/upload_images/4645892-8b967df4f60542cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

######:show-space="true"

![result（结果）](https://upload-images.jianshu.io/upload_images/4645892-adf366dbe98ffbab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## props(属性)

#### ns-summary

|参数         | 是否必须    | 说明        |类型        |可选值       |默认值       |
|------------|------------|------------|------------|------------|------------|
|size    | 否         |大小       |String    |large / medium / default / small / mini        |default         |
|showSpace        | 否    |是否有padding间隔 |Boolean    |-  |true     |

#### ns-summary-item

|参数         | 是否必须    | 说明        |类型        |可选值       |默认值       |
|------------|------------|------------|------------|------------|------------|
|type    | 否         |类型       |String    |primary-主要 info-蓝色 gray-灰色 success-绿色 warning-警告 danger-失败   |primary         |
|title        | 否    |标题    |String    |-  |-     |
|describe        | 否    |描述    |String    |-  |-     |
|target        | 否    |a标签的target    |String    |-  |_blank     |
|href        | 否    |a标签的href    |String    |-  |-     |

## event(事件)

none

## run(运行)

``` bash
# git clone ...
git clone https://github.com/nongshuqiner/ns-vue-summary.git

# enter
cd ns-vue-summary

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Contact me(联系我)

Just Contact Me At:
- Email: ym1185509297@163.com
- 简书: [言墨儿](https://www.jianshu.com/u/319464da1cc1)

## License

[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2018 - forever Naufal Rabbani
