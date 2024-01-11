"use strict";(self.webpackChunkchavruta_app=self.webpackChunkchavruta_app||[]).push([[853],{9563:(e,s,t)=>{t.d(s,{Z:()=>l});t(2791);var a=t(1087),n=t(8183),o=t(2337),r=t(4420),i=t(4794),c=t(184);const l=e=>{let{selectedRequest:s,onClose:t}=e;const l=(0,r.v9)((e=>e.languageSlice.language));if(!s)return null;return(0,c.jsx)("div",{className:"modal-overlay",children:(0,c.jsx)("div",{className:"modal-container",children:(0,c.jsx)("div",{className:"container mt-4",children:(0,c.jsxs)("div",{children:[localStorage.getItem("USER_ID")!==s.userId._id&&(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-8",children:(0,c.jsx)(a.rU,{to:"admin"===localStorage.getItem("ROLE")?"/admin/singleUserAdmin/".concat(s.userId._id):"/user/singleUser/".concat(s.userId._id),className:"list-group-item list-group-item-action",children:(0,c.jsxs)("h1",{children:[s.userId.firstName," ",s.userId.lastName]})},s.userId._id)}),(0,c.jsx)("div",{className:"col-4",children:(0,c.jsx)("img",{src:s.userId.profilePic,alt:s.userId.profilePic,style:{width:"80px",height:"80px",borderRadius:"50%"}})})]}),(0,c.jsxs)("p",{className:"card-text",children:[(0,i.Z)("post.topics",l),": ",s.topics.join(", ")]}),(0,c.jsxs)("p",{className:"card-text",children:[(0,i.Z)("post.preferredLanguages",l),": ",s.preferredLanguages.join(", ")]}),(0,c.jsxs)("p",{className:"card-text",children:[(0,i.Z)("post.levelOfStudy",l),": ",s.preferredLanguages]}),(0,c.jsxs)("p",{className:"card-text",children:[(0,i.Z)("post.startDate",l),": ",(0,o.p)(s.startDateAndTime,l)]}),(0,c.jsxs)("p",{className:"card-text",children:[(0,i.Z)("post.studyDuration",l),": ",s.studyDuration.min," - ",s.studyDuration.max," ",(0,i.Z)("general.minutes",l)," "]}),(0,c.jsxs)("p",{className:"card-text",children:[(0,i.Z)("post.description",l),": ",s.description]}),(0,c.jsxs)("div",{className:"d-flex justify-content-center mt-5",children:[localStorage.getItem("USER_ID")!==s.userId._id&&(0,c.jsx)("button",{className:"btn btn-success mx-3",onClick:()=>(async e=>{try{const e=n.T5+"/event/markYes/".concat(s._id);200===(await(0,n.wO)(e,"POST")).status&&(window.location.reload(),console.log("added to yes"))}catch(t){console.error("error",t)}})(),children:(0,i.Z)("post.yes",l)}),(0,c.jsx)("button",{className:"btn btn-danger mx-3",onClick:t,children:(0,i.Z)("post.close",l)})]})]})})})})}},199:(e,s,t)=>{t.d(s,{Z:()=>g});var a=t(1087),n=t(9563),o=t(4420),r=t(2791),i=t(8183),c=t(7689),l=t(4614),d=t(2337),u=t(4794),m=t(184);const g=e=>{let{requests:s,type:t,stateRequest:g}=e;const h=(0,o.v9)((e=>e.languageSlice.language));g||(g="open");const[p,x]=(0,r.useState)(null),[y,j]=(0,r.useState)(null),[N,b]=(0,r.useState)(!0);(0,c.s0)();console.log("requests",s);const v=async e=>{try{const s=i.T5+"/studyRequests/".concat(e._id);204===(await(0,i.wO)(s,"DELETE")).status&&(window.location.reload(),console.log("deleted"))}catch(s){console.error("error",s)}},f=s.filter((e=>{e.topics.join(" ");return e.state===g})),w=e=>{switch(e){case"open":return"border border-4 border-info";case"close":return"border border-4 border-success ";case"done":return"border border-4 border-secondary ";case"past":return"bg-secondary ";default:return""}};return(0,m.jsxs)("div",{className:"row mt-4",children:[f.map((e=>(0,m.jsx)("div",{className:"col-md-4 mb-4 position-relative }",children:(0,m.jsx)("div",{className:"card d-flex flex-column h-100",children:(0,m.jsxs)("div",{className:"card-body ".concat(w(e.state)),children:[(0,m.jsxs)(a.rU,{onClick:()=>(e=>{j(e),b(!0)})(e),className:"request-link",children:[(0,m.jsx)("p",{className:"card-text",children:(0,m.jsxs)("strong",{children:[e.userId.firstName," ",e.userId.lastName]})}),(0,m.jsxs)("p",{className:"card-text",children:[(0,u.Z)("post.topics",h),": ",e.topics.join(", ")]}),(0,m.jsxs)("p",{className:"card-text",children:[(0,u.Z)("post.preferredLanguages",h),": ",e.preferredLanguages.join(", ")]}),(0,m.jsxs)("p",{className:"card-text",children:[(0,u.Z)("post.state",h),": ",e.state]}),(0,m.jsxs)("p",{className:"card-text",children:[(0,u.Z)("post.startDate",h),": ",(0,d.p)(e.startDateAndTime,h)]}),(0,m.jsxs)("p",{className:"card-text",children:[(0,u.Z)("post.studyDuration",h),": ",e.studyDuration.min," - ",e.studyDuration.max," ",(0,u.Z)("general.minutes",h)," "]}),(0,m.jsxs)("p",{className:"card-text",children:[(0,u.Z)("post.description",h),": ",e.description]})]}),(0,m.jsx)("div",{className:"mt-auto",children:(0,m.jsxs)("div",{className:"d-flex justify-content-center mt-5",children:[("requestListMarkedNo"===t||"requestList"===t)&&(0,m.jsx)("button",{className:"btn btn-outline-success mx-3",onClick:()=>(async e=>{try{const s=i.T5+"/event/markYes/".concat(e._id);200===(await(0,i.wO)(s,"POST")).status&&(console.log("added to yes"),window.location.reload())}catch(s){console.error("error",s)}})(e),children:(0,u.Z)("post.yes",h)}),("requestListMarkedYes"===t||"requestList"===t)&&(0,m.jsx)("button",{className:"btn btn-outline-danger mx-3",onClick:()=>(async e=>{try{b(!1),j(e),console.log(e);const s=i.T5+"/event/markNo/".concat(e._id);200===(await(0,i.wO)(s,"POST")).status&&(console.log("no"),window.location.reload()),b(!0),j(null)}catch(s){console.error("error",s)}})(e),children:(0,u.Z)("post.no",h)})]})}),"myRequests"===t&&"open"===e.state&&0!==e.matchesList.length&&(0,m.jsx)("div",{className:"position-absolute top-0 end-0 mt-2 me-2",children:(0,m.jsx)("button",{className:" btn-lightblue",onClick:()=>(e=>{x(e)})(e),children:e.matchesList.length})}),(0,m.jsx)("div",{className:"mt-auto",children:(0,m.jsx)("div",{className:"d-flex justify-content-center my-3",children:"myRequests"===t&&(e.zoomLink?(0,m.jsx)("a",{className:"btn btn-warning",href:e.zoomLink,target:"_blank",rel:"noopener noreferrer",children:(0,u.Z)("post.startMeeting",h)}):"close"===e.state?(0,m.jsx)("button",{className:"btn btn-danger",onClick:()=>v(e),children:"Cancel meeting"}):(0,m.jsx)("button",{className:"btn btn-danger",onClick:()=>v(e),children:"Delete"}))})})]})})},e._id))),N&&(0,m.jsx)(n.Z,{selectedRequest:y,typeList:t,onClose:()=>{j(null)}}),p&&(0,m.jsx)(l.Z,{selectedRequest:p,onClose:()=>{x(null),window.location.reload()}})]})}},4614:(e,s,t)=>{t.d(s,{Z:()=>l});var a=t(2791),n=t(1087),o=t(8183),r=t(4794),i=t(4420),c=t(184);const l=e=>{let{selectedRequest:s,onClose:t}=e;const[l,d]=(0,a.useState)([]),u=(0,i.v9)((e=>e.languageSlice.language));if((0,a.useEffect)((()=>{if(!s)return;(async()=>{try{const e=o.T5+"/studyRequests/matchUsers/".concat(s._id);console.log(e);const t=await(0,o.wO)(e,"GET");console.log("response",t),200===t.status&&d([...t.data.data]),console.log("userList",l)}catch(e){console.error("Error fetching data:",e)}})()}),[]),!s)return null;return(0,c.jsx)("div",{className:"modal-overlay",children:(0,c.jsxs)("div",{className:"modal-container",children:[(0,c.jsxs)("div",{className:"container mt-4 col-12 ",children:[(0,c.jsx)("h2",{className:"mb-4",children:"User List"}),(0,c.jsx)("ul",{className:"list-group",children:l.map((e=>(0,c.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[(0,c.jsxs)(n.rU,{to:"/user/singleUser/".concat(e._id),className:"list-group-item list-group-item-action",children:[e.firstName," ",e.lastName]}),(0,c.jsx)("button",{className:"btn border-success border-2 ms-5 me-2",onClick:()=>(async e=>{console.log("yes user",e);try{const a=o.T5+"/event/finalizeRequest/".concat(e._id,"/").concat(s._id,"/");200===(await(0,o.wO)(a,"POST")).status&&(t(),alert("match created"))}catch(a){console.error("error",a)}})(e),children:(0,r.Z)("post.yes",u)}),(0,c.jsx)("button",{className:"btn btn-danger",onClick:()=>(async e=>{try{const a=o.T5+"/event/markNoToUser/".concat(s._id,"/").concat(e._id);200===(await(0,o.wO)(a,"POST")).status&&(t(),console.log("no"))}catch(a){console.error("error",a)}})(e),children:(0,r.Z)("post.no",u)})]},e._id)))})]}),(0,c.jsx)("div",{className:"d-flex justify-content-between mt-3",children:(0,c.jsx)("button",{className:"btn btn-danger",onClick:t,children:"Close"})})]})})}},9853:(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var a=t(2791),n=t(4420),o=(t(8689),t(7632),t(7689)),r=t(4794),i=t(184);const c=()=>{const e=(0,o.s0)(),s=(0,n.v9)((e=>e.userSlice.user)),t=(0,n.v9)((e=>e.languageSlice.language));return(0,i.jsx)("div",{className:"container py-3 mb-3  ",style:{backgroundColor:"#F6F6F6",border:"2px solid #e0e0e0"},children:(0,i.jsx)("div",{className:"container col-10  ",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-3 w-75",children:[(0,i.jsx)("img",{src:s.profilePic,alt:s.firstName,className:"d-block float-start rounded-3 profile-image me-3"}),(0,i.jsxs)("h2",{className:"card-title",children:[s.firstName," ",s.lastName]}),(0,i.jsx)("p",{children:s.email}),(0,i.jsxs)("strong",{children:[(0,r.Z)("user.gender",t),":"]})," ",!1===s.gender?"".concat((0,r.Z)("user.female",t)):"".concat((0,r.Z)("user.male",t)),(0,i.jsx)("br",{}),(0,i.jsxs)("strong",{children:[(0,r.Z)("user.phoneNumber",t),":"]})," ",s.phoneNumber,(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Location:"})," ",s.location,(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Timezone:"})," ",s.timezone,(0,i.jsx)("br",{})]}),(0,i.jsxs)("div",{className:"col-3 mt-3",children:[(0,i.jsx)("strong",{children:"Educations:"}),s.educations.map(((e,s)=>(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:e.name}),(0,i.jsx)("p",{children:e.degree})]},s))),(0,i.jsx)("strong",{children:"Topics:"}),(0,i.jsx)("ul",{className:"list-unstyled",children:s.topics.map(((e,s)=>(0,i.jsx)("li",{children:e},s)))}),(0,i.jsx)("button",{className:"btn btn-warning col-6 mx-auto",onClick:()=>{e("/user/editProfile")},children:(0,r.Z)("user.edit",t)})]})]})})})})};var l=t(8183),d=t(199);const u=e=>{let{userId:s,state:t}=e;const[n,o]=(0,a.useState)([]),[r,c]=(0,a.useState)([]),[u,m]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{(async()=>{try{m(!0);const e=l.T5+"/studyRequests/myStudyRequests",s=await(0,l.wO)(e,"GET");c(s),console.log("response",s),200===s.status?o([...s.data.data]):404===s.status&&o([]),m(!1)}catch(e){console.error("Error fetching data:",e),m(!1)}})()}),[]),(0,i.jsx)("div",{className:"container",children:u?(0,i.jsx)("div",{className:"container align-items-center mt-5",children:(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:(0,i.jsx)("div",{className:"spinner-border",role:"status",children:(0,i.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}):0===n.length?(0,i.jsx)("div",{className:"container  align-items-center mt-5",children:(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("h4",{className:"display-4",children:"No requests"})})}):(0,i.jsx)(d.Z,{requests:n,type:"myRequests",stateRequest:t,className:"border-success p-2"})})},m=()=>{const[e,s]=(0,a.useState)("close"),t=(0,n.v9)((e=>e.languageSlice.language)),o=e=>{s(e)};return(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("button",{className:"btn btn-outline-primary mx-2",onClick:()=>o("open"),children:(0,r.Z)("post.open",t)}),(0,i.jsx)("button",{className:"btn btn-outline-success mx-2",onClick:()=>o("close"),children:(0,r.Z)("post.close",t)}),(0,i.jsx)("button",{className:"btn btn-outline-secondary mx-2",onClick:()=>o("done"),children:(0,r.Z)("post.done",t)}),(0,i.jsx)("button",{className:"btn btn-outline-dark mx-2",onClick:()=>o("past"),children:(0,r.Z)("post.past",t)}),(0,i.jsx)(u,{state:e})]})},g=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(m,{})]})},2337:(e,s,t)=>{t.d(s,{p:()=>a});const a=(e,s)=>{const t="he"===s?"he-IL":void 0,a=new Date(e).toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});return"".concat(a)}},4794:(e,s,t)=>{t.d(s,{Z:()=>n});const a={en:JSON.parse('{"home":{"welcomeMessage":"WELCOME TO CHAVRUTA","studyPartnerMessage":"A PLACE WHERE YOU CAN FIND A STUDY PARTNER","getStarted":"Get Started","connectingMinds":"Chavruta: Connecting Minds, Igniting Knowledge.","connectingMindsDescription":"Join Chavruta and connect with like-minded individuals on a journey of shared learning and intellectual growth.","discoverJoy":"Discover the Joy of Learning Together with Chavruta","joyousWorld":"Dive into the joyous world of collaborative learning with Chavruta, where every study session is an opportunity to explore, question, and grow.","empoweringLearning":"Empowering Your Learning Journey: Chavruta, Your Study Partner Hub.","studyPartnerHub":"Chavruta is not just a platform; it\'s your dedicated study partner hub, empowering you to excel in your educational pursuits."},"navbar":{"brand":"Chavruta","about":"About","contactUs":"Contact Us","login":"Login","signUp":"Sign up","logout":"Logout","createPost":"Create Post","marked":"Marked","myProfile":"My Profile","searchUser":"Search for user"},"post":{"chooseTopics":"Choose Topics","selectedTopics":"Selected Topics","typeSearch":"Type to search...","topics":"Topics","preferredLanguages":"Preferred Languages","levelOfStudy":"level Of Study","state":"State","startDate":"Start Date","studyDuration":"Study Duration","description":"Description","yes":"Yes","no":"No","close":"Close","markedYes":"Marked Yes","markedNo":"Marked No","open":"Open","past":"Past","done":"Done","min":"Min Duration","max":"Max Duration","dateAndTime":"Start Date And Time","selectLanguage":"Select a language","language":"Language","notes":"Notes","post":"Post","startMeeting":"Start meeting"},"user":{"profileImg":"Profile Picture","firstName":"First name","lastName":"Last name","birthDay":"Birth day","selectGender":"Select Gender","gender":"Gender","phoneNumber":"Phone Number","password":"Password","verifyPassword":"Verify Password","male":"Male","female":"Female","edit":"Edit"},"contact":{"contactUs":"Contact us","name":"Name","email":"Email","message":"Message","submit":"Submit"},"login":{"login":"Log in"},"general":{"minutes":"minutes"},"register":{"topicsTitle":"Choose topics that you are interested","education":"Education","addEducation":"Add Education","deleteEducation":"Delete","eduactionList":"Education List","educationTitle":"What is your education","topicsQuestion":"We would like to know the topics that you are interested in","educationRangeQuestion":"How important is it to you to study with someone who has a similar education to you?","friendListRangeQuestion":"How important is it to you to study with only someone from your friend list?","ageRangeQuestion":"How important is it to you to study with someone in your age range?","locationRangeQuestion":"How important is it to you to study with something from your area?"}}'),he:JSON.parse('{"home":{"welcomeMessage":"\u05d1\u05e8\u05d5\u05da \u05d4\u05d1\u05d0 \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","studyPartnerMessage":"\u05de\u05e7\u05d5\u05dd \u05e9\u05d1\u05d5 \u05ea\u05d5\u05db\u05dc \u05dc\u05de\u05e6\u05d5\u05d0 \u05e9\u05d5\u05ea\u05e3 \u05dc\u05dc\u05de\u05d9\u05d3\u05d4","getStarted":"\u05d4\u05ea\u05d7\u05dc","connectingMinds":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0: \u05de\u05d7\u05d1\u05e8\u05ea \u05d0\u05ea \u05d4\u05e0\u05e4\u05e9\u05d5\u05ea, \u05de\u05d3\u05dc\u05d9\u05e7\u05d4 \u05d9\u05d3\u05e2.","connectingMindsDescription":"\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0 \u05d5\u05d4\u05ea\u05d7\u05d1\u05e8 \u05e2\u05dd \u05d0\u05e0\u05e9\u05d9\u05dd \u05d3\u05d5\u05de\u05d9\u05dd \u05dc\u05da \u05d1\u05de\u05e1\u05e2 \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05de\u05e9\u05d5\u05ea\u05e4\u05ea \u05d5\u05e6\u05de\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e0\u05d8\u05dc\u05e7\u05d8\u05d5\u05d0\u05dc\u05d9\u05ea.","discoverJoy":"\u05d2\u05dc\u05d4 \u05d0\u05ea \u05d4\u05e9\u05d5\u05d1\u05d1\u05d5\u05ea \u05e9\u05d1\u05dc\u05de\u05d9\u05d3\u05d4 \u05d9\u05d7\u05d3 \u05e2\u05dd \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","joyousWorld":"\u05e7\u05e4\u05d5\u05e5 \u05dc\u05e2\u05d5\u05dc\u05dd \u05d4\u05e9\u05d5\u05d1\u05d1 \u05e9\u05dc \u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05d5\u05ea\u05e4\u05ea \u05e2\u05dd \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0, \u05db\u05d0\u05e9\u05e8 \u05db\u05dc \u05de\u05e4\u05d2\u05e9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05d4\u05d5\u05d0 \u05d4\u05d6\u05d3\u05de\u05e0\u05d5\u05ea \u05dc\u05d7\u05e7\u05d5\u05e8, \u05dc\u05e9\u05d0\u05d5\u05dc \u05e9\u05d0\u05dc\u05d5\u05ea \u05d5\u05dc\u05e6\u05de\u05d5\u05d7.","empoweringLearning":"\u05de\u05e2\u05e6\u05d9\u05dd \u05d0\u05ea \u05de\u05e1\u05e2 \u05d4\u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05dc\u05da: \u05d7\u05d1\u05e8\u05d5\u05ea\u05d0, \u05de\u05d0\u05e8\u05d6 \u05e9\u05d5\u05ea\u05e4\u05d9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05e9\u05dc\u05da.","studyPartnerHub":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0 \u05d4\u05d9\u05d0 \u05dc\u05d0 \u05e8\u05e7 \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d4; \u05d6\u05d5 \u05de\u05d0\u05e8\u05d6 \u05e9\u05d5\u05ea\u05e4\u05d9 \u05dc\u05de\u05d9\u05d3\u05d4 \u05de\u05d7\u05d5\u05d9\u05d9\u05d1 \u05e9\u05de\u05e2\u05e6\u05d9\u05dd \u05d0\u05d5\u05ea\u05da \u05dc\u05d4\u05e6\u05dc\u05d7\u05d4 \u05d1\u05de\u05e1\u05e2 \u05d4\u05d7\u05d9\u05e0\u05d5\u05db\u05d9 \u05e9\u05dc\u05da."},"navbar":{"brand":"\u05d7\u05d1\u05e8\u05d5\u05ea\u05d0","about":"\u05d0\u05d5\u05d3\u05d5\u05ea","contactUs":"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8","login":"\u05db\u05e0\u05d9\u05e1\u05d4","signUp":"\u05d4\u05e8\u05e9\u05de\u05d4","logout":"\u05d4\u05ea\u05e0\u05ea\u05e7\u05d5\u05ea","createPost":"\u05e6\u05d5\u05e8 \u05e4\u05d5\u05e1\u05d8","marked":"\u05de\u05e1\u05d5\u05de\u05e0\u05d9\u05dd","myProfile":"\u05d4\u05e4\u05e8\u05d5\u05e4\u05d9\u05dc \u05e9\u05dc\u05d9","searchUser":"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05de\u05e9\u05ea\u05de\u05e9"},"post":{"chooseTopics":"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0\u05d9\u05dd","selectedTopics":"\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05e9\u05e0\u05d1\u05d7\u05e8\u05d5","typeSearch":"\u05d4\u05e7\u05dc\u05d3 \u05dc\u05d7\u05d9\u05e4\u05d5\u05e9...","topics":"\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd","preferredLanguages":"\u05e9\u05e4\u05d4 \u05de\u05d5\u05e2\u05d3\u05e4\u05ea","levelOfStudy":"\u05e8\u05de\u05ea \u05dc\u05d9\u05de\u05d5\u05d3","state":"\u05de\u05e6\u05d1 \u05d1\u05e7\u05e9\u05d4","startDate":"\u05de\u05d5\u05e2\u05d3 \u05d4\u05ea\u05d7\u05dc\u05d4","studyDuration":"\u05de\u05e9\u05da \u05d4\u05dc\u05d9\u05de\u05d5\u05d3","description":"\u05d4\u05e2\u05e8\u05d5\u05ea","yes":"\u05db\u05df","no":"\u05dc\u05d0","close":"\u05e1\u05d2\u05d5\u05e8","markedYes":"\u05e1\u05d5\u05de\u05e0\u05d5 \u05db\u05df","markedNo":"\u05e1\u05d5\u05de\u05e0\u05d5 \u05dc\u05d0","open":"\u05e4\u05ea\u05d5\u05d7","past":"\u05e2\u05d1\u05e8","done":"\u05d1\u05d5\u05e6\u05e2","min":"\u05d6\u05de\u05df \u05de\u05d9\u05e0\u05d9\u05de\u05d0\u05dc\u05d9","max":"\u05d6\u05de\u05df \u05de\u05e7\u05e1\u05d9\u05de\u05d0\u05dc\u05d9","dateAndTime":"\u05ea\u05d0\u05e8\u05d9\u05da \u05d5\u05e9\u05e2\u05ea \u05d4\u05ea\u05d7\u05dc\u05d4","selectLanguage":"\u05d1\u05d7\u05e8 \u05e9\u05e4\u05d4","language":"\u05e9\u05e4\u05d4","notes":"\u05d4\u05e2\u05e8\u05d5\u05ea","post":"\u05e4\u05e8\u05e1\u05dd","startMeeting":"\u05d4\u05ea\u05d7\u05dc \u05e4\u05d2\u05d9\u05e9\u05d4"},"user":{"profileImg":"\u05ea\u05de\u05d5\u05e0\u05ea \u05e4\u05e8\u05d5\u05e4\u05d9\u05dc","firstName":"\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9","lastName":"\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4","birthDay":"\u05ea\u05d0\u05e8\u05d9\u05da \u05dc\u05d9\u05d3\u05d4","selectGender":"\u05d1\u05d7\u05e8 \u05de\u05d9\u05df","gender":"\u05de\u05d9\u05df","phoneNumber":"\u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df","password":"\u05e1\u05d9\u05e1\u05de\u05d0","verifyPassword":"\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d0","male":"\u05d6\u05db\u05e8","female":"\u05e0\u05e7\u05d1\u05d4","edit":"\u05e2\u05e8\u05d5\u05da \u05e4\u05e8\u05d5\u05e4\u05d9\u05dc"},"contact":{"contactUs":"\u05ea\u05e7\u05e9\u05e8 \u05d0\u05d9\u05ea\u05e0\u05d5","name":"\u05e9\u05dd \u05de\u05dc\u05d0","email":"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc","message":"\u05d4\u05d5\u05d3\u05e2\u05d4","submit":"\u05e9\u05dc\u05d7"},"login":{"login":"\u05db\u05e0\u05d9\u05e1\u05d4"},"general":{"minutes":"\u05d3\u05e7\u05d5\u05ea"},"register":{"topicsTitle":"\u05d1\u05d7\u05e8/\u05d9 \u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05e9\u05d0\u05ea/\u05d4 \u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df/\u05ea","education":"\u05d4\u05e9\u05db\u05dc\u05d4","addEducation":"\u05d4\u05d5\u05e1\u05e3 \u05d4\u05e9\u05db\u05dc\u05d4","deleteEducation":"\u05de\u05d7\u05e7","eduactionList":"\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05e9\u05db\u05dc\u05d4","educationTitle":"\u05de\u05d4\u05d5 \u05d4\u05d4\u05e9\u05db\u05dc\u05d4 \u05e9\u05dc\u05da","topicsQuestion":"\u05e0\u05e8\u05e6\u05d4 \u05dc\u05d3\u05e2\u05ea \u05d0\u05ea \u05d4\u05ea\u05d7\u05d5\u05de\u05d9\u05dd \u05e9\u05d0\u05ea/\u05d4 \u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df/\u05ea \u05dc\u05dc\u05de\u05d5\u05d3","educationRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05e9\u05d9\u05e9 \u05dc\u05d5 \u05d7\u05d9\u05e0\u05d5\u05da \u05d3\u05d5\u05de\u05d4 \u05d0\u05dc\u05d9\u05da?","friendListRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e8\u05e7 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05de\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05d7\u05d1\u05e8\u05d9\u05dd \u05e9\u05dc\u05da?","ageRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05d1\u05d8\u05d5\u05d5\u05d7 \u05d4\u05d2\u05d9\u05dc\u05d0\u05d9\u05dd \u05e9\u05dc\u05da?","locationRangeQuestion":"\u05db\u05de\u05d4 \u05d7\u05e9\u05d5\u05d1 \u05dc\u05da \u05dc\u05dc\u05de\u05d5\u05d3 \u05e2\u05dd \u05de\u05d9\u05e9\u05d4\u05d5 \u05de\u05d4\u05d0\u05d6\u05d5\u05e8 \u05e9\u05dc\u05da?"}}')},n=(e,s)=>{const t=e.split(".");let n=a[s];for(const a of t){if(!n||!n[a])return e;n=n[a]}return n}},7632:()=>{},8689:()=>{}}]);
//# sourceMappingURL=853.4105cc61.chunk.js.map