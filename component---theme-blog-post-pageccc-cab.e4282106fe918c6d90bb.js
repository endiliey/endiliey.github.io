(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{35:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(51),m=t(50),c=t(72);a.default=function(e){var a=e.content,t=e.metadata,r=e.nextItem,s=e.prevItem,o=a.frontMatter;return n.a.createElement(l.a,{title:t.title,description:t.description},a&&n.a.createElement("div",{className:"container margin-vert--sm"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6 col--offset-3"},n.a.createElement(m.a,{frontMatter:o,metadata:t},n.a.createElement(a,null)),n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(c.a,{nextItem:r,prevItem:s}))))))}},50:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(47),m=t(48),c=t(53);a.a=function(e){var a,t,r,s,o,i=e.children,u=e.frontMatter,E=e.metadata,v=e.truncated,d=E.date,p=E.permalink,h=E.tags,g=u.author,f=u.authorURL,N=u.authorTitle,b=u.authorFBID,_=u.title;return n.a.createElement("div",null,(a=d.substring(0,10).split("-"),t=a[0],r=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a[1],10)-1],s=parseInt(a[2],10),o=b?"https://graph.facebook.com/".concat(b,"/picture/?height=200&width=200"):u.authorImageURL,n.a.createElement("header",null,n.a.createElement("h1",null,n.a.createElement(m.a,{to:p},_)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("small",null,r," ",s,", ",t)),!v&&n.a.createElement("div",{className:"avatar margin-bottom--md"},o&&n.a.createElement("a",{className:"avatar__photo-link",href:f,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:o,alt:g})),n.a.createElement("div",{className:"avatar__intro"},g&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},g)),n.a.createElement("small",{className:"avatar__subtitle"},N)))))),n.a.createElement("article",{className:"markdown"},n.a.createElement(l.a,{components:c.a},i)),n.a.createElement("div",{className:"row margin-vert--sm"},n.a.createElement("div",{className:"col col-6"},h.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("strong",null,"Tags:"),h.map(function(e){var a=e.label,t=e.permalink;return n.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)})))))}}}]);