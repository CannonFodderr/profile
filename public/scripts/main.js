const body = document.getElementsByTagName('body');
const anchors = document.getElementsByClassName('linkbtn');
let opIn = 0.1;
let opOut = 1;
// =====================
// Fade In/Out functions
// =====================
fadeIn = (element) => {
        if(opIn <= 1){
            opIn += 0.01;
            setTimeout(()=>{
                element.style.opacity = opIn;
                fadeIn(element)
            }, 5)    
        } else {    
            return opIn = 0
        };
}

fadeOut = (element) => {
    if(opOut >= 0){
        opOut -= 0.01;
        setTimeout(()=>{
            element.style.opacity = opOut;
            fadeOut(element)
        }, 5)
        setTimeout(()=>{
            window.location.href = anchor.href;
        }, 500)    
    } else {    
        return opOut = 1
    };
}


fadeIn(body[0]);

// Loop through all anchors
for (let anchor of anchors){
    anchor.addEventListener('click', ()=>{
        fadeOut(body[0]);
        
    });
}