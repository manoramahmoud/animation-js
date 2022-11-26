const sounds =["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(function(e){
    const btn = document.createElement("button");
    btn.classList.add("btn");
   
    btn.innerText = e;
    console.log(btn);
    document.getElementById("button").appendChild(btn);
    btn.addEventListener('click', function(e){
        e.target.classList.toggle('active');
        
    })

})