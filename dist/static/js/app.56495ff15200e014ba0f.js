webpackJsonp([1],{"0nQ+":function(t,n){},"5OoY":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("++MA"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var s=e("C7Lr")({name:"App"},r,!1,function(t){e("Raw3")},null,null).exports,a=e("zO6J"),o={data:function(){return{str:"今夕何夕兮搴舟中流，今日何日兮得与王子同舟。 蒙羞被好兮不訾诟耻。 心几烦而不绝兮得知王子。 山有木兮木有枝，心悦君兮君不知。",i:0,timer:0,str2:""}},methods:{typing:function(){var t=this;this.i<=this.str.length?(this.str2=this.str.slice(0,this.i++)+"_",this.timer=setTimeout(function(){t.typing()},200)):clearTimeout(this.timer)}},mounted:function(){this.typing()}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"typer"},[this._v("\n  "+this._s(this.str2)+"\n")])},staticRenderFns:[]};var c=e("C7Lr")(o,u,!1,function(t){e("5OoY")},"data-v-2c1d6e79",null).exports;i.a.use(a.a);var p=new a.a({routes:[{path:"/",name:"TypingWords",component:c}]}),h=(e("0nQ+"),e("0nOA")),d=e.n(h);i.a.use(d.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:p,render:function(t){return t(s)}})},Raw3:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.56495ff15200e014ba0f.js.map