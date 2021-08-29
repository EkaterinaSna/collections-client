(this.webpackJsonpproject_itr=this.webpackJsonpproject_itr||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(19),c=s.n(i),o=(s(25),s(3)),r=s(4),l=s(6),h=s(5),d=(s(26),s(16)),u=(s(27),s(0)),m=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={user:JSON.parse(localStorage.getItem("user"))},n.onApplyTheme(),n}return Object(r.a)(s,[{key:"onDark",value:function(){localStorage.setItem("theme","dark"),this.onApplyTheme()}},{key:"onLight",value:function(){localStorage.setItem("theme","light"),this.onApplyTheme()}},{key:"onApplyTheme",value:function(){document.body.className="dark"===localStorage.getItem("theme")?"theme-dark":"theme-light"}},{key:"logOut",value:function(){localStorage.removeItem("user"),window.open("/collections-client/#/login","_self"),window.location.reload()}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"header-collection",children:Object(u.jsx)("header",{className:"p-3 bg-dark text-white",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("a",{className:"navbar-brand",href:"/collections-client/",children:["COLLECTIONS",Object(u.jsx)("i",{className:"bi bi-chevron-double-right",children:" "})]}),Object(u.jsx)("a",{href:"/collections-client/#/create",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-warning",children:"Create collection"})}),Object(u.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Theme"}),Object(u.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu2",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item",type:"button",onClick:this.onDark.bind(this),children:"Dark"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item",type:"button",onClick:this.onLight.bind(this),children:"Light"})})]}),Object(u.jsxs)("div",{className:"auth-actions",children:[!this.state.user&&Object(u.jsxs)("div",{className:"log",children:[Object(u.jsx)("a",{href:"/collections-client/#/login",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-light me-2",children:"Login"})}),Object(u.jsx)("a",{href:"/collections-client/#/registration",children:Object(u.jsx)("button",{type:"button",className:"btn btn-warning",children:"Sign up"})})]}),this.state.user&&Object(u.jsxs)("div",{className:"noLog",children:[Object(u.jsx)("button",{className:"btn btn-outline-light me-2",onClick:this.logOut.bind(this),children:"Log Out"}),this.state.user&&Object(u.jsxs)("a",{className:"navbar-brand",children:[this.state.user.firstname," ",Object(u.jsx)("i",{className:"bi bi-person-square"})]})]})]})]})})})}}]),s}(a.a.Component),b=s(7),j=s(2),f=(s(29),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={firstname:"",email:"",password:""},n}return Object(r.a)(s,[{key:"registration",value:function(){fetch("https://mysql-server-1flx.onrender.com/users/registration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:this.state.firstname,email:this.state.email,password:this.state.password})}).then((function(){window.open("/collections-client/#/login","_self")}))}},{key:"emailChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{email:e.target.value}))}},{key:"passwordChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{password:e.target.value}))}},{key:"firstnameChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{firstname:e.target.value}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Email address"}),Object(u.jsx)("input",{type:"email",value:this.state.email,onChange:this.emailChange.bind(this),className:"form-control","aria-describedby":"emailHelp"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"First Name"}),Object(u.jsx)("input",{type:"text",value:this.state.firstname,onChange:this.firstnameChange.bind(this),className:"form-control"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",value:this.state.password,onChange:this.passwordChange.bind(this),className:"form-control",id:"exampleInputPassword1"})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-dark",onClick:this.registration.bind(this),children:"Sing up"})]})}}]),s}(a.a.Component));s(30);function O(e){if(console.log(e),!e.ok)throw new Error(e.status);return e}var p=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={email:"",password:"",hasError:!1},n}return Object(r.a)(s,[{key:"login",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.state.email,password:this.state.password})}).then((function(e){return O(e)})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("user",JSON.stringify(e)),window.open("/collections-client/#/","_self"),window.location.reload()})).catch((function(){e.setState(Object(j.a)(Object(j.a)({},e.state),{},{hasError:!0}))}))}},{key:"emailChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{email:e.target.value}))}},{key:"passwordChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{password:e.target.value}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Email"}),Object(u.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",value:this.state.email,onChange:this.emailChange.bind(this)})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:this.state.password,onChange:this.passwordChange.bind(this)})]}),this.state.hasError&&Object(u.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Your email or password incorrect"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-dark",onClick:this.login.bind(this),children:"Login"})]})}}]),s}(a.a.Component),v=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsxs)("div",{className:"error-template",children:[Object(u.jsx)("h1",{children:"Oops!"}),Object(u.jsx)("h2",{children:"404 Not Found"}),Object(u.jsx)("div",{className:"error-details",children:"Sorry, an error has occured, Requested page not found!"})]})})})})}}]),s}(a.a.Component),x=(s(31),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={collection:[],users:[],firstname:"",user:JSON.parse(localStorage.getItem("user")),userId:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).id},n.loadCollection(),n.loadUsers(),n}return Object(r.a)(s,[{key:"loadUsers",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/users").then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{users:t}))}))}},{key:"loadCollection",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections").then((function(e){return e.json()})).then((function(t){return e.setState({collection:t})}))}},{key:"delete",value:function(e){var t=this;fetch("https://mysql-server-1flx.onrender.com/collections/delete/"+e,{method:"DELETE"}).then((function(){return t.loadCollection()}))}},{key:"getUserFirstname",value:function(e){return e&&this.state.users.length&&this.state.users.find((function(t){return t.id===e})).firstname}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"collection-list",children:Object(u.jsx)("div",{className:"col",children:this.state.collection.map((function(t){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:t.img,className:"card-img-top"}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{className:"card-title",title:t.name,children:t.name}),Object(u.jsx)("p",{className:"card-text",children:t.aboutCollection})]}),Object(u.jsxs)("span",{className:"text",children:["Creator: ",e.getUserFirstname(t.userId)," ",Object(u.jsx)("i",{className:"bi bi-person-fill"})]}),Object(u.jsxs)("div",{className:"actions",children:[e.state.user&&e.state.user.id===t.userId&&Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return e.delete(t.id)},children:"Delete"}),e.state.user&&e.state.user.id===t.userId&&Object(u.jsx)("a",{className:"nav-link","aria-current":"page",href:"/collections-client/#/"+t.id+"/edit",children:"Edit"}),Object(u.jsxs)("a",{className:"nav-link active list-link","aria-current":"page",href:"/collections-client/#/"+t.id+"/items",children:["List Collection",Object(u.jsx)("i",{className:"bi bi-chevron-double-right"})," "]})]})]})]})}))})})}}]),s}(a.a.Component)),g=(s(32),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={id:e.match.params.id,name:"",aboutCollection:"",fileInput:a.a.createRef()},n.state.id&&n.loadItem(),n}return Object(r.a)(s,[{key:"onSave",value:function(){this.state.id?this.edit():this.create()}},{key:"edit",value:function(){fetch("https://mysql-server-1flx.onrender.com/collections/edit/"+this.state.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,aboutCollection:this.state.aboutCollection,img:this.state.img})}).then((function(e){return O(e)})).then((function(){window.open("/collections-client/#/","_self")}))}},{key:"loadItem",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/"+this.state.id).then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),t))}))}},{key:"create",value:function(){fetch("https://mysql-server-1flx.onrender.com/collections/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,aboutCollection:this.state.aboutCollection,userId:JSON.parse(localStorage.getItem("user")).id,img:this.state.img})}).then((function(){window.open("/collections-client/","_self")}))}},{key:"nameChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{name:e.target.value}))}},{key:"aboutCollectionChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{aboutCollection:e.target.value}))}},{key:"imageChange",value:function(){var e=this,t=new FileReader;t.readAsDataURL(this.state.fileInput.current.files[0]),t.onload=function(){e.setState({img:t.result})}}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"create-collection",children:[Object(u.jsxs)("div",{className:"form-group-container",children:[Object(u.jsx)("label",{children:"Name collection"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.nameChange.bind(this)})]}),Object(u.jsxs)("div",{className:" form-group-container",children:[Object(u.jsx)("label",{children:"About collection"}),Object(u.jsx)("textarea",{rows:"5",className:"form-control",value:this.state.aboutCollection,onChange:this.aboutCollectionChange.bind(this)})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputDescription",children:"Description"}),Object(u.jsx)("input",{ref:this.state.fileInput,type:"file",className:"form-control",name:"title",onChange:this.imageChange.bind(this)})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-dark",onClick:this.onSave.bind(this),children:"Save"})]})}}]),s}(a.a.Component)),y=(s(33),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),n=t.call(this,e),console.log(e),n.state={itemsCollection:[],collectionId:e.match.params.collectionId,id:e.match.params.id,userId:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).id,user:JSON.parse(localStorage.getItem("user")),collection:[],users:[],firstname:""},n.loadItemsCollection(),n.loadCollection(),n.loadUsers(),n}return Object(r.a)(s,[{key:"loadCollection",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/".concat(this.state.collectionId)).then((function(e){return e.json()})).then((function(t){return e.setState({collection:t})}))}},{key:"loadItemsCollection",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/".concat(this.state.collectionId,"/list")).then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{itemsCollection:t}))}))}},{key:"delete",value:function(e){var t=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/delete/"+e,{method:"DELETE"}).then((function(){return t.loadItemsCollection()}))}},{key:"getUserFirstname",value:function(e){return e&&this.state.users.length&&this.state.users.find((function(t){return t.id===e})).firstname}},{key:"loadUsers",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/users").then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{users:t}))}))}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"items-collection container",children:[this.state.user&&this.state.user.id===this.state.collection.userId&&Object(u.jsx)("a",{href:"/collections-client/"+this.state.collectionId+"/add",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:"Add"})}),Object(u.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4",children:this.state.itemsCollection.map((function(t){return Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("img",{src:t.img,className:"card-img-top"}),Object(u.jsx)("a",{href:"/collections-client/#/"+e.state.collectionId+"/items/"+t.id,children:Object(u.jsxs)("h5",{className:"card-title",title:t.name,children:[t.name,Object(u.jsx)("i",{className:"bi bi-chevron-double-right"})]})}),Object(u.jsx)("p",{className:"card-text",children:t.aboutItem}),Object(u.jsx)("div",{children:Object(u.jsxs)("span",{className:"text",children:[" Creator: ",e.getUserFirstname(t.userId)," ",Object(u.jsx)("i",{className:"bi bi-person-fill"})]})}),Object(u.jsx)("h",{className:"card-text",children:new Date(t.createdAt).toDateString()}),e.state.user&&e.state.user.id===t.userId&&Object(u.jsxs)("div",{className:"actions",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return e.delete(t.id)},children:"Delete"}),Object(u.jsx)("a",{className:"nav-link",href:"/collections-client/#/"+t.id+"/editItems",children:"Edit"})]})]})})})}))})]})}}]),s}(a.a.Component)),N=(s(34),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={collectionId:e.match.params.collectionId,id:e.match.params.id,name:"",aboutItem:"",userId:JSON.parse(localStorage.getItem("user")).id,fileInput:a.a.createRef()},n}return Object(r.a)(s,[{key:"componentWillMount",value:function(){this.state.id&&this.loadItem()}},{key:"onSave",value:function(){this.state.id?this.editItems():this.add()}},{key:"loadItem",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/"+this.state.id).then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),t))}))}},{key:"editItems",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/editItems/"+this.state.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,aboutItem:this.state.aboutItem,img:this.state.img})}).then((function(e){return O(e)})).then((function(){window.open("/collections-client"+"/#/".concat(e.state.collectionId,"/items"),"_self")}))}},{key:"add",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({collectionId:this.state.collectionId,name:this.state.name,aboutItem:this.state.aboutItem,userId:this.state.userId,img:this.state.img})}).then((function(){window.open("/collections-client"+"/#/".concat(e.state.collectionId,"/items"),"_self")}))}},{key:"nameChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{name:e.target.value}))}},{key:"aboutItemChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{aboutItem:e.target.value}))}},{key:"imageChange",value:function(){var e=this,t=new FileReader;t.readAsDataURL(this.state.fileInput.current.files[0]),t.onload=function(){e.setState({img:t.result})}}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"add-collection-item",children:[Object(u.jsxs)("div",{className:"form-group-container",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.nameChange.bind(this)})]}),Object(u.jsxs)("div",{className:" form-group-container",children:[Object(u.jsx)("label",{children:"About"}),Object(u.jsx)("textarea",{rows:"3",className:"form-control",value:this.state.aboutItem,onChange:this.aboutItemChange.bind(this)})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputDescription",children:"Description"}),Object(u.jsx)("input",{ref:this.state.fileInput,type:"file",className:"form-control",name:"title",onChange:this.imageChange.bind(this)})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-outline-dark",onClick:this.onSave.bind(this),children:"Save"})]})}}]),s}(a.a.Component)),I=(s(35),s(36),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={comment:"",id:e.id,commentsItems:[],users:[],firstname:"",userId:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).id,user:JSON.parse(localStorage.getItem("user"))},n.loadComments(),n.loadUsers(),n}return Object(r.a)(s,[{key:"loadComments",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/comments/".concat(this.state.id)).then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{commentsItems:t}))}))}},{key:"addComments",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/comments/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:this.state.comment,itemId:this.state.id,userId:JSON.parse(localStorage.getItem("user")).id})}).then((function(){e.loadComments(),e.setState({comments:""})}))}},{key:"commentChange",value:function(e){this.setState(Object(j.a)(Object(j.a)({},this.state),{},{comment:e.target.value}))}},{key:"delete",value:function(e){var t=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/comments/delete/"+e,{method:"DELETE"}).then((function(){return t.loadComments()}))}},{key:"loadUsers",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/users").then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{users:t}))}))}},{key:"getUserFirstname",value:function(e){return e&&this.state.users.length&&this.state.users.find((function(t){return t.id===e})).firstname}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"comments",children:[Object(u.jsxs)("div",{className:"input-group mb-3",children:[Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter a comment",value:this.state.comment,onChange:this.commentChange.bind(this)}),Object(u.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.addComments.bind(this),children:"Post"})]}),this.state.commentsItems.map((function(t){return Object(u.jsxs)("div",{className:"comments-list",children:[Object(u.jsxs)("div",{className:"comment-header",children:[e.state.user&&e.state.user.id===t.userId&&Object(u.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return e.delete(t.id)},children:Object(u.jsx)("i",{className:"bi bi-trash",children:" "})}),Object(u.jsxs)("span",{className:"message",children:[e.getUserFirstname(t.userId)," ",Object(u.jsx)("i",{className:"bi bi-person-fill"})]})]}),Object(u.jsx)("p",{className:"message",children:t.comment})]})}))]})}}]),s}(a.a.Component)),k=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={name:"",aboutItem:"",id:e.match.params.id,collectionId:e.match.params.collectionId,likes:[],userId:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).id,user:JSON.parse(localStorage.getItem("user")),createdAt:"",users:[],firstname:""},n}return Object(r.a)(s,[{key:"loadUsers",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/users").then((function(e){return e.json()})).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{users:t}))}))}},{key:"componentWillMount",value:function(){this.state.id&&(this.loadItem(),this.loadLikes(),this.loadUsers())}},{key:"loadItem",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/".concat(this.state.id)).then((function(e){return e.json()})).then((function(t){e.setState(Object(j.a)(Object(j.a)({},e.state),t))}))}},{key:"delete",value:function(e){var t=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/delete/"+e,{method:"DELETE"}).then((function(){window.open("/collections-client"+"/#/".concat(t.state.collectionId,"/items"),"_self")}))}},{key:"like",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/like",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.state.userId,itemId:this.state.id})}).then((function(){return e.loadLikes()}))}},{key:"hasLike",value:function(e){return e&&this.state.likes.length&&this.state.likes.find((function(t){return t.userId===e}))}},{key:"loadLikes",value:function(){var e=this;fetch("https://mysql-server-1flx.onrender.com/collections/items/likes/".concat(this.state.id)).then((function(e){return e.json()})).then((function(t){return e.setState({likes:t})}))}},{key:"getUserFirstname",value:function(e){return e&&this.state.users.length&&this.state.users.find((function(t){return t.id===e})).firstname}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"item-page",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:this.state.name}),Object(u.jsx)("p",{className:"card-text",children:this.state.aboutItem}),Object(u.jsx)("h",{className:"card-text",children:new Date(this.state.createdAt).toDateString()}),Object(u.jsx)("div",{children:Object(u.jsxs)("span",{className:"text",children:["Creator: ",this.getUserFirstname(this.state.userId),Object(u.jsx)("i",{className:"bi bi-person-fill"})]})}),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)("div",{className:"heart",children:this.state.user&&Object(u.jsx)("i",{className:this.hasLike(this.state.userId)?"bi bi-heart-fill -active":"bi bi-heart-fill",onClick:this.like.bind(this),children:this.state.likes.length})}),this.state.user&&this.state.user.id===this.state.userId&&Object(u.jsx)("a",{href:"/collections-client/#/"+this.state.id+"/editItems",children:Object(u.jsx)("i",{className:"bi bi-pencil-square",children:" "})}),this.state.user&&this.state.user.id===this.state.userId&&Object(u.jsx)("i",{className:"bi bi-trash",onClick:function(){return e.delete(e.state.id)},children:" "})]})]})})}),this.state.user&&Object(u.jsx)(I,{id:this.state.id})]})}}]),s}(a.a.Component),C=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={user:localStorage.getItem("user")},n}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(m,{}),Object(u.jsx)(d.a,{basaname:"/collections-client",children:Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",component:x}),!this.state.user&&Object(u.jsx)(b.a,{exact:!0,path:"/registration",component:f}),!this.state.user&&Object(u.jsx)(b.a,{exact:!0,path:"/login",component:p}),this.state.user&&Object(u.jsx)(b.a,{exact:!0,path:"/create",component:g}),Object(u.jsx)(b.a,{exact:!0,path:"/:collectionId/items",component:y}),Object(u.jsx)(b.a,{exact:!0,path:"/:collectionId/items/:id",component:k}),this.state.user&&Object(u.jsx)(b.a,{exact:!0,path:"/:collectionId/add",component:N}),this.state.user&&Object(u.jsx)(b.a,{exact:!0,path:"/:id/edit",component:g}),this.state.user&&Object(u.jsx)(b.a,{exact:!0,path:"/:id/editItems",component:N}),Object(u.jsx)(b.a,{component:v}),Object(u.jsx)(b.a,{})]})})]})}}]),s}(a.a.Component),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.c5c0a218.chunk.js.map