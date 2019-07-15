(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{2603:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=i(n(368));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"videoQuota",init:function(){var e=(0,r.default)(".js-course-container"),t=e.find("video").first(),n=e.data("video-blocked-text");if(n&&t.length){var i=(0,r.default)("<div />");o.default.create({message:n},i),i.insertBefore(t)}}}},2604:function(e,t,n){"use strict";var r,o,i,a=g(n(4)),u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=(r=m(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,r=1,o={onPlay:function(){(0,v.default)(this).data("videoPlayer",n),l(this,n,t)},onPause:function(){C(this,n)},onProgress:function(){var e=m(a.default.mark(function e(o,i){var u;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i.seconds>=10&&S(t,n),i.percent>=.9&&d(this,n),e.next=4,n.getPlaybackRate();case 4:(u=e.sent)!==r&&j(this,n,r=u);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},e.next=5,y.create(t,o);case 5:n=e.sent;case 6:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)}),l=(o=m(a.default.mark(function e(t,n){var r,o,i,u;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h.default.get(),(o={course:r||{}}).type=(i=n).getType(),o.iframeElement=t,o.videoUrl=i.getSourceUrl(),-1!==T.indexOf(o.videoUrl)){e.next=12;break}return e.next=9,n.getPlaybackRate();case 9:u=e.sent,f.default.sendToSegment((0,p.startedVideoEvent)(s({videoSpeed:u,videoUrl:o.videoUrl},o.course))),T.push(o.videoUrl);case 12:b.publish(b.EVENT_STARTED_VIDEO,o);case 13:case"end":return e.stop()}},e,this)})),function(e,t){return o.apply(this,arguments)}),d=(i=m(a.default.mark(function e(t,n){var r,o,i,c,l;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=O(t,n),-1===I.indexOf(r.videoUrl)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Promise.all([n.getVideoDuration(),n.getPlaybackRate()]);case 5:o=e.sent,i=u(o,2),c=i[0],l=i[1],f.default.sendToSegment((0,p.endedPlayingVideoEvent)(s({videoDuration:c,videoSpeed:l,videoUrl:r.videoUrl},r.course))),I.push(r.videoUrl);case 11:case"end":return e.stop()}},e,this)})),function(e,t){return i.apply(this,arguments)}),f=g(n(483)),p=n(773),v=g(n(0)),h=g(n(492));function g(e){return e&&e.__esModule?e:{default:e}}function m(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})}}var E,_,b=n(588),y=n(327),w=[],T=[],I=[];function O(e,t){var n={course:h.default.get()||{}};return n.type=t.getType(),n.iframeElement=e,n.videoUrl=t.getSourceUrl(),n}function C(e,t){b.publish(b.EVENT_STOPPED_VIDEO,{type:t.getType(),iframeElement:e})}function S(e,t,n){var r=O(e,t);r.isIntroVideo=P(),r.claireVideoElementId=parseInt((0,v.default)(e).attr("id").split("r-")[1],10),r.videoDuration=n,-1===w.indexOf(e)&&(w.push(e),b.publish(b.EVENT_VIEW_BEGINNING_VIDEO,r))}function j(e,t,n){var r=O(e,t);f.default.sendToSegment((0,p.playbackRateChangeEvent)(s({videoSpeed:n,videoUrl:r.videoUrl},r.course)))}function P(){return void 0===E&&(E=(0,v.default)(".js-course-container").is(".js-course-content")),E}e.exports.init=function(){(0,v.default)("video[data-claire-element-id]").each(function(e,t){var n=(0,v.default)(t);P()||function(){void 0===_&&(_=(0,v.default)(".js-course-container").is(".js-userCanWatchVideo"));return _}()||function(e){e.data({blockedVideo:{elementWrapper:(0,v.default)(".js-course-container").data("video-blocked-wrapper")}})}(n),c(t)})}},2605:function(e,t,n){"use strict";var r=i(n(588)),o=i(n(727));function i(e){return e&&e.__esModule?e:{default:e}}e.exports.name="startedVideo",e.exports.init=function(){var e=new o.default("/api");r.default.subscribe(r.default.EVENT_VIEW_BEGINNING_VIDEO,function(t,n){var r=void 0!==n.course.partId,o={courseId:n.course.courseId,videoId:n.claireVideoElementId,userId:window.App.user.id};r&&!n.isIntroVideo&&(o.partId=n.course.partId,e.POST("/trace-videos/",o))})}},2606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=i(n(369));function i(e){return e&&e.__esModule?e:{default:e}}t.default={init:function(){(0,r.default)(".js-courseEngagement").each(function(e,t){o.default.create(t)})}}},2607:function(e,t,n){"use strict";var r=c(n(0)),o=c(n(310)),i=c(n(318)),a=c(n(2608)),u=c(n(936)),s=c(n(370));function c(e){return e&&e.__esModule?e:{default:e}}var l="[id^=r-], [id^=video_Player]",d=void 0,f=void 0,p=void 0,v=void 0,h=void 0,g={HOVER_COURSE_ELEMENT_NOT_ACTIVATED_ON_MOBILE_EXCEPTION:"Hover Course Element Not Activated On Mobile",init:function(){i.default.isTouch()&&o.default.throwException(g.HOVER_COURSE_ELEMENT_NOT_ACTIVATED_ON_MOBILE_EXCEPTION),p=(0,r.default)(".js-course-container"),v=(0,r.default)(".js-courseSelementActions"),p.on("mouseleave.courseElementEnter",l,function(){u.default.isEnabled()&&E()}).on("mouseenter.courseElementEnter",l,function(){u.default.isEnabled()&&_((0,r.default)(this))}),v.on("mouseleave.courseElementEnter",function(){u.default.isEnabled()&&E()}).on("mouseenter.courseElementEnter",function(){u.default.isEnabled()&&_(h)}),v.length>0&&(d=s.default.create({onCopyUrl:m},v))}};function m(e){u.default.isEnabled()&&(e.preventDefault(),a.default.changeCurrentText(d.getWidgetElement("copyUrl").data("tooltip-done")))}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;clearInterval(f),f=setTimeout(function(){b(h,!1)},e)}function _(e){e&&e.length&&(clearInterval(f),(h=function(e,t){var n=e.parents(t).last();if(n.length)return n;return e}(e,l)).length>0&&b(h,!0))}function b(e,t){e&&((0,r.default)(".hoveredCourseElement",p).removeClass("hoveredCourseElement"),e.toggleClass("hoveredCourseElement",t),t?(!function(e){d.setData({url:y(e)}),(0,r.default)(".js-courseElementActions-copyUrl",v).each(function(){u.default.enableCopyToElement(this,y(e))})}(e),function(e){v.addClass("is-visible").height(e.outerHeight()).position({my:"right top",at:"left-8 top",collision:"fit flip",of:e})}(e),clearInterval(f)):v.removeClass("is-visible"))}function y(e){return document.location.href.match(/[^#]+/)[0]+"#/id/"+e.attr("id")}e.exports=g},2608:function(e,t,n){"use strict";var r=n(0);t.changeCurrentText=function(e){r(".oc-tooltip:visible").html(e)},t.closeAll=function(){r(".oc-tooltip").css("top","-100000px")}},2609:function(e,t,n){"use strict";var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};var a=n(615),u=n(524),s=n(616),c=n(371),l=a.create(u.HIGHLITER_ACE);e.exports.init=function(){var e=(0,i.default)("pre code[data-claire-semantic]:not([data-claire-semantic=console])",(0,i.default)(".js-course-container")),t=new s(l);t.colorizeElement(e).done(function(){e.each(function(e,n){var r=t.getCodeFromElement(n);c.create({source:r.source,language:r.language},n)})})}},2610:function(e,t,n){"use strict";var r=i(n(0)),o=i(n(765));function i(e){return e&&e.__esModule?e:{default:e}}e.exports.init=function(){var e=o.default.elementsMath(o.default.constants.MATH_RENDERER_MATHJAX),t=(0,r.default)(".js-course-container").find("math");t.length>0&&e.mathElement(t)}},2611:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(0)),o=l(n(2612)),i=l(n(308)),a=l(n(588)),u=l(n(492)),s=n(306),c=n(701);function l(e){return e&&e.__esModule?e:{default:e}}var d="Downloaded Single Video",f="data-video-source-link",p="data-video-source-size",v=".js-download-video-popin-button",h=".js-download-video-popin-button-legend",g="video",m=".js-video-download-forbidden",E=".js-all-video-download-info",_=".js-single-video-download-info",b=void 0,y=[{RESOLUTION:"low",SUFFIX:"-ld"},{RESOLUTION:"medium",SUFFIX:"-md"},{RESOLUTION:"high",SUFFIX:"-hd"}];t.default={name:"downloadVideoLink",init:function(){function e(e,a){var u=void 0;try{u=s.CurrentUser.get()}catch(e){}u&&u.isPremium?b.isIntroduction?function(e){t(e,E)}(a):function(e){var t=(0,r.default)(_).html(),a=(0,r.default)(t),u=(0,r.default)(e),s=u.attr("data-src-origine"),c=i.default.getVideoIdFromUrl(s);t&&u.after(a),a.hasClass("js-download-video-popin-link")&&(a.attr("data-video-id",c).attr("data-video-url",s).addClass("hidden"),o.default.get(s).then(function(e){var t=e.links;!function(e,t){var o=(0,r.default)(".js-download-video-popin-link[data-video-id="+t+"]");y.forEach(function(t){var n=void 0,r=void 0;void 0!==e[t.RESOLUTION]&&(n=e[t.RESOLUTION].url,r=e[t.RESOLUTION].size,o.attr(f+t.SUFFIX,n).attr(p+t.SUFFIX,r))}),o.on("click",n).removeClass("hidden")}(t,c)}).catch(function(){}))}(a):function(e){t(e,m)}(a)}function t(e,t){var n=(0,r.default)(e),o=(0,r.default)(t).html(),i=(0,r.default)(o);n.after(i)}function n(e){var t=(0,r.default)(e.currentTarget),n=(0,r.default)(this);y.forEach(function(e){var o=(0,r.default)(v+e.SUFFIX),i=(0,r.default)(h+e.SUFFIX),a=t.attr(f+e.SUFFIX),u=t.attr(p+e.SUFFIX);if(void 0!==a&&"#"!==a){var s=(0,c.toHumanReadable)(u);o.data("videoInformations",{videoSize:u/1024/1024,courseId:b.courseId,courseTitle:b.courseTitle,partId:b.partId,partTitle:b.partTitle,partSlug:b.partSlug,videoUrl:n.attr("data-video-url"),videoId:n.attr("data-video-id"),resolution:e.RESOLUTION}).removeClass("hidden").attr("download",g+e.SUFFIX).attr("href",a).off("click").on("click",l),i.text(s)}else o.addClass("hidden")}.bind(this))}function l(){var e=(0,r.default)(this).data("videoInformations");a.default.publish(d,e),r.default.fancybox.close()}b=u.default.get(),(0,r.default)(".js-claire-video").each(e)}}},2612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(4)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=s(n(16)),a=s(n(74)),u=s(n(308));function s(e){return e&&e.__esModule?e:{default:e}}t.default={get:function(e){var t,n,s=this;return new Promise((t=r.default.mark(function t(n,c){var l,d,f,p,v,h,g,m,E;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"vimeo"!==u.default.getTypeFromUrl(e)&&c(new Error("downloadLinks : must be vimeo url")),l=u.default.getVideoIdFromUrl(e),d=i.default.window.App.data.currentCourse,f=d.courseId,p=d.partId,t.next=5,a.default.client.createGetRequest("/courses/"+f+"/chapters/"+p+"/resources").execute();case 5:if(v=t.sent,h=v.body,void 0!==(g=h.find(function(e){return e.url.match(l)}))){t.next=10;break}return t.abrupt("return");case 10:m={nHD:"low",qHD:"medium",HD:"high"},E=Object.keys(m).reduce(function(e,t){var n,r,i,a=g.mediaSourcesToDownload.find(function(e){return e.resolution===t});return a?o({},e,(n={},r=m[t],i={url:a.url,size:a.size},r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n)):e},{}),n(E);case 13:case"end":return t.stop()}},t,s)}),n=function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(o,i){try{var a=e[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});t(u)}("next")})},function(e,t){return n.apply(this,arguments)}))}}},2613:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(0)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(932)),a=u(n(492));function u(e){return e&&e.__esModule?e:{default:e}}t.default={init:function(){var e=a.default.get();e&&-1!==["apprenez-a-programmer-en-java","structurez-vos-donnees-avec-xml","des-applications-ultra-rapides-avec-node-js","avoir-l-audace-d-entreprendre"].indexOf(e.courseSlug)&&setTimeout(function(){(0,o.default)(".js-course-container h3").each(function(t,n){i.publishEnterViewportForElement(n,r({},e))})},200)}}},2614:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(471)),o=d(n(0)),i=d(n(16)),a=d(n(311)),u=n(62),s=d(n(469)),c=d(n(492)),l=n(307);function d(e){return e&&e.__esModule?e:{default:e}}var f=5,p=864e5,v="Restricted Page View",h=(0,o.default)(".js-isRestrictablePage").first(),g=h.length>0,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),t}();function E(){var e=a.default.getItem("history");return e&&(e=JSON.parse(e)),e}function _(e){a.default.setItem("history",JSON.stringify(e))}function b(e){var t=E(),n=!1;return t&&t.list.indexOf(e)>-1&&(n=!0),n}function y(){_({list:[],TTL:Date.now()+p})}function w(e){var t=E();if(t&&!(t.list.length<f))if(function(){var e=E();return!!e&&Date.now()>e.TTL}())y();else if(!b(e))throw new m}function T(){var e=h.data("pageIndentifier");(0,u.userIsConnected)()||!g||i.default.document.hidden||(w(e),function(e){var t=E();t||(y(),t=E()),b(e)||t.list.push(e),_(t)}(e))}t.default=function(){try{T()}catch(e){if(!(e instanceof m))throw e;!function(e){i.default.window.setTimeout(function(){s.default.get().publish(v,e)},500)}(c.default.get()),(0,o.default)(i.default.document.body).css("overflow","hidden"),(0,l.openPopin)("#popin-view-restriction",{modal:!0})}}},2615:function(e,t,n){"use strict";window._define("widgets/linkedSelect",["jquery","_","widgets/baseWidget"],function(e,t,n){return e.widget("OC.linkedSelect",n,{options:{rawdata:null,freeFieldTrigger:null},_create:function(){this._super(),this.value=null,this.elements.$mainSelelect=this._createSelect(this._getNodeChildren(0)),this.elements.$freeField=e('<input type="text">').appendTo(this.element),this._on(this.elements.$freeField,{input:this._onChangeFreeField}),this._toggleFreeField(!1)},_getNodeChildren:function(e){var n=this.options.rawdata[e],r=n?n.children:null;return r?t.sortBy(r,"position"):[]},_createSelect:function(t,n){var r,o=e("select",this.element),i=this.options.freeFieldTrigger,a=!1;return n||(n=e("<select>"),a=!0),n.empty(),t.unshift({id:"",title:""}),t.forEach(function(t){r=e("<option>").attr("value",t.id).text(t.title).appendTo(n),i&&t[i.field]===i.value&&r.data("needFreeField",!0)}),this._on(n,{change:this._onSelectChange}),a&&(0===o.length?n.appendTo(this.element):n.insertAfter(o.last())),n},_onChangeFreeField:function(e){this._trigger("changeFreeField",e,{value:this.freeFieldVal()})},_onSelectChange:function(t){var n=e(t.currentTarget),r=n.val(),o=!!e(":selected",n).data("needFreeField"),i=this._getNodeChildren(r);n.nextAll("select").remove(),i.length>0&&this._createSelect(i,this._getNextSelect(n)),this._toggleFreeField(o),this.value=r,this._trigger("change",t,{value:this.val()})},_getNextSelect:function(e){var t=e.next("select");return t.length?t:null},_toggleFreeField:function(e){this.elements.$freeField.css("visibility",e?"visible":"hidden"),e||(this.elements.$freeField.val(""),this._onChangeFreeField())},val:function(){return this.value},freeFieldVal:function(){return this.elements.$freeField.val()}}),e.OC.linkedSelect})},2616:function(e,t,n){"use strict";window._define("widgets/courseFormatsBar",["jquery","widgets/baseWidget","Modernizr","bridge/popin"],function(e,t,n,r){var o=n.touchevents;return e.widget("OC.courseFormatsBar",t,{options:{},_create:function(){var t=this;this._super(),this.element.on(o?"tap":"click",function(n){var i=e(n.target).parent(),a=function(e){n.preventDefault(),r.open(e)};i.is(".js-popin-activator")&&!o?a(i.data("popin-selector")):o&&a(t.options.popinselector)})}}),e(".js-course-formats-bar").courseFormatsBar(),e.OC.courseFormatsBar})},2617:function(e,t,n){"use strict";window._define("class/coursePage",function(){var e=function(e){this.config=e};return e.prototype.isPart=function(){return!!this.getPartId()},e.prototype.getPartId=function(){return this.config.partId},e.prototype.getPartTitle=function(){return this.config.partTitle},e.prototype.getPartSlug=function(){return this.config.partSlug},e.prototype.getCourseId=function(){return this.config.courseId},e.prototype.getCourseTitle=function(){return this.config.courseTitle},e.prototype.getCourseSlug=function(){return this.config.courseSlug},e})},2618:function(e,t,n){"use strict";window._define("view/contentFocus",["jquery","utils/responsive","common/pubsub"],function(e,t,n){var r,o=e("body"),i=e(window);function a(t){var n=e(t);r=null,o.removeClass("contentFocus"),o.removeClass("contentFocus--video"),o.off("tap.contentFocus click.contentFocus"),n.removeClass("is-contentFocused"),n.height(n.data("originalHeight")),n.data("isEnlarged",!1)}n.subscribe(n.EVENT.STARTED_VIDEO,function(n,u){(t.isLarge()||t.isXLarge())&&function(t){var n=e(t);if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)return;if(n.data("isEnlarged"))return;r=n,o.addClass("contentFocus"),o.addClass("contentFocus--video"),o.on("tap.contentFocus click.contentFocus",function(){r&&(e(r).data("videoPlayer").pause(),a(r))}),n.addClass("is-contentFocused"),void 0===n.data("originalHeight")&&n.data("originalHeight",n.height());n.data("isEnlarged",!0),n.css("height",""),function(t){var n=e(t),r=n.height(),o=i.height();e("body, html").animate({scrollTop:n.offset().top-(o-r)/2},200)}(t),window.focus(),e(document).on("keydown.contentFocus",function(t){27===t.keyCode&&(e(document).off("keydown.contentFocus"),a(r))})}(u.iframeElement)})})},2619:function(e,t,n){"use strict";window._define("course/view/internalFolding",["jquery","bridge/widgets/foldable","common/commands","utils/responsive"],function(e,t,n,r){var o,i="foldable",a=e(".js-userContent"),u=e("> *",a);function s(){if("small"===r.getCurrentWidth()||"medium"===r.getCurrentWidth())return!0}function c(){var t=document.location.hash.match(/\/id\/(.*)/);t&&setTimeout(function(){var n,r,o;n=t[1],(o=e("#"+n)).length&&(r=o.closest("[data-widget=foldable]")).length&&(r.foldable("instance").open(),e(window).scrollTop(o.offset().top))},1e3)}return n.add("course.view.foldedPartsOpen",function(){o.each(function(t,n){e(n).foldable("instance").open()})}),n.add("course.view.foldedPartsClose",function(){o.each(function(t,n){e(n).foldable("instance").close()})}),{init:function(){var n;n=this.preferences.isBigCourse,function(n){n.forEach(function(n){var r,o,a=e(n);o=a.wrapAll("<div>").parent().addClass(i).uniqueId(),s()&&a.parent().addClass("is-closed"),r=n.shift(),a=e(n),e(r).addClass(i+"__button secondTitle js-foldable-button").append('<i class="'+i+'__icon icon-next"></i>'),a.wrapAll("<div>").parent().addClass(i+"__content"),o.length>0&&t.create(o)})}(function(t,n){var r=[],o=[];return t.each(function(t,i){var a=e(i).is(n),u=o.length;(a||u>=1)&&(a&&u>=1&&(r.push(e.merge([],o)),o=[]),o.push(i))}),r.push(e.merge([],o)),r}(u,n?"h3[id*=r-]":"h2[id*=r-]")),o=e("."+i,a),s()&&e(".js-course-part li").addClass("course-part-summary--closed"),c()}}})},2620:function(e,t,n){"use strict";window._define("view/currentCoursePage",["jquery","class/coursePage"],function(e,t){var n;function r(){return document.location.pathname.match(/\/courses\/([^\/]+)(\/(.*))?/)}return{init:function(){var o,i=this.preferences;i.courseSlug=(o=r())?o[1]:null,i.partSlug=function(){var e=r();return e?e[3]:null}(),i.courseTitle=e("[data-course-title]").data("courseTitle"),i.partTitle=e("[data-part-title]").data("partTitle"),n=new t(i)},get:function(){return n}}})},2621:function(e,t,n){"use strict";window._define("course/view/pictureZoom",["jquery"],function(e){var t=new Image;function n(e){return!!e.match(/\.(jpeg|jpg|gif|png)$/)}function r(e){return t.src=e.src,t.width===e.width&&t.height===e.height}function o(t){var r=e(t).children();return 1===r.length&&"IMG"===r.get(0).tagName&&n(t.href)}e(document).on("click",".js-course-container a",function(e){o(e.currentTarget)&&e.preventDefault()}).on("mouseenter",".js-course-container p > img, .js-course-container figure > img, .js-course-container a",function(t){var n;(o(t.currentTarget)||t.currentTarget.src&&!r(t.currentTarget))&&(n=t.currentTarget,e(n).css("cursor","pointer").css("cursor","-webkit-zoom-in").css("cursor","-moz-zoom-in"))}).on("click",".js-course-container p > img, .js-course-container figure > img",function(t){var o=null,i=e(t.currentTarget).parent(),a="A"===i.get(0).tagName,u=a&&n(i.attr("href")),s=i.find("figcaption");a&&!u||!u&&t.target.src&&r(t.target)||(s.length&&(o=s.html()),e.fancybox.open([{href:u?i.attr("href"):t.target.src,title:o}],{padding:0}))})})},2622:function(e,t,n){"use strict";window._define("course/view/traces",["common/pubsub","view/currentCoursePage"],function(e,t){return{init:function(){var n=t.get();setTimeout(function(){var t,r={courseId:n.getCourseId()};n.isPart()?(t=e.EVENT.VIEW_PART,r.partId=n.getPartId()):t=e.EVENT.VIEW_COURSE,e.publish(t,r)},1e3)}}})},2623:function(e,t,n){"use strict";window._define("common/responsiveForm",["jquery","utils/responsive"],function(e,t){e(document).on("submit",".js-responsiveForm",function(){var n=t.isSmall()?".js-responsiveForm-desktop":".js-responsiveForm-mobile";e(n,this).remove()})})},307:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.closePopin=function(){i.default.fancybox.close()},t.repositionPopin=function(){i.default.fancybox.reposition()},t.openPopin=c,t.openLoginPopin=function(){c("#popin-log-in")},t.openRegisterPopin=function(){c("#popin-sign-in")};var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};var a=n(587),u=n(33),s=n(313);function c(e,t){var n,r,o,c=(0,i.default)(e),l=i.default.extend({},{modal:!1,activatorElement:null},t);c.hasClass("popin")&&(c.find(".js-popin-hidden-content").hide(),l.activatorElement&&(n=l.activatorElement,r=c,o=(0,i.default)(n).data("popin-shownparts"),(0,i.default)(o,r)).show(),(0,i.default)("body").css("overflow-y","hidden"),i.default.fancybox(c,{openEffect:"none",closeEffect:"none",padding:0,margin:u.getCurrent()===u.SCREEN_WIDTH_SMALL?4:20,title:c.data("popin-title"),modal:l.modal,afterClose:function(){c.attr("aria-hidden",!0),a.untrap(c),l.activatorElement&&(0,i.default)(l.activatorElement).focus(),(0,i.default)("body").css("overflow-y","initial")},afterLoad:function(){var e=(0,i.default)(".js-close-button",this.content);l.modal?e.remove():e.on("click",function(e){var t=(0,i.default)(this).attr("href");t&&"#"!==t||e.preventDefault(),i.default.fancybox.close()})},afterShow:function(){c.attr("aria-hidden",!1),c.is(':data("OC-popin")')?c.popin("resize"):s.create(c),a.trap(c),l.modal&&(0,i.default)("input, a",this.content).first().focus()}}))}},315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={VIDEO_JS_PLAYER:"videojsPlayer",JOB_SURVEY:"jobSurvey"}},318:function(e,t,n){"use strict";var r=window.Modernizr;t.isTouch=function(){return r.touchevents}},328:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFeatureEnabled=function(e){if(!u[e])return!1;return u[e].every(function(e){return e()})};var r,o=n(697),i=n(935),a=n(315);var u=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},((r=a)&&r.__esModule?r:{default:r}).default.VIDEO_JS_PLAYER,[o.isNotProd,o.isNotStage,i.isOnScratchCourse])},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=v(n(2603)),o=v(n(2604)),i=v(n(2605)),a=v(n(2606)),u=v(n(2607)),s=v(n(2609)),c=v(n(2610)),l=v(n(2611)),d=v(n(2613)),f=v(n(1054)),p=v(n(2614));function v(e){return e&&e.__esModule?e:{default:e}}n(2615),n(2616),n(2617),n(2618),n(2619),n(2620),n(2621),n(2622),n(2623),t.default=[r.default,o.default,i.default,a.default,u.default,s.default,c.default,l.default,d.default,f.default,p.default]},469:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(16),i=(r=o)&&r.__esModule?r:{default:r};t.default={get:function(){return i.default.window.PubSub}}},587:function(e,t,n){"use strict";var r=n(0),o=null;function i(e){r.contains(o[0],e.target)||o[0]===e.target||(e.stopPropagation(),o.focus())}function a(){document.removeEventListener("focus",i,!0)}e.exports={trap:function(e,t){var n=r(e),u=t||{},s=u.elementToFocus?r(u.elementToFocus):n;a(),n.attr("tabindex","-1"),s.focus(),o=n,document.addEventListener("focus",i,!0)},untrap:a}},588:function(e,t,n){"use strict";var r=n(469).default,o={EVENT_STARTED_VIDEO:"Started Video",EVENT_VIEW_BEGINNING_VIDEO:"Viewed beginning Video",EVENT_STOPPED_VIDEO:"Stopped Video",EVENT_VIEWED_ELEMENT:"Viewed Element",EVENT_HITS_DISPLAYED:"Hits displayed",WANTED_TO_CONTACT_US:"Wanted to Contact Us"};o.subscribe=r.get().subscribe,o.publish=r.get().publish,e.exports=o},773:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.ENDED_PLAYING_VIDEO="Ended Playing Course Video",o=t.STARTED_VIDEO="Started Playing Course Video",i=(t.SEND_TRACE_VIDEO="Sent Trace Video",t.PLAYBACK_RATE_CHANGE="Changed Course Video Speed");t.playbackRateChangeEvent=function(e){return{name:i,data:e}},t.endedPlayingVideoEvent=function(e){return{name:r,data:e}},t.startedVideoEvent=function(e){return{name:o,data:e}}},932:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.publishEnterViewportForElement=function(e,t){r.default.create(e).one("enterViewport",function(){o.default.publish(o.default.EVENT_VIEWED_ELEMENT,{name:e.id,data:t||{}})})},t.add=function(e){return r.default.create(e)};var r=i(n(309)),o=i(n(588));function i(e){return e&&e.__esModule?e:{default:e}}},935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isOnScratchCourse=function(){return null!==i.default.window.location.href.match("courses/decouvrir-la-programmation-creative")};var r,o=n(16),i=(r=o)&&r.__esModule?r:{default:r}},936:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enableCopyToElement=i,t.isEnabled=a;var r=void 0;function o(){var e=this.getAttribute("data-clipboard-text"),t=document.createElement("textarea");t.value=e,t.style.fontSize="12pt",t.style.border="0",t.style.padding="0",t.style.margin="0",t.style.position="absolute",t.style.color="transparent",t.style.backgroundColor="transparent",t.setAttribute("readonly",""),this.parentNode.insertBefore(t,this),t.focus(),t.setSelectionRange(0,e.length),document.execCommand("copy"),this.parentNode.removeChild(t)}function i(e,t){e.setAttribute("data-clipboard-text",t),e.removeEventListener("click",o),e.addEventListener("click",o)}function a(){return void 0===r&&(r=!(!document.queryCommandSupported||!document.queryCommandSupported("copy"))),r}t.default={enableCopyToElement:i,isEnabled:a}}}]);
//# sourceMappingURL=courseView.00b6ccea297fd19f9345.js.map