"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5276],{3944:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4848),n=t(8453);const o={title:"Browser Mod Config",sidebar_position:1},a="Browser Mod",r={id:"homeassistant-configuration/browsermodconfig",title:"Browser Mod Config",description:"Browser Mod 2 custom integration provides several key pieces of functionality for an Android Tablet Satellite:",source:"@site/docs/homeassistant-configuration/browsermodconfig.md",sourceDirName:"homeassistant-configuration",slug:"/homeassistant-configuration/browsermodconfig",permalink:"/View-Assist/docs/homeassistant-configuration/browsermodconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/homeassistant-configuration/browsermodconfig.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Browser Mod Config",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Step Three: Home Assistant Configuration",permalink:"/View-Assist/docs/homeassistant-configuration/"},next:{title:"Stream Assist",permalink:"/View-Assist/docs/homeassistant-configuration/streamassistconfig"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Validate Installation",id:"validate-installation",level:3}];function c(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"browser-mod",children:"Browser Mod"}),"\n",(0,s.jsx)(i.p,{children:"Browser Mod 2 custom integration provides several key pieces of functionality for an Android Tablet Satellite:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Provides media player entity for voice response"}),"\n",(0,s.jsx)(i.li,{children:"Hides Header and Sidebar from tablet display"}),"\n",(0,s.jsx)(i.li,{children:"Handles service calls to change which dashboard view is displayed"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://www.youtube.com/watch?v=7UOfP5JjxFY",children:(0,s.jsx)(i.img,{src:"https://img.youtube.com/vi/7UOfP5JjxFY/mqdefault.jpg",alt:"Image"})})}),"\n",(0,s.jsxs)(i.p,{children:["Detailed install video:\n",(0,s.jsx)(i.a,{href:"https://www.youtube.com/watch?v=7UOfP5JjxFY",children:"https://www.youtube.com/watch?v=7UOfP5JjxFY"})]}),"\n",(0,s.jsxs)(i.p,{children:["Please follow the steps for installation here:\n",(0,s.jsx)(i.a,{href:"https://github.com/thomasloven/hass-browser_mod#installation-instructions",children:"https://github.com/thomasloven/hass-browser_mod#installation-instructions"})]}),"\n",(0,s.jsx)(i.admonition,{title:"Restart Required",type:"danger",children:(0,s.jsx)(i.p,{children:"Please remember you must restart Home Assistant after installing Browser Mod"})}),"\n",(0,s.jsx)(i.h3,{id:"validate-installation",children:"Validate Installation"}),"\n",(0,s.jsx)(i.p,{children:"Before continuing, ensure that your tablet satellite is recognized:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Visit your Home Assistant URL via your Browser applications of choice (Wallpanel or Fully Kiosk)"}),"\n",(0,s.jsx)(i.li,{children:"Find and tap on Browser Mod in the sidebar."}),"\n",(0,s.jsx)(i.li,{children:"Next, click on the icon (2) next to your registered device"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://github.com/dinki/View-Assist/assets/2521542/589e5e0e-e79a-46ec-9028-24bd70fd6755",alt:"image"})}),"\n",(0,s.jsx)(i.p,{children:"You should see device information similar to the screenshot below.  Note the new media player device provided by Fully Kiosk."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://github.com/dinki/View-Assist/assets/2521542/9dbaaba8-86f8-4e92-b4ba-5d2a77c6d161",alt:"image"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(i.p,{children:["Browser Mod allows for hiding the default Home Assistant side and top menus allowing us to have a full screen experience.  After ",(0,s.jsx)(i.a,{href:"https://github.com/dinki/View-Assist/wiki/Lovelace-card-views#creating-a-new-dashboard-and-views",children:"setting up your View Assist dashboard"}),", go back to Browser Mod from the sidebar menu."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://github.com/dinki/View-Assist/assets/2521542/b383e227-161c-497b-b8e8-1dfbc5365504",alt:"image"})}),"\n",(0,s.jsx)(i.p,{children:"Scroll down to Frontend Settings (1), and then expand the 'Hide sidebar' pulldown (2), click '+ Add Browser Setting', select the Fully Kiosk device you are setting up and turn 'Hide Sidebar' switch to on.  Repeat the same process for the 'Hide header' section.  Open the 'Default Dashboard' and set it to the dashboard you've created with your View Assist views.  This will ensure that the correct dashboard is displayed when booting the device."})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var s=t(6540);const n={},o=s.createContext(n);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);