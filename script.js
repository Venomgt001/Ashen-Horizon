/*==========================================
        ASHEN HORIZON
        SCRIPT.JS
        TERMINAL SYSTEM
==========================================*/


/*==========================================
            BIOS STARTUP
==========================================*/


const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");


const bootLines = [

"ASHEN HORIZON",

"",

"A-17 TERMINAL BIOS v3.5",

"",

"INITIALIZING SYSTEM...",

"",

"Checking reactor.............OK",

"Loading archives.............OK",

"Loading navigation module....OK",

"Checking power cells.........OK",

"",

"Searching ECHO-9...........FAILED",

"",

"COMMUNICATION LOST",

"",

"Explorer authorization.......OK",

"",

"> PRESS ANY KEY TO ENTER █"

];



let lineIndex = 0;
let charIndex = 0;



function typeBoot(){


    if(lineIndex >= bootLines.length){

        enableTerminalEntry();

        return;

    }


    let line = bootLines[lineIndex];


    if(charIndex < line.length){


        bootText.textContent += line[charIndex];

        charIndex++;


        setTimeout(typeBoot,30);


    }else{


        bootText.textContent += "\n";


        lineIndex++;

        charIndex=0;


        setTimeout(typeBoot,120);


    }


}





function enableTerminalEntry(){


    document.addEventListener(
        "keydown",
        enterTerminal,
        {once:true}
    );


    document.addEventListener(
        "click",
        enterTerminal,
        {once:true}
    );


}





function enterTerminal(){


    bootScreen.style.opacity="0";


    setTimeout(()=>{


        bootScreen.style.display="none";


        document.body.style.overflowY="auto";


    },1000);


}





window.addEventListener("load",()=>{


    document.body.style.overflow="hidden";


    typeBoot();


});








/*==========================================
            MOBILE MENU
==========================================*/


const menuButton =
document.getElementById("menuButton");


const mobileMenu =
document.getElementById("mobileMenu");


const closeMenu =
document.getElementById("closeMenu");




if(menuButton){


    menuButton.addEventListener(
        "click",
        ()=>{


            mobileMenu.classList.add(
                "active"
            );


        }
    );


}





if(closeMenu){


    closeMenu.addEventListener(
        "click",
        ()=>{


            mobileMenu.classList.remove(
                "active"
            );


        }
    );


}





/* Закрытие меню после выбора пункта */


document.querySelectorAll(
".mobile-menu a"
)
.forEach(link=>{


    link.addEventListener(
        "click",
        ()=>{


            mobileMenu.classList.remove(
                "active"
            );


        }
    );


});








/*==========================================
            SMOOTH SCROLL
==========================================*/


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


    link.addEventListener(
        "click",
        function(e){


            const target =
            document.querySelector(
                this.getAttribute("href")
            );


            if(target){


                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth"

                });


            }


        }
    );


});








/*==========================================
        SECTION ANIMATION
==========================================*/


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add(
            "show"
        );


    }


});


},
{

threshold:0.15

});





document.querySelectorAll(
"section,.card"
)
.forEach(element=>{


    element.classList.add(
        "hidden"
    );


    observer.observe(element);


});








/*==========================================
            HERO PARALLAX
==========================================*/


const hero =
document.querySelector(".hero");



window.addEventListener(
"scroll",
()=>{


    if(hero){


        hero.style.backgroundPositionY =
        window.scrollY * 0.35 + "px";


    }


});








/*==========================================
        TERMINAL LOG EFFECT
==========================================*/


const logo =
document.querySelector(".logo");



if(logo){


setInterval(()=>{


    logo.style.opacity="0.7";


    setTimeout(()=>{


        logo.style.opacity="1";


    },150);



},5000);


}