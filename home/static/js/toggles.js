newMap.addEventListener("click", toggleTitle);

function toggleTitle(){
  if(mapTitle.classList.contains("title--display")){
    console.log("왜");
    mapTitle.classList.remove("title--display");
  }
  if(!mapTitle.classList.contains("title--display") && !mapSetTitle.classList.contains("setTitle--display")){
    mapTitle.classList.add("title--display");
  }
}

if(mapSetTitle.classList.contains("setTitle--display")){
  mapSetTitle.classList.remove("setTitle--display");
}
