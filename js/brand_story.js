window.onload = function(){


    let nav = document.querySelector("nav")

    // 스크롤 방향감지후 숨기기,나타내기 

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
    
    
    let rect
    let scroll
    let viewheight = window.innerHeight
    let downtoupani = document.querySelectorAll(".downtoupani")
    let opacityani = document.querySelectorAll(".opacityani")
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


    makescrollani(downtoupani,0.7)
    makescrollani(opacityani,0.65)

}
)





















}