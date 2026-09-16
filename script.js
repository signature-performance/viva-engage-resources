const buttons=[...document.querySelectorAll(".nav-item")];
const lessons=[...document.querySelectorAll(".lesson")];

function showLesson(index){
  document.querySelectorAll("video").forEach(v=>v.pause());
  buttons.forEach((b,i)=>b.classList.toggle("active",i===index));
  lessons.forEach((l,i)=>l.classList.toggle("active",i===index));
  history.replaceState(null,"","#lesson-"+(index+1));
}

buttons.forEach((button,index)=>button.addEventListener("click",()=>showLesson(index)));

const match=location.hash.match(/^#lesson-(\d)$/);
if(match){
  const index=Number(match[1])-1;
  if(index>=0&&index<5) showLesson(index);
}