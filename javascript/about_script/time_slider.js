window.addEventListener('load', () => {

    // let sliderArr = ["../images/about/shutterstock-1.png","../images/about/shutterstock-2.png"];
    let slider1 = document.querySelectorAll('.our-slider img');
    let num = 0;

    let timer = setInterval(() => {
        if(slider1){
            slider1[num].className = "";
            num++;
            if(num >= slider1.length){
                num = 0;
            }
            // slider1.src = sliderArr[num];
            slider1[num].className = "show";
        }
    }, 4000);
});