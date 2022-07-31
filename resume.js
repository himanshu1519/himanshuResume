// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// for(var i =0;i<navMenuAnchorTags.length;i++){
//     navMenuAnchorTags[i].addEventListener('click',function(){
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection);
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top <=0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0, 50);

//         }, 50);
//     });
// }


var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval
for(var i =0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        // interval = setInterval(scrollVertically, 50, targetSection);
        interval = setInterval(function(){
            scrollVertically(targetSection);
        },20);

    });
}
function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsConatiner = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth =0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth +'%';
        } , 10);
    }
}


function checkScroll(){
    //you have to check whether skill conatiner is visible
    var coordinates = skillsConatiner.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        // console.log('skills section is visible')
        fillBars();
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }

}