(this["webpackJsonpblog-list"]=this["webpackJsonpblog-list"]||[]).push([[0],{29:function(t,e,a){},36:function(t,e,a){},56:function(t,e,a){},57:function(t,e,a){},58:function(t,e,a){},59:function(t,e,a){},60:function(t,e,a){},61:function(t,e,a){},62:function(t,e,a){},63:function(t,e,a){},64:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(23),i=a.n(s),r=a(8),o=a(3),l=(a(29),a(0)),j=function(){return Object(l.jsxs)("nav",{className:"header-container",children:[Object(l.jsxs)("div",{className:"logo-and-title-container",children:[Object(l.jsx)("img",{alt:"wave",className:"logo",src:"https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"}),Object(l.jsx)("h1",{className:"title",children:"Wave"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{className:"route-link",to:"/",children:"Home"}),Object(l.jsx)(r.b,{className:"route-link",to:"/about",children:"About"}),Object(l.jsx)(r.b,{className:"route-link",to:"/contact",children:"Contact"})]})]})},b=(a(36),function(){return Object(l.jsxs)("div",{className:"about-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/about-blog-img.png",alt:"about",className:"about-img"}),Object(l.jsx)("h1",{className:"about-heading",children:"About"}),Object(l.jsx)("p",{className:"about-paragraph",children:"I love to create! I am a front-end web developer"})]})}),d=a(10),u=a.n(d),m=a(11),h=a(12),p=a(13),g=a(16),O=a(15),x=a(14),f=a.n(x),v=(a(22),a(56),function(t){var e=t.blogData,a=e.id,c=e.imageUrl,n=e.topic,s=e.title,i=e.avatarUrl,o=e.author;return Object(l.jsx)(r.b,{to:"/blogs/".concat(a),className:"item-link",children:Object(l.jsxs)("div",{className:"item-container",children:[Object(l.jsx)("img",{className:"item-image",src:c,alt:"item".concat(a)}),Object(l.jsxs)("div",{className:"item-info",children:[Object(l.jsx)("p",{className:"item-topic",children:n}),Object(l.jsx)("p",{className:"item-title",children:s}),Object(l.jsxs)("div",{className:"author-info",children:[Object(l.jsx)("img",{className:"avatar",src:i,alt:"avatar".concat(a)}),Object(l.jsx)("p",{className:"author-name",children:o})]})]})]})})}),N=(a(57),function(t){Object(g.a)(a,t);var e=Object(O.a)(a);function a(){var t;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={isLoading:!0,blogsData:[]},t.getBlogsData=Object(m.a)(u.a.mark((function e(){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://apis.ccbp.in/blogs");case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,n=c.map((function(t){return{id:t.id,title:t.title,imageUrl:t.image_url,avatarUrl:t.avatar_url,author:t.author,topic:t.topic}})),t.setState({blogsData:n,isLoading:!1});case 8:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getBlogsData()}},{key:"render",value:function(){var t=this.state,e=t.blogsData,a=t.isLoading;return Object(l.jsx)("div",{className:"blog-list-container",children:a?Object(l.jsx)("div",{testid:"loader",children:Object(l.jsx)(f.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50})}):e.map((function(t){return Object(l.jsx)(v,{blogData:t},t.id)}))})}}]),a}(c.Component)),D=(a(58),function(){return Object(l.jsxs)("div",{className:"user-info-container",children:[Object(l.jsx)("img",{className:"profile-pic",src:"https://assets.ccbp.in/frontend/react-js/profile-img.png",alt:"profile pic"}),Object(l.jsx)("h1",{className:"user-name",children:"Wade Warren"}),Object(l.jsx)("p",{className:"user-designation",children:"Software developer at UK"})]})}),w=(a(59),function(){return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)(D,{}),Object(l.jsx)(N,{})]})}),k=(a(60),function(){return Object(l.jsxs)("div",{className:"contact-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/contact-blog-img.png",alt:"contact",className:"contact-img"}),Object(l.jsx)("h1",{className:"contact-heading",children:"Contact"})]})}),y=(a(61),function(t){Object(g.a)(a,t);var e=Object(O.a)(a);function a(){var t;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={blogData:{},isLoading:!0},t.getBlogItemData=Object(m.a)(u.a.mark((function e(){var a,c,n,s,i,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.match,c=a.params,n=c.id,e.next=5,fetch("https://apis.ccbp.in/blogs/".concat(n));case 5:return s=e.sent,e.next=8,s.json();case 8:i=e.sent,r={title:i.title,imageUrl:i.image_url,content:i.content,avatarUrl:i.avatar_url,author:i.author},t.setState({blogData:r,isLoading:!1});case 11:case"end":return e.stop()}}),e)}))),t.renderBlogItemDetails=function(){var e=t.state.blogData,a=e.title,c=e.imageUrl,n=e.content,s=e.avatarUrl,i=e.author;return Object(l.jsxs)("div",{className:"blog-info",children:[Object(l.jsx)("h1",{className:"blog-details-title",children:a}),Object(l.jsxs)("div",{className:"author-details",children:[Object(l.jsx)("img",{className:"author-pic",src:s,alt:i}),Object(l.jsx)("p",{className:"details-author-name",children:i})]}),Object(l.jsx)("img",{className:"blog-image",src:c,alt:a}),Object(l.jsx)("p",{className:"blog-content",children:n})]})},t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getBlogItemData()}},{key:"render",value:function(){var t=this.state.isLoading,e=this.renderBlogItemDetails;return Object(l.jsx)("div",{className:"blog-container",children:t?Object(l.jsx)("div",{testid:"loader",children:Object(l.jsx)(f.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50})}):e()})}}]),a}(n.a.Component)),B=(a(62),function(){return Object(l.jsxs)("div",{className:"not-found-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png",alt:"not-found",className:"not-found-img"}),Object(l.jsx)("h1",{className:"not-found-heading",children:"Not Found"})]})}),U=(a(63),function(){return Object(l.jsx)("div",{className:"app-container",children:Object(l.jsxs)("div",{className:"app-card",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"app-body",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(l.jsx)(o.a,{exact:!0,path:"/about",component:b}),Object(l.jsx)(o.a,{exact:!0,path:"/contact",component:k}),Object(l.jsx)(o.a,{path:"/blogs/:id",component:y}),Object(l.jsx)(o.a,{component:B})]})})]})})});i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(U,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.57b9ab0b.chunk.js.map