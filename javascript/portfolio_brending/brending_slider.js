window.addEventListener('load', () =>{
    let slider = document.querySelector('.img-wrapper');
    let num = 0;

    let t = setInterval(() =>{
        if(slider){
            num = num - 350;
            if(num < -1050){
                num = 0;
            }
            slider.style.left = num + 'px';
        }
        else{
           return clearInterval(t);
        }
    },3000);
});