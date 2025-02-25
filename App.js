let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value="";
}
)
// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
  
// }
ul.addEventListener("click", function(e){
    if(e.target.nodeName=="BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
    }
})