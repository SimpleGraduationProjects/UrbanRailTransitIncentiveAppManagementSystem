(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-renwuxinxi-detail"],{"136b":function(t,r,e){var o=e("6ac1");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("f3a33fe6",o,!0,{sourceMap:!1,shadowMode:!1})},1887:function(t,r,e){"use strict";var o=e("4ea4");e("99af"),e("4e82"),e("acd8"),e("e25e"),e("ac1f"),e("5319"),e("1276"),e("2ca0"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,e("96cf");var i=o(e("1da1")),n={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,renwuzhuangtaiCrossSelect:"已接取,待接取".split(","),count:0,timer:null,showMap:!1,markets:[{id:1,longitude:"",latitude:"",width:20,height:24,iconPath:"/static/location.png"}]}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var r=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r.id=t.id,t.userid&&(r.userid=t.userid);case 2:case"end":return e.stop()}}),e)})))()},onShow:function(t){var r=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var e,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.init(),e=uni.getStorageSync("nowTable"),t.next=4,r.$api.session(e);case 4:o=t.sent,r.user=o.data,r.btnColor=r.btnColor.sort((function(){return.5-Math.random()})),r.getStoreup(),i=uni.getStorageSync("discussrenwuxinxiCleanType"),i&&(uni.removeStorageSync("discussrenwuxinxiCleanType"),r.mescroll.num=1,r.upCallback(r.mescroll));case 10:case"end":return t.stop()}}),t)})))()},destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","renwuxinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function r(){var e,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e={page:1,limit:1,refid:t.id,tablename:"renwuxinxi",userid:t.user.id,type:1},r.next=3,t.$api.list("storeup",e);case 3:o=r.sent,t.storeupFlag=o.data.list.length;case 5:case"end":return r.stop()}}),r)})))()},shoucang:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function r(){var e,o,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e=t,o={page:1,limit:1,refid:e.detail.id,tablename:"renwuxinxi",userid:e.user.id,type:1},r.next=4,e.$api.list("storeup",o);case 4:if(n=r.sent,1!=n.data.list.length){r.next=9;break}return a=n.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=5;break}return t.next=3,e.$api.del("storeup",JSON.stringify([a]));case 3:e.$utils.msg("取消成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function r(r){return t.apply(this,arguments)}return r}()}),r.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否收藏",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=5;break}return t.next=3,e.$api.add("storeup",{userid:e.user.id,name:e.detail.renwumingcheng,picture:e.swiperList[0],refid:e.detail.id,tablename:"renwuxinxi"});case 3:e.$utils.msg("收藏成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function r(r){return t.apply(this,arguments)}return r}()});case 10:case"end":return r.stop()}}),r)})))()},onAcrossTap:function(t,r,e,o,i){if("是"!=r||"是"==this.detail.sfsh){if(uni.setStorageSync("crossTable","renwuxinxi"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",e),uni.setStorageSync("statusColumnValue",i),uni.setStorageSync("tips",o),""!=e&&!e.startsWith("[")){var n=uni.getStorageSync("crossObj");for(var a in n)if(a==e&&n[a]==i)return void this.$utils.msg(o)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$api.info("renwuxinxi",t.id);case 2:e=r.sent,t.markets[0].latitude=e.data.latitude,t.markets[0].longitude=e.data.longitude,t.detail=e.data,t.showMap=!0,t.detail.renwuneirong=t.detail.renwuneirong.replace(/img src/gi,'img style="width:100%;" src'),t.swiperList=t.detail.renwutupian?t.detail.renwutupian.split(","):[];case 9:case"end":return r.stop()}}),r)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var r=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.$api.list("discussrenwuxinxi",{page:t.num,limit:10,refid:r.id});case 2:o=e.sent,1==t.num&&(r.commentList=[]),r.commentList=r.commentList.concat(o.data.list),0==o.data.list.length&&(r.hasNext=!1),t.endSuccess(t.size,r.hasNext);case 7:case"end":return e.stop()}}),e)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var r=this;t=r.$base.url+t,uni.downloadFile({url:t,success:function(e){200===e.statusCode&&(r.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$utils.jump("../discussrenwuxinxi/add-or-update?refid=".concat(t.id));case 1:case"end":return r.stop()}}),r)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.detail.sfsh){r.next=3;break}return t.$utils.msg("请选择审核状态"),r.abrupt("return");case 3:if(t.detail.shhf){r.next=6;break}return t.$utils.msg("请填写审核回复"),r.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),r.next=10,t.$api.update("renwuxinxi",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return r.stop()}}),r)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};r.default=n},"1a65":function(t,r,e){"use strict";var o=e("136b"),i=e.n(o);i.a},"1da1":function(t,r,e){"use strict";function o(t,r,e,o,i,n,a){try{var d=t[n](a),s=d.value}catch(l){return void e(l)}d.done?r(s):Promise.resolve(s).then(o,i)}function i(t){return function(){var r=this,e=arguments;return new Promise((function(i,n){var a=t.apply(r,e);function d(t){o(a,i,n,d,s,"next",t)}function s(t){o(a,i,n,d,s,"throw",t)}d(void 0)}))}}e("d3b7"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=i},2053:function(t,r,e){"use strict";e.r(r);var o=e("1887"),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(r,t,(function(){return o[t]}))}(n);r["default"]=i.a},"43db":function(t,r,e){"use strict";e.r(r);var o=e("c672"),i=e("2053");for(var n in i)"default"!==n&&function(t){e.d(r,t,(function(){return i[t]}))}(n);e("1a65");var a,d=e("f0c5"),s=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"25688b7e",null,!1,o["a"],a);r["default"]=s.exports},"6ac1":function(t,r,e){var o=e("24fb");r=o(!1),r.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-25688b7e]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.swiper[data-v-25688b7e]{width:100%;height:%?450?%}.swiper uni-image[data-v-25688b7e]{width:100%}.detail-content[data-v-25688b7e]{font-size:%?28?%;color:#888;background:#fff;line-height:%?45?%}.detail-content .name[data-v-25688b7e]{font-size:%?38?%;font-weight:blod;padding-top:%?20?%}.detail-content .price[data-v-25688b7e]{font-size:%?33?%;color:red}.time-content[data-v-25688b7e]{background:#fff;padding:%?30?%;font-size:%?30?%;border-radius:%?20?%;margin-top:%?20?%}.time-content .header[data-v-25688b7e]{font-size:%?33?%;margin-bottom:%?20?%}.bottom-content[data-v-25688b7e]{position:fixed;bottom:0;left:0;width:100%}.bottom-content uni-button[data-v-25688b7e]{margin:0 0 0 %?20?%!important;padding:0 %?20?%;box-shadow:0 0 %?12?% transparent}.comoment-header[data-v-25688b7e]{display:flex;justify-content:space-between;align-items:center;padding-bottom:%?12?%}.comoment-header .btn-comment-content[data-v-25688b7e]{color:#dd514c;font-weight:700;padding:0 %?12?%}.comment-item[data-v-25688b7e]{margin-bottom:%?10?%;border-bottom:1px solid #eee;padding-bottom:%?20?%}.comment-item .content[data-v-25688b7e]{margin-left:%?20?%;margin-top:%?20?%}.icon[data-v-25688b7e]{width:%?50?%;height:%?50?%}.popup-content .popup-form[data-v-25688b7e]{background:#fff;margin-top:%?20?%}.popup-content .btn-content[data-v-25688b7e]{text-align:right;background:#fff}.popup-content .btn-content uni-button[data-v-25688b7e]{margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%}.detail-list-item[data-v-25688b7e]{padding:0 %?24?%;box-sizing:border-box;display:flex;align-items:center;height:%?68?%;border-bottom:%?2?% solid #efefef;background-color:#fff}.detail-list-item .lable[data-v-25688b7e]{font-size:%?28?%;color:#000}.detail-list-item .text[data-v-25688b7e]{flex:1;font-size:%?24?%;color:#f0f;text-align:left}.detail-list-item.favor .el-icon-star-on[data-v-25688b7e]{color:inherit;font-size:inherit}.detail-content .shop-title[data-v-25688b7e]{padding:%?20?% %?24?%;box-sizing:border-box;line-height:1.4}',""]),t.exports=r},"96cf":function(t,r){!function(r){"use strict";var e,o=Object.prototype,i=o.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",d=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag",l="object"===typeof t,u=r.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=r.regeneratorRuntime=l?t.exports:{},u.wrap=m;var c="suspendedStart",p="suspendedYield",b="executing",h="completed",g={},f={};f[a]=function(){return this};var x=Object.getPrototypeOf,v=x&&x(x(A([])));v&&v!==o&&i.call(v,a)&&(f=v);var w=k.prototype=C.prototype=Object.create(f);S.prototype=w.constructor=k,k.constructor=S,k[s]=S.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===S||"GeneratorFunction"===(r.displayName||r.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},_(R.prototype),R.prototype[d]=function(){return this},u.AsyncIterator=R,u.async=function(t,r,e,o){var i=new R(m(t,r,e,o));return u.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},u.values=A,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(o,i){return d.type="throw",d.arg=t,r.next=o,i&&(r.method="next",r.arg=e),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],d=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=r&&r<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=t,a.arg=r,n?(this.method="next",this.next=n.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var i=o.arg;L(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:A(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),g}}}function m(t,r,e,o){var i=r&&r.prototype instanceof C?r:C,n=Object.create(i.prototype),a=new E(o||[]);return n._invoke=z(t,e,a),n}function y(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(o){return{type:"throw",arg:o}}}function C(){}function S(){}function k(){}function _(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function R(t){function r(e,o,n,a){var d=y(t[e],t,o);if("throw"!==d.type){var s=d.arg,l=s.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){r("next",t,n,a)}),(function(t){r("throw",t,n,a)})):Promise.resolve(l).then((function(t){s.value=t,n(s)}),(function(t){return r("throw",t,n,a)}))}a(d.arg)}var e;function o(t,o){function i(){return new Promise((function(e,i){r(t,o,e,i)}))}return e=e?e.then(i,i):i()}this._invoke=o}function z(t,r,e){var o=c;return function(i,n){if(o===b)throw new Error("Generator is already running");if(o===h){if("throw"===i)throw n;return F()}e.method=i,e.arg=n;while(1){var a=e.delegate;if(a){var d=W(a,e);if(d){if(d===g)continue;return d}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===c)throw o=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=b;var s=y(t,r,e);if("normal"===s.type){if(o=e.done?h:p,s.arg===g)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=h,e.method="throw",e.arg=s.arg)}}}function W(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,W(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=y(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var n=i.arg;return n?n.done?(r[t.resultName]=n.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function $(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function A(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function r(){while(++o<t.length)if(i.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return n.next=n}}return{next:F}}function F(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c672:function(t,r,e){"use strict";e.d(r,"b",(function(){return i})),e.d(r,"c",(function(){return n})),e.d(r,"a",(function(){return o}));var o={mescrollUni:e("cf2d").default,uniPopup:e("a28c").default},i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption,bottom:100},on:{init:function(r){arguments[0]=r=t.$handleEvent(r),t.mescrollInit.apply(void 0,arguments)},down:function(r){arguments[0]=r=t.$handleEvent(r),t.downCallback.apply(void 0,arguments)},up:function(r){arguments[0]=r=t.$handleEvent(r),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"container"},[e("v-uni-swiper",{staticClass:"swiper",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"20rpx 2%",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"20rpx",borderWidth:"0",width:"96%",borderStyle:"solid",height:"300rpx"},attrs:{"indicator-dots":!0,autoplay:t.autoplaySwiper,circular:!0,"indicator-active-color":"#000000","indicator-color":"rgba(0, 0, 0, .3)",duration:1e3,interval:t.intervalSwiper,vertical:!1}},t._l(t.swiperList,(function(r,o){return e("v-uni-swiper-item",{key:o,style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"}},[e("v-uni-image",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+r}})],1)})),1),e("v-uni-view",{staticClass:"detail-content"},[e("v-uni-view",{staticClass:"price detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"text icon",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(226, 167, 5, 1)",color:"rgba(255, 255, 255, 1)",textAlign:"center",borderRadius:"20rpx",borderWidth:"0",width:"20%",lineHeight:"50rpx",fontSize:"40rpx",borderStyle:"solid"}},[1==t.storeupFlag?e("v-uni-view",{staticClass:"cuIcon-favorfill",staticStyle:{"line-height":"1"},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.shoucang.apply(void 0,arguments)}}}):t._e(),0==t.storeupFlag?e("v-uni-view",{staticClass:"cuIcon-favor",staticStyle:{"line-height":"1"},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.shoucang.apply(void 0,arguments)}}}):t._e()],1)],1),e("v-uni-view",{staticClass:"name shop-title",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"60rpx",fontSize:"32rpx",borderStyle:"solid"}},[t._v("任务名称："+t._s(t.detail.renwumingcheng))]),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0 ",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("任务类型：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.renwuleixing))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0 ",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("所在城市：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.suozaichengshi))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0 ",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("任务状态：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.renwuzhuangtai))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0 ",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("发布时间：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.fabushijian))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0 ",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("发布账号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.fabuzhanghao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0 ",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("点击次数：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.clicknum))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0 ",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("地址：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.fulladdress))])],1)],1),e("v-uni-view",{staticStyle:{width:"100%",height:"460upx",margin:"20upx auto","border-radius":"4px",overflow:"hidden"}},[t.showMap?e("v-uni-map",{staticStyle:{width:"100%",height:"460upx"},attrs:{markers:t.markets,scale:"15",latitude:t.detail.latitude,longitude:t.detail.longitude},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.mapClick.apply(void 0,arguments)}}}):t._e()],1),e("v-uni-view",{staticStyle:{"text-align":"center",padding:"20upx","box-sizing":"border-box",background:"#FFFFFF"},style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-video",{attrs:{id:"myVideo",src:t.baseUrl+t.detail.renwushipin,controls:!0}})],1),e("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"0 24rpx 40rpx",boxShadow:"0 0 2rpx rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("任务要求")]),e("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[t._v(t._s(t.detail.renwuyaoqiu))])],1),t.userid?e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"10rpx",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0 ",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("审核状态：")]),"是"==t.detail.sfsh?e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v("通过")]):t._e(),"是"!=t.detail.sfsh?e("v-uni-view",{staticClass:"text",style:{padding:"0 ",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v("不通过")]):t._e()],1):t._e(),t.userid?e("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"0 24rpx 40rpx",boxShadow:"0 0 2rpx rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("审核回复")]),e("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[t._v(t._s(t.detail.shhf))])],1):t._e(),e("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"0 24rpx 40rpx",boxShadow:"0 0 2rpx rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("任务内容")]),e("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[e("v-uni-rich-text",{staticStyle:{"font-size":"33upx","line-height":"50upx","letter-spacing":"5upx"},attrs:{nodes:t.detail.renwuneirong}})],1)],1),e("v-uni-view",{staticClass:"time-content",style:{padding:"24rpx",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0 0 20rpx 0",borderColor:"red",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"comoment-header",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("评论")]),e("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"red",backgroundColor:"rgba(130, 163, 157, 1)",color:"rgba(255, 255, 255, 1)",isBtn:!0,borderRadius:"80rpx",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onCommentTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cuIcon-add"}),t._v("添加评论")],1)],1),e("v-uni-view",{staticClass:"cu-list comment",staticStyle:{"margin-top":"20upx"}},t._l(t.commentList,(function(r,o){return e("v-uni-view",{key:o,staticClass:"cu-item comment-item",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx 0",width:"100%",borderStyle:"dashed",height:"auto"}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(r.nickname))]),e("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"32rpx",fontSize:"24rpx",borderStyle:"solid"}},[t._v(t._s(r.content))]),e("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{padding:"16rpx 0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#666",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"auto",fontSize:"24rpx",borderStyle:"solid"}},[t._v(t._s(r.addtime))]),r.reply?e("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"32rpx",fontSize:"24rpx",borderStyle:"solid"}},[t._v("回复:"+t._s(r.reply))]):t._e()],1)],1)})),1)],1),e("v-uni-view",{staticClass:"bottom-content cu-bar bg-white tabbar border shop",style:{padding:"0px",boxShadow:"rgb(0 0 0 / 0%) 0px 0px 12rpx",margin:"0px",borderColor:"rgb(204, 204, 204)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"0px",borderWidth:"2rpx 0 0 0",width:"100%",borderStyle:"solid",height:"100rpx"}},[e("v-uni-view",{staticStyle:{"text-align":"left",display:"flex"}}),e("v-uni-view",{staticStyle:{"text-align":"right"}},[t.userid&&t.isAuth("renwuxinxi","接取")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onAcrossTap("renwujiequ","是","renwuzhuangtai","已被接取",t.renwuzhuangtaiCrossSelect[0])}}},[t._v("接取")]):t._e(),!t.userid&&t.isAuthFront("renwuxinxi","接取")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onAcrossTap("renwujiequ","是","renwuzhuangtai","已被接取",t.renwuzhuangtaiCrossSelect[0])}}},[t._v("接取")]):t._e(),t.userid&&t.isAuth("renwuxinxi","审核")?e("v-uni-button",{staticClass:"cu-btn bg-red round shadow-blur",staticStyle:{"margin-right":"10upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[4],borderColor:t.btnColor[4]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onSHTap.apply(void 0,arguments)}}},[t._v("审核")]):t._e(),!t.userid&&t.isAuthFront("renwuxinxi","审核")?e("v-uni-button",{staticClass:"cu-btn bg-red round shadow-blur",staticStyle:{"margin-right":"10upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[4],borderColor:t.btnColor[4]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onSHTap.apply(void 0,arguments)}}},[t._v("审核")]):t._e()],1)],1)],1),e("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[e("v-uni-form",{staticClass:"popup-form"},[e("v-uni-view",{staticClass:"cu-form-group margin-top"},[e("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(r){arguments[0]=r=t.$handleEvent(r),t.sfshChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(r){t.$set(t.detail,"shhf",r)},expression:"detail.shhf"}})],1),e("v-uni-view",{staticClass:"btn-content"},[e("v-uni-button",{staticClass:"cu-btn bg-cyan",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},n=[]}}]);