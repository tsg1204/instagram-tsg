(this["webpackJsonpinstagram-tsg"]=this["webpackJsonpinstagram-tsg"]||[]).push([[3],{229:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(a){var o=Object.getOwnPropertyDescriptor(a,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=n(0),m=n(230),f=m.canvasStyle,d=m.mirrorProps,h=n(231).omit;function v(e,t){if("letters"!==t&&"words"!==t)throw new Error("Unsupported options basedOn: ".concat(t));if(e.nodeType===Node.TEXT_NODE){var n,a=document.createDocumentFragment();switch(t){case"words":n=e.textContent.split(/\b|(?=\W)/);break;case"letters":n=Array.from(e.textContent)}n.forEach((function(e){a.appendChild(function(e){var t=document.createElement("span");return t.className="LinesEllipsis-unit",t.textContent=e,t}(e))})),e.parentNode.replaceChild(a,e)}else if(e.nodeType===Node.ELEMENT_NODE)for(var o=[].slice.call(e.childNodes),r=o.length,i=0;i<r;i++)v(o[i],t)}function y(e){e.parentNode.replaceChild(document.createTextNode(e.textContent),e)}function b(e,t){if(t.contains(e)&&e!==t){for(;e.nextElementSibling;)e.parentNode.removeChild(e.nextElementSibling);b(e.parentNode,t)}}function E(e){for(var t=e;t=t.parentNode;)if(/p|div|main|section|h\d|ul|ol|li/.test(t.tagName.toLowerCase()))return t}function g(e){return!(!e.offsetHeight||!e.offsetWidth&&!/\S/.test(e.textContent))}var w={component:"div",unsafeHTML:"",maxLine:1,ellipsis:"\u2026",ellipsisHTML:void 0,className:"",basedOn:void 0,onReflow:function(){},winWidth:void 0},O=Object.keys(w),N=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,c(t).call(this,e))).state={html:e.unsafeHTML,clamped:!1},n.canvas=null,n.maxLine=0,n.nlUnits=[],n}var n,a,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentDidUpdate",value:function(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"setState",value:function(e,n){return"undefined"!==typeof e.clamped&&(this.clamped=e.clamped),l(c(t.prototype),"setState",this).call(this,e,n)}},{key:"initCanvas",value:function(){if(!this.canvas){var e=this.canvas=document.createElement("div");e.className="LinesEllipsis-canvas ".concat(this.props.className),e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(f).forEach((function(t){e.style[t]=f[t]})),document.body.appendChild(e)}}},{key:"copyStyleToCanvas",value:function(){var e=this,t=window.getComputedStyle(this.target);d.forEach((function(n){e.canvas.style[n]=t[n]}))}},{key:"reflow",value:function(e){this.maxLine=+e.maxLine||1,this.canvas.innerHTML=e.unsafeHTML;var t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.unsafeHTML)?"words":"letters");v(this.canvas,t);var n={clamped:this.putEllipsis(this.calcIndexes()),html:this.canvas.innerHTML};this.setState(n,e.onReflow.bind(this,n))}},{key:"calcIndexes",value:function(){var e=[0],t=this.nlUnits=Array.from(this.canvas.querySelectorAll(".LinesEllipsis-unit")),n=t.length;if(!t.length)return e;var a=t.find(g);if(!a)return e;for(var o=1,r=a.offsetTop,i=1;i<n&&!(g(t[i])&&t[i].offsetTop-r>1&&(o++,e.push(i),r=t[i].offsetTop,o>this.maxLine));i++);return e}},{key:"putEllipsis",value:function(e){if(e.length<=this.maxLine)return!1;this.nlUnits=this.nlUnits.slice(0,e[this.maxLine]);var t=this.nlUnits.pop(),n=this.makeEllipsisSpan();do{b(t,this.canvas),E(t).appendChild(n),t=this.nlUnits.pop()}while(t&&(!g(t)||n.offsetHeight>t.offsetHeight||n.offsetTop>t.offsetTop));return t&&y(t),this.nlUnits.forEach(y),!0}},{key:"makeEllipsisSpan",value:function(){var e=this.props,t=e.ellipsisHTML,n=e.ellipsis,a=document.createElement("span");a.appendChild(document.createElement("wbr"));var o=document.createElement("span");return o.className="LinesEllipsis-ellipsis",t?o.innerHTML=t:o.textContent=n,a.appendChild(o),a}},{key:"isClamped",value:function(){return this.clamped}},{key:"render",value:function(){var e=this,t=this.state,n=t.html,a=t.clamped,i=this.props,s=i.component,l=i.className,c=i.unsafeHTML,u=r(i,["component","className","unsafeHTML"]);return p.createElement(s,o({className:"LinesEllipsis ".concat(a?"LinesEllipsis--clamped":""," ").concat(l),ref:function(t){return e.target=t}},h(u,O)),p.createElement("div",{dangerouslySetInnerHTML:{__html:a?n:c}}))}}])&&i(n.prototype,a),m&&i(n,m),t}(p.Component);N.defaultProps=w,e.exports=N},230:function(e,t,n){"use strict";e.exports={canvasStyle:{position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},mirrorProps:["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"]}},231:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports={omit:function(e,t){if(!e||"object"!==a(e))return e;var n={};return Object.keys(e).forEach((function(a){t.indexOf(a)>-1||(n[a]=e[a])})),n}}},232:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n(0),r=n.n(o),i=n(7),s=n(51),l=n(12),c=n(13),u=n(29),p=n(49),m=n(226),f=n(74),d=n(224),h=n(229),v=n.n(h),y=n(90),b=n(92);function E(){var e=Object(i.h)(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],s=n[1],c=o?l.s:l.k,u=o?e.liked:e.like,p=o?function(){console.log("unlike"),s(!1)}:function(){console.log("like"),s(!0)};return r.a.createElement(c,{className:u,onClick:p})}function g(){var e=Object(i.h)(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],s=n[1],c=o?l.p:l.q,u=o?function(){console.log("remove"),s(!1)}:function(){console.log("save"),s(!0)};return r.a.createElement(c,{className:e.saveIcon,onClick:u})}function w(){var e=Object(i.h)(),t=r.a.useState(""),n=Object(a.a)(t,2),o=n[0],s=n[1];return r.a.createElement("div",{className:e.commentContainer},r.a.createElement(d.a,{fullWidth:!0,value:o,placeholder:"Add a comment...",multiline:!0,rowsMax:2,row:1,onChange:function(e){return s(e.target.value)},InputProps:{classes:{root:e.root,underline:e.underline}}}),r.a.createElement(p.a,{color:"primary",className:e.commentButton,disabled:!o.trim()},"Post"))}t.default=function(e){var t=e.post,n=e.index,o=Object(i.h)(),d=r.a.useState(!1),h=Object(a.a)(d,2),O=h[0],N=h[1],k=r.a.useState(!1),S=Object(a.a)(k,2),x=S[0],C=S[1],L=t.media,T=t.id,j=t.likes,H=t.user,M=t.caption,P=t.comments,_=1===n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:o.article,style:{marginBottom:_&&30}},r.a.createElement("div",{className:o.postHeader},r.a.createElement(s.a,{user:H}),r.a.createElement(l.o,{className:o.moreIcon,onClick:function(){return C(!0)}})),r.a.createElement("div",null,r.a.createElement("img",{src:L,alt:"Post media",className:o.image})),r.a.createElement("div",{className:o.postButtonsWrapper},r.a.createElement("div",{className:o.postButtons},r.a.createElement(E,null),r.a.createElement(c.b,{to:"/p/".concat(T)},r.a.createElement(l.c,null)),r.a.createElement(l.r,null),r.a.createElement(g,null)),r.a.createElement(u.a,{className:o.likes,variant:"subtitle2"},r.a.createElement("span",null,1===j?"1 like":"".concat(j," likes"))),r.a.createElement("div",{className:O?o.expanded:o.collapsed},r.a.createElement(c.b,{to:"/".concat(H.username)},r.a.createElement(u.a,{variant:"subtitle2",component:"span",className:o.username},H.username)),O?r.a.createElement(u.a,{variant:"body2",component:"span",dangerouslySetInnerHTML:{__html:M}}):r.a.createElement("div",{className:o.captionWrapper},r.a.createElement(v.a,{unsafeHTML:M,className:o.caption,maxLine:"0",ellipsis:"...",basedOn:"letters"}),r.a.createElement(p.a,{className:o.moreButton,onClick:function(){return N(!0)}},"more"))),r.a.createElement(c.b,{to:"/p/".concat(T)},r.a.createElement(u.a,{className:o.commentsLink,variant:"body2",component:"div"},"View all ",P.length," comments")),P.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(c.b,{to:"/".concat(e.user.username)},r.a.createElement(u.a,{variant:"subtitle2",component:"span",className:o.commentUsername},e.user.username)," ",r.a.createElement(u.a,{variant:"body2",component:"span"},e.content)))})),r.a.createElement(u.a,{color:"textSecondary",className:o.datePosted},"5 DAYS AGO")),r.a.createElement(m.a,{xsDown:!0},r.a.createElement(f.a,null),r.a.createElement(w,null))),_&&r.a.createElement(y.a,null),x&&r.a.createElement(b.a,{onClose:function(){return C(!1)}}))}}}]);
//# sourceMappingURL=3.c0d193ef.chunk.js.map