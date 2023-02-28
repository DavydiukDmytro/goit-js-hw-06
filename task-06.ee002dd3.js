const a=document.querySelector("#validation-input");a.addEventListener("blur",(s=>{s.currentTarget.value.length===Number(a.dataset.length)?(a.classList.contains("invalid")&&a.classList.remove("invalid"),a.classList.add("valid")):(a.classList.contains("valid")&&a.classList.remove("valid"),a.classList.add("invalid"))}));
//# sourceMappingURL=task-06.ee002dd3.js.map
