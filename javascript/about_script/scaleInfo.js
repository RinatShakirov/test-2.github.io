window.addEventListener('load', () => {
    let scaleInfo = document.querySelectorAll('.scale-info');
    let ival = document.querySelectorAll('#ival');

    for(let i = 0; i < ival.length; i++){
    let num = ival[i].value;

    scaleInfo[i].style.left = num + '%';
    scaleInfo[i].innerHTML = num + '%';
    
        ival[i].addEventListener('input', () => {
            num = ival[i].value;
            scaleInfo[i].style.left = num + '%';
        });
    }
});