(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(26),r=n.n(c),s=n(13),o=n(6),l=n(35),u=(n(47),n(11)),b=n.n(u),d=n(3),p=n(15),m=n(20),j=n(21),h=n(23),O=n(22),g=n(7),f=n(5),v=(n(49),n(16)),x=Object(f.a)([function(e){return e.directory}],(function(e){return e.sections})),N=(n(50),n(0)),k=Object(g.g)((function(e){var t=e.title,n=e.imageUrl,i=e.size,a=e.history,c=e.linkUrl,r=e.match;return Object(N.jsxs)("div",{className:"".concat(i," menu-item"),onClick:function(){return a.push("".concat(r.url).concat(c))},children:[Object(N.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(N.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),y=(n(53),["id"]),w=Object(f.b)({sections:x}),C=Object(o.b)(w)((function(e){var t=e.sections;return Object(N.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(v.a)(e,y);return Object(N.jsx)(k,Object(d.a)({},n),t)}))})})),U=(n(54),function(){return Object(N.jsx)("div",{className:"homepage",children:Object(N.jsx)(C,{})})}),I=(n(55),["children","isGoogleSignIn","inverted"]),T=function(e){var t=e.children,n=e.isGoogleSignIn,i=e.inverted,a=Object(v.a)(e,I);return Object(N.jsx)("button",Object(d.a)(Object(d.a)({className:"".concat(i?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))},E={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},S=function(){return{type:E.TOGGLE_CART_HIDDEN}},A=function(e){return{type:E.ADD_ITEM,payload:e}},M=(n(56),Object(o.b)(null,(function(e){return{addItem:function(t){return e(A(t))}}}))((function(e){var t=e.item,n=e.addItem,i=t.name,a=t.price,c=t.imageUrl;return Object(N.jsxs)("div",{className:"collection-item",children:[Object(N.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(N.jsxs)("div",{className:"collection-footer",children:[Object(N.jsx)("span",{className:"name",children:i}),Object(N.jsx)("span",{className:"price",children:a})]}),Object(N.jsx)(T,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),R=(n(57),function(e){var t=e.title,n=e.items;return Object(N.jsxs)("div",{className:"collection-preview",children:[Object(N.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(N.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(N.jsx)(M,{item:e},e.id)}))})]})}),B=(n(58),Object(f.a)([function(e){return e.shop}],(function(e){return e.collections}))),_=Object(f.a)([B],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),D=(n(59),["id"]),P=Object(f.b)({collections:_}),G=Object(o.b)(P)((function(e){var t=e.collections;return Object(N.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(v.a)(e,D);return Object(N.jsx)(R,Object(d.a)({},n),t)}))})})),q=(n(60),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(f.a)([B],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,i=t.items;return Object(N.jsxs)("div",{className:"collection-page",children:[Object(N.jsx)("h2",{className:"title",children:n}),Object(N.jsx)("div",{className:"items",children:i.map((function(e){return Object(N.jsx)(M,{item:e},e.id)}))})]})}))),L=function(e){var t=e.match;return Object(N.jsxs)("div",{className:"shop-page",children:[Object(N.jsx)(g.b,{exact:!0,path:"".concat(t.path),component:G}),Object(N.jsx)(g.b,{path:"".concat(t.path,"/:collectionId"),component:q})]})},J=n(19),W=(n(61),["handleChange","label"]),H=function(e){var t=e.handleChange,n=e.label,i=Object(v.a)(e,W);return Object(N.jsxs)("div",{className:"group",children:[Object(N.jsx)("input",Object(d.a)({className:"form-input",onChange:t},i)),n?Object(N.jsx)("label",{className:"".concat(i.value.length?"shrink":""," form-input-label"),children:n}):null]})},F=n(24),V=n.n(F),z=(n(64),n(68),function(){var e=Object(p.a)(b.a.mark((function e(t,n){var i,a,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return i=Y.doc("users/".concat(t.uid)),e.next=5,i.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,r=new Date,e.prev=9,e.next=12,i.set(Object(d.a)({displayName:a,email:c,createdAt:r},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",i);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());V.a.initializeApp({apiKey:"AIzaSyBORkRsXVxQQ2m87HGYE-dvjO8hgEoi6D8",authDomain:"crwn-db-1b948.firebaseapp.com",projectId:"crwn-db-1b948",storageBucket:"crwn-db-1b948.appspot.com",messagingSenderId:"701985531568",appId:"1:701985531568:web:e853ca03bcdb545dc73d75",measurementId:"G-3LZJZ8M3PH"});var Q=V.a.auth(),Y=V.a.firestore(),K=new V.a.auth.GoogleAuthProvider;K.setCustomParameters({prompt:"select_account"});var X=function(){return Q.signInWithPopup(K)},Z=(V.a,n(70),function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var i;return Object(m.a)(this,n),(i=t.call(this,e)).handleSubmit=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=i.state,a=n.email,c=n.password,e.prev=2,e.next=5,Q.signInWithEmailAndPassword(a,c);case 5:i.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),i.handleChange=function(e){var t=e.target,n=t.value,a=t.name;i.setState(Object(J.a)({},a,n))},i.state={email:"",password:""},i}return Object(j.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"sign-in",children:[Object(N.jsx)("h2",{children:"I already have an account"}),Object(N.jsx)("span",{children:"Sign in with your email and password"}),Object(N.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(N.jsx)(H,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(N.jsx)(H,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(N.jsxs)("div",{className:"buttons",children:[Object(N.jsx)(T,{type:"submit",children:"Sign In"}),Object(N.jsx)(T,{onClick:X,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(a.a.Component)),$=(n(71),function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(p.a)(b.a.mark((function t(n){var i,a,c,r,s,o,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),i=e.state,a=i.displayName,c=i.email,r=i.password,s=i.confirmPassword,r===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Q.createUserWithEmailAndPassword(c,r);case 8:return o=t.sent,l=o.user,t.next=12,z(l,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,i=n.name,a=n.value;e.setState(Object(J.a)({},i,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,i=e.password,a=e.confirmPassword;return Object(N.jsxs)("div",{className:"sign-up",children:[Object(N.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(N.jsx)("span",{children:"Sign up with your email and password"}),Object(N.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(N.jsx)(H,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(N.jsx)(H,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(N.jsx)(H,{type:"password",name:"password",value:i,onChange:this.handleChange,label:"Password",required:!0}),Object(N.jsx)(H,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(N.jsx)(T,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.a.Component)),ee=(n(72),function(){return Object(N.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(N.jsx)(Z,{}),Object(N.jsx)($,{})]})}),te=(n(73),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:E.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(A(t))},removeItem:function(t){return e(function(e){return{type:E.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,i=e.addItem,a=e.removeItem,c=t.name,r=t.imageUrl,s=t.price,o=t.quantity;return Object(N.jsxs)("div",{className:"checkout-item",children:[Object(N.jsx)("div",{className:"image-container",children:Object(N.jsx)("img",{src:r,alt:"item"})}),Object(N.jsx)("span",{className:"name",children:c}),Object(N.jsxs)("span",{className:"quantity",children:[Object(N.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(N.jsx)("span",{className:"value",children:o}),Object(N.jsx)("div",{className:"arrow",onClick:function(){return i(t)},children:"\u276f"})]}),Object(N.jsx)("span",{className:"price",children:s}),Object(N.jsx)("span",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),ne=n(36),ie=n.n(ne),ae=function(e){var t=e.price,n=100*t;return Object(N.jsx)(ie.a,{label:"Pay Now",name:"CRWN Clothing",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_bIIfrUiChFZ4B84StoCOUaQC"})},ce=function(e){return e.cart},re=Object(f.a)([ce],(function(e){return e.cartItems})),se=Object(f.a)([ce],(function(e){return e.hidden})),oe=Object(f.a)([re],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),le=Object(f.a)([re],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),ue=(n(74),Object(f.b)({cartItems:re,total:le})),be=Object(o.b)(ue)((function(e){var t=e.cartItems,n=e.total;return Object(N.jsxs)("div",{className:"checkout-page",children:[Object(N.jsxs)("div",{className:"checkout-header",children:[Object(N.jsx)("div",{className:"header-block",children:Object(N.jsx)("span",{children:"Product"})}),Object(N.jsx)("div",{className:"header-block",children:Object(N.jsx)("span",{children:"Description"})}),Object(N.jsx)("div",{className:"header-block",children:Object(N.jsx)("span",{children:"Quantity"})}),Object(N.jsx)("div",{className:"header-block",children:Object(N.jsx)("span",{children:"Price"})}),Object(N.jsx)("div",{className:"header-block",children:Object(N.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(N.jsx)(te,{cartItem:e},e.id)})),Object(N.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object(N.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(N.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object(N.jsx)(ae,{price:n})]})})),de=n.p+"static/media/shopping-bag.a688874f.svg",pe=(n(75),Object(f.b)({itemCount:oe})),me=Object(o.b)(pe,(function(e){return{toggleCartHidden:function(){return e(S())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(N.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(N.jsx)("img",{src:de,className:"shopping-icon",alt:"cart icon"}),Object(N.jsx)("span",{className:"item-count",children:n})]})})),je=(n(76),function(e){var t=e.item,n=t.imageUrl,i=t.price,a=t.name,c=t.quantity;return Object(N.jsxs)("div",{className:"cart-item",children:[Object(N.jsx)("img",{src:n,alt:"item"}),Object(N.jsxs)("div",{className:"item-details",children:[Object(N.jsx)("span",{className:"name",children:a}),Object(N.jsxs)("span",{className:"price",children:[c," x $",i]})]})]})}),he=(n(77),Object(f.b)({cartItems:re})),Oe=Object(g.g)(Object(o.b)(he)((function(e){var t=e.cartItems,n=e.history,i=e.dispatch;return Object(N.jsxs)("div",{className:"cart-dropdown",children:[Object(N.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(N.jsx)(je,{item:e},e.id)})):Object(N.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(N.jsx)(T,{onClick:function(){n.push("/checkout"),i(S())},children:"GO TO CHECKOUT"})]})}))),ge=Object(f.a)([function(e){return e.user}],(function(e){return e.currentUser})),fe=n.p+"static/media/crown.3a4e2b15.svg",ve=(n(78),Object(o.b)((function(e){return Object(f.b)({currentUser:ge,hidden:se})}))((function(e){var t=e.currentUser,n=e.hidden;return Object(N.jsxs)("div",{className:"header",children:[Object(N.jsx)(s.b,{className:"logo-container",to:"/crwn-clothing",children:Object(N.jsx)("img",{src:fe,className:"logo",alt:"logo"})}),Object(N.jsxs)("div",{className:"options",children:[Object(N.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(N.jsx)(s.b,{className:"option",to:"/contact",children:"CONTACT"}),t?Object(N.jsx)("div",{className:"option",onClick:function(){return Q.signOut()},children:"SIGN OUT"}):Object(N.jsx)(s.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(N.jsx)(me,{})]}),n?null:Object(N.jsx)(Oe,{})]})}))),xe="SET_CURRENT_USER",Ne=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=Q.onAuthStateChanged(function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,z(n);case 3:t.sent.onSnapshot((function(t){e(Object(d.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{children:[Object(N.jsx)(ve,{}),Object(N.jsxs)(g.d,{children:[Object(N.jsx)(g.b,{exact:!0,path:"/crwn-clothing",component:U}),Object(N.jsx)(g.b,{path:"/shop",component:L}),Object(N.jsx)(g.b,{exact:!0,path:"/checkout",component:be}),Object(N.jsx)(g.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(N.jsx)(g.a,{to:"/crwn-clothing"}):Object(N.jsx)(ee,{})}})]})]})}}]),n}(a.a.Component),ke=Object(f.b)({currentUser:ge}),ye=Object(o.b)(ke,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:xe,payload:e}}(t))}}}))(Ne),we=n(14),Ce=n(28),Ue=n(37),Ie=n.n(Ue),Te=n(38),Ee=n.n(Te),Se={currentUser:null},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(d.a)(Object(d.a)({},e),{},{currentUser:t.payload});default:return e}},Me=n(39),Re=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Me.a)(e),[Object(d.a)(Object(d.a)({},t),{},{quantity:1})])},Be=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity-1}):e}))},_e={hidden:!0,cartItems:[]},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.TOGGLE_CART_HIDDEN:return Object(d.a)(Object(d.a)({},e),{},{hidden:!e.hidden});case E.ADD_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:Re(e.cartItems,t.payload)});case E.REMOVE_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:Be(e.cartItems,t.payload)});case E.CLEAR_ITEM_FROM_CART:return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Pe={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},qe={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Je={key:"root",storage:Ee.a,whitelist:["cart"]},We=Object(we.b)({user:Ae,cart:De,directory:Ge,shop:Le}),He=Object(Ce.a)(Je,We),Fe=[Ie.a],Ve=Object(we.c)(He,we.a.apply(void 0,Fe)),ze=Object(Ce.b)(Ve);r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(o.a,{store:Ve,children:Object(N.jsx)(s.a,{children:Object(N.jsx)(l.a,{persistor:ze,children:Object(N.jsx)(ye,{})})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.1667377b.chunk.js.map