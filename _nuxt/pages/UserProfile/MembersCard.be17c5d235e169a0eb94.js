webpackJsonp([10],{BPvc:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"header"},[e("h4",{staticClass:"title"},[s._v(s._s(s.title))])]),e("div",{staticClass:"content"},[e("ul",{staticClass:"list-unstyled team-members"},[e("li",s._l(s.members,function(t){return e("div",{key:t.name,staticClass:"row"},[e("div",{staticClass:"col-xs-3"},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"img-circle img-no-padding img-responsive",attrs:{src:t.image,alt:"Circle Image"}})])]),e("div",{staticClass:"col-xs-6"},[s._v("\n            "+s._s(t.name)+"\n            "),e("br"),e("span",{class:s.getStatusClass(t.status)},[e("small",[s._v(s._s(t.status))])])]),s._m(0,!0)])}))])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"col-xs-3 text-right"},[t("button",{staticClass:"btn btn-sm btn-success btn-icon"},[t("i",{staticClass:"fa fa-envelope"})])])}]};t.a=i},HpJ2:function(s,t,e){var a=e("sqOE");"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);e("rjj0")("2225a40a",a,!1,{sourceMap:!1})},sqOE:function(s,t,e){(s.exports=e("FZ+f")(!1)).push([s.i,"",""])},usP5:function(s,t,e){"use strict";t.a={data:function(){return{title:"Team members",members:[{image:"/img/faces/face-0.jpg",name:"Dj Khaled",status:"Offline"},{image:"/img/faces/face-1.jpg",name:"Creative Tim",status:"Available"},{image:"/img/faces/face-2.jpg",name:"Flume",status:"Busy"}]}},methods:{getStatusClass:function(s){switch(s){case"Offline":return"text-muted";case"Available":return"text-success";case"Busy":return"text-danger";default:return"text-success"}}}}},xDFS:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("usP5"),i=e("BPvc"),c=!1;var n=function(s){c||e("HpJ2")},r=e("VU/8")(a.a,i.a,!1,n,null,null);r.options.__file="pages/UserProfile/MembersCard.vue",t.default=r.exports}});