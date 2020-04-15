window.addEventListener('load', function(){

    let slider1 = document.querySelector('.slider-1');
    let slider2 = document.querySelector('.slider-2');
    let btnPrev = document.querySelector('.prev');
    let btnNext = document.querySelector('.next');

    let num = 0;
    let num1 = -window.innerWidth;

    btnNext.addEventListener('click', () => {
        num = num - window.innerWidth;
        num1 = num1 + window.innerWidth;
        
        if(num < -window.innerWidth){
            num = 0;
        }
        if(num1 > 0){
            num1 = -window.innerWidth;
        }
        // if(num === window.innerWidth && num1 === window.innerWidth){
        //     return false
        // }
        // if(num === -window.innerWidth && num1 === -window.innerWidth){
        //     return false
        // }
        slider1.style.right = num + 'px';
        slider2.style.left = num1 +'px';
    });

    btnPrev.addEventListener('click', () => {
        num1 = num1 + window.innerWidth;
        num = num + window.innerWidth;

        if(num > window.innerWidth){
            num = 0;
        }
        if(num1 > window.innerWidth){
            num1 = 0;
        }
        slider1.style.right = num + 'px';
        slider2.style.left = num1 + 'px';

    });

});