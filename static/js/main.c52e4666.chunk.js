(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{12:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(14),r=n.n(i),o=(n(21),n(8)),s=(n(12),n(9)),l=n(30),j=n(33),u=n(4);var d=function(e){var t=e.Login,n=e.error,c=Object(a.useState)({email:"admin@admin.com",password:"admin123"}),i=Object(o.a)(c,2),r=i[0],d=i[1];return Object(u.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),t(r)},className:"login-form",children:[Object(u.jsx)("h2",{className:"login-heading",children:"Login Form"}),""!==n?Object(u.jsx)("div",{className:"error",children:n}):"",Object(u.jsxs)(l.a.Group,{controlId:"formBasicEmail",children:[Object(u.jsx)(l.a.Label,{children:"Email address"}),Object(u.jsx)(l.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return d(Object(s.a)(Object(s.a)({},r),{},{email:e.target.value}))},value:r.email})]}),Object(u.jsxs)(l.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(l.a.Label,{children:"Password"}),Object(u.jsx)(l.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return d(Object(s.a)(Object(s.a)({},r),{},{password:e.target.value}))},value:r.password})]}),Object(u.jsx)(j.a,{variant:"primary",className:"btn-block",type:"submit",children:"Submit"})]})},m=n(28),h=n(31),b=n(32),O=n(29),p=n(15),f=[],x=[],g=0,v="",w="";fetch("https://fatimahaldhamen-imagequiz.herokuapp.com/flowers",{method:"GET"}).then((function(e){return e.json()})).then((function(e){x=e}));fetch("https://fatimahaldhamen-imagequiz.herokuapp.com/quizzes",{method:"GET"}).then((function(e){return e.json()})).then((function(e){f=e}));var z,C=function(e){var t=Object(a.useState)(-1),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(0),s=Object(o.a)(r,2),l=s[0],d=s[1],z=function(e){"home"===e?(i(-1),d(0),g=0):(d(0),g=0)};return-1===c?Object(u.jsx)(m.a,{children:x.map((function(e,t){return Object(u.jsxs)(h.a,{onClick:function(){i(t)},children:[Object(u.jsx)(h.a.Image,{src:e.picture,alt:""}),Object(u.jsx)(h.a.Caption,{children:e.name})]},t)}))}):l<6?Object(u.jsx)(m.a,{children:Object(u.jsx)(b.a,{className:"rounded quiz-container",children:Object(u.jsxs)(b.a.Body,{children:[Object(u.jsx)("h4",{id:"Qheading",children:"Select suitable name from the following options by looking at the flower image:"}),Object(u.jsxs)(O.a,{children:[Object(u.jsx)(p.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(h.a.Image,{className:"rounded",src:f[c].quiz[l].picture,alt:""})})}),Object(u.jsxs)(p.a,{children:[f[c].quiz[l].choices.map((function(e,t){return Object(u.jsxs)("label",{htmlFor:t+"option",className:"optionLabel",children:[Object(u.jsx)("input",{id:t+"option",value:e,checked:!1,onChange:function(){return t=e,f[c].quiz[l].answer===t?(g+=1,v="Correct",w="lime"):(v="InCorrect",w="red"),void setTimeout((function(){d(l+1),v=""}),500);var t},name:"options",className:"mr-2",type:"radio"},t),e]},t)})),Object(u.jsx)("div",{id:"result",style:{color:w},children:v})]})]})]})})}):Object(u.jsx)(m.a,{className:"quiz-score-container",children:Object(u.jsx)(b.a,{className:"rounded quiz-container",children:Object(u.jsxs)(b.a.Body,{className:"quiz-score-container",children:[Object(u.jsxs)("h2",{className:"Score",children:[void fetch("https://fatimahaldhamen-imagequiz.herokuapp.com/score",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,score:g})}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),"Your Score is ",g]}),Object(u.jsxs)(O.a,{className:"nav-quiz-btn-wrapper",children:[Object(u.jsx)(j.a,{className:"nav-quiz-btn btn",onClick:function(){return z("home")},children:"Go to Homepage"}),Object(u.jsx)(j.a,{className:"nav-quiz-btn btn",onClick:function(){return z("")},children:"Retry"})]})]})})})};var N=function(){var e="admin@admin.com",t="admin123",n=Object(a.useState)({name:"",email:""}),c=Object(o.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),j=l[0],m=l[1];return Object(u.jsx)("div",{className:"App",children:""!==i.email?Object(u.jsx)(C,{email:z.email}):Object(u.jsx)(d,{Login:function(n){n.email===e&&n.password===t?(z=n,console.log("Logged In!"),r({email:n.name,password:n.password})):(console.log("Incorrect Credentials"),m("Incorrect Credentials"))},error:j})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(26);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),q()}},[[27,1,2]]]);
//# sourceMappingURL=main.c52e4666.chunk.js.map