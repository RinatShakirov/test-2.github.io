window.addEventListener('load', () => {
    const imgWrapp = document.querySelector('.img-wrapp');
    const input = document.querySelector('input');
    const btnSearchOff = document.querySelector('.btn-search-off');
    const btnSearchOn = document.querySelector('.btn-search-on');
    

    btnSearchOn.addEventListener('click', function(){
        // let removeDisplay = function(){
        //     imgWrapp.style.display = 'none';
        //     imgWrapp.removeEventListener('transitionend', removeDisplay);
        // };
        // imgWrapp.addEventListener('transitionend', removeDisplay);
        reqAnim(function(){
            imgWrapp.style.maxWidth = 100 + '%';
        });
        btnSearchOn.style.display = 'none';
        btnSearchOff.style.display = 'block';
    });

    btnSearchOff.addEventListener('click', function(){
        // let removeDisplay = function(){
        //     imgWrapp.style.display = 'none';
        //     imgWrapp.removeEventListener('transitionend', removeDisplay);
        // };
        // imgWrapp.addEventListener('transitionend', removeDisplay);
        
        reqAnim(function(){
            imgWrapp.style.maxWidth = 4 + '%';

            if(window.innerWidth < 620){
                imgWrapp.style.maxWidth = 15 + '%';
            }
        });
        btnSearchOff.style.display = 'none';
        btnSearchOn.style.display = 'block';

    }); 

    function reqAnim(fn){
        window.requestAnimationFrame(function(){
            window.requestAnimationFrame(function(){
                fn();
            }); 
        }); 
    };

    // let button = document.querySelector('.btn-sear');
    // let search = document.querySelector('body');
    // let inp = document.querySelector('.search-inp');
    // let div = document.querySelector('.out');
    //     let inval = inp.value;

    //     // function TrimStr(s){
    //     //     s = s.replace(/^\s+/g, '');
    //     //     return s.replace(/\s+$/g, '');
    //     // }
        
    //     let text = search.innerText;
    //     let res = text.includes(inval);
            
    //     console.log(res)
    //     console.log(text)

    //     if(inval === ''){
    //         div.innerHTML = 'Element nicht gefunden!';
    //     }
    //     else{
    //         div.innerHTML = `
    //                 <a href="new.html">${inval}</a>
    //         `;
    //     }
    
});
