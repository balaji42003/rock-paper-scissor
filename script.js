let win=0;
let lose=0;
let press;
let kk;
let pic =document.querySelectorAll(".pic");
console.dir(pic);
pic.forEach((pic)=> {
  pic.addEventListener("click",()=>{
     press=pic.getAttribute("id");
    console.log(press);
    playgame(press);   
  })    
});
const computergenerate=()=>{
  let values=["rock","paper","scissor"];
  let idx=Math.floor(Math.random() * 3);
  console.log(idx);
  console.log(values[idx]);
  kk =values[idx];
  return values[idx];

}
const playgame=(press)=>{
  let userwin=1;
  let user=press;
  let comp=computergenerate();
  if(user===comp){
    let final=document.querySelector("#result");
    final.innerText="draw";
    final.style.backgroundColor="rgb(0, 0, 0)";
  }
  else{
    if(user==="rock"){
      userwin=comp==="scissor"? 1 : 0;
      calculate(userwin);
    }
    else if(user==="paper"){
      userwin=comp==="rock"? 1:0;
      calculate(userwin);
    }
    else {
      userwin=comp==="paper"? 1:0;
      calculate(userwin);
    }
  }
 } 
 const calculate=(userwin)=>{
  if(userwin==1){
    let myscore=document.querySelector("#myscore");
    myscore.innerText=win=win+1;
    let final=document.querySelector("#result");
    final.style.backgroundColor="green";
    final.innerText="you win";
    let how=document.querySelector("#message");
    how.innerText=`your${press} beat ${kk}`;
  }else{
    let compscore=document.querySelector("#compscore");
    compscore.innerText=lose=lose+1;
    final=document.querySelector("#result");
    final.innerText="computer win";
    final.style.backgroundColor="red";
    let how=document.querySelector("#message");
    how.innerText=`computers ${kk} beatyour${press}  `;

  }
 }