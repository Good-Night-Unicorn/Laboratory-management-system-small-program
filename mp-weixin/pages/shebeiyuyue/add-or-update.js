(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shebeiyuyue/add-or-update"],{"2e88":function(e,t,n){"use strict";n.r(t);var i=n("e58d"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},4879:function(e,t,n){"use strict";n.r(t);var i=n("bcf2"),a=n("2e88");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("f9dc");var u,o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0f7a7308",null,!1,i["a"],u);t["default"]=s.exports},a003:function(e,t,n){},bcf2:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},e58d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,a,r,u){try{var o=e[r](u),s=o.value}catch(h){return void n(h)}o.done?t(s):Promise.resolve(s).then(i,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var u=e.apply(t,n);function o(e){r(u,i,a,o,s,"next",e)}function s(e){r(u,i,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("7629"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{shebeibianhao:"",shebeimingcheng:"",tupian:"",yongtu:"",zhanghao:"",mima:"",xingming:""},shebeibianhaoOptions:[],shebeibianhaoIndex:0,user:{},ro:{shebeibianhao:!1,shebeimingcheng:!1,tupian:!1,yongtu:!1,zhanghao:!1,mima:!1,xingming:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=u(i.default.mark((function t(n){var a,r,u,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:return r=t.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.mima=this.user.mima,this.ruleForm.xingming=this.user.xingming,t.next=10,this.$api.option("shebeixinxi","shebeibianhao",{});case 10:if(r=t.sent,this.shebeibianhaoOptions=r.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=20;break}return this.ruleForm.id=n.id,t.next=18,this.$api.info("shebeiyuyue",this.ruleForm.id);case 18:r=t.sent,this.ruleForm=r.data;case 20:if(!n.cross){t.next=55;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 23:if((t.t1=t.t0()).done){t.next=55;break}if(o=t.t1.value,"shebeibianhao"!=o){t.next=29;break}return this.ruleForm.shebeibianhao=u[o],this.ro.shebeibianhao=!0,t.abrupt("continue",23);case 29:if("shebeimingcheng"!=o){t.next=33;break}return this.ruleForm.shebeimingcheng=u[o],this.ro.shebeimingcheng=!0,t.abrupt("continue",23);case 33:if("tupian"!=o){t.next=37;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,t.abrupt("continue",23);case 37:if("yongtu"!=o){t.next=41;break}return this.ruleForm.yongtu=u[o],this.ro.yongtu=!0,t.abrupt("continue",23);case 41:if("zhanghao"!=o){t.next=45;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,t.abrupt("continue",23);case 45:if("mima"!=o){t.next=49;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,t.abrupt("continue",23);case 49:if("xingming"!=o){t.next=53;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,t.abrupt("continue",23);case 53:t.next=23;break;case 55:this.styleChange();case 56:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shebeibianhaoChange:function(){var e=u(i.default.mark((function e(t){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.shebeibianhaoIndex=t.target.value,this.ruleForm.shebeibianhao=this.shebeibianhaoOptions[this.shebeibianhaoIndex],e.next=4,this.$api.follow("shebeixinxi","shebeibianhao",{columnValue:this.ruleForm.shebeibianhao});case 4:n=e.sent,n.data.shebeimingcheng&&(this.ruleForm.shebeimingcheng=n.data.shebeimingcheng),n.data.yongtu&&(this.ruleForm.yongtu=n.data.yongtu);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("shebeiyuyue",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("shebeiyuyue",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(n,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},ed93:function(e,t,n){"use strict";(function(e){n("8c18"),n("921b");i(n("66fd"));var t=i(n("4879"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},f9dc:function(e,t,n){"use strict";var i=n("a003"),a=n.n(i);a.a}},[["ed93","common/runtime","common/vendor"]]]);