window.onload = function(){


    let nav = document.querySelector("nav")
    let mo_nav= document.querySelector("#nav_mo>nav")
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







let mo_nav_ul_li = document.querySelectorAll("#nav_mo .nav_ul>li")
let mo_nav_ul_li_ul = document.querySelectorAll("#nav_mo .nav_ul>li>ul")
let nav_more = document.querySelectorAll("#nav_mo .nav_more")
let nav_ul_li_a = document.querySelectorAll("#nav_mo .nav_ul>li>a")
let count_list = [0,0,0,0,0]
let mo_nav_ul = document.querySelector("#nav_mo .nav_ul")
let open_nav = document.querySelector(".open_nav")
let close_nav = document.querySelector(".close_nav")
let nav_sns = document.querySelector(".nav_sns")
let line = document.querySelector(".line")
let line_two = document.querySelector(".line_two")
let body = document.querySelector("body")
let mo_modal = document.querySelector("#nav_mo .modal")

open_nav.addEventListener("click",function(){
    mo_nav_ul.style.right = `0`
    close_nav.classList.add("on")
    open_nav.classList.remove("on")
    body.classList.add("lock")
    mo_modal.classList.add("show")
    nav_sns.style.right = `0`
    line.style.right =`0`
    line_two.style.right =`0`
    mo_nav.classList.add("on")
})
close_nav.addEventListener("click",function(){
    mo_nav_ul.style.right = `-100%`
    open_nav.classList.add("on")
    close_nav.classList.remove("on")
    body.classList.remove("lock")
    mo_modal.classList.remove("show")
    nav_sns.style.right = `-100%`
    line.style.right = `-100%`
    line_two.style.right = `-100%`
    mo_nav.classList.remove("on")
})





for (let i = 0; i < nav_more.length; i++) {
    nav_more[i].addEventListener("click", function() {
            if (count_list[i] == 0) {
                mo_nav_ul_li[i].style.height = `${mo_nav_ul_li_ul[i].offsetHeight}px`;
                nav_ul_li_a[i].classList.add("on");
                count_list[i] = 1;
    
                for (let j = 0; j < nav_more.length; j++) {
                    if (i !== j) {
                        mo_nav_ul_li[j].style.height = `4%`;
                        nav_ul_li_a[j].classList.remove("on");
                        count_list[j] = 0;
                    }
                }

            } else if (count_list[i] == 1) {
                mo_nav_ul_li[i].style.height = `4%`;
                nav_ul_li_a[i].classList.remove("on");
                count_list[i] = 0;
            }
        });
    }



















}