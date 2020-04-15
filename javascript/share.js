window.addEventListener('load', ()=>{
    let shareBtn = document.querySelector('.share');
    let shareWindow = document.querySelector('.share-window');
    // let shareWindowoff = document.querySelector('.share-window-on');
    let position = 0;
// console.log(shareWindowoff);
    shareBtn.addEventListener('click', ()=>{
        shareWindow.classList.toggle("share-window-on");

        
    });
    
    
});