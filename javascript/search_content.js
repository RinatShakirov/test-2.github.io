window.addEventListener('load', () => {

    let imgArr = ["./images/body/cross.png","./images/body/search.png"];
    let num = 0;

    let searchContent = document.querySelectorAll('.cross-content');

    for(let i = 0; i < searchContent.length; i++){
        searchContent[i].addEventListener('click', onClick);
    };

    function onClick(){
		this.src = "";
        num++;
	
        if(num >= imgArr.length){
            num = 0;
        }
        this.src = imgArr[num];
        console.log(this.src);
    };
});