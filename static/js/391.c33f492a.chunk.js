"use strict";(self.webpackChunkchavruta_app=self.webpackChunkchavruta_app||[]).push([[391,378],{4378:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(2791),n=a(5294),o=a(7426),r=a(8324),i=a(8575),c=a(4420),l=a(4794),d=a(184);const u=function(e){let{selectedTopics:t,setSelectedTopics:a}=e;const u=(0,c.v9)((e=>e.languageSlice.language)),[m,g]=(0,s.useState)(""),[p,h]=(0,s.useState)([]),[f,y]=(0,s.useState)(null),v=(0,s.useRef)(null),x=e=>{v.current&&!v.current.contains(e.target)&&g("")};return(0,s.useEffect)((()=>(document.addEventListener("click",x),()=>{document.removeEventListener("click",x)})),[]),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-6 text-start",children:[(0,d.jsx)("h5",{children:(0,l.Z)("post.chooseTopics",u)}),(0,d.jsx)(o.Z,{className:"mb-3",children:(0,d.jsx)(r.Z,{placeholder:(0,l.Z)("post.typeSearch",u),defaultValue:m,onChange:async e=>{const t=e.target.value;g(t);try{const e=await n.Z.get("https://www.sefaria.org.il/api/name/".concat(t));h(e.data.completions||[])}catch(a){console.error("Error fetching data from Sefaria API:",a)}}})}),m&&(0,d.jsx)(i.Z,{ref:v,children:p.map(((e,s)=>(0,d.jsx)(i.Z.Item,{action:!0,onClick:()=>{return s=e,void(t.includes(s)||a((e=>[...e,s])));var s},style:{cursor:"pointer"},children:e},s)))})]}),(0,d.jsx)("div",{className:"col-6",children:t.length>0&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("h5",{children:[(0,l.Z)("post.selectedTopics",u),":"]}),(0,d.jsx)(i.Z,{children:t.map(((e,t)=>(0,d.jsxs)(i.Z.Item,{onMouseEnter:()=>y(e),onMouseLeave:()=>y(null),style:{cursor:"pointer"},children:[e," ",f===e&&(0,d.jsx)("button",{className:"btn btn-danger",style:{fontSize:"6px"},onMouseEnter:()=>console.log("Mouse on remove icon"),onClick:()=>(e=>{a((t=>t.filter((t=>t!==e))))})(e),children:"X"})]},t)))})]})})]})}},4391:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(2791),n=a(7689),o=a(4420),r=a(1925),i=a(8183),c=a(4378),l=a(4794),d=a(184);const u=()=>{const e=(0,o.I0)(),t=(0,o.v9)((e=>e.requestSlice.request)),a=(0,o.v9)((e=>e.languageSlice.language)),[u,m]=(0,s.useState)([]),[g,p]=(0,s.useState)({ageRange:"",levelOfStufy:"",educationRange:"",locationRange:"",friendListRange:""});let h=(0,o.v9)((e=>e.userSlice.user));const f={...t};delete f.showMoreOptions,(0,s.useEffect)((()=>{e((0,r.vK)({topics:[...u]})),console.log("selectedTopics",u)}),[u]);const y=(a,s)=>{const n=a.target.value;p((e=>({...e,[s]:n})));const o=a.target.value;switch(s){case"minDuration":const a=parseInt(o,10),s=t.studyDuration.max;console.log("currentMaxDuration",s),!isNaN(a)&&a<=s?e((0,r.Uf)({studyDuration:{min:a,max:s}})):console.error("Invalid minDuration input");break;case"maxDuration":const n=parseInt(o,10),i=t.studyDuration.min;!isNaN(n)&&n>=i?e((0,r.Uf)({studyDuration:{min:i,max:n}})):console.error("Invalid maxDuration input");break;case"startDate":e((0,r.R8)({startDateAndTime:o}));break;case"preferredLanguages":const c=o||h.preferredLanguages;e((0,r.w9)({preferredLanguages:[c]}));break;case"friendListRange":const l=o||h.friendListRange;e((0,r.dH)({friendListRange:l}));break;case"locationRange":const d=o||h.locationRange;e((0,r.wo)({locationRange:d}));break;case"educationRange":const u=o||h.educationRange;e((0,r.J$)({educationRange:u}));break;case"ageRange":const m=o||h.ageRange;e((0,r.G1)({ageRange:m}));break;case"levelOfStufy":e((0,r.Hv)({levelOfStufy:o}));break;case"visibility":const g=o||h.visibility;e((0,r.$0)({privacy:g}));break;case"notes":e((0,r.nY)({description:o}))}},v=(0,n.s0)(),[x,b]=(0,s.useState)(!1);return(0,d.jsx)("div",{className:"container mt-3",children:(0,d.jsx)("div",{className:"text-center",children:(0,d.jsxs)("div",{className:"container col-lg-5 col-md-9 col-10 bg-light border border-4 border-info px-4",children:[(0,d.jsx)("h2",{className:"mt-3 pt-2",children:(0,l.Z)("navbar.createPost",a)}),(0,d.jsxs)("div",{className:"row ",children:[(0,d.jsx)("div",{className:"mt-4 col-12",children:(0,d.jsx)(c.default,{selectedTopics:u,setSelectedTopics:m})}),(0,d.jsx)("div",{className:"my-3 col-12",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsxs)("div",{className:"row align-items-center",children:[(0,d.jsx)("div",{className:"col-4",children:(0,d.jsxs)("label",{htmlFor:"minDuration",children:[(0,l.Z)("post.min",a),":"]})}),(0,d.jsx)("div",{className:"col-8",children:(0,d.jsx)("input",{type:"number",className:"form-control",id:"minDuration",min:"5",max:t.studyDuration.max,defaultValue:t.studyDuration.min,onChange:e=>y(e,"minDuration")})})]})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsxs)("div",{className:"row align-items-center",children:[(0,d.jsx)("div",{className:"col-4",children:(0,d.jsxs)("label",{htmlFor:"maxDuration",children:[(0,l.Z)("post.max",a),":"]})}),(0,d.jsx)("div",{className:"col-8",children:(0,d.jsx)("input",{type:"number",className:"form-control",id:"maxDuration",min:t.studyDuration.min,max:"40",value:t.studyDuration.max,onChange:e=>y(e,"maxDuration")})})]})})]})}),(0,d.jsxs)("div",{className:"row mb-3",children:[(0,d.jsxs)("label",{htmlFor:"startDate",className:"col-3 col-form-label",children:[(0,l.Z)("post.dateAndTime",a),":"]}),(0,d.jsx)("div",{className:"col-9",children:(0,d.jsx)("input",{name:"startDate",onInput:e=>y(e,"startDate"),className:"form-control",type:"datetime-local",id:"startDate",defaultValue:t.startDate})})]}),(0,d.jsxs)("div",{className:"row mb-3",children:[(0,d.jsxs)("label",{htmlFor:"preferredLanguages",className:"col-3 col-form-label",children:[(0,l.Z)("post.language",a),":"]}),(0,d.jsx)("div",{className:"col-9",children:(0,d.jsxs)("select",{name:"preferredLanguages",defaultValue:t.preferredLanguages,className:"form-control",id:"preferredLanguages",onChange:e=>y(e,"preferredLanguages"),children:[(0,d.jsx)("option",{value:"",disabled:!0,children:(0,l.Z)("post.selectLanguage",a)}),r.d2.map((e=>(0,d.jsx)("option",{value:e,children:e},e)))]})})]}),(0,d.jsxs)("div",{className:"row mb-3",children:[(0,d.jsxs)("label",{htmlFor:"notes",className:"col-3 col-form-label",children:[(0,l.Z)("post.notes",a),":"]}),(0,d.jsx)("div",{className:"col-9",children:(0,d.jsx)("textarea",{name:"notes",onInput:e=>y(e,"notes"),className:"form-control",id:"notes",defaultValue:t.notes})})]}),(0,d.jsx)("br",{}),(0,d.jsx)("button",{className:"btn btn-success my-2 col-2 d-flex justify-content-center mx-auto",type:"button",onClick:async()=>{b(!0);try{const e=i.T5+"/studyRequests",t="POST";console.log("data",f);201===(await(0,i.wO)(e,t,f)).status&&v("/user")}catch(e){b(!1),console.log(e.data?e.data.data.msg:"An error occurred")}},children:(0,l.Z)("post.post",a)})]})]})})})}},4794:(e,t,a)=>{a.d(t,{Z:()=>n});const s={en:JSON.parse('{"home":{"welcomeMessage":"WELCOME TO CHAVRUTA","studyPartnerMessage":"A PLACE WHERE YOU CAN FIND A STUDY PARTNER","getStarted":"Get Started","connectingMinds":"Chavruta: Connecting Minds, Igniting Knowledge.","connectingMindsDescription":"Join Chavruta and connect with like-minded individuals on a journey of shared learning and intellectual growth.","discoverJoy":"Discover the Joy of Learning Together with Chavruta","joyousWorld":"Dive into the joyous world of collaborative learning with Chavruta, where every study session is an opportunity to explore, question, and grow.","empoweringLearning":"Empowering Your Learning Journey: Chavruta, Your Study Partner Hub.","studyPartnerHub":"Chavruta is not just a platform; it\'s your dedicated study partner hub, empowering you to excel in your educational pursuits."},"navbar":{"brand":"Chavruta","about":"About","contactUs":"Contact Us","login":"Login","signUp":"Sign up","logout":"Logout","createPost":"Create Post","marked":"Marked","myProfile":"My Profile","searchUser":"Search for user"},"post":{"chooseTopics":"Choose Topics","selectedTopics":"Selected Topics","typeSearch":"Type to search...","topics":"Topics","preferredLanguages":"Preferred Languages","levelOfStudy":"level Of Study","state":"State","startDate":"Start Date","studyDuration":"Study Duration","description":"Description","yes":"Yes","no":"No","close":"Close","markedYes":"Marked Yes","markedNo":"Marked No","open":"Open","past":"Past","done":"Done","min":"Min Duration","max":"Max Duration","dateAndTime":"Start Date And Time","selectLanguage":"Select a language","language":"Language","notes":"Notes","post":"Post","startMeeting":"Start meeting"},"user":{"profileImg":"Profile Picture","firstName":"First name","lastName":"Last name","birthDay":"Birth day","selectGender":"Select Gender","gender":"Gender","phoneNumber":"Phone Number","password":"Password","verifyPassword":"Verify Password","male":"Male","female":"Female","edit":"Edit"},"contact":{"contactUs":"Contact us","name":"Name","email":"Email","message":"Message","submit":"Submit"},"login":{"login":"Log in"},"general":{"minutes":"minutes"},"register":{"topicsTitle":"Choose topics that you are interested","education":"Education","addEducation":"Add Education","deleteEducation":"Delete","eduactionList":"Education List","educationTitle":"What is your education","topicsQuestion":"We would like to know the topics that you are interested in","educationRangeQuestion":"How important is it to you to study with someone who has a similar education to you?","friendListRangeQuestion":"How important is it to you to study with only someone from your friend list?","ageRangeQuestion":"How important is it to you to study with someone in your age range?","locationRangeQuestion":"How important is it to you to study with something from your area?"}}'),he:JSON.parse('{"home":{"welcomeMessage":"\u05d1\u05e8\u05d5\u05da \u05d4\u05d1\u05d0 \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","studyPartnerMessage":"\u05de\u05e7\u05d5\u05dd \u05e9\u05d1\u05d5 \u05ea\u05d5\u05db\u05dc \u05dc\u05de\u05e6\u05d5\u05d0 \u05e9\u05d5\u05ea\u05e3 \u05dc\u05dc\u05de\u05d9\u05d3\u05d4","getStarted":"\u05d4\u05ea\u05d7\u05dc","connectingMinds":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0: \u05de\u05d7\u05d1\u05e8\u05ea \u05d0\u05ea \u05d4\u05e0\u05e4\u05e9\u05d5\u05ea, \u05de\u05d3\u05dc\u05d9\u05e7\u05d4 \u05d9\u05d3\u05e2.","connectingMindsDescription":"\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0 \u05d5\u05d4\u05ea\u05d7\u05d1\u05e8 \u05e2\u05dd \u05d0\u05e0\u05e9\u05d9\u05dd \u05d3\u05d5\u05de\u05d9\u05dd \u05dc\u05da \u05d1\u05de\u05e1\u05e2 \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05de\u05e9\u05d5\u05ea\u05e4\u05ea \u05d5\u05e6\u05de\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e0\u05d8\u05dc\u05e7\u05d8\u05d5\u05d0\u05dc\u05d9\u05ea.","discoverJoy":"\u05d2\u05dc\u05d4 \u05d0\u05ea \u05d4\u05e9\u05d5\u05d1\u05d1\u05d5\u05ea \u05e9\u05d1\u05dc\u05de\u05d9\u05d3\u05d4 \u05d9\u05d7\u05d3 \u05e2\u05dd \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","joyousWorld":"\u05e7\u05e4\u05d5\u05e5 \u05dc\u05e2\u05d5\u05dc\u05dd \u05d4\u05e9\u05d5\u05d1\u05d1 \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05d5\u05ea\u05e4\u05ea \u05e2\u05dd \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0, \u05db\u05d0\u05e9\u05e8 \u05db\u05dc \u05de\u05e4\u05d2\u05e9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05d4\u05d5\u05d0 \u05d4\u05d6\u05d3\u05de\u05e0\u05d5\u05ea \u05dc\u05d7\u05e7\u05d5\u05e8, \u05dc\u05e9\u05d0\u05d5\u05dc \u05e9\u05d0\u05dc\u05d5\u05ea \u05d5\u05dc\u05e6\u05de\u05d5\u05d7.","empoweringLearning":"\u05de\u05e2\u05e6\u05d9\u05dd \u05d0\u05ea \u05de\u05e1\u05e2 \u05d4\u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05dc\u05da: \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0, \u05de\u05d0\u05e8\u05d6 \u05e9\u05d5\u05ea\u05e4\u05d9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05dc\u05da.","studyPartnerHub":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0 \u05d4\u05d9\u05d0 \u05dc\u05d0 \u05e8\u05e7 \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d4; \u05d6\u05d5 \u05de\u05d0\u05e8\u05d6 \u05e9\u05d5\u05ea\u05e4\u05d9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05de\u05d7\u05d5\u05d9\u05d9\u05d1 \u05e9\u05de\u05e2\u05e6\u05d9\u05dd \u05d0\u05d5\u05ea\u05da \u05dc\u05d4\u05e6\u05dc\u05d7\u05d4 \u05d1\u05de\u05e1\u05e2 \u05d4\u05d7\u05d9\u05e0\u05d5\u05db\u05d9 \u05e9\u05dc\u05da."},"navbar":{"brand":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","about":"\u05d0\u05d5\u05d3\u05d5\u05ea","contactUs":"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8","login":"\u05db\u05e0\u05d9\u05e1\u05d4","signUp":"\u05d4\u05e8\u05e9\u05de\u05d4","logout":"\u05d4\u05ea\u05e0\u05ea\u05e7\u05d5\u05ea","createPost":"\u05e6\u05d5\u05e8 \u05e4\u05d5\u05e1\u05d8","marked":"\u05de\u05e1\u05d5\u05de\u05e0\u05d9\u05dd","myProfile":"\u05d4\u05e4\u05e8\u05d5\u05e4\u05d9\u05dc \u05e9\u05dc\u05d9","searchUser":"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05de\u05e9\u05ea\u05de\u05e9"},"post":{"chooseTopics":"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0\u05d9\u05dd","selectedTopics":"\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05e9\u05e0\u05d1\u05d7\u05e8\u05d5","typeSearch":"\u05d4\u05e7\u05dc\u05d3 \u05dc\u05d7\u05d9\u05e4\u05d5\u05e9...","topics":"\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd","preferredLanguages":"\u05e9\u05e4\u05d4 \u05de\u05d5\u05e2\u05d3\u05e4\u05ea","levelOfStudy":"\u05e8\u05de\u05ea \u05dc\u05d9\u05de\u05d5\u05d3","state":"\u05de\u05e6\u05d1 \u05d1\u05e7\u05e9\u05d4","startDate":"\u05de\u05d5\u05e2\u05d3 \u05d4\u05ea\u05d7\u05dc\u05d4","studyDuration":"\u05de\u05e9\u05da \u05d4\u05dc\u05d9\u05de\u05d5\u05d3","description":"\u05d4\u05e2\u05e8\u05d5\u05ea","yes":"\u05db\u05df","no":"\u05dc\u05d0","close":"\u05e1\u05d2\u05d5\u05e8","markedYes":"\u05e1\u05d5\u05de\u05e0\u05d5 \u05db\u05df","markedNo":"\u05e1\u05d5\u05de\u05e0\u05d5 \u05dc\u05d0","open":"\u05e4\u05ea\u05d5\u05d7","past":"\u05e2\u05d1\u05e8","done":"\u05d1\u05d5\u05e6\u05e2","min":"\u05d6\u05de\u05df \u05de\u05d9\u05e0\u05d9\u05de\u05d0\u05dc\u05d9","max":"\u05d6\u05de\u05df \u05de\u05e7\u05e1\u05d9\u05de\u05d0\u05dc\u05d9","dateAndTime":"\u05ea\u05d0\u05e8\u05d9\u05da \u05d5\u05e9\u05e2\u05ea \u05d4\u05ea\u05d7\u05dc\u05d4","selectLanguage":"\u05d1\u05d7\u05e8 \u05e9\u05e4\u05d4","language":"\u05e9\u05e4\u05d4","notes":"\u05d4\u05e2\u05e8\u05d5\u05ea","post":"\u05e4\u05e8\u05e1\u05dd","startMeeting":"\u05d4\u05ea\u05d7\u05dc \u05e4\u05d2\u05d9\u05e9\u05d4"},"user":{"profileImg":"\u05ea\u05de\u05d5\u05e0\u05ea \u05e4\u05e8\u05d5\u05e4\u05d9\u05dc","firstName":"\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9","lastName":"\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4","birthDay":"\u05ea\u05d0\u05e8\u05d9\u05da \u05dc\u05d9\u05d3\u05d4","selectGender":"\u05d1\u05d7\u05e8 \u05de\u05d9\u05df","gender":"\u05de\u05d9\u05df","phoneNumber":"\u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df","password":"\u05e1\u05d9\u05e1\u05de\u05d0","verifyPassword":"\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d0","male":"\u05d6\u05db\u05e8","female":"\u05e0\u05e7\u05d1\u05d4","edit":"\u05e2\u05e8\u05d5\u05da \u05e4\u05e8\u05d5\u05e4\u05d9\u05dc"},"contact":{"contactUs":"\u05ea\u05e7\u05e9\u05e8 \u05d0\u05d9\u05ea\u05e0\u05d5","name":"\u05e9\u05dd \u05de\u05dc\u05d0","email":"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc","message":"\u05d4\u05d5\u05d3\u05e2\u05d4","submit":"\u05e9\u05dc\u05d7"},"login":{"login":"\u05db\u05e0\u05d9\u05e1\u05d4"},"general":{"minutes":"\u05d3\u05e7\u05d5\u05ea"},"register":{"topicsTitle":"\u05d1\u05d7\u05e8/\u05d9 \u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05e9\u05d0\u05ea/\u05d4 \u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df/\u05ea","education":"\u05d4\u05e9\u05db\u05dc\u05d4","addEducation":"\u05d4\u05d5\u05e1\u05e3 \u05d4\u05e9\u05db\u05dc\u05d4","deleteEducation":"\u05de\u05d7\u05e7","eduactionList":"\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05e9\u05db\u05dc\u05d4","educationTitle":"\u05de\u05d4\u05d5 \u05d4\u05d4\u05e9\u05db\u05dc\u05d4 \u05e9\u05dc\u05da","topicsQuestion":"\u05e0\u05e8\u05e6\u05d4 \u05dc\u05d3\u05e2\u05ea \u05d0\u05ea \u05d4\u05ea\u05d7\u05d5\u05de\u05d9\u05dd \u05e9\u05d0\u05ea/\u05d4 \u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df/\u05ea \u05dc\u05dc\u05de\u05d5\u05d3","educationRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05e9\u05d9\u05e9 \u05dc\u05d5 \u05d7\u05d9\u05e0\u05d5\u05da \u05d3\u05d5\u05de\u05d4 \u05d0\u05dc\u05d9\u05da?","friendListRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e8\u05e7 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05de\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05d7\u05d1\u05e8\u05d9\u05dd \u05e9\u05dc\u05da?","ageRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05d1\u05d8\u05d5\u05d5\u05d7 \u05d4\u05d2\u05d9\u05dc\u05d0\u05d9\u05dd \u05e9\u05dc\u05da?","locationRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05de\u05d4\u05d0\u05d6\u05d5\u05e8 \u05e9\u05dc\u05da?"}}')},n=(e,t)=>{const a=e.split(".");let n=s[t];for(const s of a){if(!n||!n[s])return e;n=n[s]}return n}}}]);
//# sourceMappingURL=391.c33f492a.chunk.js.map