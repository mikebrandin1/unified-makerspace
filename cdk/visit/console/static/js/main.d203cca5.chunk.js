(this["webpackJsonpvisitor-console"]=this["webpackJsonpvisitor-console"]||[]).push([[0],{205:function(e,t,n){"use strict";n.r(t);var i,a=n(0),c=n.n(a),r=n(30),s=n.n(r),o=n(13),l=(n(85),n(3)),d="https://api.cumaker.space",u=function(e){return e.toISOString().split("T")[0]},m=[{slug:"cooper_library",name:"Cooper Library"},{slug:"watt_center",name:"Watt Family Innovation Center"},{slug:"cook_lab",name:"Cook Laboratory"}],b=["Male","Female","Other"],j=["Accounting","Agribusiness","Agricultural Education","Agricultural Mechanization and Business","Agriculture","Animal and Veterinary Sciences","Anthropology","Applied Economics","Applied Health Research and Evaluation","Applied Psychology","Architecture","Art","Athletic Leadership","Automotive Engineering","Biochemistry","Biochemistry and Molecular Biology","Bioengineering","Biological Sciences","Biomedical Engineering","Biosystems Engineering","Business Administration","Chemical Engineering","Chemistry","City and Regional Planning","Civil Engineering","Communication","Communication, Technology and Society","Computer Engineering","Computer Information Systems","Computer Science","Construction Science and Management","Counselor Education","Criminal Justice","Curriculum and Instruction","Data Science and Analytics","Digital Production Arts","Early Childhood Education","Economics","Educational Leadership","Education Systems Improvement Science Ed.D.","Electrical Engineering","Elementary Education","Engineering and Science Education","English","Entomology","Environmental and Natural Resources","Environmental Engineering","Environmental Health Physics","Environmental Toxicology","Financial Management","Food, Nutrition and Culinary Sciences","Food, Nutrition and Packaging Sciences","Food Science and Human Nutrition","Food Technology","Forest Resource Management","Forest Resources","Genetics","Geology","Graphic Communications","Healthcare Genetics","Health Science","Historic Preservation","History","Horticulture","Human-Centered Computing","Human Capital Education and Development","Human Factors Psychology","Human Resource Development","Hydrogeology","Industrial Engineering","Industrial/Organizational Psychology","International Family and Community Studies","Landscape Architecture","Language and International Health","Language and International Business","Learning Sciences","Literacy","Literacy, Language and Culture","Management","Marketing","Materials Science and Engineering","Mathematical Sciences","Mathematics Teaching","Mechanical Engineering","Microbiology","Middle Level Education","Modern Languages","Nursing","Packaging Science","Pan African Studies","Parks, Recreation and Tourism Management","Philosophy","Photonic Science and Technology","Physics","Planning, Design and Built Environment","Plant and Environmental Sciences","Policy Studies","Political Science","Prepharmacy","Preprofessional Health Studies","Preveterinary Medicine","Performing Arts","Professional Communication","Psychology","Public Administration","Real Estate Development","Religious Studies","Resilient Urban Design","Rhetorics, Communication and Information Design","Science Teaching","Secondary Education","Sociology","Social Science","Special Education","Sports Communication","Student Affairs","Teacher Residency","Teaching and Learning","Transportation Safety Administration","Turfgrass","Wildlife and Fisheries Biology","Women's Leadership","World Cinema","Youth Development Leadership"],h=["Accounting","Adult/Extension Education","Aerospace Studies","Agricultural Business Management","Agricultural Mechanization and Business","American Sign Language Studies","Animal and Veterinary Sciences","Anthropology","Architecture","Art","Athletic Leadership","Biochemistry","Biological Sciences","British and Irish Studies","Brand Communications","Business Administration","Chemistry","Chinese Studies","Cluster","Communication Studies","Computer Science","Creative Writing","Crop and Soil Environmental Science","Cybersecurity","Digital Production Arts","East Asian Studies","Economics","English","Entomology","Entrepreneurship","Environmental Science and Policy","Equine Industry","Film Studies","Financial Management","Food Science","Forest Products","Forest Resource Management","French Studies","Gender, Sexuality and Women's Studies","Genetics","Geography","Geology","German Studies","Global Politics","Great Works","History","Horticulture","Human Resource Management","International Engineering and Science","Italian Studies","Japanese Studies","Legal Studies","Management","Management Information Systems","Mathematical Sciences","Microbiology","Middle Eastern Studies","Military Leadership","Music","Natural Resource Economics","Nonprofit Leadership","Nuclear Engineering and Radiological Sciences","Packaging Science","Pan African Studies","Park and Protected Area Management","Philosophy","Physics","Plant Pathology","Political and Legal Theory","Political Science","Precision Agriculture","Psychology","Public Policy","Race, Ethnicity and Migration","Religious Studies","Russian Area Studies","Science and Technology in Society","Screenwriting","Sociology","Spanish Studies","Spanish-American Area Studies","Sustainability","Theatre","Travel and Tourism","Turfgrass","Urban Forestry","Wildlife and Fisheries Biology","Women's Leadership","Writing","Youth Development Studies"],g=n(21),x=n(5),O=n(15),p=n(43),y=n(17),f=n(42),S=n(1),v=function(e){var t=e.control,n=e.name,i=e.values,a=e.id,c=i.map((function(e){return{label:e,value:e}}));return Object(S.jsx)(O.a,{name:n,control:t,render:function(e){var t=e.field,n=t.value,i=t.onChange,r=t.onBlur;return Object(S.jsx)(f.a,{id:a,className:"text-dark",options:c,value:c.filter((function(e){return e.value===n})),onChange:function(e){return i(e.value)},onBlur:r})}})},N=function(e){var t=e.control,n=e.name,i=e.values,a=e.id,c=i.map((function(e){return{label:e,value:e}}));return Object(S.jsx)(O.a,{name:n,control:t,render:function(e){var t=e.field,n=t.value,i=t.onChange,r=t.onBlur;return Object(S.jsx)(f.a,{id:a,className:"text-dark",options:c,value:c.filter((function(e){return null===n||void 0===n?void 0:n.includes(e.value)})),onChange:function(e){return i(e.map((function(e){return e.value})))},onBlur:r,isMulti:!0,isSearchable:!0})}})},E=function(){return Object(S.jsxs)("div",{className:"text-muted w-full mt-5 fs-6 text-center",children:["This site is developed by students in Clemson's School of Computing Capstone.",Object(S.jsx)("br",{}),Object(S.jsx)("a",{className:"link-secondary text-muted",href:"https://github.com/clemsonMakerspace/unified-makerspace/tree/mainline/site/visitor-console",children:"Contribute to the code on GitHub"}),"."]})},C=function(e){var t=e.title,n=e.subtitle,i=e.children;return Object(S.jsxs)("div",{className:"container bg-primary p-5 rounded d-flex flex-column",style:{minHeight:"27rem",maxWidth:"50rem"},children:[Object(S.jsxs)("div",{className:"mb-4 text-center",children:[Object(S.jsx)("h1",{className:"text-secondary fw-bold mb-1",children:t||"TITLE GOES HERE"}),!!n&&Object(S.jsx)("span",{className:"text-light fw-bold fs-4",children:n})]}),Object(S.jsx)("div",{className:"d-flex justify-content-center text-white",children:i}),Object(S.jsx)("div",{className:"flex-grow-1"}),Object(S.jsx)(E,{})]})},M=y.c({username:y.d().required(),firstname:y.d().required(),lastname:y.d().required(),gender:y.d().required(),birthday:y.b().required(),graddate:y.b().required(),major:y.a().required(),minor:y.a()}).required(),P=function(){var e=Object(a.useState)(!1),t=Object(x.a)(e,2),n=t[0],i=t[1],c=Object(O.e)({resolver:Object(p.a)(M)}),r=c.register,s=c.handleSubmit,l=c.control,m=c.reset,y=s((function(e){return f(e)})),f=function(e){var t={username:e.username,firstName:e.firstname,lastName:e.lastname,Gender:e.gender,DOB:u(e.birthday),Grad_Date:u(e.graddate),Major:e.major,Minor:e.minor};fetch("".concat(d,"/register"),{method:"post",body:JSON.stringify(t)}).then((function(e){e.ok?(m(),i(!0)):alert("Registration unsuccessful")}))};return n?Object(S.jsx)(C,{title:"Registration Successful"}):Object(S.jsx)(C,{title:"Makerspace Registration",subtitle:"Please Fill in Registration Information",children:Object(S.jsx)("div",{className:"d-flex flex-column align-items-center text-light",children:Object(S.jsxs)("form",{className:"row",onSubmit:y,style:{maxWidth:"30rem"},children:[Object(S.jsxs)("div",{className:"col-12 mb-2",children:[Object(S.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(S.jsx)("input",Object(g.a)({id:"username",className:"form-control",type:"text",placeholder:"Enter username here"},r("username")))]}),Object(S.jsxs)("div",{className:"col-md-6 mb-2",children:[Object(S.jsx)("label",{htmlFor:"firstname",className:"form-label",children:"Firstname"}),Object(S.jsx)("input",Object(g.a)({className:"form-control col-md-6",type:"text",id:"firstname",placeholder:"Firstname"},r("firstname")))]}),Object(S.jsxs)("div",{className:"col-md-6 mb-2",children:[Object(S.jsx)("label",{htmlFor:"firstname",className:"form-label",children:"Lastname"}),Object(S.jsx)("input",Object(g.a)({className:"form-control",type:"text",id:"firstname",placeholder:"Lastname"},r("lastname")))]}),Object(S.jsxs)("div",{className:"col-md-6",children:[Object(S.jsx)("label",{htmlFor:"gender",className:"form-label",children:"Gender"}),Object(S.jsx)(v,{control:l,name:"gender",values:b})]}),Object(S.jsxs)("div",{className:"col-md-6 mb-2",children:[Object(S.jsx)("label",{htmlFor:"birthday",className:"form-label",children:"Birthday"}),Object(S.jsx)("input",Object(g.a)({className:"form-control",type:"date",id:"birthday",placeholder:"birthday"},r("birthday")))]}),Object(S.jsxs)("div",{className:"col-12 mb-2",children:[Object(S.jsx)("label",{htmlFor:"graddate",className:"form-label",children:"Expected Graduation Date"}),Object(S.jsx)("input",Object(g.a)({type:"date",className:"form-control",id:"graddate"},r("graddate")))]}),Object(S.jsxs)("div",{className:"col-12 mb-2",children:[Object(S.jsx)("label",{htmlFor:"major",className:"form-label",children:"Major(s)"}),Object(S.jsx)(N,{id:"major",name:"major",control:l,values:j})]}),Object(S.jsxs)("div",{className:"col-12 mb-4",children:[Object(S.jsx)("label",{htmlFor:"minor",className:"form-label",children:"Minor(s)"}),Object(S.jsx)(N,{id:"minor",name:"minor",control:l,values:h})]}),Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)("button",{type:"submit",className:"btn btn-secondary mr-5",children:"Register"}),Object(S.jsx)(o.b,{to:"/",children:Object(S.jsx)("button",{className:"btn btn-link text-light",children:"Cancel"})})]})]})})})},A=function(){return Object(S.jsx)(C,{title:"Makerspace Sign-In",subtitle:"Location Selection",children:Object(S.jsx)("div",{className:"d-flex gap-3",children:m.map((function(e){var t=e.slug,n=e.name;return Object(S.jsx)(o.b,{to:"/".concat(t),children:Object(S.jsx)("button",{className:"btn btn-secondary",children:n})},t)}))})})},k=n(41),F=function(){var e=Object(l.f)(),t=Object(o.c)(),n=Object(x.a)(t,1)[0].get("next")||"/";return Object(S.jsx)(k.a,{date:Date.now()+1e4,renderer:function(){return Object(S.jsx)(C,{title:"Sign-In Sucessful",children:Object(S.jsx)(o.b,{to:n,className:"btn btn-secondary",children:"Continue"})})},onComplete:function(){return e(n)}})},L=y.c({username:y.d().required()}).required(),I=function(e){var t=e.location,n=e.field_label,i=e.field_type,c=e.user_type,r=e.onCancel,s=Object(l.f)(),o=Object(a.useState)(!1),u=Object(x.a)(o,2),m=u[0],b=u[1],j=Object(O.e)({resolver:Object(p.a)(L)}),h=j.register,y=j.handleSubmit,f=j.formState.errors,v=y((function(e){return N(e)})),N=function(e){var n={username:e.username,location:t.name};b(!0),fetch("".concat(d,"/visit"),{method:"post",body:JSON.stringify(n)}).then((function(e){b(!1),e.ok?s("/success?next=/".concat(t.slug)):s("/error?next=/".concat(t.slug))}))};return m?Object(S.jsx)(C,{title:"Makerspace Sign-In",subtitle:"loading..."}):Object(S.jsx)(C,{title:"Makerspace Sign-In",subtitle:"as ".concat(c),children:Object(S.jsxs)("form",{onSubmit:v,children:[Object(S.jsxs)("div",{className:"form-group mb-3",children:[Object(S.jsx)("label",{htmlFor:"username",className:"form-label",children:n}),Object(S.jsx)("input",Object(g.a)({id:"username",type:i,className:"form-control",placeholder:n},h("username"))),f.username&&Object(S.jsxs)("span",{className:"form-text text-danger d-block",children:["Please enter your ",n.toLowerCase(),"."]})]}),Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)("button",{type:"submit",className:"btn btn-secondary mr-5",children:"Sign In"}),Object(S.jsx)("button",{className:"btn btn-link text-light",onClick:r,children:"Cancel"})]})]})})};!function(e){e[e.CHOOSING=0]="CHOOSING",e[e.CLEMSON=1]="CLEMSON",e[e.GUEST=2]="GUEST"}(i||(i={}));var B=function(e){var t=e.location,n=Object(a.useState)(i.CHOOSING),c=Object(x.a)(n,2),r=c[0],s=c[1],o=function(){return s(i.CHOOSING)};return r===i.CLEMSON?Object(S.jsx)(I,{user_type:"Clemson Student",field_label:"Username",field_type:"text",location:t,onCancel:o}):r===i.GUEST?Object(S.jsx)(I,{user_type:"Guest Visitor",field_label:"Email",field_type:"email",location:t,onCancel:o}):Object(S.jsx)(C,{title:"Makerspace Sign-In",subtitle:"at ".concat(t.name),children:Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{className:"btn-lg btn-secondary mb-3 d-block",style:{width:"250px"},onClick:function(){return s(i.CLEMSON)},children:"Clemson User"}),Object(S.jsx)("button",{className:"btn-lg btn-accent d-block",style:{width:"250px"},onClick:function(){return s(i.GUEST)},children:"Guest User"})]})})},G=function(){var e=Object(l.f)(),t=Object(o.c)(),n=Object(x.a)(t,1)[0].get("next")||"/";return Object(S.jsx)(k.a,{date:Date.now()+1e4,renderer:function(){return Object(S.jsx)(C,{title:"Sign-In Failed",subtitle:"there was a problem signing in",children:Object(S.jsx)(o.b,{to:n,className:"btn btn-secondary",children:"Continue"})})},onComplete:function(){return e(n)}})},R=n(6),w=n(7),H=n(12),T=n(14),D=function(e){Object(H.a)(n,e);var t=Object(T.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"container bg-primary p-5 rounded",style:{height:"400px"},children:[Object(S.jsx)("p",{style:{textAlign:"center",color:"white",paddingBottom:"100px"},children:Object(S.jsxs)("div",{className:"text-center mb-4",children:[Object(S.jsx)("h1",{className:"text-secondary fw-bold mb-1 text-center",style:{fontSize:"350%"},children:"ERROR 404 :("}),Object(S.jsx)("h2",{className:"text-white fw-bold mb-1 text-center",children:"Page Not Found"})]})}),Object(S.jsx)("div",{className:"text-secondary fw-bold mb-4 text-center",children:Object(S.jsx)("p",{style:{textAlign:"center"},children:Object(S.jsx)(o.b,{to:"/",style:{color:"white",paddingBottom:"50px",fontSize:"150%"},children:"Go Back to Home Page"})})})]})}}]),n}(c.a.Component),_=D,W=function(){return Object(S.jsxs)(l.c,{children:[Object(S.jsx)(l.a,{path:"/",element:Object(S.jsx)(A,{})}),Object(S.jsx)(l.a,{path:"/register",element:Object(S.jsx)(P,{})}),Object(S.jsx)(l.a,{path:"/success",element:Object(S.jsx)(F,{})}),Object(S.jsx)(l.a,{path:"/error",element:Object(S.jsx)(G,{})}),Object(S.jsx)(l.a,{path:"*",element:Object(S.jsx)(_,{})}),m.map((function(e){var t=e.slug;return Object(S.jsx)(l.a,{path:"/".concat(t),element:Object(S.jsx)(B,{location:e})},t)}))]})},q=n.p+"static/media/background.8e298f13.webp",U=n.p+"static/media/makerspace_logo.dfaddc13.webp";document.body.className="bg-dark",s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsxs)("div",{className:"pb-5",style:{backgroundImage:"url(".concat(q,")"),backgroundSize:"cover",minHeight:"100%"},children:[Object(S.jsx)("div",{className:"w-full pt-4 ps-4 pb-5",children:Object(S.jsx)("img",{src:U,style:{maxWidth:"100%"},alt:"Clemson Makerspace Logo"})}),Object(S.jsx)(o.a,{children:Object(S.jsx)(W,{})})]})}),document.getElementById("root"))},85:function(e,t,n){}},[[205,1,2]]]);
//# sourceMappingURL=main.d203cca5.chunk.js.map