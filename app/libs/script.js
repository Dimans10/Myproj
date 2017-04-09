(function(){
    let burger = document.querySelector('.burger-container'),
        hamburger = document.querySelector('.hamburger'),
        titleItem = document.querySelectorAll('.titleul-item a');
    
    
    burger.onclick = function() {
        hamburger.classList.toggle('titleul-opened');
    }
    
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
        slide = document.querySelectorAll('.slider .block_info .block'),
        i = 0,
        myinterval = setInterval(right.onclick,5000);
    
    left.onclick = function() {
        slide[i].classList.remove('active');
        i--;
        if (i < 0) {
            i = slide.length-1;
        }
        
        slide[i].classList.add('active');
    }
    
    right.onclick = function(){
      slide[i].classList.remove('active');
      i++;
      if(i >= slide.length) {
        i = 0;
      }

      slide[i].classList.add('active');
    }  
    setInterval(right.onclick,5000);
}());


(function() {
    let abo = document.querySelectorAll('.titleul-item'),
        title = document.getElementById('about'),
        work = document.getElementById('work'),
        services = document.getElementById('services'),
        blog = document.getElementById('blog'),
        top = 0,
        topValue = 0;
    
    console.log(title.getBoundingClientRect());
    console.log(work.getBoundingClientRect());
    console.log(services.getBoundingClientRect());
    console.log(blog.getBoundingClientRect());
    
    abo[1].onclick = function meracle () {
        topValue = title.getBoundingClientRect().top;
        let scr = setInterval(function () {
            top += 10;
            window.scrollTo(0, top);
            if (top > topValue) {
                clearInterval(scr);
                top = 0;
            }
        }, 15);
    }
    
    abo[2].onclick = function () {
        topValue = work.getBoundingClientRect().top;
        let scr = setInterval(function () {
            top += 10;
            window.scrollTo(0, top);
            if (top > topValue) {
                clearInterval(scr);
                top = 0;
            }
        }, 10);
        console.log(work.getBoundingClientRect());
    }

    abo[3].onclick = function () {
        topValue = services.getBoundingClientRect().top;
        let scr = setInterval(function () {
            top += 10;
            window.scrollTo(0, top);
            if (top > topValue) {
                clearInterval(scr);
                top = 0;
            }
        }, 10);
    }

        abo[4].onclick = function () {
        topValue = blog.getBoundingClientRect().top;
        let scr = setInterval(function () {
            top += 10;
            window.scrollTo(0, top);
            if (top > topValue) {
                clearInterval(scr);
                top = 0;
            }
        }, 8);
    }

}());