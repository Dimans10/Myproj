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

const myslider = (function SliderClass(options = {}) {
    const defaultOptions = {
        time: 4000,
        sliderr: '.slider',
        slidess: '.slider .block',
        activeClass: 'active',
        dotActiveClass: '.act_s'
    };
    const o = Object.assign({ }, defaultOptions, options);
    const slider = document.querySelector(o.sliderr);
    const slides = document.querySelectorAll(o.slidess);
    const dots = document.querySelectorAll(o.dotActiveClass);
    let curSlide = 0;
    
    function SetActiveSlide(num) {
        [].forEach.call(slides, (item) => {
            item.classList.remove(o.activeClass);
        });
        
        [].forEach.call(dots, (i) => {
            i.classList.remove(o.activeClass);
        });
        
        slides[num].classList.add(o.activeClass);
        dots[num].classList.add(o.activeClass);
        curSlide = num;
    }
    
    function nextSlide() {
        slides[curSlide].classList.remove(o.activeClass);
        dots[curSlide].classList.remove(o.activeClass);
        curSlide = curSlide < slides.length-1 ? ++curSlide : 0;
        slides[curSlide].classList.add(o.activeClass);
        dots[curSlide].classList.add(o.activeClass);
    }

    function prevSlide() {
        slides[curSlide].classList.remove(o.activeClass);
        dots[curSlide].classList.remove(o.activeClass);
        curSlide = curSlide == 0 ? slides.length-1 : --curSlide;
        slides[curSlide].classList.add(o.activeClass);
        dots[curSlide].classList.add(o.activeClass);
    }
    
    let timeId;
    
    function autoplay() {
        timeId = setInterval(nextSlide, o.time);
    }
    
    function stopAutoplay() {
        clearInterval(timeId);
    }
    
    function createDots() {
        const dotConteiner = document.querySelector(o.dotActiveClass);
        [].forEach.call(slides, (item, ind) => {
            let dot = document.createElement('div');
            dot.classList.add(o.dotActiveClass);
            dot.addEventListener('click', () => {
                SetActiveSlide(ind);
            });
        });
    }; // createDots();
    
    return {
        nextSlide,
        prevSlide,
        autoplay,
        stopAutoplay,
        SetActiveSlide
    }
}());


(function() {
    let left = document.querySelector('.slider .LeftRight .prev'),
        right = document.querySelector('.slider .LeftRight .next'),
        dot = document.querySelectorAll('.act_s');
        
    
    left.addEventListener('click', (event) => {
        event.preventDefault();
        myslider.stopAutoplay();
        myslider.prevSlide();
        myslider.autoplay();
    });
    right.addEventListener('click', (event) => {
        event.preventDefault();
        myslider.stopAutoplay();
        myslider.nextSlide();
        myslider.autoplay();
    });
    
    for(let i = 0; i < dot.length; ++i) {
        dot[i].addEventListener('click', (event) => {
            event.preventDefault();
            myslider.stopAutoplay();
            myslider.SetActiveSlide(i);
            myslider.autoplay();
        });
    }
    
    myslider.autoplay();
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

function showA() {
    let form = document.querySelector('.popup'),
        menu = document.querySelector('.header .menu ul');
    form.style.display = "block";
    menu.style.zIndex = "0";
    setTimeout(function(){
        form.classList.add('active');
    }, 0);
};

function hidenA() {
    let form = document.querySelector('.popup'),
        menu = document.querySelector('.header .menu ul');
    setTimeout(function(){
        form.style.display = "none";
    }, 1200);
        form.classList.remove('active');
        menu.style.zIndex = "2";
};

// Анимация закрытия формы, конечно, не самая лучшая, но хотя бы работает 

function resetInput(){
    let userName = document.getElementById('userName'),
        userPhone = document.getElementById('userPhone'),
        userEmail = document.getElementById('userEmail'),
        textbox = document.getElementById('textbox'),
        menu = document.querySelector('.header .menu ul'),
        trueborder = "rgba(0,0,0,0.3) 2px solid";
    
    userName.value = "";
    userPhone.value = "";
    userEmail.value = "";
    userName.style.border = trueborder;
    userPhone.style.border = trueborder;
    userEmail.style.border = trueborder;
}

(function () {
    let pop = document.getElementById('lowly'),
        cancel = document.getElementById('cancel'),
        form = document.querySelector('.popup'),
        fone = document.querySelector('.popup_bg'),
        submit = document.getElementById('subway');
    
    pop.addEventListener('click', (event) => {
        event.preventDefault();
       // console.log("DDDD");
        showA();
    });
    
    fone.addEventListener('click', (event) => {
        hidenA();
        resetInput();
    });
    
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
        hidenA();
        resetInput();
    });
    
}());

(function () {
    let menu = document.querySelector('.header .menu ul'),
        text = document.querySelectorAll('.header .menu a');
    
    window.addEventListener('scroll', (event) =>{
        if (window.scrollY >= 600 && window.innerWidth > 589) {
            menu.style.position = "fixed";
            menu.style.borderRadius = "5px";
            menu.style.background = "#17daa3"
            menu.style.border = "#17daa3 5px solid";
            menu.style.minHeight = "0px";
        }
        else {
            menu.style.position = "relative";
            menu.style.borderRadius = "";
            menu.style.border = "";
            menu.style.background = ""
            menu.style.minHeight = "100px"
        }
    })
}());

(function CheckFormInputs() {
    const falseborder = "#ff6666 3px solid";
    const trueborder = "rgba(0,0,0,0.3) 2px solid";
    let submit = document.getElementById('subway'),
        userName = document.getElementById('userName'),
        userPhone = document.getElementById('userPhone'),
        userEmail = document.getElementById('userEmail'),
        checkName = /^[a-z-а-яё]+$/i,
        checkEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,3}$/i,
        boolName = false,
        boolEmail = false;

    userPhone.onkeypress = function(e) {
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        if (e.charCode < 48 || e.charCode > 57) {
            return false;
        }
    }
    
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        boolEmail = checkEmail.test(userEmail.value);
        boolName = checkName.test(userName.value);
        
        if (!userName.value || !boolName){
            userName.style.border = falseborder;
            return false;
        }
        else {
            userName.style.border = trueborder;
        }

        if (!userPhone.value || userPhone.value.length > 14){
            userPhone.style.border = falseborder;
            return false;
        }
        else {
            userPhone.style.border = trueborder;
        }
        
        if (!userEmail.value || !boolEmail){
            userEmail.style.border = falseborder;
            return false;
        }
        else {
            userEmail.style.border = trueborder;
        }
        console.log(userName.value + ' ' + userPhone.value + ' ' + userEmail.value);
        hidenA();
        resetInput();
    });
}());

(function () {
    let pop = document.getElementById('midly'),
        xhr = new XMLHttpRequest();
    pop.addEventListener('click', (event) => {
        xhr.open('GET', '../info.json', true);
        xhr.send();
        event.preventDefault();
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                alert( xhr.status + ': ' + xhr.statusText );
            } else {
                alert( xhr.responseText );
            }
        }
    });
}());