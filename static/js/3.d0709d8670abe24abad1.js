webpackJsonp([3],{KnIa:function(e,r){},P2up:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("Xxa5"),o=t.n(a),n=t("woOf"),i=t.n(n),s=t("exGp"),c=t.n(s),u=t("mtWM"),l=t.n(u),d={getMovieAsync:function(e){var r=this;return c()(o.a.mark(function t(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.get("/video-player/get-movie/"+e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},t,r)}))()}},p=t("L/hj"),v={data:function(){return{player:null}},mounted:function(){this.player=this.$refs["base-player"],this.player.play()},methods:{failed:function(e){switch(e.target.error.code){case e.target.error.MEDIA_ERR_ABORTED:alert("You aborted the video playback.");break;case e.target.error.MEDIA_ERR_NETWORK:alert("A network error caused the video download to fail part-way.");break;case e.target.error.MEDIA_ERR_DECODE:alert("The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");break;case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:alert("The video could not be loaded, either because the server or network failed or because the format is not supported.");break;default:alert("An unknown error occurred.")}}},props:["movie"]},f={render:function(){var e=this,r=e.$createElement;return(e._self._c||r)("video",{ref:"base-player",attrs:{src:e.movie.localMovie.hostSrc,type:2==e.movie.localMovie.movieType?"video/x-matroska; codecs='theora, vorbis'":"video/mp4; codecs='av01.0.00M.08, opus'",controls:"",autoplay:""},on:{onerror:function(r){return e.failed(e.event)}}})},staticRenderFns:[]},h=t("VU/8")(v,f,!1,null,null,null).exports,m=t("Usg1"),b={name:"Video-player",components:{BasePlayer:h},data:function(){return{movie:null}},methods:{initialize:function(e){var r=this;return c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.getMovieAsync(e).then(function(){var e=c()(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:200==t.status&&(r.movie=i()({},{localMovie:t.data.localMovie,tmdbMovie:t.data.tmdbMovie}));case 1:case"end":return e.stop()}},e,r)}));return function(r){return e.apply(this,arguments)}}()).catch(function(e){p.a.showError(e)});case 2:case"end":return t.stop()}},t,r)}))()},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/home")}},mounted:function(){var e=this;return c()(o.a.mark(function r(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return m.a.$emit("toggle-nav"),r.next=3,e.initialize(e.$route.params.id);case 3:case"end":return r.stop()}},r,e)}))()},beforeDestroy:function(){m.a.$emit("toggle-nav")}},y={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("b-card",{staticClass:"col-12 flix-player-nav m-5 landing-info-header"},[t("a",{staticClass:"h2",attrs:{href:"javascript:void(0)"},on:{click:e.goBack}},[t("b-icon-arrow-left-circle-fill",{attrs:{variant:"success"}}),e._v("\n      "+e._s(e.$t("Back"))+"\n    ")],1)]),e._v(" "),e.movie&&e.movie.localMovie.isSupported?t("base-player",{staticClass:"flix-player",attrs:{movie:e.movie}}):e._e()],1)},staticRenderFns:[]};var w=t("VU/8")(b,y,!1,function(e){t("KnIa")},null,null);r.default=w.exports}});
//# sourceMappingURL=3.d0709d8670abe24abad1.js.map