"use strict";(self.webpackChunkchavruta_app=self.webpackChunkchavruta_app||[]).push([[969],{8969:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var o=a(2791),s=a(7689),n=a(1134),i=a(4420),r=a(8183),l=a(9017),d=(a(8689),a(4794)),c=a(184);const u=()=>{const e=(0,i.I0)(),[t,a]=(0,o.useState)(!1),u=(0,s.s0)(),{formState:{errors:g}}=(0,n.cI)(),m=(0,i.v9)((e=>e.languageSlice.language)),p=async t=>{try{const a=r.T5+"/auth/login",o=await(0,r.wO)(a,"POST",t);if(o.data.token){localStorage.setItem(r.Ag,o.data.token);const e=o.data.token;(0,r.WX)(e)}await(0,l.j)(e),"admin"===localStorage.getItem("ROLE")?(u("/admin"),window.location.reload()):"user"===localStorage.getItem("ROLE")?(u("/user"),window.location.reload()):u("/")}catch(o){console.log("err",o.response.data.msg),a(!1)}};return(0,c.jsx)("div",{className:"page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register",children:(0,c.jsx)("div",{className:"wrapper wrapper--w680",children:(0,c.jsx)("div",{className:"card card-4",children:(0,c.jsx)("div",{className:"card-body",children:(0,c.jsxs)("div",{className:"row row-space",children:[(0,c.jsx)("div",{className:"col-2",children:(0,c.jsx)("div",{className:"input-group",children:(0,c.jsx)("h2",{className:"title label ",children:(0,d.Z)("login.login",m)})})}),(0,c.jsx)("form",{onSubmit:e=>(e=>{e.preventDefault(),a(!0);const t={email:e.target.email.value,password:e.target.password.value};p(t)})(e),children:(0,c.jsxs)("div",{className:"row row-space",children:[(0,c.jsxs)("div",{className:"col-2",children:[(0,c.jsx)("label",{className:"label",htmlFor:"email",children:(0,d.Z)("contact.email",m)}),(0,c.jsx)("input",{name:"email",className:"input--style-4",type:"email",id:"email"})]}),(0,c.jsxs)("div",{className:"col-2",children:[(0,c.jsx)("label",{className:"label",htmlFor:"password",children:(0,d.Z)("user.password",m)}),(0,c.jsx)("input",{name:"password",className:"input--style-4",type:"password",id:"password"})]}),(0,c.jsx)("div",{className:"col-12 d-flex justify-content-center mt-5",children:(0,c.jsx)("button",{type:"submit",className:"btn btn-register col-12 col-md-6 col-lg-4 mx-2",children:(0,d.Z)("login.login",m)})})]})})]})})})})})}},4794:(e,t,a)=>{a.d(t,{Z:()=>s});const o={en:JSON.parse('{"home":{"welcomeMessage":"WELCOME TO CHAVRUTA","studyPartnerMessage":"A PLACE WHERE YOU CAN FIND A STUDY PARTNER","getStarted":"Get Started","connectingMinds":"Chavruta: Connecting Minds, Igniting Knowledge.","connectingMindsDescription":"Join Chavruta and connect with like-minded individuals on a journey of shared learning and intellectual growth.","discoverJoy":"Discover the Joy of Learning Together with Chavruta","joyousWorld":"Dive into the joyous world of collaborative learning with Chavruta, where every study session is an opportunity to explore, question, and grow.","empoweringLearning":"Empowering Your Learning Journey: Chavruta, Your Study Partner Hub.","studyPartnerHub":"Chavruta is not just a platform; it\'s your dedicated study partner hub, empowering you to excel in your educational pursuits."},"navbar":{"brand":"Chavruta","about":"About","contactUs":"Contact Us","login":"Login","signUp":"Sign up","logout":"Logout","createPost":"Create Post","marked":"Marked","myProfile":"My Profile","searchUser":"Search for user"},"post":{"chooseTopics":"Choose Topics","selectedTopics":"Selected Topics","typeSearch":"Type to search...","topics":"Topics","preferredLanguages":"Preferred Languages","levelOfStudy":"level Of Study","state":"State","startDate":"Start Date","studyDuration":"Study Duration","description":"Description","yes":"Yes","no":"No","close":"Close","markedYes":"Marked Yes","markedNo":"Marked No","open":"Open","past":"Past","done":"Done","min":"Min Duration","max":"Max Duration","dateAndTime":"Start Date And Time","selectLanguage":"Select a language","language":"Language","notes":"Notes","post":"Post","startMeeting":"Start meeting"},"user":{"profileImg":"Profile Picture","firstName":"First name","lastName":"Last name","birthDay":"Birth day","selectGender":"Select Gender","gender":"Gender","phoneNumber":"Phone Number","password":"Password","verifyPassword":"Verify Password","male":"Male","female":"Female","edit":"Edit"},"contact":{"contactUs":"Contact us","name":"Name","email":"Email","message":"Message","submit":"Submit"},"login":{"login":"Log in"},"general":{"minutes":"minutes"},"register":{"topicsTitle":"Choose topics that you are interested","education":"Education","addEducation":"Add Education","deleteEducation":"Delete","eduactionList":"Education List","educationTitle":"What is your education","topicsQuestion":"We would like to know the topics that you are interested in","educationRangeQuestion":"How important is it to you to study with someone who has a similar education to you?","friendListRangeQuestion":"How important is it to you to study with only someone from your friend list?","ageRangeQuestion":"How important is it to you to study with someone in your age range?","locationRangeQuestion":"How important is it to you to study with something from your area?"}}'),he:JSON.parse('{"home":{"welcomeMessage":"\u05d1\u05e8\u05d5\u05da \u05d4\u05d1\u05d0 \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","studyPartnerMessage":"\u05de\u05e7\u05d5\u05dd \u05e9\u05d1\u05d5 \u05ea\u05d5\u05db\u05dc \u05dc\u05de\u05e6\u05d5\u05d0 \u05e9\u05d5\u05ea\u05e3 \u05dc\u05dc\u05de\u05d9\u05d3\u05d4","getStarted":"\u05d4\u05ea\u05d7\u05dc","connectingMinds":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0: \u05de\u05d7\u05d1\u05e8\u05ea \u05d0\u05ea \u05d4\u05e0\u05e4\u05e9\u05d5\u05ea, \u05de\u05d3\u05dc\u05d9\u05e7\u05d4 \u05d9\u05d3\u05e2.","connectingMindsDescription":"\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0 \u05d5\u05d4\u05ea\u05d7\u05d1\u05e8 \u05e2\u05dd \u05d0\u05e0\u05e9\u05d9\u05dd \u05d3\u05d5\u05de\u05d9\u05dd \u05dc\u05da \u05d1\u05de\u05e1\u05e2 \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05de\u05e9\u05d5\u05ea\u05e4\u05ea \u05d5\u05e6\u05de\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e0\u05d8\u05dc\u05e7\u05d8\u05d5\u05d0\u05dc\u05d9\u05ea.","discoverJoy":"\u05d2\u05dc\u05d4 \u05d0\u05ea \u05d4\u05e9\u05d5\u05d1\u05d1\u05d5\u05ea \u05e9\u05d1\u05dc\u05de\u05d9\u05d3\u05d4 \u05d9\u05d7\u05d3 \u05e2\u05dd \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","joyousWorld":"\u05e7\u05e4\u05d5\u05e5 \u05dc\u05e2\u05d5\u05dc\u05dd \u05d4\u05e9\u05d5\u05d1\u05d1 \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05d5\u05ea\u05e4\u05ea \u05e2\u05dd \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0, \u05db\u05d0\u05e9\u05e8 \u05db\u05dc \u05de\u05e4\u05d2\u05e9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05d4\u05d5\u05d0 \u05d4\u05d6\u05d3\u05de\u05e0\u05d5\u05ea \u05dc\u05d7\u05e7\u05d5\u05e8, \u05dc\u05e9\u05d0\u05d5\u05dc \u05e9\u05d0\u05dc\u05d5\u05ea \u05d5\u05dc\u05e6\u05de\u05d5\u05d7.","empoweringLearning":"\u05de\u05e2\u05e6\u05d9\u05dd \u05d0\u05ea \u05de\u05e1\u05e2 \u05d4\u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05dc\u05da: \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0, \u05de\u05d0\u05e8\u05d6 \u05e9\u05d5\u05ea\u05e4\u05d9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05dc\u05da.","studyPartnerHub":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0 \u05d4\u05d9\u05d0 \u05dc\u05d0 \u05e8\u05e7 \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d4; \u05d6\u05d5 \u05de\u05d0\u05e8\u05d6 \u05e9\u05d5\u05ea\u05e4\u05d9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05de\u05d7\u05d5\u05d9\u05d9\u05d1 \u05e9\u05de\u05e2\u05e6\u05d9\u05dd \u05d0\u05d5\u05ea\u05da \u05dc\u05d4\u05e6\u05dc\u05d7\u05d4 \u05d1\u05de\u05e1\u05e2 \u05d4\u05d7\u05d9\u05e0\u05d5\u05db\u05d9 \u05e9\u05dc\u05da."},"navbar":{"brand":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","about":"\u05d0\u05d5\u05d3\u05d5\u05ea","contactUs":"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8","login":"\u05db\u05e0\u05d9\u05e1\u05d4","signUp":"\u05d4\u05e8\u05e9\u05de\u05d4","logout":"\u05d4\u05ea\u05e0\u05ea\u05e7\u05d5\u05ea","createPost":"\u05e6\u05d5\u05e8 \u05e4\u05d5\u05e1\u05d8","marked":"\u05de\u05e1\u05d5\u05de\u05e0\u05d9\u05dd","myProfile":"\u05d4\u05e4\u05e8\u05d5\u05e4\u05d9\u05dc \u05e9\u05dc\u05d9","searchUser":"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05de\u05e9\u05ea\u05de\u05e9"},"post":{"chooseTopics":"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0\u05d9\u05dd","selectedTopics":"\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05e9\u05e0\u05d1\u05d7\u05e8\u05d5","typeSearch":"\u05d4\u05e7\u05dc\u05d3 \u05dc\u05d7\u05d9\u05e4\u05d5\u05e9...","topics":"\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd","preferredLanguages":"\u05e9\u05e4\u05d4 \u05de\u05d5\u05e2\u05d3\u05e4\u05ea","levelOfStudy":"\u05e8\u05de\u05ea \u05dc\u05d9\u05de\u05d5\u05d3","state":"\u05de\u05e6\u05d1 \u05d1\u05e7\u05e9\u05d4","startDate":"\u05de\u05d5\u05e2\u05d3 \u05d4\u05ea\u05d7\u05dc\u05d4","studyDuration":"\u05de\u05e9\u05da \u05d4\u05dc\u05d9\u05de\u05d5\u05d3","description":"\u05d4\u05e2\u05e8\u05d5\u05ea","yes":"\u05db\u05df","no":"\u05dc\u05d0","close":"\u05e1\u05d2\u05d5\u05e8","markedYes":"\u05e1\u05d5\u05de\u05e0\u05d5 \u05db\u05df","markedNo":"\u05e1\u05d5\u05de\u05e0\u05d5 \u05dc\u05d0","open":"\u05e4\u05ea\u05d5\u05d7","past":"\u05e2\u05d1\u05e8","done":"\u05d1\u05d5\u05e6\u05e2","min":"\u05d6\u05de\u05df \u05de\u05d9\u05e0\u05d9\u05de\u05d0\u05dc\u05d9","max":"\u05d6\u05de\u05df \u05de\u05e7\u05e1\u05d9\u05de\u05d0\u05dc\u05d9","dateAndTime":"\u05ea\u05d0\u05e8\u05d9\u05da \u05d5\u05e9\u05e2\u05ea \u05d4\u05ea\u05d7\u05dc\u05d4","selectLanguage":"\u05d1\u05d7\u05e8 \u05e9\u05e4\u05d4","language":"\u05e9\u05e4\u05d4","notes":"\u05d4\u05e2\u05e8\u05d5\u05ea","post":"\u05e4\u05e8\u05e1\u05dd","startMeeting":"\u05d4\u05ea\u05d7\u05dc \u05e4\u05d2\u05d9\u05e9\u05d4"},"user":{"profileImg":"\u05ea\u05de\u05d5\u05e0\u05ea \u05e4\u05e8\u05d5\u05e4\u05d9\u05dc","firstName":"\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9","lastName":"\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4","birthDay":"\u05ea\u05d0\u05e8\u05d9\u05da \u05dc\u05d9\u05d3\u05d4","selectGender":"\u05d1\u05d7\u05e8 \u05de\u05d9\u05df","gender":"\u05de\u05d9\u05df","phoneNumber":"\u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df","password":"\u05e1\u05d9\u05e1\u05de\u05d0","verifyPassword":"\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d0","male":"\u05d6\u05db\u05e8","female":"\u05e0\u05e7\u05d1\u05d4","edit":"\u05e2\u05e8\u05d5\u05da \u05e4\u05e8\u05d5\u05e4\u05d9\u05dc"},"contact":{"contactUs":"\u05ea\u05e7\u05e9\u05e8 \u05d0\u05d9\u05ea\u05e0\u05d5","name":"\u05e9\u05dd \u05de\u05dc\u05d0","email":"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc","message":"\u05d4\u05d5\u05d3\u05e2\u05d4","submit":"\u05e9\u05dc\u05d7"},"login":{"login":"\u05db\u05e0\u05d9\u05e1\u05d4"},"general":{"minutes":"\u05d3\u05e7\u05d5\u05ea"},"register":{"topicsTitle":"\u05d1\u05d7\u05e8/\u05d9 \u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05e9\u05d0\u05ea/\u05d4 \u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df/\u05ea","education":"\u05d4\u05e9\u05db\u05dc\u05d4","addEducation":"\u05d4\u05d5\u05e1\u05e3 \u05d4\u05e9\u05db\u05dc\u05d4","deleteEducation":"\u05de\u05d7\u05e7","eduactionList":"\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05e9\u05db\u05dc\u05d4","educationTitle":"\u05de\u05d4\u05d5 \u05d4\u05d4\u05e9\u05db\u05dc\u05d4 \u05e9\u05dc\u05da","topicsQuestion":"\u05e0\u05e8\u05e6\u05d4 \u05dc\u05d3\u05e2\u05ea \u05d0\u05ea \u05d4\u05ea\u05d7\u05d5\u05de\u05d9\u05dd \u05e9\u05d0\u05ea/\u05d4 \u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df/\u05ea \u05dc\u05dc\u05de\u05d5\u05d3","educationRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05e9\u05d9\u05e9 \u05dc\u05d5 \u05d7\u05d9\u05e0\u05d5\u05da \u05d3\u05d5\u05de\u05d4 \u05d0\u05dc\u05d9\u05da?","friendListRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e8\u05e7 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05de\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05d7\u05d1\u05e8\u05d9\u05dd \u05e9\u05dc\u05da?","ageRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05d1\u05d8\u05d5\u05d5\u05d7 \u05d4\u05d2\u05d9\u05dc\u05d0\u05d9\u05dd \u05e9\u05dc\u05da?","locationRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05de\u05d4\u05d0\u05d6\u05d5\u05e8 \u05e9\u05dc\u05da?"}}')},s=(e,t)=>{const a=e.split(".");let s=o[t];for(const o of a){if(!s||!s[o])return e;s=s[o]}return s}},8689:()=>{}}]);
//# sourceMappingURL=969.8b28972c.chunk.js.map