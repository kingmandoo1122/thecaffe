window.onload = function(){


    let rect
    let scroll
    let viewheight = window.innerHeight
    let pointmove = document.querySelectorAll(".pointmove")
    let domino = document.querySelectorAll(".domino")
    let nav = document.querySelector("nav")
function getitemtop(event){ // event = 태그 = document.querySelector
    rect = event.getBoundingClientRect()
    return rect.top + scroll
}

// 스크롤애니메이션 함수제작 - 뷰포트 기준,*rate만큼 아래에서부터 보임.
function makescrollani(tag,rate){
    for(let i=0; i<tag.length; i++){
        if (scroll > getitemtop(tag[i]) - viewheight*rate){
            tag[i].classList.add("on")
        }
        else{
            tag[i].classList.remove("on")
        }
    }
}


window.addEventListener("scroll",function(){
    scroll = window.scrollY

    makescrollani(pointmove,0.8)
    makescrollani(domino,0.5)

}
)



let num_up = 0
let num_down = 0
window.addEventListener("wheel",function(e){
    let checkwheeldirection = e.deltaY

    if(checkwheeldirection>0){
        num_up++
        if(num_up>2){
            nav.classList.add("hide")
            num_up=0
        }
    }
    if(checkwheeldirection<0){
        num_down++
        if(num_down>2){
            nav.classList.remove("hide")
        }
    }

})















}