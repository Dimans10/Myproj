(function(){
    let burger = document.querySelector('.burger-container'),
        hamburger = document.querySelector('.hamburger'),
        titleItem = document.querySelectorAll('.titleul-item a');
    
    
    burger.addEventListener('click', () => {
        hamburger.classList.toggle('titleul-opened');
    });
    
    for(let i = 0; i < titleItem.length; i++)
        {
            titleItem[i].onclick = function(){
                hamburger.classList.toggle('titleul-opened');
            }
        }
}());

(function() {
    let left = document.querySelector('.slider .LeftRight .prev'),
        right = document.querySelector('.slider .LeftRight .next'),
        slide = document.querySelectorAll('.slider .block'),
        i = 0,
        time = 5000,
        www;
    
    left.addEventListener('click', (event) => {
        event.preventDefault();
        clearInterval(www);
        slide[i].classList.remove('active');
        i--;
        if (i < 0) {
            i = slide.length-1;
        }
        
        slide[i].classList.add('active');
        www = setInterval(right.onclick,time);
    });
    
    right.addEventListener('click', (event) => {
        event.preventDefault();
        clearInterval(www);
        slide[i].classList.remove('active');
        i++;
        if(i >= slide.length) {
            i = 0;
        }
        slide[i].classList.add('active');
        www = setInterval(right.onclick,time);
    });  
        www = setInterval(right.onclick,time);
}());


(function(){
    const speed = 6;
    let top = 0,
        src;
    [].forEach.call(document.querySelectorAll('.move-to'), (item) => {
        const target = document.getElementById(item.getAttribute('href').split('#')[1]);
        item.addEventListener('click', (event) => {
            event.preventDefault();
            let topvalue = Math.abs(target.offsetTop);
            console.log(top);
            console.log(topvalue);
            let y = top;
            if (top > topvalue) {
                src = setInterval( function () {
                    top -= 10;
                    window.scrollTo(0,top);
                    if (top <= topvalue) {
                        clearInterval(src);
                        top = topvalue;
                    }
                },speed);
            }
            else {
                console.log(top);
                console.log(topvalue);
                src = setInterval(function () {
                    top +=10;
                    window.scrollTo(0, top);
                    if (top >= topvalue) {
                        clearInterval(src);
                    }
                }, speed);
            }
        });
    });
}());

function displayNone(){
        form.style.display = "none";
    }

function showA() {
    let form = document.querySelector('.popup');
    console.log("ЙЙЙЙ");
    form.style.display = "block";
    ////form.style.opacity = 1;
    setTimeout(function(){
        form.classList.add('active');
        form.addEventListener('transitionend', displayNone);
    }, 0);
};


function hidenA() {
    let form = document.querySelector('.popup');
    form.classList.remove('active');
    setTimeout(function(){
        form.style.display = "none";
        form.removeEventListener('transitionend', displayNone(form));
    }, 0);
    // не получилось сделать адекватное плавное закрытие формы. 
};

(function () {
    let pop = document.getElementById('lowly'),
        form = document.querySelector('.popup'),
        b = false;
    pop.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("DDDD");
        if (!b) {
            showA();
            b = true;
        }
    });
    document.querySelector('.popup_bg').addEventListener('click', (event) => {
        hidenA();
        b = false;
    });
}());

(function () {
    let menu = document.getElementById('menu'),
        text = document.querySelectorAll('.header .menu a');
    if (document.body.scrollTop >= 600) {
        menu.style.position = "fixed";
        for(let i = 0; i < text.length; i++){
            text[i].style.color = "#17daa3";
        }
    }
    else {
         menu.style.position = "relative";
         for(let i = 0; i < text.length; i++){
            text[i].style.color = "white";
         }
    }
}());