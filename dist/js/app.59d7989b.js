(function(t){function e(e){for(var n,a,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)a=r[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"013f":function(t,e,s){"use strict";var n=s("fe94"),o=s.n(n);o.a},"048f":function(t,e,s){},"0a70":function(t,e,s){"use strict";var n=s("99b8"),o=s.n(n);o.a},"16ac":function(t,e,s){"use strict";var n=s("cf60"),o=s.n(n);o.a},"183b":function(t,e,s){t.exports=s.p+"Vue-project/dist/img/disc.d3bdd108.png"},"192f":function(t,e,s){},"29b3":function(t,e,s){t.exports=s.p+"Vue-project/dist/img/hot_music_bg_2x.f01a2523.jpg"},"2fdf":function(t,e,s){"use strict";var n=s("048f"),o=s.n(n);o.a},"439a":function(t,e,s){},"43ba":function(t,e,s){"use strict";var n=s("c1b5"),o=s.n(n);o.a},"534f":function(t,e,s){t.exports=s.p+"Vue-project/dist/img/logo1.32950edb.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoad,expression:"isLoad"}]}),s("router-view")],1)},i=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"},[s("div",{staticClass:"loading_box"},[t._v("数据加载中，请稍候...")])])}],l={name:"Loading"},u=l,m=(s("2fdf"),s("2877")),d=Object(m["a"])(u,r,c,!1,null,"354ff00c",null),f=d.exports,p=s("2f62");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={name:"APP",components:{Loading:f},computed:h({},Object(p["b"])(["isLoad"]))},v=_,b=(s("5c0b"),Object(m["a"])(v,o,i,!1,null,null,null)),y=b.exports,C=s("8c4f"),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"top-box"},[t._m(0),s("div",{staticClass:"tab-box"},[s("ul",t._l(t.list,(function(e,n){return s("li",{key:n},[s("span",{class:t.current==n?"cur":"",domProps:{textContent:t._s(e.title)},on:{click:function(e){t.current=n}}})])})),0)])]),s("div",{staticClass:"tab-content"},[s("keep-alive",[s(t.list[t.current].comp,{tag:"component"})],1)],1)])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo-box"},[s("div",{staticClass:"logo"},[s("span",{staticClass:"span0"},[s("i",[t._v("")])]),t._v("\n        云音乐\n      ")]),s("div",{staticClass:"app-btn"},[t._v("下载APP")])])}],S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"recommend"}},[s("div",{staticClass:"recom-box1"},[s("h2",[t._v("推荐歌单")]),s("ul",t._l(t.list,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.detail(e.id)}}},[s("div",{staticClass:"img_box"},[s("img",{attrs:{src:e.picUrl,alt:"logo"}}),s("span",[s("i",[t._v("")]),s("small",{domProps:{textContent:t._s(e.playCount>1e4?Math.round(e.playCount/1e4*10)/10+"万":e.playCoun)}})])]),s("p",[t._v(t._s(e.name))])])})),0),s("h2",[t._v("最新音乐")]),s("ol",t._l(t.list1,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.toPlay(e.id,e.picUrl)}}},[s("div",{staticClass:"comNew_left"},[s("p",[t._v(t._s(e.name))]),s("span",[t._l(e.song.artists,(function(e,n){return s("i",{key:n,domProps:{textContent:t._s(n>0?"/"+e.name:""+e.name)}})})),t._v(" - "+t._s(e.name))],2)]),t._m(0,!0)])})),0)]),s("div",{staticClass:"recom-box2",style:{background:"url("+t.bg+") center no-repeat"}},[s("div",{staticClass:"icon_logo",style:{"background-image":"url("+t.bg_logo+")"}}),s("p",[t._v("打开APP，发现更多好音乐 >")]),s("small",{domProps:{innerHTML:t._s("网易公司版权所有&copy;1997-"+t.time+"  杭州乐读科技有限公司运营")}})])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comNew_right"},[s("em",[t._v("")])])}],O=(s("5df3"),s("bc3a")),w=s.n(O);n["a"].use(p["a"]);var P=new p["a"].Store({state:{keys:"",isLoad:!1,loadingCount:0,searchList:[],count:0,list:[],flag:!1},mutations:{edit:function(t,e){console.log(e),t.keys=e},editList:function(t,e){t.list=e},editFlag:function(t,e){t.flag=e}},actions:{addList:function(t){var e=t.commit,s=t.state,n={get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)}};console.log(s.keys);var o=JSON.parse(n.get('"'.concat(s.keys,'"')));o?this.list=o:N('/search/suggest?keywords="'.concat(s.keys,'"&type=mobile')).then((function(t){t.result.songs?(e("editList",t.result.songs),e("editFlag",!1),n.set("".concat(s.keys),JSON.stringify(t.result.songs))):e("editFlag",!0)})).catch((function(t){e("editFlag",!0),console.log("没有结果"),console.log(s.flag),console.log(t)}))}}});function $(t){return new Promise((function(e,s){w.a.get(t).then((function(t){e(t.data)})).catch((function(t){s(t)}))}))}w.a.defaults.baseURL="http://musicapi.leanapp.cn",w.a.interceptors.request.use((function(t){return P.state.isLoad=!0,t}),(function(t){return Promise.reject(t)})),w.a.interceptors.response.use((function(t){return setTimeout((function(){P.state.isLoad=!1}),600),t}),(function(t){return P.state.isLoad=!1,P.state.loadingCount=0,Message.error("网络异常，请稍候重试"),Promise.reject(t)}));var N=$,M=s("a269"),L=s("a371"),E={name:"Recommend",data:function(){return{list:[],list1:[],time:(new Date).getFullYear(),bg:M,bg_logo:L,current:0}},created:function(){var t=this,e={get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)}},s=JSON.parse(e.get("recom_music")),n=JSON.parse(e.get("recom_new"));!s|!n?Promise.all([N("/personalized?limit=6"),N("/personalized/newsong")]).then((function(s){console.log(s),t.list=s[0].result,t.list1=s[1].result,console.log(t.list1),e.set("recom_music",JSON.stringify(s[0].result)),e.set("recom_new",JSON.stringify(s[1].result))})).catch((function(t){console.log(t)})):(this.list=s,this.list1=n)},methods:{detail:function(t){this.$router.push({path:"/music",query:{id:t}})},toPlay:function(t,e){this.$router.push({path:"/play",query:{id:t,picUrl:e}})}}},J=E,H=(s("c6e8"),Object(m["a"])(J,S,j,!1,null,"dcd03058",null)),U=H.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot"},[s("div",{staticClass:"hot_bg",style:{"background-image":"url("+t.bg+")"}},[s("div",{staticClass:"img_box",style:{"background-image":"url("+t.bg_img+")"}}),s("div",{staticClass:"text"},[s("span",[t._v("更新日期：")]),s("i",[t._v(t._s(t._f("toDate")(this.obj_hot.updateTime)))])])]),s("div",{staticClass:"songList"},[s("ul",t._l(this.obj_hot.tracks,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.toPlay(e.id,e.al.picUrl)}}},[s("div",{staticClass:"song_left",domProps:{textContent:t._s(n<=9?"0"+(n+1):""+(n+1))}}),s("div",{staticClass:"box0"},[s("div",{staticClass:"song_center"},[s("p",[t._v(t._s(e.name))]),s("span",[t._l(e.ar,(function(e,n){return s("em",{key:n,domProps:{textContent:t._s(n>0?"/"+e.name:""+e.name)}},[t._v("歌手")])})),t._v(" -\n              "),s("i",[t._v(t._s(e.al.name))])],2)]),s("div",{staticClass:"song_right"},[t._v("")])])])})),0)]),t._m(0)])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"more"},[s("p",[t._v("查看完整榜单 >")])])}],T=s("29b3"),R=s("ea6e"),q={name:"Hot",data:function(){return{bg:T,bg_img:R,obj_hot:""}},created:function(){var t=this,e={get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)}},s=JSON.parse(e.get("hot"));s?this.obj_hot=s:N("/top/list?idx=1").then((function(s){console.log(s.playlist),t.obj_hot=s.playlist,e.set("hot",JSON.stringify(s.playlist))})).catch((function(t){console.log(t)}))},filters:{toDate:function(t){var e=new Date(t),s=e.getMonth()+1,n=e.getDate();console.log(s,n);var o=s<=9?"0".concat(s):"".concat(s),i=n<=9?"0".concat(n):"".concat(n);return"".concat(o,"月").concat(i,"日")}},methods:{toPlay:function(t,e){this.$router.push({path:"/play",query:{id:t,picUrl:e}})}}},F=q,W=(s("f403"),Object(m["a"])(F,I,D,!1,null,"bc3316de",null)),A=W.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"search_top"},[s("div",{staticClass:"search_box"},[s("span",[t._v("")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑",autofocus:"true",autocomplete:"off",id:"txt"},domProps:{value:t.message},on:{keydown:t.toSearch,input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("p",{directives:[{name:"show",rawName:"v-show",value:t.current,expression:"current"}],on:{click:t.toSearchHot}},[s("em",[t._v("")])])])]),s("div",{staticClass:"search_content"},[s(t.comlList[t.current],{tag:"component",attrs:{parents:t.message,history:t.arr},on:{changeCom:t.updateCom}})],1)])},X=[],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SearchHot"},[s("div",{staticClass:"search_hot"},[s("h4",[t._v("热门搜索")]),s("ul",t._l(t.list,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.toMatch(""+e.first)}}},[t._v(" "+t._s(e.first))])})),0)]),s("div",{staticClass:"searchHistory"},[s("ul",t._l(t.history,(function(e,n){return s("li",{key:n,ref:"lis",refInFor:!0,on:{click:function(s){return t.send3(""+e)}}},[s("em",[t._v("")]),s("p",[s("span",{staticClass:"his"},[t._v(t._s(e))]),s("i",{on:{click:function(e){return e.stopPropagation(),t.close(t.current=n)}}},[t._v("")])])])})),0)])])},B=[],G={name:"SearchHot",data:function(){return{list:[],flag:!1,current:""}},created:function(){var t=this,e={get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)}},s=JSON.parse(e.get("hotSearch"));s?this.list=s:N("/search/hot").then((function(s){t.list=s.result.hots,e.set("hotSearch",JSON.stringify(s.result.hots))})).catch((function(t){console.log(t)}))},props:{history:{type:Array}},methods:Object(a["a"])({send3:function(t){this.$emit("changeCom","2"),this.$store.commit("edit",t)},close:function(){this.flag=!0},toMatch:function(t){this.$store.commit("edit",t),console.log(t),this.$emit("changeCom","2")}},"close",(function(){this.history.splice(this.current,1)}))},K=G,Q=(s("16ac"),Object(m["a"])(K,Y,B,!1,null,"60bfd00f",null)),V=Q.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SearchList"},[s("div",{staticClass:"searchTitle",domProps:{textContent:t._s('搜索："'+t.parents+'"')},on:{click:function(e){return t.send(""+t.parents)}}}),this.$store.state.flag?s("div",{staticClass:"result"},[t._v("抱歉，暂无搜索结果")]):s("ul",t._l(this.$store.state.list,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.send2(""+e.name)}}},[s("i",[t._v("")]),s("span",{domProps:{textContent:t._s(""+e.name)}})])})),0)])},tt=[],et={name:"SearchList",data:function(){return{}},props:{parents:{type:String}},methods:{send:function(t){this.$store.commit("edit",t),this.$emit("changeCom","2")},send2:function(t){this.$store.commit("edit",t),this.$emit("changeCom","2")}}},st=et,nt=(s("851c"),Object(m["a"])(st,Z,tt,!1,null,"1f4ef01d",null)),ot=nt.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"SearchMatch"}},[s("ol",t._l(t.listMatch,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.toPlay(e.id,e.artists[0].img1v1Url)}}},[s("div",{staticClass:"comNew_left"},[s("p",[t._v(t._s(e.name))]),s("span",[t._l(e.artists,(function(e,n){return s("i",{key:n,domProps:{textContent:t._s(n>0?"/"+e.name:""+e.name)}})})),t._v("\n          - "+t._s(e.name)+"\n        ")],2)]),t._m(0,!0)])})),0),s("div",{staticClass:"results",domProps:{textContent:t._s(t.flag?"暂无搜索结果":"")}})])},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comNew_right"},[s("em",[t._v("")])])}],rt={name:"SearchMatch",data:function(){return{listMatch:[],flag:!1,lengths:"",keywords:""}},props:{parents:{type:String}},created:function(){var t=this,e={get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)}};console.log(this.$store.state.keys);var s=JSON.parse(e.get("".concat(this.$store.state.keys,"_match")));s?this.listMatch=s:(console.log(this.$store.state.keys),N('/search/suggest?keywords="'.concat(this.$store.state.keys,'"&type=mobile')).then((function(s){console.log(s),console.log(s.result),s.result?(t.listMatch=s.result.songs,e.set("".concat(t.$store.state.keys,"_match"),JSON.stringify(s.result.songs))):t.flag=!0})).catch((function(t){console.log(t)})))},methods:{toPlay:function(t,e){this.$router.push({path:"/play",query:{id:t,picUrl:e}})}}},ct=rt,lt=(s("013f"),Object(m["a"])(ct,it,at,!1,null,"5aef0d59",null)),ut=lt.exports,mt={name:"Search",data:function(){return{current:0,message:"",comlList:["SearchHot","SearchList","SearchMatch"],msg:"",arr:[],attr:[]}},watch:{message:function(t){this.$store.commit("edit",t),this.$store.dispatch("addList")}},components:{SearchHot:V,SearchList:ot,SearchMatch:ut},methods:{toSearchHot:function(){this.current=0,this.message=""},toSearch:function(t){if(13==t.keyCode){for(var e in this.current=2,this.arr)if(this.message==this.arr[e])return;this.arr.unshift(this.message)}else this.current=1},updateCom:function(t){this.current=t}}},dt=mt,ft=(s("b6a7"),Object(m["a"])(dt,z,X,!1,null,"6d11ca9e",null)),pt=ft.exports,gt={name:"home",data:function(){return{current:0,list:[{title:"推荐歌单",comp:"Recommend"},{title:"热歌榜",comp:"Hot"},{title:"搜索",comp:"Search"}]}},components:{Recommend:U,Hot:A,Search:pt}},ht=gt,_t=(s("0a70"),Object(m["a"])(ht,x,k,!1,null,"8c369a46",null)),vt=_t.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MusicDetail"},[s("div",{staticClass:"detail_top",attrs:{id:"tops"}},[s("div",{staticClass:"bg_cover",style:{"background-image":"url("+t.obj.coverImgUrl+")"}}),s("div",{staticClass:"left-box"},[s("img",{attrs:{src:t.obj.coverImgUrl,alt:""}}),s("span",[s("i",[t._v("")]),s("small",{domProps:{textContent:t._s(t.obj.playCount>1e4?Math.round(t.obj.playCount/1e4*10)/10+"万":t.obj.playCount)}})]),s("p",[t._v("歌单")])]),s("div",{staticClass:"right-box"},[s("h3",[t._v(t._s(t.obj.name))]),s("div",{staticClass:"right-box-bottom"},[s("div",{staticClass:"img_box"},[s("img",{attrs:{src:""+t.peopleUrl,alt:""}})]),s("span",[t._v(t._s(t.nicknames))])])])]),s("div",{staticClass:"detail_description"},[s("div",{staticClass:"detail_tag"},[s("span",[t._v("标签：")]),t._l(t.obj.tags,(function(e,n){return s("em",{key:n,domProps:{textContent:t._s(e)}})}))],2),s("div",{class:t.flag?"":"ellips",attrs:{id:"detail_desc"}},[s("div",[s("span",[t._v("简介：")]),t._l(t.list,(function(e,n){return s("i",{key:n},[s("em",{domProps:{textContent:t._s(e)}}),s("br")])}))],2),s("div",{class:t.flag?"btns rotates":"btns ",on:{click:function(e){t.flag=!t.flag}}},[s("i",[t._v("")])])])]),s("div",{staticClass:"songList"},[s("div",{staticClass:"songTitle"},[t._v("歌曲列表")]),s("ul",t._l(t.obj.tracks,(function(e,n){return s("li",{key:n,on:{click:function(s){return t.toPlay(e.id,t.obj.coverImgUrl)}}},[s("div",{staticClass:"song_left"},[t._v(t._s(n+1))]),s("div",{staticClass:"box0"},[s("div",{staticClass:"song_center"},[s("p",[t._v(t._s(e.name))]),s("span",[t._l(e.ar,(function(e,n){return s("em",{key:n,domProps:{textContent:t._s(n>0?"/"+e.name:""+e.name)}},[t._v("歌手")])})),t._v(" -\n                "),s("i",[t._v(t._s(e.al.name))])],2)]),s("div",{staticClass:"song_right"},[t._v("")])])])})),0)]),s("div",{staticClass:"comment"},[s("div",{staticClass:"comment_title"},[t._v("\n        最新评论\n        "),s("span",{domProps:{textContent:t._s("("+t.obj.commentCount+")")}})]),s("div",{staticClass:"comment_list"},[s("ul",t._l(t.list1,(function(e,n){return s("li",{key:n},[s("div",{staticClass:"list_left"},[s("div",{staticClass:"img_combox"},[s("img",{attrs:{src:e.user.avatarUrl,alt:""}})])]),s("div",{staticClass:"list_right"},[s("div",{staticClass:"combox1"},[s("div",{staticClass:"combox1_left"},[s("p",[t._v(t._s(e.user.nickname))]),s("span",[t._v(t._s(t._f("toDate")(e.time)))])]),s("div",{staticClass:"combox1_right"},[s("em",{domProps:{textContent:t._s(e.likedCount>0?""+e.likedCount:"")}},[t._v(t._s(e.likedCount))]),s("i",[t._v("")])])]),s("div",{staticClass:"combox2",domProps:{innerHTML:t._s(0===e.beReplied.length?""+e.content:"回复<a style='color:#507daf''>@"+e.beReplied[0].user.nickname+"</a> ：   "+e.content)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.beReplied.length,expression:"item.beReplied.length!==0"}],staticClass:"combox3",domProps:{textContent:t._s(0===e.beReplied.length?""+e.content:"@"+e.beReplied[0].user.nickname+"：   "+e.beReplied[0].content)}})])])})),0)])]),s("div",{staticClass:"toHome",on:{click:t.toHome}},[s("i",[t._v("")])])])},yt=[],Ct=(s("28a5"),{name:"MusicDetail",data:function(){return{current:0,obj:{},list:[],flag:!1,list1:[],obj2:{},peopleUrl:"",nicknames:""}},filters:{toDate:function(t){var e=new Date(t),s=e.getHours(),n=e.getMinutes(),o=new Date,i=o.getHours();return s>i?"昨天".concat(s,":").concat(n):"".concat(s,":").concat(n)}},created:function(){var t=this,e={get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)}},s=JSON.parse(e.get(o)),n=JSON.parse(e.get(o+"_com")),o=this.$route.query.id;console.log(o),!s|!n?(N("/playlist/detail?id=".concat(o)).then((function(s){console.log(s.playlist),t.obj=s.playlist,t.peopleUrl=s.playlist.creator.avatarUrl,t.nicknames=s.playlist.creator.nickname,console.log(t.nicknames);var n=s.playlist.description;t.list=n.split("\n"),e.set(o,JSON.stringify(s.playlist))})).catch((function(t){console.log(t)})),N("/comment/playlist?id=".concat(o,"&& limit=20")).then((function(s){t.list1=s.comments,t.obj2=s.comments[t.current].beReplied[0],e.set(o+"_com",JSON.stringify(s.comments))})).catch((function(t){console.log(t)}))):(this.obj=s,this.list1=n)},methods:{rotates:function(){this.css.transform="rotateX(180deg)"},toTop:function(){},toHome:function(){this.$router.push({path:"/"})},toPlay:function(t,e){this.$router.push({path:"/play",query:{id:t,picUrl:e}})}}}),xt=Ct,kt=(s("7be9"),Object(m["a"])(xt,bt,yt,!1,null,"0038d363",null)),St=kt.exports,jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"play"},[s("div",{staticClass:"bg_covers",style:{"background-image":"url("+this.$route.query.picUrl+")"}}),s("div",{staticClass:"main"},[t._m(0),s("div",{staticClass:"main_circle"},[s("div",{staticClass:"circle_bg"},[s("div",{staticClass:"bg_box",style:{"background-image":"url("+t.bg_co+")"}},[s("div",{staticClass:"img_box",style:{"animation-play-state":t.flag?"running":"paused"},on:{click:function(e){return t.toPause(t.flag=!t.flag)}}},[s("img",{attrs:{src:this.$route.query.picUrl,alt:""}})]),s("audio",{ref:"audio",attrs:{src:""+t.url,id:"myMusic"},on:{timeupdate:t.currentTimes}}),s("i",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}],on:{click:function(e){return t.toStart(t.flag=!t.flag)}}},[t._v("")])])])]),t._m(1),s("div",{staticClass:"main_words"},[s("div",{staticClass:"words_title"},[s("span",[t._v(t._s(t.obj_name.name)+"-")]),t._l(t.singer,(function(e,n){return s("i",{key:n,domProps:{textContent:t._s(n>0?"/"+e.name:""+e.name)}})}))],2),s("div",{staticClass:"words_content"},[s("p",[t._v(t._s(t.curWords))])])]),t._m(2)]),t._m(3),s("div",{staticClass:"toHome",on:{click:t.toHome}},[s("i",[t._v("")])])])},Ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_title"},[n("div",{staticClass:"logo"},[n("i",[n("img",{attrs:{src:s("534f"),alt:""}})]),n("span",[t._v("网易云音乐")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_line"},[n("img",{attrs:{src:s("dd42"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main_more"},[s("p",[t._v("查看完整歌词 >")]),s("span",[t._v("")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"play_foot"},[s("div",{staticClass:"open"},[t._v("打开")]),s("div",{staticClass:"down"},[t._v("下载")])])}],wt=(s("c5f6"),s("7618")),Pt=s("183b"),$t={name:"MusicPlay",data:function(){return{flag:!1,obj:{},url:"",bg_co:Pt,audioUrl:"",obj_name:{},singer:"",list:[],curWords:"",nextWords:""}},created:function(){var t=this,e={get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)}},s=JSON.parse(e.get(i+"_words")),n=JSON.parse(e.get(i+"_songUrl")),o=JSON.parse(e.get(i+"_songNames")),i=this.$route.query.id;!s|!n|!o?N("/song/detail?ids=".concat(i)).then((function(s){t.url="https://music.163.com/song/media/outer/url?id=".concat(i,".mp3"),t.obj_name=s.songs[0],t.singer=s.songs[0].ar,e.set(i+"_songNames",JSON.stringify(s.songs[0]))})).catch((function(t){console.log(t)})):(this.obj=s,this.url=n,this.obj_name=o)},methods:{toStart:function(){this.$refs.audio.play()},toPause:function(){this.$refs.audio.pause()},toHome:function(){this.$router.push({path:"/"})},currentTimes:function(){var t=this.$refs.audio.currentTime;for(var e in console.log(t),this.list)t>=this.list[e].times&&this.curWords!=this.list[e].words&&this.list[e].words&&(this.curWords=this.list[e].words,console.log(Object(wt["a"])(e)),this.nextWords=this.list[Number(e)+1].words)}}},Nt=$t,Mt=(s("43ba"),Object(m["a"])(Nt,jt,Ot,!1,null,"76050928",null)),Lt=Mt.exports;n["a"].use(C["a"]);var Et=new C["a"]({base:"/",routes:[{path:"/",name:"Home",component:vt},{path:"/music",name:"MusicDetail",component:St},{path:"/play",name:"MusicPlay",component:Lt}]});n["a"].config.productionTip=!1,new n["a"]({router:Et,store:P,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("e332"),o=s.n(n);o.a},"73a5":function(t,e,s){},"7be9":function(t,e,s){"use strict";var n=s("192f"),o=s.n(n);o.a},"851c":function(t,e,s){"use strict";var n=s("dfee"),o=s.n(n);o.a},"8ed0":function(t,e,s){},"99b8":function(t,e,s){},a269:function(t,e,s){t.exports=s.p+"Vue-project/dist/img/recommand_bg_2x.d045fafc.png"},a371:function(t,e,s){t.exports=s.p+"Vue-project/dist/img/网易云音乐-01.5085d0cd.png"},b6a7:function(t,e,s){"use strict";var n=s("73a5"),o=s.n(n);o.a},c1b5:function(t,e,s){},c6e8:function(t,e,s){"use strict";var n=s("8ed0"),o=s.n(n);o.a},cf60:function(t,e,s){},dd42:function(t,e,s){t.exports=s.p+"Vue-project/dist/img/needle-ip6.be4ebbeb.png"},dfee:function(t,e,s){},e332:function(t,e,s){},ea6e:function(t,e,s){t.exports=s.p+"Vue-project/dist/img/index_icon_2x.853ab3f9.png"},f403:function(t,e,s){"use strict";var n=s("439a"),o=s.n(n);o.a},fe94:function(t,e,s){}});
//# sourceMappingURL=app.59d7989b.js.map