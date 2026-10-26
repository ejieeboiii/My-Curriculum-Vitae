// EDIT THESE: replace with your real links
const GH="https://github.com/ejieeboiii", LI="https://www.linkedin.com/in/gg", FB="https://www.facebook.com/edanthony.enegentemedina";
const skills=[["HTML / CSS",90],["JavaScript",80],["Python",80],["FastAPI",70],["SQL / SQLite",75],["Git & GitHub",75],["Java",65],["Teamwork",90]];
const projects=[
 ["Campus Café POS","Touchscreen self-service kiosk with an 8-screen order and payment flow.",["HTML","CSS","JavaScript","SQLite"],"campus-cafe-pos","https://coffee-bara-pos.vercel.app/"],
 ["InnerCircle","Private messaging app for friends with chats, groups and profiles.",["Expo","FastAPI","SQLite","WebSockets"],"innercircle","https://inner-circle-one-woad.vercel.app/"],
 ["Breath Analysis Monitor","Capstone: non-invasive health monitoring using breath sensors.",["ESP32","MQ-138","DHT22","FastAPI"],"capstone",""],
 ["Diabetes Monitoring System","Python backend with a scikit-learn glucose prediction model.",["Python","FastAPI","scikit-learn"],"Diabetes-Monitoring-System",""]];
const $=s=>document.querySelector(s);
$("#soc").innerHTML=[["GitHub",GH],["LinkedIn",LI],["Facebook",FB]].map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("");
$("#skillbars").innerHTML=skills.map(([n,v])=>`<div class="skill"><span>${n}</span><div class="bar"><b data-w="${v}"></b></div></div>`).join("");
$("#projgrid").innerHTML=projects.map(([n,d,t,r,l])=>`<article class="card"><h4>${n}</h4><p class="sm">${d}</p><div class="tags">${t.map(x=>`<span>${x}</span>`).join("")}</div><div class="links"><a href="${GH}/${r}" target="_blank" rel="noopener">GitHub ↗</a><a href="${l||'#'}" target="_blank" rel="noopener">Live Demo ↗</a></div></article>`).join("");
$("#yr").textContent=new Date().getFullYear();
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),400));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll("[data-w]").forEach(b=>b.style.width=b.dataset.w+"%");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(s=>io.observe(s));
const links=[...document.querySelectorAll("#nav a")];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section").forEach(s=>so.observe(s));