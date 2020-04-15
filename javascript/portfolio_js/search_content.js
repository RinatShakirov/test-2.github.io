window.addEventListener('load', () => {

    let imgArr = ["../images/body/cross.png","../images/body/search.png"];
    let num = 0;

    let searchContent = document.querySelectorAll('.cross-content');

    for(let i = 0; i < searchContent.length; i++){
        searchContent[i].addEventListener('click', () => {
            searchContent[i].src = "";
            num++;
            imgArr[num];
            if(num > 1){
                num = 0;
            }
            searchContent[i].src = imgArr[num];
            console.log(searchContent[i].src);
        });
    };
});