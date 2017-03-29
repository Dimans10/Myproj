(function(){
    let burger = document.querySelector('.burger-container'),
        hamburger = document.querySelector('.hamburger'),
        titleItem = document.querySelectorAll('.titleul-item a');
    
    
    burger.onclick = function() {
        hamburger.classList.toggle('titleul-opened');
    }
    
    for(var i = 0; i < titleItem.length; i++)
        {
            titleItem[i].onclick = function(){
                hamburger.classList.toggle('titleul-opened');
            }
        }
}());