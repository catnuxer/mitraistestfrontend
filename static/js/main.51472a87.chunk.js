(this.webpackJsonpmitraistestfrontend=this.webpackJsonpmitraistestfrontend||[]).push([[0],{73:function(e,t,n){e.exports=n(90)},82:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),l=n(5),c=n(20),s=n(38),u=n(31),d=(n(82),n(23)),g=n(16),m=n(47),h=n(64),b=n(13),f={errorCode:"",errorMessage:"",showErrorComponent:!1};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_error_message":var n=t.payload,a=n.code,r=n.message;return Object(b.a)({},e,{errorCode:a,errorMessage:r,showErrorComponent:!0});case"show_error_message":return Object(b.a)({},e,{showErrorComponent:!0});case"hide_error_message":return Object(b.a)({},e,{},f);default:return e}}var v={mobileNumber:"",firstName:"",lastName:"",dob:{day:"",month:"",year:""},gender:2,email:"",showLoginButton:!1,isRegistered:!1,isFetchingApi:!1};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_state_registration":var n=t.payload,a=n.keyState,r=n.valState,o=Object(b.a)({},e);return o[a]=r,Object(b.a)({},e,{},o);case"set_dob_state_registration":var i=t.payload,l=i.keyDob,c=i.valDob,s=Object(b.a)({},e.dob);return s[l]=c,Object(b.a)({},e,{dob:Object(b.a)({},s)});case"show_login_button_registration":return Object(b.a)({},e,{showLoginButton:!0});case"hide_login_button_registration":return Object(b.a)({},e,{showLoginButton:!1});case"success_registration":return Object(b.a)({},v,{isRegistered:!0});case"set_is_fetching_api":var u=t.payload.statusFetch;return Object(b.a)({},e,{isFetchingApi:u});default:return e}}var y=n(53),x=n.n(y),w=n(65),O=n(12),k=n.n(O),j=n(24),S=(n(32),k.a.mark(_)),C=k.a.mark(R),B=k.a.mark(N);function _(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)({type:"success_registration"});case 2:return e.next=4,Object(j.c)({type:"show_login_button_registration"});case 4:case"end":return e.stop()}}),S)}function R(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)("saga_registration",_);case 2:case"end":return e.stop()}}),C)}function N(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)([Object(j.b)(R)]);case 2:case"end":return e.stop()}}),B)}var F=k.a.mark(L);function L(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)([Object(j.b)(N)]);case 2:case"end":return e.stop()}}),F)}var M,A=n(54),D={timeout:null,key:"root",storage:n.n(A).a,whitelist:[""],blacklist:[""]},z=Object(d.a)(),T=g.d,q=Object(h.a)(D,(M=z,Object(g.c)({router:Object(u.b)(M),ErrorHandling:p,Registration:E}))),I=Object(w.a)(),W=Object(m.a)(z),Y=[I,x.a];var H=n(8),J=n(92),G=n(110),P=n(112),$=n(113),K=n(18);function Q(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function U(){var e=Object(a.useState)(Q()),t=Object(K.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r(Q())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var V="#000000",X="#9c27b0",Z="#388e3c",ee="#f4382d",te="#958d8d",ne="#fafafa",ae="#FFF";var re=function(e){var t={container:{overflow:"hidden",display:"flex",position:"relative"},input:{flexGrow:1,width:"100%",padding:10,border:"1px solid black",marginBottom:15,fontSize:15},"&::focus":{outline:"none",border:"1px solid black",boxShadow:"0px 0px 0px 0.1"},error:{position:"relative",width:"100%"}};return r.a.createElement("div",{style:t.error},r.a.createElement("div",{style:t.container},r.a.createElement("input",{type:"text",style:t.input,onChange:function(t){e.onChange(t.target.value)},value:e.value,placeholder:e.label,onFocus:e.onFocus,onBlur:e.onBlur})))},oe=n(108);var ie=function(e){return r.a.createElement(oe.a,{color:e.color,variant:"contained",fullWidth:!0,onClick:function(){return e.onClick()}},e.loading?"Loading":e.label)},le=n(4),ce=n.n(le),se=n(58),ue=n(29),de=n(59),ge=n(60),me=n(66);var he=function(e){var t,n={content:{width:"100%"},labelItems:{cursor:"pointer",width:"100%",textAlign:"left",float:"left",padding:"12px 0px",borderBottom:"1px solid rgb(239, 239, 239, 1)",display:"inline-block"},labelContent:{marginLeft:15,fontSize:14}},a=e.show,o=e.itemSelect;return o.length<1?null:r.a.createElement("div",{style:(t=a,{width:"100%",background:"white",border:"1px solid rgb(239, 239, 239, 1)",WebkitBoxShadow:"0px 3px 5px 0px rgba(163,163,163,0.5)",MozBoxShadow:"0px 3px 5px 0px rgba(163,163,163,0.5)",boxShadow:"0px 3px 5px 0px rgba(163,163,163,0.5)",position:"absolute",zIndex:3,top:50,left:0,right:0,display:t?"block":"none",maxHeight:200,overflow:"scroll"})},o.map((function(t,a){return r.a.createElement("div",{key:a.toString(),style:n.content,className:"clearfix"},r.a.createElement("div",{style:n.labelItems,onClick:function(){return e.onSelect(t)}},r.a.createElement("span",{style:n.labelContent},t.label)))})))},be=n(61),fe=n.n(be),pe={container:{position:"relative"},filterButtonStyle:{border:"1px solid ".concat(V)},labelFilterStyleButton:{fontSize:14,float:"left",padding:10},labelFilterStyleIcon:{float:"right"}},ve=function(e){function t(e){var n;return Object(se.a)(this,t),(n=Object(de.a)(this,Object(ge.a)(t).call(this,e))).state={open:!1},n}return Object(me.a)(t,e),Object(ue.a)(t,[{key:"handleFilterStyle",value:function(){this.setState({open:!this.state.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"renderButtonFilter",value:function(){var e=this.props.labelButton;return r.a.createElement("div",{style:pe.filterButtonStyle,className:"clearfix",onClick:this.handleClick.bind(this)},r.a.createElement("span",{style:pe.labelFilterStyleButton},e),r.a.createElement("span",{style:pe.labelFilterStyleIcon},r.a.createElement(fe.a,{color:"primary",fontSize:"large"})))}},{key:"renderItemSelectOption",value:function(){var e=this,t=this.props.data;return r.a.createElement(he,{show:this.state.open,itemSelect:t,onSelect:function(t){return e.props.onSelect(t)}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:pe.container,onClick:function(){return e.handleFilterStyle()}},this.renderButtonFilter(),this.renderItemSelectOption())}}]),t}(a.Component),Ee=n(62),ye=n.n(Ee);ve.propTypes={data:ce.a.array.isRequired,onSelect:ce.a.func.isRequired};var xe=Object(H.a)((function(e){return{dob:{paddingRight:0,marginBottom:15}}}))((function(e){var t=e.classes,n=U().width,o=function(){return n<786?12:6},i=function(){return n<786?12:4},l=(new Date).getMonth()+1,c=Object(a.useState)({value:"01",label:"1"}),s=Object(K.a)(c,2),u=(s[0],s[1]),d=Object(a.useState)({value:l,label:"JAN"}),g=Object(K.a)(d,2),m=g[0],h=g[1],b=Object(a.useState)({value:"2020",label:"2020"}),f=Object(K.a)(b,2),p=f[0],v=f[1],E=Object(a.useState)([1]),y=Object(K.a)(E,2),x=y[0],w=y[1],O=Object(a.useState)("Date"),k=Object(K.a)(O,2),j=k[0],S=k[1],C=Object(a.useState)("Month"),B=Object(K.a)(C,2),_=B[0],R=B[1],N=Object(a.useState)("Year"),F=Object(K.a)(N,2),L=F[0],M=F[1],A=function(e,t){for(var n=new Date(e,t,0).getDate(),a=[],r=1;r<=n;r++){var o=r;a.push({value:o,label:r})}return a};return r.a.createElement(G.a,{container:!0,item:!0,xs:12},r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{item:!0,xs:o(),sm:i(),style:{paddingRight:n>786?10:0},className:t.dob},r.a.createElement(ve,{labelButton:_,data:function(){for(var e=ye.a.monthsShort(),t=[],n=1;n<=e.length;n++){var a=n;t.push({value:a,label:e[n-1]})}return t}(),onSelect:function(t){return function(t){h(t),e.onChangeMonth(t.value);var n=A(p.value,t.value);w(n),R(t.label)}(t)}})),r.a.createElement(G.a,{item:!0,xs:o(),sm:i(),style:{paddingRight:n>786?10:0},className:t.dob},r.a.createElement(ve,{labelButton:j,data:x,onSelect:function(t){return u(n=t),e.onChangeDay(n.value),void S(n.label);var n}})),r.a.createElement(G.a,{item:!0,xs:o(),sm:i(),className:t.dob},r.a.createElement(ve,{labelButton:L,data:function(){for(var e=[],t=(new Date).getFullYear(),n=0;n<=t;n++)n>1945&&e.unshift({value:n,label:n});return e}(),onSelect:function(t){return function(t){v(t),e.onChangeYear(t.value);var n=A(t.value,m.value);w(n),M(t.label)}(t)}}))))})),we=n(111),Oe=n(115);var ke=function(e){var t=Object(a.useState)(!1),n=Object(K.a)(t,2),o=(n[0],n[1]);return r.a.createElement(we.a,{control:r.a.createElement(Oe.a,{color:"primary",checked:e.checked}),label:e.label,onChange:function(t){o(t),e.onChange(t)}})};var je=function(e){return r.a.createElement(G.a,{container:!0,item:!0,xs:12},r.a.createElement(G.a,{item:!0,xs:6,sm:6,align:"left"},r.a.createElement(ke,{label:"male",checked:1===e.checked,onChange:function(t){return e.onChange(1)}})),r.a.createElement(G.a,{item:!0,xs:6,sm:6,align:"left"},r.a.createElement(ke,{label:"female",checked:0===e.checked,onChange:function(t){return e.onChange(0)}})))};var Se={isRequired:{error:204,success:!1,message:"Email is required and should valid email address"},isExist:{error:202,success:!1,message:"Your email is not available, plase use other"}},Ce=n(117),Be=n(116),_e={box:{padding:"10px 0px",background:ee,border:"1px solid ".concat(te),position:"relative",marginBottom:15},text:{color:ae,fontSize:14},arrow:{margin:"0 auto",width:0,height:0,borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"10px solid ".concat(ee),position:"absolute",left:0,right:0,bottom:-10}};var Re=function(e){return r.a.createElement(Ce.a,null,r.a.createElement(Be.a,{timeout:500,classNames:"error"},r.a.createElement("div",{style:_e.box,onClick:function(){return e.hide()}},r.a.createElement("div",{style:_e.arrow}),r.a.createElement("span",{style:_e.text},e.message))))};var Ne=Object(c.c)((function(e){var t=e.ErrorHandling,n=e.Registration;return{errorCode:t.errorCode,errorMessage:t.errorMessage,mobileNumber:n.mobileNumber,firstName:n.firstName,lastName:n.lastName,dob:n.dob,gender:n.gender,email:n.email,showLoginButton:n.showLoginButton,isFetchingApi:n.isFetchingApi}}),{sagaRegistration:function(){return{type:"saga_registration"}},setStateRegistration:function(e,t){return{type:"set_state_registration",payload:{keyState:e,valState:t}}},setDobStateRegistration:function(e,t){return{type:"set_dob_state_registration",payload:{keyDob:e,valDob:t}}},setErrorMessage:function(e,t){return{type:"set_error_message",payload:{code:e,message:t}}},hideErrorMessage:function(){return{type:"hide_error_message"}}})(Object(H.a)((function(e){return{root:{flexGrow:1},grid:{margin:"0px auto"},gridBlock:{margin:"0px auto",left:0,right:0,width:"100%",height:464,position:"absolute",background:"#b9b9b996",zIndex:3e3},footerArea:{width:"100%",position:"absolute"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,background:ne},title:{textAlign:"left",marginBottom:15}}}))((function(e){var t=e.classes,n=e.sagaRegistration,a=e.setStateRegistration,o=e.setDobStateRegistration,i=e.mobileNumber,l=e.firstName,c=e.lastName,s=e.isFetchingApi,u=e.gender,d=e.email,g=e.showLoginButton,m=e.errorCode,h=e.errorMessage,b=e.setErrorMessage,f=e.hideErrorMessage,p=U().width;return r.a.createElement(P.a,{sm:12},r.a.createElement((function(e){return e.show?r.a.createElement(G.a,{item:!0,xs:12,sm:12,className:t.gridBlock}):r.a.createElement("div",null)}),{show:g}),r.a.createElement(G.a,{item:!0,xs:12,sm:function(e){return e<1208&&e>786?6:e<786?12:6}(p),className:t.grid},r.a.createElement($.a,{elevation:0,className:t.paper},r.a.createElement((function(){return r.a.createElement(J.a,{variant:"h5",component:"h1",className:t.title,color:"primary"},"Registration")}),null),201==m&&""!==h&&r.a.createElement(Re,{hide:f,message:h}),r.a.createElement(re,{label:"Mobile number",width:p,onBlur:function(){""==i&&b(201,"Mobile number is required")},value:i,onChange:function(e){return a("mobileNumber",function(e){var t=e.length;if("0"==e.substr(0,1)){var n=e.substr(1,t);return"62".concat(n)}return e}(e))}}),202==m&&""!==h&&r.a.createElement(Re,{hide:f,message:h}),r.a.createElement(re,{label:"First name",width:p,onBlur:function(){""==l&&b(202,"First name is required")},value:l,onChange:function(e){return a("firstName",e)}}),203==m&&""!==h&&r.a.createElement(Re,{hide:f,message:h}),r.a.createElement(re,{label:"Last name",width:p,onBlur:function(){""==c&&b(203,"Last name is required")},value:c,onChange:function(e){return a("lastName",e)}}),r.a.createElement(xe,{onChangeMonth:function(e){return o("month",e)},onChangeDay:function(e){return o("day",e)},onChangeYear:function(e){return o("year",e)}}),r.a.createElement(je,{checked:u,onChange:function(e){return a("gender",e)}}),204==m&&""!==h&&r.a.createElement(Re,{hide:f,message:h}),r.a.createElement(re,{label:"Email",width:p,onBlur:function(){""==d&&b(304,"Email is required and should valid email address")},value:d,onChange:function(e){var t=function(e){if(e.length>6){return!1!==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,6})+$/.test(String(e).toLowerCase())}return!0}(e),n=Se.isRequired;t?f():b(n.error,n.message),a("email",e)}}),r.a.createElement(ie,{loading:s,color:"secondary",label:"Register",onClick:function(){n()}}))))}))),Fe=n(63),Le=n(114),Me={palette:{primary:{light:V,main:V,dark:V,contrastText:"#fff"},secondary:{light:X,main:X,dark:X,contrastText:"#fff"},error:{light:ee,main:ee,dark:ee,contrastText:"#fff"},success:{light:Z,main:Z,dark:Z,contrastText:"#fff"}},status:{danger:"orange"},typography:{button:{fontWeight:400,textAlign:"capitalize"}}},Ae={footer:{marginTop:30,width:"100%",padding:30,background:X,contentAlign:"center"},footerTitle:{color:ae,textAlign:"center"}};function De(e){var t=e.action;return r.a.createElement(ie,{label:"Login",onClick:function(){t(),e.history.push("/login")}})}function ze(){return r.a.createElement("h1",{style:Ae.footerTitle},"Footer")}var Te=Object(c.c)((function(e){var t=e.Registration;return{showLoginButton:t.showLoginButton,hideLoginButtonRegistration:t.hideLoginButtonRegistration}}),{hideLoginButtonRegistration:function(){return{type:"hide_login_button_registration"}}})((function(e){var t=e.hideLoginButtonRegistration,n=e.showLoginButton;return r.a.createElement("div",{style:Ae.footer},n?r.a.createElement(De,Object.assign({action:t},e)):r.a.createElement(ze,null))}));var qe=function(e){console.log("Props Registration",e);var t=Object(Fe.a)(Me);return r.a.createElement(Le.a,{theme:t},r.a.createElement(Ne,e),r.a.createElement(Te,e))},Ie={container:{width:"100vw",height:"100vh"},login:{background:ne,width:"100%",height:500},titleLogin:{color:V,textAlign:"center"},link:{marginTop:15,padding:15,background:V,color:ae,margin:"0px auto",display:"table",textDecoration:"none",borderRadius:5}};var We=function(e){return console.log("Props login",e),r.a.createElement("div",{style:Ie.container},r.a.createElement("div",{style:Ie.login},r.a.createElement("h4",{style:Ie.titleLogin},"This is login page"),r.a.createElement("a",{onMouseOver:function(e){e.target.style.background=X},onMouseOut:function(e){e.target.style.background=V},style:Ie.link,href:"#",onClick:function(){return e.history.goBack()}},"Back to register")),r.a.createElement(Te,null))},Ye=function(e){var t=Object(g.e)(q,e,T(g.a.apply(void 0,Y),Object(g.a)(W)));return I.run(L),t}();function He(e){var t=e.history,n=e.context;return r.a.createElement(u.a,{history:t,context:n},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/mitraistestfrontend",render:function(){return r.a.createElement(s.a,{to:"/root"})}}),r.a.createElement(s.b,{path:"/root",render:function(e){e.staticContext;var t=Object(l.a)(e,["staticContext"]);return r.a.createElement(qe,t)}}),r.a.createElement(s.b,{path:"/login",render:function(e){e.staticContext;var t=Object(l.a)(e,["staticContext"]);return r.a.createElement(We,t)}})))}var Je=function(){return r.a.createElement(c.a,{store:Ye,context:c.b},r.a.createElement(He,{history:z,context:c.b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.51472a87.chunk.js.map