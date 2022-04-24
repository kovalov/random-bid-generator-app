const v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}};v();const S=["Hi!"],w={frontend:{react:{header:["I'm a React developer.","Seems like I'm the React developer you are looking for.","I'm interested in cooperation.","My track history of successfully developing a wide variety of projects as a React developer for the past 4 years makes me the perfect fit for this role.",`Have seen your advertisement so I want to give you my candidature.
I am a Senior React developer with about 5 years of professional experience.`,`I am a professional React Developer with strong commercial experience.
I believe that my innovative nature and strong skill set will allow me to succeed and provide you with the best solutions.`,`I'm a Senior Front-End Developer and I'm here to help with your project.
If you choose me I will make sure that project deadlines are in a timely manner. I'm Fluent in English and my ability to communicate is something you need for good cooperation with a team.`],main:[`Below you may have a glance at what skills I have: 
Javascript, Typescript
React/Redux, ReactJS, NextJS
HTML5, CSS3, SCSS, Less
Bootstrap, jQuery
REST APIs, JSON, XML, Webpack, API Authentication

Also, I:
- Have an excellent communication with fluent written and spoken English and well-versed in managing the code base with Git;
- Am experienced working in Agile, with Scrum, Atlassian Jira, Bitbucket, Confluence;
- Have a very strong work ethic and a strong sense of ownership in delivering the assigned job and tasks.`,`To support your choice, here are some details about myself:
* 5 years of experience in creating ReactJS applications;
* Highly trained in JavaScript, TypeScript, React/ReactJS (Redux, Hooks, Components), Next, and associated libraries and tools;
* Strong skills in creating responsive and efficient web applications;
* Strong skills in testing with Jest, Cypress;
* Strong interpersonal and soft skills: self-organized, detail-oriented, and hard-working person with passion.`,`I am sure that my set of skills will be a great help for you:
* 5 years of experience in the JavaScript Frontend environment;
* Highly-trained in JavaScript, TypeScript, React/ReactJS (Redux, Hooks, Components), Next, and associated libraries and tools;
* Strong skills in creating responsive and efficient web applications with HTML, CSS/SASS/Less, Bootstrap, jQuery, REST, JSON, XML, Babel, Webpack, NPM;
* Strong skills in testing with Jest, Cypress;
* Strong interpersonal and soft skills: self-organized, detail-oriented, and hard-working person with passion.`],footer:["If you are interested, let's talk.","Let me know if you are interested in cooperation, and let's discuss the details in chat.","Let me know if you are interested in our collaboration and let\u2019s arrange an intro call this week."]},angular:{header:["I'm an Angular expert."],main:["Shortly about me skills:"],footer:["If you are interested, let's talk."]}}};var g={greeting:S,technology:w};const k=(()=>{const l=document.querySelector("[data-form]"),r=document.querySelector('[data-button="copy"]'),u=document.querySelector('[data-button="submit"]'),a=document.querySelector("[data-textarea]"),e=()=>{r.textContent="Copied";const t=setTimeout(()=>{r.textContent="Copy",clearTimeout(t)},1500)},n=()=>{const t=a.value;navigator.clipboard.writeText(t),e()},i=t=>Math.floor(Math.random()*t.length),m=t=>{const s=g.technology.frontend[t],{header:o,main:c,footer:d}=s;return{greeting:g.greeting[0],header:o[i(o)],main:c[i(c)],footer:d[i(d)]}},f=t=>{const{greeting:s,header:o,main:c,footer:d}=t,p=`

`,y=`${s}${p}${o}${p}${c}${p}${d}`;a.value=y},h=()=>{l.addEventListener("change",t=>{if(t.preventDefault(),t.target.value){a.value="";const s=t.target.value,o=m(s);f(o)}}),r.addEventListener("click",n),u.addEventListener("click",t=>{if(t.preventDefault(),l.select.value){a.value="";const s=l.select.value,o=m(s);f(o)}})};return{init:()=>{h()}}})();k.init();
