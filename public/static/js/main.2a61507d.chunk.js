(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{41:function(e,a,t){e.exports=t.p+"static/media/resume.7338a1f0.pdf"},49:function(e){e.exports=JSON.parse('[{"title":"Arely\'s Stationary Box","description":"An ecommerce site created using React","url":"https://alternativestrategies.github.io/react-product-page2/","img":"react-product-page.png"},{"title":"Guessing Game","description":"A guessing game created using React","url":"https://alternativestrategies.github.io/guessing-game/","img":"guess-game.png"},{"title":"London Travel Site","description":"A travel site originally made with HTML & CSS converted into React.","url":"https://alternativestrategies.github.io/london/","img":"london.png"},{"title":"Weekly Challenge 1","description":"First Weekly Challenge created using HTML, CSS & JS","url":"https://alternativestrategies.github.io/weekly-challenges/","img":"weekly_challenges1.png"},{"title":"Weekly Challenge 2","description":"Second Weekly Challenge created using HTML, CSS & JS","url":"https://alternativestrategies.github.io/weekly-challenges2/","img":"weekly_challenges2.png"},{"title":"Weekly Challenge 3","description":"Fun, interactive Weekly Challenge using HTML, CSS, JS & p5.js library","url":"https://alternativestrategies.github.io/weekly-challenges3/","img":"weekly_challenges3.png"}]')},50:function(e,a,t){e.exports=t(85)},56:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),i=t.n(r),s=(t(55),t(56),t(40)),c=t.n(s),o=t(23),m=t.n(o);function u(e){var a=[];function t(a){this.position=e.createVector(e.width/2,e.height/2),this.velocity=e.createVector(0,0),this.acceleration=m.a.Vector.fromAngle(e.radians(a),.015),this.size=80,this.lifespan=255,this.update=function(){this.position.add(this.velocity),this.velocity.add(this.acceleration),this.lifespan-=.75},this.lifespanOver=function(){return this.lifespan<=0},this.display=function(){e.fill(255,255,255,75),e.noStroke(),e.ellipse(this.position.x,this.position.y,this.size,this.size)}}e.setup=function(){e.createCanvas(window.innerWidth,window.innerHeight);for(var n=0;n<10;n++)a[n]=new t(35*n)},e.draw=function(){e.background(18,18,18);for(var n=0;n<a.length;n++)if(a[n].display(),a[n].update(),a[n].lifespanOver())for(var l=0;l<10;l++)a[l]=new t(35*l)},e.windowResized=function(){e.resizeCanvas(window.innerWidth,window.innerHeight);for(var n=0;n<10;n++)a[n]=new t(35*n)}}var h=t(92),d=t(91),g=t(87),p=t(41),f=t.n(p),E=function(){return l.a.createElement(h.a,{expand:"md",className:"pb-4"},l.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav "}),l.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{href:"#about"},"About")),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{href:"#portfolio"},"Work")),l.a.createElement(d.a.Item,null,l.a.createElement(d.a.Link,{href:"#contact"},"Contact")),l.a.createElement(g.a,{className:"d-none d-md-block"},l.a.createElement(d.a.Link,{href:f.a,target:"_blank"},"Resume")))))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"",id:"home"},l.a.createElement(c.a,{sketch:u,className:"sketch"}),l.a.createElement(E,null),l.a.createElement("h1",null,"Arely Guevara")))},b=t(16),y=t(17),w=t(20),C=t(18),k=t(21),N=(t(67),t(45)),S=t.n(N),L=function(e){function a(){return Object(b.a)(this,a),Object(w.a)(this,Object(C.a)(a).apply(this,arguments))}return Object(k.a)(a,e),Object(y.a)(a,[{key:"componentDidMount",value:function(){S.a.init({duration:1e3,startEvent:"scroll",once:!1})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"about",className:"pt-4 scroll-child"},l.a.createElement("h2",{className:"sr-only"},"About"),l.a.createElement("div",{"data-aos":"fade-up",className:"about-text"},l.a.createElement("p",null,"Hi, I'm Arely Guevara, a web developer from Charlotte, NC. I have experience with HTML, CSS, Javascript, React and Node.js."))))}}]),a}(n.Component),_=t(46),j=t(47),x=t.n(j),O=t(88),A=t(89),G=t(48),I=t(90),M=function(e){return l.a.createElement(I.a,{noValidate:!0,onSubmit:e.onSubmit,className:"form"},l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Group,{as:G.a,controlId:"firstName"},l.a.createElement(I.a.Label,null,"First Name"),l.a.createElement(I.a.Control,{required:!0,type:"text",name:"first_name",value:e.first_name,onChange:e.onChange})),l.a.createElement(I.a.Group,{as:G.a,controlId:"lastName"},l.a.createElement(I.a.Label,null,"Last Name"),l.a.createElement(I.a.Control,{required:!0,type:"text",name:"last_name",value:e.last_name,onChange:e.onChange}))),l.a.createElement(I.a.Group,{controlId:"email"},l.a.createElement(I.a.Label,null,"Email address"),l.a.createElement(I.a.Control,{required:!0,type:"email",name:"email",value:e.email,onChange:e.onChange})),l.a.createElement(I.a.Group,{controlId:"message"},l.a.createElement(I.a.Label,null,"Message"),l.a.createElement(I.a.Control,{required:!0,name:"message",value:e.message,onChange:e.onChange,as:"textarea",rows:"6"})),l.a.createElement(g.a,{variant:"primary",type:"submit"},"Submit"))},W=function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(w.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(l)))).state={first_name:"",last_name:"",email:"",message:""},t.onChange=function(e){t.setState(Object(_.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault();var a=t.state,n=a.first_name,l=a.last_name,r=a.email,i=a.message;x.a.post("https://formspree.io/xgglpoex",{first_name:n,last_name:l,email:r,message:i}),t.setState({first_name:"",last_name:"",email:"",message:""})},t}return Object(k.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){return l.a.createElement(O.a,{fluid:!0,id:"contact",className:"pt-4 scroll-child"},l.a.createElement(A.a,null,l.a.createElement(G.a,{md:4},l.a.createElement("h2",{className:"ml-n4"},"Contact")),l.a.createElement(G.a,{xs:12,md:8},l.a.createElement(M,{onChange:this.onChange,onSubmit:this.onSubmit,first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,message:this.state.message}))))}}]),a}(n.Component),H=function(){var e=document.lastModified;return l.a.createElement("footer",{className:"scroll-child"},l.a.createElement("hr",null),l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{href:"https://www.github.com/alternativestrategies","aria-label":"Github Link",class:"fa fa-github"},l.a.createElement("span",{className:"sr-only"},"Github Profile")),l.a.createElement("a",{href:"https://www.linkedin.com/in/arely-guevara-672126195/","aria-label":"Linkedin Link",class:"fa fa-linkedin"},l.a.createElement("span",{className:"sr-only"},"Linkedin Profile"))),l.a.createElement("section",{className:"bottom-footer"},l.a.createElement("p",null,"Last Modified: ".concat(e)," ")))},J=t(49),R=function(){return l.a.createElement("section",{id:"portfolio",className:"scroll-child project-grid"},l.a.createElement("h2",{className:"sr-only"},"My Portfolio"),J.map(function(e){return l.a.createElement("div",{className:"project-grid-item"},l.a.createElement("div",{className:"project-grid-img"},l.a.createElement("img",{src:"./img/".concat(e.img),alt:e.title})),l.a.createElement("a",{href:e.url},l.a.createElement("div",{className:"overlay"},l.a.createElement("p",{className:"overlay-headline"},e.title),l.a.createElement("p",{className:"overlay-description"},e.description))))}))},T=function(){return l.a.createElement("div",{className:"scroll-snap"},l.a.createElement(v,null),l.a.createElement(L,null),l.a.createElement(R,null),l.a.createElement(W,null),l.a.createElement(H,null))};i.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2a61507d.chunk.js.map