(function(){
    let burger = document.querySelector('.burger-container'),
        hamburger = document.querySelector('.hamburger'),
        titleItem = document.querySelectorAll('.titleul-item a');
    
    console.log("burger");
    
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
    const slider = angular.element(document.querySelector(o.sliderr));
    const slides = angular.element(document.querySelectorAll(o.slidess));
    const dots = angular.element(document.querySelectorAll(o.dotActiveClass));
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
        const dotConteiner = angular.element(document.querySelector(o.dotActiveClass));
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
    let left = angular.element(document.querySelector('.slider .LeftRight .prev')),
        right = angular.element(document.querySelector('.slider .LeftRight .next')),
        dot = angular.element(document.querySelectorAll('.act_s'));
    
    left.on('click', (event) => {
        event.preventDefault();
        myslider.stopAutoplay();
        myslider.prevSlide();
        myslider.autoplay();
    });
    right.on('click', (event) => {
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
    console.log("dsda");
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
    let form = angular.element(document.querySelector('.popup')),
        menu = angular.element(document.querySelector('.header .menu ul'));
    form.css("display", "block");
    menu.css("zIndex", "0");
    //form.style.display = "block";
    //menu.style.zIndex = "0";
    setTimeout(function(){
        form.addClass("active");
    }, 0);
};

function hidenA() {
    let form = angular.element(document.querySelector('.popup')),
        menu = angular.element(document.querySelector('.header .menu ul'));
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
    let pop = angular.element(document.getElementById('lowly')),
        cancel = angular.element(document.getElementById('cancel')),
        form = angular.element(document.querySelector('.popup')),
        fone = angular.element(document.querySelector('.popup_bg')),
        submit = angular.element(document.getElementById('subway'));
    console.log("sdsasdas");
    pop.on('click', (event) => {
        event.preventDefault();
        console.log("Yep");
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
    let menu = angular.element(document.querySelector('.header .menu ul')),
        text = angular.element(document.querySelectorAll('.header .menu a'));
    console.log("SCROOL");
    window.on('scroll', (event) =>{
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

/*$.getJSON('data.json', function(data) {
        var output="<ul>";
        for (var i in data.users) {
            output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month+"</li>";
        }

        output+="</ul>";
        document.getElementById("placeholder").innerHTML=output;
  });*/

(function () {
    let pop = document.querySelector('.jsonformat'),
        xhr = new XMLHttpRequest();
        xhr.open('GET', '../info.json', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                alert( xhr.status + ': ' + xhr.statusText );
            } else {
                let out = "<p>",
                    info = JSON.parse(xhr.responseText);
                out += info.mapinfo + "</p>";
                pop.innerHTML = out;
            }
        }
}());