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

function prevSlide(mytimer, slide, i) {
    clearInterval(mytimer);
    slide[i].classList.remove('active');
    i--;
    if (i < 0) {
        i = slide.length-1;
    }    
    slide[i].classList.add('active');
    //www = setInterval(right.onclick,time);
};

function nextSlide(mytimer, slide, i) {
    clearInterval(mytimer);
    slide[i].classList.remove('active');
    i++;
    if(i = slide.length) {
        i = 0;
    }
    slide[i].classList.add('active');
};

(function() {
    let left = document.querySelector('.slider .LeftRight .prev'),
        right = document.querySelector('.slider .LeftRight .next'),
        slide = document.querySelectorAll('.slider .block'),
        i = 0,
        time = 5000,
        www;
    
    left.addEventListener('click', (event) => {
        event.preventDefault();
        prevSlide(www);
        www = setInterval(prevSlide(www, slide, i),time);
    });
    
    right.addEventListener('click', (event) => {
        event.preventDefault();
        nextSlide(www);
        www = setInterval(nextSlide(www, slide, i), time);
    });  
        www = setInterval(nextSlide(www, slide, i), time);
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
    let form = document.querySelector('.popup');
    setTimeout(function(){
        form.style.display = "none";
    }, 1200);
        form.classList.remove('active');
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
        submit = document.getElementById('subway'),
        b = false;
    
    pop.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("DDDD");
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
        if (window.scrollY >= 600) {
            menu.style.position = "fixed";
            menu.style.borderRadius = "5px";
            menu.style.background = "#17daa3"
            menu.style.border = "#17daa3 5px solid";
            menu.style.minHeight = "0px";
            menu.style.zIndex = "1";
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
        b = 3,
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

