// change button color by clicking button
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  btn.classList.add("btn_show");

  setTimeout(function () {
    btn.classList.remove("btn_show");
  }, 100);
});

const copy = document.querySelector(".copy")
copy.addEventListener("click", function(){
  copy.classList.add("copy_show");

  setTimeout(function(){
    copy.classList.remove("copy_show");

  },100);
});

let div= null;


// generate the rgb color

window.onclick = ()=>{
  main();
}

function main(){
    const bg = document.querySelector("#root");
    const btn = document.querySelector(".btn");
    const output = document.querySelector("#output");
    const copy = document.querySelector(".copy")

    btn.addEventListener("click",function(){
      const hex = generateRGBColor();
      bg.style.backgroundColor = hex;
      output.value= hex
    })

    copy.addEventListener("click", function(){
      navigator.clipboard.writeText(output.value);
      if(div !== null){
        div.remove();
        div = null;
      }
      generateToastMsg(`${output.value} copied`);
    })
}



// step 2 - random color ganerator function
function generateRGBColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

}


function generateToastMsg(msg){
  div = document.createElement('div');
  div.innerText = msg;

  div.className="toast-messenge toast-messenge-side-in"

  div.addEventListener('click',function(){
    div.classList.remove("toast-messenge-side-in");
    div.classList.add(".toast-messenge-side-out");

    div.addEventListener('animationend', function(){
      div.remove();
      div= null;

});

  });

  document.body.appendChild(div);

}

