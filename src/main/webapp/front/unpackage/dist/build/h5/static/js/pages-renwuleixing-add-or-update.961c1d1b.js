(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-renwuleixing-add-or-update"],{3740:function(e,r,t){var n=t("24fb");r=n(!1),r.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-838f1704]{padding:%?20?%}.content[data-v-838f1704]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-838f1704]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-838f1704]{width:%?180?%}.avator[data-v-838f1704]{width:%?150?%;height:%?60?%}.right-input[data-v-838f1704]{flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-838f1704]{justify-content:space-between}.btn[data-v-838f1704]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-838f1704]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-838f1704]{border:0}.cu-form-group uni-input[data-v-838f1704]{padding:0 %?30?%}.uni-input[data-v-838f1704]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-838f1704]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-838f1704]::after{line-height:%?80?%}.select .uni-input[data-v-838f1704]{line-height:%?80?%}.input .right-input[data-v-838f1704]{line-height:%?88?%}',""]),e.exports=r},"589a":function(e,r,t){"use strict";var n=t("4ea4");t("99af"),t("a9e3"),t("d3b7"),t("ac1f"),t("5319"),t("2ca0"),t("ddb0"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("96cf");var a=n(t("1da1")),i=n(t("555c")),o={data:function(){return{cross:"",ruleForm:{leixing:""},user:{},ro:{leixing:!1}}},components:{wPicker:i.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var r=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=uni.getStorageSync("nowTable"),t.next=3,r.$api.session(n);case 3:if(a=t.sent,r.user=a.data,r.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(r.ruleForm.refid=e.refid,r.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){t.next=13;break}return r.ruleForm.id=e.id,t.next=11,r.$api.info("renwuleixing",r.ruleForm.id);case 11:a=t.sent,r.ruleForm=a.data;case 13:if(r.cross=e.cross,!e.cross){t.next=25;break}i=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(i);case 17:if((t.t1=t.t0()).done){t.next=25;break}if(o=t.t1.value,"leixing"!=o){t.next=23;break}return r.ruleForm.leixing=i[o],r.ro.leixing=!0,t.abrupt("continue",17);case 23:t.next=17;break;case 25:r.styleChange();case 26:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function r(){var t,n,a,i,o,u,c,s,d,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.cross){r.next=16;break}if(i=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==i){r.next=16;break}if(u=uni.getStorageSync("crossObj"),i.startsWith("[")){r.next=12;break}for(c in u)c==i&&(u[c]=o);return s=uni.getStorageSync("crossTable"),r.next=10,e.$api.update("".concat(s),u);case 10:r.next=16;break;case 12:t=Number(uni.getStorageSync("userid")),n=u["id"],a=uni.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 16:if(!n||!t){r.next=38;break}return e.ruleForm.crossuserid=t,e.ruleForm.crossrefid=n,d={page:1,limit:10,crossuserid:t,crossrefid:n},r.next=22,e.$api.list("renwuleixing",d);case 22:if(l=r.sent,!(l.data.total>=a)){r.next=28;break}return e.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 28:if(!e.ruleForm.id){r.next=33;break}return r.next=31,e.$api.update("renwuleixing",e.ruleForm);case 31:r.next=35;break;case 33:return r.next=35,e.$api.add("renwuleixing",e.ruleForm);case 35:e.$utils.msgBack("提交成功");case 36:r.next=46;break;case 38:if(!e.ruleForm.id){r.next=43;break}return r.next=41,e.$api.update("renwuleixing",e.ruleForm);case 41:r.next=45;break;case 43:return r.next=45,e.$api.add("renwuleixing",e.ruleForm);case 45:e.$utils.msgBack("提交成功");case 46:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),n=r.getMonth()+1,a=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(t,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"75d7":function(e,r,t){"use strict";t.r(r);var n=t("589a"),a=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(r,e,(function(){return n[e]}))}(i);r["default"]=a.a},"8fae":function(e,r,t){"use strict";var n=t("ef2a"),a=t.n(n);a.a},bfe2:function(e,r,t){"use strict";t.r(r);var n=t("dc70"),a=t("75d7");for(var i in a)"default"!==i&&function(e){t.d(r,e,(function(){return a[e]}))}(i);t("8fae");var o,u=t("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"838f1704",null,!1,n["a"],o);r["default"]=c.exports},dc70:function(e,r,t){"use strict";var n;t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return i})),t.d(r,"a",(function(){return n}));var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v("类型")]),t("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.leixing,placeholder:"类型"},model:{value:e.ruleForm.leixing,callback:function(r){e.$set(e.ruleForm,"leixing",r)},expression:"ruleForm.leixing"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(130, 163, 157, 1)",borderColor:"rgba(130, 163, 157, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},i=[]},ef2a:function(e,r,t){var n=t("3740");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("b77e2aca",n,!0,{sourceMap:!1,shadowMode:!1})}}]);