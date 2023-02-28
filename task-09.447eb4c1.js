const o={button:document.querySelector(".change-color"),spanColor:document.querySelector(".color"),body:document.body};o.button.addEventListener("click",(()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;o.body.style.backgroundColor=t,o.spanColor.textContent=t}));
//# sourceMappingURL=task-09.447eb4c1.js.map
