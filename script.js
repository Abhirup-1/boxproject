const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const boxresult = document.querySelector('.boxresult');

btn.addEventListener('click',function(){
    boxresult.innerHTML = '<h2>Great You clicked me</h2>';
})

btn2.addEventListener('click',function(){
    boxresult.innerHTML = '<h2>Ahh shit!! I told you not to click.</h2>';
})
