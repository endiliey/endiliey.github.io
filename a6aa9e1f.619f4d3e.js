(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(134),m=t(133),c=t(131);var i=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(c.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items;return r.a.createElement(l.a,{isBlogListPage:!0,title:"Endiliey",description:"Endilie's personal blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},t.map((function(e){var a=e.content;return r.a.createElement("div",{className:"margin-bottom--lg",key:a.metadata.permalink},r.a.createElement(m.a,{frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null)))})),r.a.createElement(i,{metadata:a})))))}},133:function(e,a,t){"use strict";t(64);var n=t(0),r=t.n(n),l=t(130),m=t(138),c=t(131);a.a=function(e){var a,t,n,i,s,o=e.children,u=e.frontMatter,E=e.metadata,v=e.truncated,d=E.date,g=E.permalink,p=E.tags,_=u.author,h=u.authorURL,N=u.authorTitle,b=u.authorFBID,f=u.title;return r.a.createElement("div",null,(a=d.substring(0,10).split("-"),t=a[0],n=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a[1],10)-1],i=parseInt(a[2],10),s=b?"https://graph.facebook.com/"+b+"/picture/?height=200&width=200":u.authorImageURL,r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(c.a,{to:g},f)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("small",null,n," ",i,", ",t)),!v&&r.a.createElement("div",{className:"avatar margin-bottom--md"},s&&r.a.createElement("a",{className:"avatar__photo-link",href:h,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:s,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},N)))))),r.a.createElement("article",{className:"markdown"},r.a.createElement(l.a,{components:m.a},o)),r.a.createElement("div",{className:"row margin-vert--sm"},r.a.createElement("div",{className:"col col-6"},p.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Tags:"),p.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))))))}}}]);