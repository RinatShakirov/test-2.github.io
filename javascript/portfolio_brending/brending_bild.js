window.addEventListener('load', () =>{
    
    let bottBildBtn = document.querySelectorAll('.bottom-bild-btn');
    let topBildShow = document.querySelector('.top-bild-show');

    for(let i = 0; i < bottBildBtn.length; i++){

        bottBildBtn[i].addEventListener('click', ()=>{
            
            let classNameBtn = bottBildBtn[i].src;
            topBildShow.src = classNameBtn;

            console.log(classNameBtn);
            console.log(topBildShow);
        });
    };
});