var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryinner=document.querySelector('.gallery--inner img')
var gallery = document.querySelector('.gallery')

var currentindex = 0;

function showgallery(){
    if(currentindex==0){
        [prev.classList.add('hide')]
    }else{
        prev.classList.remove('hide')
    }

    if(currentindex==images.length-1){
        [next.classList.add('hide')]
    }else{
        next.classList.remove('hide')
    }
    //display
    galleryinner.src = images[currentindex].src
    gallery.classList.add('show')
}

images.forEach((item,index)=>{
    item.addEventListener('click', function(){
        currentindex = index
        showgallery()
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown',function(){
    if(e.keycode ==27){
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function(){
    if(currentindex >0){
        currentindex--
        showgallery()
    }
})
next.addEventListener('click', function(){
    if(currentindex <images.length-1){
        currentindex++
        showgallery()
    }
})