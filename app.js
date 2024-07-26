const img = document.getElementById('ii');
img.addEventListener("click", function enlargeImg() {
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlargedImage');
    enlargedImage.src = img.src;
    overlay.style.display = 'flex';
    setTimeout(function shrinkImage() {
        overlay.style.display = 'none';
    }, 2000);
});

document.querySelector('.btn-info').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('Home').scrollIntoView({ behavior: 'smooth' });
});


let t1 = document.querySelector("input#t1");
let p1 = document.createElement("p");
let btn = document.querySelector(".t3");
let arr=[0,0,0,0];
btn.addEventListener("click", function() {
    let c = t1.value; 
    if (c > 25000 && c < 50000) {
        p1.innerText = "Tokyo";
        arr[0]=1;
    } 
    else if (c > 50000 && c < 100000) {
        p1.innerText = "England";
        arr[2]=1;
    } 
    else if (c >= 100000) {
        
        p1.innerText = "You can go to both cities\n .France\n .New York";
        arr[1]=1;
        arr[3]=1;
    } 
    else 
    {
        p1.innerText = "Your budget is insufficient .";
    }
    let t2 = document.querySelector(".travel");
    t2.appendChild(p1);
    let imms=document.querySelectorAll(".i3");
    for( iim of imms)
        {
            let a1=document.getElementById("z1");
            let a2=document.getElementById("z2");
            let a3=document.getElementById("z3");
            let a4=document.getElementById("z4");
           if(arr[0]==1){
            a2.remove();
            a3.remove();
            a4.remove();
           }
           else if(arr[1]==1)
           {
              a1.remove();
              a3.remove();
           }
           else{
            a1.remove();
            a2.remove();
            a4.remove();
           }
    }
});