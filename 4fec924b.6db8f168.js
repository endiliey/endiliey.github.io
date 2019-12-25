(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{127:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(9),o=a(0),i=a.n(o),l=a(130),c=a(11),s=a.n(c),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(e){var t=e.value,a=e.min,n=e.max,r=e.scaleMin,o=void 0===r?0:r,i=e.scaleMax;return a===n?o:o+(t-a)*((void 0===i?1:i)-o)/(n-a)},d=function(e,t,a){var n=e.x-t.x,r=e.y-t.y,o=Math.sqrt(n*n+r*r),i=n/o,l=r/o;return{x:t.x+i*a,y:t.y+l*a}},p=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},m=void 0,h=function(){return Math.round(Math.random()*Math.pow(10,16))},j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};var O={data:s.a.arrayOf(s.a.oneOfType([s.a.number,s.a.shape({value:s.a.number})]).isRequired).isRequired,smooth:s.a.bool,autoDraw:s.a.bool,autoDrawDuration:s.a.number,autoDrawEasing:s.a.string,width:s.a.number,height:s.a.number,padding:s.a.number,radius:s.a.number,gradient:s.a.arrayOf(s.a.string)},g=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return n.trendId=h(),n.gradientId="react-trend-vertical-gradient-"+n.trendId,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e,t,a,n,r=this.props,o=r.autoDraw,i=r.autoDrawDuration,l=r.autoDrawEasing;o&&(this.lineLength=this.path.getTotalLength(),function(e){if(null==m&&null==(m=document.querySelector("style[data-react-trend]"))){var t=document.head||document.getElementsByTagName("head")[0];(m=document.createElement("style")).type="text/css",m.setAttribute("data-react-trend",""),t.appendChild(m)}m.appendChild(document.createTextNode(e))}((e={id:this.trendId,lineLength:this.lineLength,duration:i,easing:l},t=e.id,a=e.lineLength,n=e.duration,"\n    \n    @keyframes react-trend-autodraw-"+t+" {\n      0% {\n        stroke-dasharray: "+a+";\n        stroke-dashoffset: "+a+"\n      }\n      100% {\n        stroke-dasharray: "+a+";\n        stroke-dashoffset: 0;\n      }\n      100% {\n        stroke-dashoffset: '';\n        stroke-dasharray: '';\n      }\n    }\n  \n\n    \n    @keyframes react-trend-autodraw-cleanup-"+t+" {\n      to {\n        stroke-dasharray: '';\n        stroke-dashoffset: '';\n      }\n    }\n  \n\n    #react-trend-"+t+" {\n      animation:\n        react-trend-autodraw-"+t+" "+n+"ms "+e.easing+",\n        react-trend-autodraw-cleanup-"+t+" 1ms "+n+"ms\n      ;\n    }\n  ")))},t.prototype.getDelegatedProps=function(){return e=this.props,t=Object.keys(O),Object.keys(e).reduce((function(a,n){var r;return-1!==t.indexOf(n)?a:b({},a,((r={})[n]=e[n],r))}),{});var e,t},t.prototype.renderGradientDefinition=function(){var e=this.props.gradient;return i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:this.gradientId,x1:"0%",y1:"0%",x2:"0%",y2:"100%"},e.slice().reverse().map((function(t,a){return i.a.createElement("stop",{key:a,offset:u({value:a,min:0,max:e.length-1||1}),stopColor:t})}))))},t.prototype.render=function(){var e=this,t=this.props,a=t.data,n=t.smooth,r=t.width,o=t.height,l=t.padding,c=t.radius,s=t.gradient;if(!a||a.length<2)return null;var b=r||300,m=o||75,h=r||"100%",O=o||"25%",g=function(e,t){var a=t.minX,n=t.maxX,r=t.minY,o=t.maxY,i={min:0,max:e.length-1},l={min:Math.min.apply(Math,e),max:Math.max.apply(Math,e)},c=e.map((function(e,t){return{x:u({value:t,min:i.min,max:i.max,scaleMin:a,scaleMax:n}),y:u({value:e,min:l.min,max:l.max,scaleMin:r,scaleMax:o})}}));return l.min===l.max&&(c[0].y+=1e-4),c}(a.map((function(e){return"number"==typeof e?e:e.value})),{minX:l,maxX:b-l,minY:m-l,maxY:l}),f=n?function(e,t){var a=t.radius,n=e[0],r=e.slice(1);return r.reduce((function(e,t,o){var i,l,c,s=r[o+1],b=r[o-1]||n,u=s&&(l=t,c=s,((i=b).y-l.y)*(i.x-c.x)==(i.y-c.y)*(i.x-l.x));if(!s||u)return e+"\nL "+t.x+","+t.y;var m=p(b,t),h=p(s,t),j=Math.min(m,h),O=j/2<a?j/2:a,g=d(b,t,O),f=d(s,t,O);return[e,"L "+g.x+","+g.y,"S "+t.x+","+t.y+" "+f.x+","+f.y].join("\n")}),"M "+n.x+","+n.y)}(g,{radius:c}):function(e){return e.reduce((function(e,t,a){return""+e+(0===a?"M":"L")+" "+t.x+","+t.y+"\n"}),"")}(g);return i.a.createElement("svg",j({width:h,height:O,viewBox:"0 0 "+b+" "+m},this.getDelegatedProps()),s&&this.renderGradientDefinition(),i.a.createElement("path",{ref:function(t){e.path=t},id:"react-trend-"+this.trendId,d:f,fill:"none",stroke:s?"url(#"+this.gradientId+")":void 0}))},t}(o.Component);g.defaultProps={radius:10,stroke:"black",padding:8,strokeWidth:1,autoDraw:!1,autoDrawDuration:2e3,autoDrawEasing:"ease"};var f=g;a.d(t,"frontMatter",(function(){return y})),a.d(t,"metadata",(function(){return N})),a.d(t,"rightToc",(function(){return w})),a.d(t,"default",(function(){return x}));var y={title:"Docusaurus 2 - Technical Preview",description:"Wanted to give a taste of the future Docusaurus ? Read this unofficial super short guide."},N={permalink:"/2019/05/16/docusaurus-2-technical-preview",source:"@site/blog/2019-05-16-docusaurus-2-technical-preview.md",description:"Wanted to give a taste of the future Docusaurus ? Read this unofficial super short guide.",date:"2019-05-16T00:00:00.000Z",tags:[],title:"Docusaurus 2 - Technical Preview",nextItem:{title:"Rengorum",permalink:"/2019/04/30/rengorum"}},w=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"\ud83d\udca1 Getting Started",id:"-getting-started",children:[]},{value:"Project Structure",id:"project-structure",children:[]},{value:"Running the Development Server",id:"running-the-development-server",children:[]},{value:"Pages",id:"pages",children:[{value:"Using React",id:"using-react",children:[]}]},{value:"Docs",id:"docs",children:[{value:"Using Markdown",id:"using-markdown",children:[]},{value:"Embedding React Components",id:"embedding-react-components",children:[]}]},{value:"Blog",id:"blog",children:[]},{value:"Theme",id:"theme",children:[]},{value:"Component Swizzling",id:"component-swizzling",children:[]},{value:"Search",id:"search",children:[]},{value:"Build",id:"build",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"To be continued ....",id:"to-be-continued-",children:[]},{value:"References",id:"references",children:[]}],v={rightToc:w},k="wrapper";function x(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(k,Object(n.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Wanted to give a taste of the future Docusaurus ? Read this unofficial super short guide."),Object(l.b)("h4",{id:"\ufe0f-disclaimers"},"\u26a0\ufe0f Disclaimers"),Object(l.b)("p",null,"This is a ",Object(l.b)("strong",{parentName:"p"},"very early and incomplete alpha release")," of Docusaurus 2. We are making it available early to maximize community participation and feedback. Expect it to evolve a lot over the course of the alpha-beta period. If you are adventurous enough to be an early adopter, chat with us on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://discordapp.com/invite/docusaurus"}),Object(l.b)("strong",{parentName:"a"},"Discord"))," \ud83d\ude09."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"You should use this if")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u2705 You want to contribute to Docusaurus 2"),Object(l.b)("li",{parentName:"ul"},"\u2705 You want to give feedback to make sure it suits your needs"),Object(l.b)("li",{parentName:"ul"},"\u2705 You are curious about what's next as a Docusaurus user")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Do not use this if")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u274c You are expecting a full production-ready solution (",Object(l.b)("small",null,"try ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docusaurus.io/"}),"Docusaurus 1")," instead"),")"),Object(l.b)("li",{parentName:"ul"},"\u274c You are not willing to adapt with the breaking changes/ things not working properly as we improve it during alpha period")),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("img",{src:"https://docusaurus.io/img/slash-introducing.svg",alt:"Docusaurus"}),Object(l.b)("p",null,"Docusaurus is not just a documentation site generator. It is a ",Object(l.b)("strong",{parentName:"p"},"painless static site generator")," with focus on ",Object(l.b)("em",{parentName:"p"},"content-centric website like documentation and blog site"),"."),Object(l.b)("p",null,"This website for example, is build with Docusaurus 2 alpha."),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u269b\ufe0f ",Object(l.b)("strong",{parentName:"li"},"Built using React")," - Extend or customize with React"),Object(l.b)("li",{parentName:"ul"},"\ud83d\udce6 ",Object(l.b)("strong",{parentName:"li"},"Uses webpack")," - Build an optimized bundle and use any CSS-in-JS solution you like"),Object(l.b)("li",{parentName:"ul"},"\u26a1\ufe0f ",Object(l.b)("strong",{parentName:"li"},"Lightning Fast")," - Link prefetching, instant navigation and page views"),Object(l.b)("li",{parentName:"ul"},"\u2702\ufe0f ",Object(l.b)("strong",{parentName:"li"},"Easy")," - Hot reloading out-of-the-box, automatic route-based code and data splitting! Create new routes by creating new Markdown or JSX files"),Object(l.b)("li",{parentName:"ul"},"\ud83d\udca5 ",Object(l.b)("strong",{parentName:"li"},"Single-page Application")," - Client-side navigations and easily add dynamic interactivity to your website (Client-side Rendering)"),Object(l.b)("li",{parentName:"ul"},"\ud83c\udfaf ",Object(l.b)("strong",{parentName:"li"},"SEO Friendly")," - ",Object(l.b)("inlineCode",{parentName:"li"},"index.html")," files are statically generated for every possible path (Static Rendering)"),Object(l.b)("li",{parentName:"ul"},"\ud83d\ude0c ",Object(l.b)("strong",{parentName:"li"},"Painless")," - Painless project setup. First class support for documentation"),Object(l.b)("li",{parentName:"ul"},"\ud83d\udcdd ",Object(l.b)("strong",{parentName:"li"},"MDX Based")," - Write interactive components via JSX and React embedded in markdown"),Object(l.b)("li",{parentName:"ul"},"\u2601\ufe0f ",Object(l.b)("strong",{parentName:"li"},"GitHub pages friendly")," - Publish to GitHub pages with one command!"),Object(l.b)("li",{parentName:"ul"},"\ud83d\udd0c ",Object(l.b)("strong",{parentName:"li"},"Pluggable")," - Plugin system to extend basic functionality and do almost anything youw ant"),Object(l.b)("li",{parentName:"ul"},"\ud83c\udfa8 ",Object(l.b)("strong",{parentName:"li"},"Themeable")," - Theming system to customize how your website's appearance"),Object(l.b)("li",{parentName:"ul"},"\ud83d\udd0d ",Object(l.b)("strong",{parentName:"li"},"Search")," - Make it easy for people to search what they need in your website."),Object(l.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(l.b)("strong",{parentName:"li"},"i18n")," - Internationalize your website easily (",Object(l.b)("em",{parentName:"li"},"coming soon"),")"),Object(l.b)("li",{parentName:"ul"},"\ud83d\udcbe ",Object(l.b)("strong",{parentName:"li"},"Versioning")," - Versioning support (",Object(l.b)("em",{parentName:"li"},"coming soon"),")"),Object(l.b)("li",{parentName:"ul"},"\ud83d\ude80 ",Object(l.b)("strong",{parentName:"li"},"Many others")," ....")),Object(l.b)("h2",{id:"-getting-started"},"\ud83d\udca1 Getting Started"),Object(l.b)("p",null,"The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a Docusaurus site skeleton. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx @docusaurus/init@next init my-website classic\n")),Object(l.b)("p",null,"It will then prompt you for the ",Object(l.b)("inlineCode",{parentName:"p"},"name")," and the ",Object(l.b)("inlineCode",{parentName:"p"},"template")," for your Docusaurus site. We recommend the ",Object(l.b)("inlineCode",{parentName:"p"},"classic")," template so that you can get started quickly. The ",Object(l.b)("inlineCode",{parentName:"p"},"classic")," template comes with standard documentation, blog and custom pages features."),Object(l.b)("h2",{id:"project-structure"},"Project Structure"),Object(l.b)("p",null,"Assuming you chose the classic template and named your site ",Object(l.b)("inlineCode",{parentName:"p"},"my-website"),", you will see the following files generated under a new directory ",Object(l.b)("inlineCode",{parentName:"p"},"my-website/"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n")),Object(l.b)("h2",{id:"running-the-development-server"},"Running the Development Server"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd my-website\nnpm start\n")),Object(l.b)("p",null,"A browser window will open at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),"."),Object(l.b)("p",null,"Congratulations! You have just created your first Docusaurus site! Browse around the site to see what's available."),Object(l.b)("h2",{id:"pages"},"Pages"),Object(l.b)("p",null,"In this section, we will learn about creating ad-hoc pages in Docusaurus using React. This is most useful for creating one-off standalone pages."),Object(l.b)("p",null,"In the ",Object(l.b)("inlineCode",{parentName:"p"},"src/pages")," directory, create a file called ",Object(l.b)("inlineCode",{parentName:"p"},"hello.js")," with the following contents:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport Layout from '@theme/Layout';\n\nfunction Hello() {\n  return (\n    <Layout title=\"Hello\">\n      <div\n        style={{\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          height: '50vh',\n          fontSize: '20px',\n        }}>\n        <p>\n          Edit <code>pages/hello.js</code> and save to reload.\n        </p>\n      </div>\n    </Layout>\n  );\n}\n\nexport default Hello;\n")),Object(l.b)("p",null,"Once you save the file, the development server will automatically reload the changes. Now open ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/hello"}),"http://localhost:3000/hello"),", you will see the new page you just created."),Object(l.b)("p",null,"If you are familiar with other static site generators like Jekyll and Next, this routing approach will feel familiar to you. Any JavaScript file you create under ",Object(l.b)("inlineCode",{parentName:"p"},"/src/pages/")," directory will be automatically converted to a website page, following the ",Object(l.b)("inlineCode",{parentName:"p"},"/src/pages/")," directory hierarchy. For example:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/src/pages/index.js")," \u2192 ",Object(l.b)("inlineCode",{parentName:"li"},"<baseUrl>/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/src/pages/test.js")," \u2192 ",Object(l.b)("inlineCode",{parentName:"li"},"<baseUrl>/test")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/src/pages/foo/test.js")," \u2192 ",Object(l.b)("inlineCode",{parentName:"li"},"<baseUrl>/foo/test")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/src/pages/foo/index.js")," \u2192 ",Object(l.b)("inlineCode",{parentName:"li"},"<baseUrl>/foo"))),Object(l.b)("h3",{id:"using-react"},"Using React"),Object(l.b)("p",null,"React is used as the UI library to create pages. You can leverage on the expressibility of React to build rich web content."),Object(l.b)("h2",{id:"docs"},"Docs"),Object(l.b)("h3",{id:"using-markdown"},"Using Markdown"),Object(l.b)("p",null,"Next, let's touch on the powerful feature in Docusaurus - documentation."),Object(l.b)("p",null,"Create a new file within the ",Object(l.b)("inlineCode",{parentName:"p"},"docs")," directory called ",Object(l.b)("inlineCode",{parentName:"p"},"hello.md")," with the following contents:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"---\ntitle: Hello\n---\n\nI can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).\n\n### Markdown Syntax\n\n**Bold** _italic_ `code` [Links](#url)\n\n> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.\n\n- Hey\n- Ho\n- Let's Go\n")),Object(l.b)("h3",{id:"embedding-react-components"},"Embedding React Components"),Object(l.b)("p",null,"Did you know that you can now write React components within your Markdown files? This is possible because of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://mdxjs.com"}),"MDX"),", which allows you to write JSX within your Markdown documents."),Object(l.b)("p",null,"Now we'll add a third-party chart component into the Markdown file created above. Before that, kill your web server (",Object(l.b)("kbd",null,"Cmd")," + ",Object(l.b)("kbd",null,"C")," or ",Object(l.b)("kbd",null,"Ctrl")," + ",Object(l.b)("kbd",null,"C"),") if it's running and install ",Object(l.b)("inlineCode",{parentName:"p"},"react-trend")," in your website directory."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-trend\n")),Object(l.b)("p",null,"Start the development server again and go to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/docs/hello"}),"http://localhost:3000/docs/hello"),", you will see a new page created from the Markdown file."),Object(l.b)("p",null,"Edit ",Object(l.b)("inlineCode",{parentName:"p"},"docs/hello.md")," and append the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx"}),"import Trend from 'react-trend';\n\n_Here's a bar chart!_\n\n<Trend\n  smooth\n  autoDraw\n  autoDrawDuration={3000}\n  autoDrawEasing=\"ease-out\"\n  data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}\n  gradient={['#00c6ff', '#F0F', '#FF0']}\n  radius={10}\n  strokeWidth={2}\n  strokeLinecap={'butt'}\n/>\n")),Object(l.b)("p",null,"Save the file and notice that the site is hot-reloaded with the edited content."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Here's a bar chart!")),Object(l.b)(f,{smooth:!0,autoDraw:!0,autoDrawDuration:3e3,autoDrawEasing:"ease-out",data:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradient:["#00c6ff","#F0F","#FF0"],radius:10,strokeWidth:2,strokeLinecap:"butt",mdxType:"Trend"}),Object(l.b)("h2",{id:"blog"},"Blog"),Object(l.b)("p",null,"Another feature is the blogging system. Once again, I remind you that this blog is created with Docusaurus 2."),Object(l.b)("p",null,"Now, let's create a new markdown file ",Object(l.b)("inlineCode",{parentName:"p"},"blog/2018-05-16-hello.md")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"---\ntitle: Hello\nauthor: Endilie Y\nauthorTitle: Maintainer of Docusaurus\nauthorURL: https://github.com/endiliey\nauthorImageURL: https://avatars1.githubusercontent.com/u/17883920?s=460&v=4\nauthorTwitter: endiliey\n---\n\nWelcome to my blog. This blog is created with [**Docusaurus 2 alpha**](https://v2.docusaurus.io/) :wink:\n\n\x3c!--truncate --\x3e\n\nMore content here ....\n")),Object(l.b)("p",null,"If you navigate to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/blog"}),"http://localhost:3000/blog"),". You can see that we have a blog list page. You can also navigate to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/blog/2019/05/16/hello"}),"http://localhost:3000/blog/2019/05/16/hello")),Object(l.b)("h2",{id:"theme"},"Theme"),Object(l.b)("p",null,"Users can install themes, that provide a set of components, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"Navbar"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Layout"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Footer"),". "),Object(l.b)("p",null,"Users can use these components in their code by importing them using the ",Object(l.b)("inlineCode",{parentName:"p"},"@theme")," webpack alias:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import Navbar from '@theme/Navbar';\n")),Object(l.b)("p",null,"The alias ",Object(l.b)("inlineCode",{parentName:"p"},"@theme")," can refer to a few directories, in the following priority:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"A user's ",Object(l.b)("inlineCode",{parentName:"li"},"website/theme")," directory, which is a special directory that has the higher precedence."),Object(l.b)("li",{parentName:"ol"},"A Docusaurus theme packages's ",Object(l.b)("inlineCode",{parentName:"li"},"src/theme")," directory."),Object(l.b)("li",{parentName:"ol"},"Fallback components provided by Docusaurus core (usually not needed).")),Object(l.b)("p",null,"Given the following structure"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 docusaurus-theme\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n      \u2514\u2500\u2500 Navbar.js\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"src/theme/Navbar.js")," takes precedence whenever ",Object(l.b)("inlineCode",{parentName:"p"},"@theme/Navbar")," is imported. This behavior is called component swizzling. In iOS, method swizzling is the process of changing the implementation of an existing selector (method). In the context of a website, component swizzling will mean providing an alternative component that takes precedence over the theme-provided component."),Object(l.b)("p",null,"The classic/default Docusaurus theme will provide most components out of the box, and users can swizzle the components by adding a component of the same name in the ",Object(l.b)("inlineCode",{parentName:"p"},"themes")," directory if they want to modify how it looks and behaves."),Object(l.b)("h2",{id:"component-swizzling"},"Component Swizzling"),Object(l.b)("p",null,"You might notice that at first, we installed ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"@docusaurus/preset-classic")),". Presets are collection of plugins and themes."),Object(l.b)("p",null,"The basic overview of @docusaurus/preset-classic is this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"preset-classic\n\u251c\u2500\u2500 theme-classic\n\u2502   \u251c\u2500\u2500 Navbar.js\n\u2502   \u251c\u2500\u2500 Layout.js\n\u2502   \u2514\u2500\u2500 Footer.js\n\u251c\u2500\u2500 plugin-docs\n\u2502   \u251c\u2500\u2500 theme\n\u2502   \u2502   \u251c\u2500\u2500 DocPage.js\n\u2502   \u2502   \u2514\u2500\u2500 DocItem.js\n\u2502   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 plugin-blog\n\u2514\u2500\u2500 plugin-pages\n")),Object(l.b)("p",null,"So how do we swizzle the theme component easily ?"),Object(l.b)("p",null,"First of all, make sure to kill your webserver (",Object(l.b)("kbd",null,"Cmd")," + ",Object(l.b)("kbd",null,"C")," or ",Object(l.b)("kbd",null,"Ctrl")," + ",Object(l.b)("kbd",null,"C"),") and run this command to swizzle (override) the component."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn swizzle @docusaurus/theme-classic Footer\n")),Object(l.b)("p",null,"It will create a ",Object(l.b)("inlineCode",{parentName:"p"},"themes/Footer")," file in your project folder.\nTry to edit that file, save it and you can see that we're customizing the Footer."),Object(l.b)("p",null,"For example, we can just return null for the Footer.:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\n\nfunction Footer() {\n  return null;\n}\n\nexport default Footer;\n")),Object(l.b)("p",null,"And you can see that the footer is no longer shown. It's not the default Facebook footer anymore! \ud83d\ude04"),Object(l.b)("h2",{id:"search"},"Search"),Object(l.b)("p",null,"To add search bar with Algolia, just add algolia field in your themeConfig. Note that you will need algolia API key. You can use docusaurus 2's api key for testing purposes."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nthemeConfig: {\n    // ....\n    algolia: {\n      apiKey: '47ecd3b21be71c5822571b9f59e52544',\n      indexName: 'docusaurus-2',\n      algoliaOptions: {},\n    },\n  },\n")),Object(l.b)("h2",{id:"build"},"Build"),Object(l.b)("p",null,"To build the website, just run this command. After that, check your ",Object(l.b)("strong",{parentName:"p"},"build")," folder."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn build\n")),Object(l.b)("p",null,"You can deploy it to GitHub pages, netlify, etc. It's completely up to you. The site is server rendered so it works without JavaScript too !"),Object(l.b)("h2",{id:"deploy"},"Deploy"),Object(l.b)("p",null,"Docusaurus provide a very easy way of publishing to GitHub pages.\nFirst, you need to modify your ",Object(l.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," and add the required params"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"organizationName")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The GitHub user or organization that owns the repository. If you are the owner, then it is your GitHub username. In the case of Docusaurus, that would be the "',Object(l.b)("em",{parentName:"td"},"facebook"),'" GitHub organization.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"projectName")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The name of the GitHub repository for your project. For example, the source code for Docusaurus is hosted at ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/facebook/docusaurus"}),"https://github.com/facebook/docusaurus"),', so our project name in this case would be "docusaurus".')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"url")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Your website's URL. For projects hosted on GitHub pages, this will be \"",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://_username_.github.io"}),"https://_username_.github.io"),'"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"baseUrl")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Base URL for your project. For projects hosted on GitHub pages, it follows the format "/',Object(l.b)("em",{parentName:"td"},"projectName"),'/". For ',Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/facebook/docusaurus"}),"https://github.com/facebook/docusaurus"),", ",Object(l.b)("inlineCode",{parentName:"td"},"baseUrl")," is ",Object(l.b)("inlineCode",{parentName:"td"},"/docusaurus/"),".")))),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const siteConfig = {\n  ...\n  url: 'https://endiliey.github.io', // Your website URL\n  baseUrl: '/',\n  projectName: 'endiliey.github.io',\n  organizationName: 'endiliey'\n  ...\n}\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Now you have to specify the git user as an environment variable and run the deploy script")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"GIT_USER")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The username for a GitHub account that has commit access to this repo. For your own repositories, this will usually be your own GitHub username. The specified ",Object(l.b)("inlineCode",{parentName:"td"},"GIT_USER")," must have push access to the repository specified in the combination of ",Object(l.b)("inlineCode",{parentName:"td"},"organizationName")," and ",Object(l.b)("inlineCode",{parentName:"td"},"projectName"),".")))),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"GIT_USER=endiliey yarn run deploy\n")),Object(l.b)("p",null,"There are also two optional parameters that are set as environment variables:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"USE_SSH")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If this is set to ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", then SSH is used instead of HTTPS for the connection to the GitHub repo. HTTPS is the default if this variable is not set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"CURRENT_BRANCH")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The branch that contains the latest docs changes that will be deployed. Usually, the branch will be ",Object(l.b)("inlineCode",{parentName:"td"},"master"),", but it could be any branch (default or otherwise) except for ",Object(l.b)("inlineCode",{parentName:"td"},"gh-pages"),". If nothing is set for this variable, then the current branch will be used.")))),Object(l.b)("p",null,"This website for example, use TravisCI to automate running this deploy script."),Object(l.b)("h2",{id:"to-be-continued-"},"To be continued ...."),Object(l.b)("p",null,"There are lot of other undocumented features that I am not able to write in detail on this super short post, like ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/Docusaurus/issues/1438"}),"theme, plugin and presets"),". There are also some killer features that we haven't implemented in v2 (but already did in v1) like i18n, and versioning. "),Object(l.b)("p",null,"Anyway, that's all for now. I hope you enjoyed this super short guide."),Object(l.b)("p",null,"Chat with us on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://discordapp.com/invite/docusaurus"}),Object(l.b)("strong",{parentName:"a"},"Discord"))," \ud83d\ude09."),Object(l.b)("h2",{id:"references"},"References"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Docusaurus 2 WIP site ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://v2.docusaurus.io/"}),"https://v2.docusaurus.io/")),Object(l.b)("li",{parentName:"ul"},"Docusaurus 1 site ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docusaurus.io/"}),"https://docusaurus.io/"))))}x.isMDXComponent=!0}}]);