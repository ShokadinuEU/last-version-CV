(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){},14:function(e,a,t){},17:function(e,a,t){},20:function(e,a,t){e.exports=t(41)},26:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),c=t.n(r),o=(t(26),t(2)),i=t(3),m=t(5),s=t(4),u=t(6),E=t(43),p=t(44),d=t(42);t(17),t(11);var h=function(e){var a=e.toggleClass;return l.a.createElement("div",null,l.a.createElement("div",{className:"right-menu"},l.a.createElement("div",{className:"group-1"},l.a.createElement("div",{className:"rectangle"},l.a.createElement("div",{onClick:a,className:"start-project"},"start project"))),l.a.createElement("div",{className:"group"},l.a.createElement("div",{className:"path-1",onClick:a}))))};var g=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"left-name"},l.a.createElement("p",{className:"left-name-text"},"Timotei Dumitru")))};function f(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-text"},"Hello,",l.a.createElement("br",null),"I'm Timotei",l.a.createElement("br",null),"a Junior",l.a.createElement("br",null),"Front-End",l.a.createElement("br",null),"Developer",l.a.createElement("span",{className:"based-in-london"},"based in London")))}var b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).toggleClass=function(){var e=t.state.toggle;t.setState({toggle:!e}),document.getElementById("toggle-menu-button").classList.toggle("show")},t.state={toggle:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing-page"},l.a.createElement(h,{toggleClass:this.toggleClass}),l.a.createElement(g,null),l.a.createElement(f,null))}}]),a}(n.Component),v=(t(10),t(45));var N=function(){return l.a.createElement("div",{className:"social-section"},l.a.createElement("ul",{className:"social-icons"},l.a.createElement("li",{className:"social-icon"},l.a.createElement("a",{href:"https://www.linkedin.com/in/timotei-dumitru-1494ab160/",target:"blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"./images/social-icons/linkedin.png",alt:"LinkedIn"}))),l.a.createElement("li",{className:"social-icon"},l.a.createElement("a",{href:"https://github.com/ShokadinuEU",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"./images/social-icons/github.png",alt:"Github"}))),l.a.createElement("li",{className:"social-icon"}," ",l.a.createElement("a",{href:"https://www.facebook.com/dumitru.timy",target:"blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"./images/social-icons/facebook.png",alt:"Facebook"}))),l.a.createElement("li",{className:"social-icon"},l.a.createElement("a",{href:"https://plus.google.com/u/0/112277218680998369339",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"./images/social-icons/googlePlus.png",alt:"GooglePlus"})))))},k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(l)))).mouseEnter=function(){document.querySelector(".social-icons").classList.add("fade-element")},t.mouseLeave=function(){document.querySelector(".social-icons").classList.remove("fade-element")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",{className:"menu-list"},l.a.createElement("li",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,className:"menu-item"},l.a.createElement(v.a,{className:"menu-item-link",to:"/work"},"Work")),l.a.createElement("li",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,className:"menu-item"},l.a.createElement(v.a,{className:"menu-item-link",to:"/about"},"About")),l.a.createElement("li",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,className:"menu-item"},l.a.createElement(v.a,{className:"menu-item-link",to:"/resume"},"Resume")),l.a.createElement("li",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,className:"menu-item"},l.a.createElement(v.a,{className:"menu-item-link",to:"/contact"},"Contact")),l.a.createElement(N,null)))}}]),a}(n.Component);var w=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"left-name-menu"},l.a.createElement("p",{className:"left-name-menu-text"},"Timotei Dumitru")),l.a.createElement("span",{className:"left-name-email"},"dumitru.timy@gmail.com"))};var y=function(e){var a=e.toggleMenu;return l.a.createElement("div",null,l.a.createElement("div",{className:"right-nav"},l.a.createElement("div",{className:"nav-button"},l.a.createElement("div",{className:"button-wrapper"},l.a.createElement("div",{onClick:a,className:"button-text"},"main page"))),l.a.createElement("div",{className:"nav-activator"},l.a.createElement("div",{className:"path-2",onClick:a}))))},j=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).toggleMenu=function(){var e=t.state.toggle;t.setState({toggle:!e}),document.getElementById("toggle-menu-button").classList.toggle("show")},t.state={toggle:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"toggle-menu-button",className:"menu-wrapper"},l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(y,{toggleMenu:this.toggleMenu})))}}]),a}(n.Component),O=(t(14),function(){return l.a.createElement(d.a,{render:function(e){var a=e.history;return l.a.createElement("div",{className:"nav-activator-about"},l.a.createElement("button",{type:"button",onClick:function(){a.push("/")},className:"go-menu"}))}})});function C(){return l.a.createElement("div",null,l.a.createElement("div",{className:"footer-main"},l.a.createElement("div",{className:"footer-wrapper"},l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"menu-footer"},l.a.createElement("ul",null,l.a.createElement("li",null,"home"),l.a.createElement("li",null,"work"),l.a.createElement("li",null,"about"),l.a.createElement("li",null,"contact"))),l.a.createElement("div",{className:"footer-address"},l.a.createElement("span",null,"London, UK"),l.a.createElement("span",null,"Grove Green Rd, Leyton"),l.a.createElement("span",null,"E11 4EG"),l.a.createElement("span",null,"07376-548076"),l.a.createElement("span",null,"dumitru.timy@gmail.com")),l.a.createElement("div",{className:"footer-social"},l.a.createElement("span",null,"linkedIn"),l.a.createElement("span",null,"github"),l.a.createElement("span",null,"facebook"),l.a.createElement("span",null,"google+"))),l.a.createElement("div",{className:"footer-designer"},l.a.createElement("div",{className:"name-footer"},"Timotei Dumitru. All rights reserved 2018"),l.a.createElement("div",{className:"designer-footer"},"Design by Nespoulous Design")))))}t(35);var L=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"work",className:"work-main"},l.a.createElement(O,null),l.a.createElement("div",{className:"work-header"},l.a.createElement("h1",{className:"lg-heading"},"My",l.a.createElement("span",{className:"text-secondary"},"Work")),l.a.createElement("h2",{className:"sm-heading"},"Check out some of my projects!")),l.a.createElement("div",{className:"projects"},l.a.createElement("div",{className:"item"},l.a.createElement("a",{href:"#!"},l.a.createElement("img",{className:"project-img",src:"/images/my-work/fashion-today.jpg",alt:"Latest Project"})),l.a.createElement("a",{href:"#",rel:"noopener noreferrer",className:"btn-light"},l.a.createElement("i",{className:"fas fa-eye"})," Fashion Today"),l.a.createElement("a",{href:"https://shokadinueu.github.io/fashion-today/",target:"_blank",rel:"noopener noreferrer",className:"btn-dark"},l.a.createElement("i",{className:"fab fa-github"}," GitHub "))),l.a.createElement("div",{className:"item"},l.a.createElement("a",{href:"#!"},l.a.createElement("img",{className:"project-img",src:"/images/my-work/development-website.jpg",alt:"Development Website"})),l.a.createElement("a",{href:"#",rel:"noopener noreferrer",className:"btn-light"},l.a.createElement("i",{className:"fas fa-eye"})," Development Website"),l.a.createElement("a",{href:"https://shokadinueu.github.io/development-website/",target:"_blank",rel:"noopener noreferrer",className:"btn-dark"},l.a.createElement("i",{className:"fab fa-github"}," GitHub "))),l.a.createElement("div",{className:"item"},l.a.createElement("a",{href:"#!"},l.a.createElement("img",{className:"project-img",src:"/images/my-work/weather-app.jpg",alt:"Get Weather APP"})),l.a.createElement("a",{href:"#",rel:"noopener noreferrer",className:"btn-light"},l.a.createElement("i",{className:"fas fa-eye"})," Get Weather App"),l.a.createElement("a",{href:"https://shokadinueu.github.io/get-weather-app/",target:"_blank",rel:"noopener noreferrer",className:"btn-dark"},l.a.createElement("i",{className:"fab fa-github"},"  GitHub"))),l.a.createElement("div",{className:"item"},l.a.createElement("a",{href:"#!"},l.a.createElement("img",{className:"project-img",src:"/images/my-work/type-n-speak.jpg",alt:"Type-n-Speak"})),l.a.createElement("a",{href:"#",rel:"noopener noreferrer",className:"btn-light"},l.a.createElement("i",{className:"fas fa-eye"})," Type-n-Speak"),l.a.createElement("a",{href:"https://shokadinueu.github.io/type_n_speak_app/",target:"_blank",rel:"noopener noreferrer",className:"btn-dark"},l.a.createElement("i",{className:"fab fa-github"})," GitHub")),l.a.createElement("div",{className:"item"},l.a.createElement("a",{href:"#!"},l.a.createElement("img",{className:"project-img",src:"/images/my-work/apple-stock.jpg",alt:"Apple Stock"})),l.a.createElement("a",{href:"#",rel:"noopener noreferrer",className:"btn-light"},l.a.createElement("i",{className:"fas fa-eye"})," Apple Stock App"),l.a.createElement("a",{href:"https://shokadinueu.github.io/apple-stock-info/",target:"_blank",rel:"noopener noreferrer",className:"btn-dark"},l.a.createElement("i",{className:"fab fa-github"}," GitHub "))),l.a.createElement("div",{className:"item"},l.a.createElement("a",{href:"#!"},l.a.createElement("img",{className:"project-img",src:"/images/my-work/first-cv-online.jpg",alt:"First CV"})),l.a.createElement("a",{href:"#",rel:"noopener noreferrer",className:"btn-light"},l.a.createElement("i",{className:"fas fa-eye"})," First CV"),l.a.createElement("a",{href:"https://shokadinueu.github.io/my-CV",target:"_blank",rel:"noopener noreferrer",className:"btn-dark"},l.a.createElement("i",{className:"fab fa-github"})," GitHub"))),l.a.createElement(C,null))}}]),a}(n.Component),I=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"intro-main"},l.a.createElement("div",{className:"about-intro"},l.a.createElement(O,null),l.a.createElement("div",{className:"left-name"},l.a.createElement("p",{className:"left-name-text"},"Timotei Dumitru")),l.a.createElement("div",{className:"header-text-about"},"The pleasure ",l.a.createElement("br",null),"I gain from climbing  ",l.a.createElement("br",null),"something that  ",l.a.createElement("br",null),"seems unclimbable! ",l.a.createElement("br",null))),l.a.createElement("div",{className:"office-image"}))}}]),a}(n.Component);function M(){return l.a.createElement("div",null,l.a.createElement("div",{className:"content-main"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("div",{className:"content-header"},l.a.createElement("p",null,"I m a self-taught web developer who have one big regret and that is that i didn t start earlier this path of web development and programming in general."),l.a.createElement("p",null,"The pleasure i gain from climbing something that seems unclimbable is way too big, thats why i study everyday, even more it becomes an addiction for me, i can't let pass 1-2 days without writing some code or at least watch some tutorials.")),l.a.createElement("h2",null,"My Experience"),l.a.createElement("div",{className:"work-experience"},l.a.createElement("div",{className:"work-one"},l.a.createElement("h4",null,l.a.createElement("span",null,"2017 Jun \u2013 present")," \xa0\xa0 BitBee  "),l.a.createElement("h5",null,"Junior Front End Developer"),l.a.createElement("ul",null,l.a.createElement("li",null,"- I've built single and multi page websites using responsive web design or fluid typography with mobile first approach."),l.a.createElement("li",null,"- I've used custom icons to improve loading speeds and make it easier to maintain."),l.a.createElement("li",null,"- I've optimised the websites in loading speed minifying JavaScript, CSS and HTML, reducing the number of requests to the server."),l.a.createElement("li",null,"- I've oprimized images by compressing them for faster transfer load of the page."),l.a.createElement("li",null,"- I've learned how to prioritize the visible content for a feaster load of the page."),l.a.createElement("li",null,"- I've worked and deployed in development and production environments."),l.a.createElement("li",null,"- I've got 98-100 LightHouse, Google Page Analythics score and can reach the PERFECT score."))),l.a.createElement("div",{className:"work-two"},l.a.createElement("h4",null,l.a.createElement("span",null,"2015 Jan \u2013 2016 Jun")," \xa0\xa0 FiberLink  "),l.a.createElement("h5",null,"Network Technician"),l.a.createElement("ul",null,l.a.createElement("li",null,"- Develop and maintain local networks in ways that optimize performance."),l.a.createElement("li",null,"- Ensure security and privacy of networks and computer systems."),l.a.createElement("li",null,"- Organize and schedule upgrades and maintenance without deterring others from completing their work. "),l.a.createElement("li",null,"- Provide technical support to clients through various channels of communication."),l.a.createElement("li",null,"- Manage and support LAN and WAN Network devices.")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"work-three"},l.a.createElement("h4",null,l.a.createElement("span",null,"2012 Oct \u2013 2014 Dec")," \xa0\xa0 Computers Warehouse"),l.a.createElement("h5",null,"IT Technician "),l.a.createElement("ul",null,l.a.createElement("li",null,"- Set up workstations with computers and necessary peripheral devices (routers, printers etc)"),l.a.createElement("li",null,"- Check computer hardware (HDD, mouse, keyboard etc.) to ensure functionality."),l.a.createElement("li",null,"- Install and configure appropriate software and functions according to specifications."),l.a.createElement("li",null,"- Provide orientation and guidance to users on how to operate new software and computer equipment."),l.a.createElement("li",null,"- Organize and schedule upgrades and maintenance without deterring others from completing their work."),l.a.createElement("li",null,"- Perform troubleshooting to diagnose and resolve problems (repair or replace parts, debugging etc)"),l.a.createElement("li",null,"- Identify computer or network equipment shortages and place orders.")))))))}var S=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"about-main"},l.a.createElement(I,null),l.a.createElement(M,null),l.a.createElement(C,null))}}]),a}(n.Component),T=(t(37),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello from Resume Section"))}}]),a}(n.Component)),D=(t(39),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello from Contact Section"))}}]),a}(n.Component)),G=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,{git:!0,basename:"Last_Version_CV"},l.a.createElement(p.a,null,l.a.createElement(d.a,{path:"/",exact:!0},l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(j,null))),l.a.createElement(d.a,{path:"/work",component:L}),l.a.createElement(d.a,{path:"/about",component:S}),l.a.createElement(d.a,{path:"/resume",component:T}),l.a.createElement(d.a,{path:"/contact",component:D}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.0402ef44.chunk.js.map