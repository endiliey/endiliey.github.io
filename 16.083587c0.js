/*! For license information please see 16.083587c0.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{138:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(35),l=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,i=e.href,s=a||i,u=l.test(s),h=!1,d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(r.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,u]),s&&u?c.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:function(){h||(window.docusaurus.preload(s),h=!0)},innerRef:function(e){var a,n;d&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):c.a.createElement("a",Object(n.a)({},e,{href:s}))}},139:function(e,t,a){"use strict";var n=a(0),r=a(51);t.a=function(){return Object(n.useContext)(r.a)}},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(147);var n=a(139);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},141:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(138),o=a(49),l=a(139),i=a(140),s=a(144),u=a.n(s),h=a(146),d=(a(120),function(){var e=Object(h.a)(),t=e[0],a=e[1],c=Object(n.useCallback)((function(e){return a(e.target.checked?"dark":"")}),[a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en","data-theme":t})),r.a.createElement(u.a,{"aria-label":"theme toggle",icons:{checked:r.a.createElement("img",{src:Object(i.a)("img/moon.png"),width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}}),unchecked:r.a.createElement("img",{src:Object(i.a)("img/sun.png"),width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}})},checked:"dark"===t,onChange:c}))});var f=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("div",{style:{float:"right"}},r.a.createElement("a",{href:"https://v2.docusaurus.io/",target:"_blank",rel:"noopener noreferrer"},"docusaurus 2")),r.a.createElement("a",{href:"https://www.twitter.com/endiliey",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","\u2022"," ",r.a.createElement("a",{href:"https://github.com/endiliey",target:"_blank",rel:"noopener noreferrer"},"github")))),r.a.createElement("div",{className:"margin-bottom--xl"}))};a(121);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.baseUrl,u=a.tagline,h=a.title,m=a.url,p=a.themeConfig,v=e.children,g=e.title,k=e.description,E=e.image,b=e.keywords,y=e.isBlogListPage,w=e.permalink,_=p||{},O=_.author,N=_.authorImageURL,C=_.authorURL,j=_.image,x=g||h+" \xb7 "+u,S=E||j,T=m+Object(i.a)(S),P=Object(i.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),x&&r.a.createElement("title",null,x),x&&r.a.createElement("meta",{property:"og:title",content:x}),n&&r.a.createElement("link",{rel:"shortcut icon",href:P}),k&&r.a.createElement("meta",{name:"description",content:k}),k&&r.a.createElement("meta",{property:"og:description",content:k}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),S&&r.a.createElement("meta",{property:"og:image",content:T}),S&&r.a.createElement("meta",{property:"twitter:image",content:T}),S&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+x}),w&&r.a.createElement("meta",{property:"og:url",content:m+w}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"blogHeader"},y?r.a.createElement("h1",null,h):r.a.createElement("h3",null,r.a.createElement(c.a,{to:s},h)),r.a.createElement(d,null)),y&&r.a.createElement("div",{className:"blogHeader"},r.a.createElement("div",{className:"avatar"},N&&r.a.createElement("a",{className:"avatar__photo-link",href:C,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo avatar__photo--lg",src:N,alt:O})),r.a.createElement("div",{className:"avatar__intro"},O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},O),r.a.createElement("small",{className:"avatar__subtitle"},u))))))),r.a.createElement("main",{className:"main"},v),r.a.createElement(f,null))}},142:function(e,t,a){var n=a(69),r=a(22);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},143:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},144:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=d(c),l=d(a(145)),i=d(a(10)),s=d(a(148)),u=d(a(149)),h=a(150);function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,h.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,h.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,h.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},145:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},146:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]}},147:function(e,t,a){"use strict";var n=a(16),r=a(33),c=a(142),o="".startsWith;n(n.P+n.F*a(143)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})},148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},149:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},150:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(141);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);