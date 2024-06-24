window.onload = function(){






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

    window.addEventListener("wheel",function(e){
        let checkwheeldirection = e.deltaY
    
        if(checkwheeldirection>0){
            num_up++
            if(num_up>2){
                mo_nav.classList.add("hide")
                num_up=0
            }
        }
        if(checkwheeldirection<0){
            num_down++
            if(num_down>2){
                mo_nav.classList.remove("hide")
            }
        }
    
    })
    




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
    
    
    
    















    let rect
    let scroll
    let viewheight = window.innerHeight
    let nav = document.querySelector("nav")
function getitemtop(event){ // event = 태그 = document.querySelector
    rect = event.getBoundingClientRect()
    return rect.top + scroll
}



let faq_info_array = [

{
    cate : "스탬프",
    question : "스탬프는 어떻게 적립할 수 있나요?",
    answer : "메뉴주문 시, 적립 예정 휴대번호 입력 or 더카페 APP내 멤버십바코드 를 제시하여 스탬프를 적립할 수 있습니다. (※ 제조음료에 한함)"
}
,
{ 
    cate : "스탬프",
    question : "스탬프는 적립 기준은 어떻게 되나요?",
    answer : "제조음료 1잔당 스탬프 1개가 발행됩니다.<br>※ 디저트, RTD제품, MD상품, 프로모션 메뉴는 제외"

}
,
{ 
    cate : "스탬프",
    question : "구입 시, 적립을 못했을 경우 추후 적립 가능한가요?",
    answer : "구매일로부터 48시간 내 영수증 지참하여 구입 매장에 방문하시면 추후 적립가능합니다. (※ 타매장 적립 불가)"

}
,
{ 
    cate : "스탬프",
    question : "스탬프 유효기간은 어떻게 되나요?",
    answer : "스탬프 유효기간는 적립일로부터 180일이며, 유효기간 경과 시 소멸됩니다. "

}
,
{ 
    cate : "스탬프",
    question : "전매장에서 스탬프 적립 가능 한가요?",
    answer : "일부 매장에서는 적립이 불가하며 각 매장별로 스탬프가 적립됩니다."

}
,
{ 
    cate : "회원",
    question : "더카페APP은 어디서 설치(다운로드)할 수 있나요?",
    answer : "애플iOS는 앱스토어, 안드로이드OS는 구글플레이 스토어에서 <더카페 멤버십> 검색 후 설치할 수 있습니다."

}
,
{ 
    cate : "회원",
    question : "회원가입은 어떻게 하나요?",
    answer : "애플iOS는 앱스토어, 안드로이드OS는 구글플레이 스토어에서 <더카페 멤버십> 검색 후 설치할 수 있습니다."

},
{ 
    cate : "회원",
    question : "더카페APP은 어디서 설치(다운로드)할 수 있나요?",
    answer : "더카페 멤버십 APP을 모바일기기에 다운로드하여 회원가입 가능합니다. 단 가입 시, 국내 이동통신사의 본인명의 휴대전화번호로 인증이 필요하여 만14세 미만 회원은 가입이 불가능합니다."

},
{ 
    cate : "회원",
    question : "APP 비밀번호를 잊어버렸어요. 어떻게 찾나요?",
    answer : "로그인 전 : 로그인 버튼 아래 비밀번호 찾기를 통해서 휴대폰인증 후 직접 변경할 수 있습니다. 변경이 원활하지 않다면 더카페 고객센터(1644-0513)로 문의바랍니다.<br>로그인 후 : 앱 로그아웃 후 비밀번호 찾기를 할 수 있습니다. 앱 왼쪽 위 전체메뉴에서 로그아웃 후 로그인 전 단계와 동일하게 진행이 필요합니다."

}
,
{ 
    cate : "회원",
    question : "멤버십 사용하는 전화번호가 바뀌었는데 어떻게 하나요?",
    answer : "현재 더카페 멤버십은 휴대폰번호가 아이디(ID)로 사용되어서 직접 변경은 불가능합니다. 더카페 고객센터(1644-0513)로 문의바랍니다."

}


,
{ 
    cate : "제품",
    question : "음료 기본사이즈는 어떻게 되나요?",
    answer : "핫/아이스는 기본 벤티(20oz)이며, 아인슈페너의 경우 하프벤티(14oz)로 제공됩니다."

}
,
{ 
    cate : "제품",
    question : "원두 원산지가 어떻게 되나요?",
    answer : "원두의 원산지는 브라질, 베트남, 콜롬비아이며, 디카페인 콜드브루와 원두의 경우, 콜롬비아를 사용하고 있습니다."

}
,
{ 
    cate : "제품",
    question : "마일드/ 다크 원두의 차이점은 무엇인가요?",
    answer : "마일드 원두는 견과류의 깔끔하고 고소한 맛과 향을, 다크 로스트 원두는 다크초콜릿의 깊고 진한 맛과 향을 느끼실 수 있습니다. 추가로, 저녁에도 안심하시고 드실 수 있는 디카페인 원두도 있어 고객님의 취향에 따라 선택이 가능합니다."

}
,
{ 
    cate : "제품",
    question : "개인컵(텀블러)를 사용하려고 하는데, 어떤 크기의 컵을 사용해야 하나요?",
    answer : "기본 20oz(591mL)로 제공되고 있으나 일부 메뉴는 하프벤티 14oz(414mL) or 빅벤티 사이즈 32oz(946mL)로 제공되오니 제품별 용량을 참고하여 이용해 주시기 바랍니다. "

}
,
{ 
    cate : "기타",
    question : "탄소중립포인트가 무엇인가요?",
    answer : "한국환경공단이 주최하는 탄소중립포인트(생활실천)제 운영에 관한 규정 제2조1항에 따라, 일상생활에서 텀블러 이용 등 다양한 녹색생활 실천활동에 인센티브를 부여하는 제도입니다.  "

}
,
{ 
    cate : "기타",
    question : "매장정보(위치, 전화번호)를 알고 싶어요.",
    answer : "더카페 홈페이지 매장찾기 또는 더카페 멤버십 앱 내 전체메뉴> 매장찾기를 통해 매장정보를 확인 가능합니다.  "

}
,
{ 
    cate : "기타",
    question : "모바일상품권 전 매장에서 사용 가능한가요?",
    answer : "일부 매장에서 사용이 불가합니다. "

}
,
{ 
    cate : "기타",
    question : "모바일상품권 이용 시, 현금영수증 발행 가능한가요?",
    answer : "모바일상품권 이용 시, 현금영수증 발행 가능합니다.<br>더카페 앱 픽업주문 시에는, 모바일상품권 조회 단계에서 현금영수증 발행여부를 선택할 수 있습니다. "

}
,


]

   
function showinfo(array){
    let result = ""
    for(let i=0;i<array.length;i++){
        result += 
        `
        <li>
            <dl>
                <dt>Q . [${array[i].cate}] ${array[i].question}</dt>
                <dd>A . ${array[i].answer}</dd>
            </dl>
        </li>
        `
    }
    return result
}

function dtclick(){
    
    let counting = [0,0,0,0,0,0,0,0,0,0]
    let faq_info_li = document.querySelectorAll(".faq_info>ul>li")
    let faq_info_dt = document.querySelectorAll(".faq_info>ul>li>dl>dt")
    

    for(let i=0;i<faq_info_dt.length;i++){

        faq_info_dt[i].addEventListener("click",function(e){
            e.preventDefault()
            counting[i]++
    
            for(let j=0; j<faq_info_dt.length;j++){
                faq_info_li[j].style.height = `50px`
            }
    
            if(counting[i] == 1 ){
                for(let j=0; j<faq_info_li.length;j++){
                    counting[j] = 0
                }
            faq_info_li[i].style.height = `auto`
            counting[i] ++
            }
    
            else if(counting[i] > 1){
                faq_info_li[i].style.height =`50px`
                counting[i] = 0
            }
            
        }
        )
    }
    



}




let faq_info_ul = document.querySelector(".faq_info>ul")




let faq_title_ul_li = document.querySelectorAll(".faq_title_ul>li")
let faq_info_ul_li_dl = document.querySelectorAll(".faq_info>ul>li>dl")


faq_info_ul.innerHTML = showinfo(faq_info_array)

dtclick()


let numberli = document.querySelectorAll(".number>ul>li")
let prevlist 
let nextlist 



let count = 1

console.log(prevlist)

for(let i=1; i<numberli.length-1 ; i++){

    numberli[i].addEventListener("click",function(e){

        prevlist = document.querySelectorAll(".faq_info>ul>li:nth-child(-n+9)")
        nextlist = document.querySelectorAll(".faq_info>ul>li:nth-child(n+10)")



        e.preventDefault()
        numberli.forEach(function(li){
            li.classList.remove("on")
        })
        numberli[i].classList.add("on")
        count = i
        
        if(count==1){
            for(let i=0;i<prevlist.length;i++){
                nextlist[i].style.display =`none`
            }
            for(let i=0;i<nextlist.length;i++){
                prevlist[i].style.display =`block`
            }
        
        }
        if(count == 2){
            for(let i=0;i<prevlist.length;i++){
                prevlist[i].style.display =`none`
            }
            for(let i=0;i<nextlist.length;i++){
                nextlist[i].style.display =`block`
            }
        
        }

    })
}








for(let i=0;i<faq_title_ul_li.length;i++){

    faq_title_ul_li[i].addEventListener("click",function(e){

        prevlist = document.querySelectorAll(".faq_info>ul>li:nth-child(-n+9)")
        nextlist = document.querySelectorAll(".faq_info>ul>li:nth-child(n+10)")

        count = 1
        for(let j=0;j<faq_title_ul_li.length;j++){
            faq_title_ul_li[j].classList.remove("on")
        }
        faq_title_ul_li[i].classList.add("on")

        e.preventDefault()
        let cate_name = this.getAttribute("data-name")
        console.log(cate_name)
        let new_array = []

        faq_info_array.map(function(item){
            if(item.cate == cate_name){
                new_array.push(item)
                faq_info_ul.innerHTML = showinfo(new_array)
            }
            if(cate_name == "전체"){

                faq_info_ul.innerHTML = showinfo(faq_info_array)
            }
        })

        dtclick()
    })


}


document.querySelector(".right_arrow1").addEventListener("click",function(e){

    prevlist = document.querySelectorAll(".faq_info>ul>li:nth-child(-n+9)")
    nextlist = document.querySelectorAll(".faq_info>ul>li:nth-child(n+10)")


    e.preventDefault()
    count ++
    if(count>6){
        count=1
    }

    numberli.forEach(li => li.classList.remove("on"));
    numberli[count].classList.add("on");


    if(count==1){
        for(let i=0;i<prevlist.length;i++){
            nextlist[i].style.display =`none`
        }
        for(let i=0;i<nextlist.length;i++){
            prevlist[i].style.display =`block`
        }
    
    }
    if(count == 2){
        for(let i=0;i<prevlist.length;i++){
            prevlist[i].style.display =`none`
        }
        for(let i=0;i<nextlist.length;i++){
            nextlist[i].style.display =`block`
        }
    
    }
    

})




document.querySelector(".left_arrow1").addEventListener("click",function(e){


    prevlist = document.querySelectorAll(".faq_info>ul>li:nth-child(-n+9)")
    nextlist = document.querySelectorAll(".faq_info>ul>li:nth-child(n+10)")

    e.preventDefault()
    count--
    if(count<1){count=6}
    numberli.forEach(function(li){
        li.classList.remove("on")

    numberli[count].classList.add("on")

        console.log(count)
    })
    
    if(count==1){
        for(let i=0;i<prevlist.length;i++){
            nextlist[i].style.display =`none`
        }
        for(let i=0;i<nextlist.length;i++){
            prevlist[i].style.display =`block`
        }
    
    }
    if(count == 2){
        for(let i=0;i<prevlist.length;i++){
            prevlist[i].style.display =`none`
        }
        for(let i=0;i<nextlist.length;i++){
            nextlist[i].style.display =`block`
        }
    
    }


})










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










































}