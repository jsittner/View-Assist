"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8489],{6639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(4848),i=t(8453);const o={},a="Locate a Person",c={id:"extend-functionality/sentences/locate-a-person",title:"Locate a Person",description:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",source:"@site/docs/extend-functionality/sentences/locate-a-person.md",sourceDirName:"extend-functionality/sentences",slug:"/extend-functionality/sentences/locate-a-person",permalink:"/View-Assist/docs/extend-functionality/sentences/locate-a-person",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"List Management",permalink:"/View-Assist/docs/extend-functionality/sentences/list-management"},next:{title:"Play Music with Music Assistant",permalink:"/View-Assist/docs/extend-functionality/sentences/play-music-with-ma"}},r={},l=[];function d(e){const n={a:"a",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"locate-a-person",children:"Locate a Person"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6845).A+"",width:"1280",height:"800"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https://github.com/dinki/View-Assist/blob/main/View_Assist_custom_sentences/Locate_a_Person/blueprint-locateaperson.yaml",children:(0,s.jsx)(n.img,{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled."})})}),"\n",(0,s.jsx)(n.p,{children:"This blueprint enables you to display the location of a home assistant user on a map. The map also shows the geocoded address with most recent location update in relative time. If you choose to hold the view, it will provide real-time updates as the tracking device sends new location data."}),"\n",(0,s.jsx)(n.p,{children:"Optional requirements for the geocoded tracker sensor in the companion app:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Background location"})," needs to be enabled. It can be found in the home assistant mobile app -> settings -> companion app -> Location sensors."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Geolocation sensor"})," needs to be enabled along with it's setting to ",(0,s.jsx)(n.strong,{children:"Update sensor with location sensors"}),". It can be found in the home assistant mobile app -> settings -> companion app -> manage sensors."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"Background access"})," also needs to be enabled. It can be found in the home assistant mobile app -> settings -> companion app -> other settings."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The names should be defined phonetically, as the voice assistant interprets them, followed by the person's name as listed in the People menu under settings. To assist in determining the voice assistant's spelling of the name, a visual display of the name will be shown if it is incorrect."}),"\n",(0,s.jsx)(n.li,{children:"The maps pinch-to-zoom and drag controls have been replaced with a tap to hold. The reset focus, along with the plus and minus buttons, function as expected."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Required View: ",(0,s.jsx)(n.a,{href:"/View-Assist/docs/extend-functionality/views/locate/",children:"locate view"})]}),"\n",(0,s.jsx)(n.p,{children:"All credit goes to @JimmyJamesBob and @colin715 for their collaboration on this cool blueprint"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6845:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/locate_example-2677e85b6da2b7ddcbc2eca968c578ef.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);