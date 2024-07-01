window.onload =function(){

    let train = document.querySelector(".train")
    let best_menu_ul_li = document.querySelectorAll(".best_menu_ul>li")
    let mid_station = document.querySelectorAll(".mid_station")
    let count = 0
    let body = document.querySelector("body")
    let station = document.querySelectorAll(".station")

    let popup = document.querySelectorAll(".menu_popup")
    let modal = document.querySelector(".modal")
    let cls_btn = document.querySelectorAll(".cls_btn")




    let bot_sec_menu_ul_li_0 = document.querySelectorAll(".station_1 .bot_sec_menu_ul>li")
    let bot_sec_menu_ul_li_1 = document.querySelectorAll(".station_2 .bot_sec_menu_ul>li")
    let bot_sec_menu_ul_li_2 = document.querySelectorAll(".station_3 .bot_sec_menu_ul>li")
    let bot_sec_menu_ul_li_3 = document.querySelectorAll(".station_4 .bot_sec_menu_ul>li")
    let bot_sec_menu_ul_li_4 = document.querySelectorAll(".station_5 .bot_sec_menu_ul>li")
    let bot_sec_menu_ul_li_5 = document.querySelectorAll(".station_6 .bot_sec_menu_ul>li")





    let menu_more = document.querySelectorAll(".mid_section .more")

    let menu_popup_img = document.querySelectorAll(".menu_popup>h1")

    let menu_popup_div = document.querySelectorAll(".popup_div")

    let mid_change_img = document.querySelectorAll(".mid_section>div>p")

    let mid_change_div = document.querySelectorAll(".change_div")






    let rect
    let scroll
    let viewheight = window.innerHeight

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



// 스크롤 방향감지후 숨기기,나타내기 


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




    let img_list_0 = [
        `<img src="./img/menu_drink_caffe_latte/Americano.png" alt="아메리카노">`,
        `<img src="./img/menu_drink_caffe_latte/Brown_Sugar_Bubble_Cafe_Latte.png" alt="흑당 버블 카페라떼">`,
        `<img src="./img/menu_drink_caffe_latte/The_Vanilla_Latte.png" alt="시크릿 바닐라 라떼">`,
        `<img src="./img/./menu_drink_caffe_latte/Caramel_Macchiato.png" alt="카라멜마끼아또">`,
        `<img src="./img/./menu_drink_caffe_latte/Hazelnut_Caffe_Mocha.png" alt="헤이즐넛라떼">`,
        `<img style="position: relative; top: 4%;" src="./img/./menu_drink_caffe_latte/Secret_Latte_with_Cream.png" alt="시크릿라떼슈페너">`,
        `<img src="./img/./menu_drink_caffe_latte/Cappuccino.png" alt="카푸치노">`,
        `<img src="./img/./menu_drink_caffe_latte/Dolce_Latte.png" alt="연유라떼">`
    ]

    let img_list_1 = [
        `<img src="./img/./menu_drink_caffe_latte/Brown_Sugar_Bubble_Milk_Latte.png" alt="흑당 버블 우유라떼">`,
        `<img src="./img/./menu_drink_bubble_tea/Brown_Sugar_Bubble_Choco_Latte.png" alt="흑당 버블 초코라떼">`,
        `<img src="./img/./menu_drink_bubble_tea/Bubble_Black_Tea.png" alt="버블블랙티">`,
        `<img src="./img/./menu_drink_bubble_tea/Bubble_Choco_Tea.png" alt="버블초코티">`,
        `<img src="./img/./menu_drink_bubble_tea/Bubble_Milk_Tea.png" alt="버블밀크티">`,
        `<img src="./img/./menu_drink_bubble_tea/Bubble_Taro_Tea.png" alt="버블타로티">`
    ]
    let img_list_2 = [
        `<img src="./img/./menu_drink_tea/Mungyeong_Omija_Yuja_Tea.png" alt="문경 오미자 유자차">`,
        `<img src="./img/./menu_drink_tea/Grapefruit_Muscat_Tea.png" alt="생자몽 머스캣티">`,
        `<img src="./img/./menu_drink_tea/Green_Tangerine_Hanrabong_Tea.png" alt="제주 청귤 한라봉티">`,
        `<img src="./img/./menu_drink_tea/Lemon_Sparkling_Ade.png" alt="레몬 스파클링 에이드">`,
        `<img src="./img/./menu_drink_tea/Grapefruit_Sparkling_Ade.png" alt=" 자몽스파클링에이드">`,
        `<img src="./img/./menu_drink_tea/Citron_Sparkling_Ade.png" alt="유자 스파클링 에이드">`,
        `<img src="./img/./menu_drink_tea/Peach_Iced_Tea.png" alt="복숭아 아이스티">`
        
    ]
    let img_list_3 = [
        `<img src="./img/./menu_drink_smoothie/Strawberry_Smoothie.png" alt="딸기 스무디">`,
        `<img src="./img/menu_drink_smoothie/Apple_Mango_Smoothie.png" alt="애플 망고 스무디">`,
        `<img src="./img/menu_drink_smoothie/Citron_Smoothie.png" alt="유자 스무디">`,
        `<img src="./img/menu_drink_smoothie/Passionfruit_Smoothie.png" alt="패션후르츠 스무디">`,
        `<img src="./img/menu_drink_smoothie/Peach_Smoothie.png" alt="복숭아 스무디">`,
        `<img src="./img/menu_drink_smoothie/Plum_Smoothie.png" alt="자두 스무디">`,
        `<img src="./img/menu_drink_smoothie/Green_Grape_Smoothie.png" alt="청포도 스무디">`,
        `<img src="./img/menu_drink_smoothie/Strawberry_Yogurt_Smoothie.png" alt="딸기 요거트 스무디">`,
        `<img src="./img/menu_drink_smoothie/Plain_Yogurt_Smoothie.png" alt="플레인 요거트 스무디">`

    ]
    let img_list_4 =[
        `<img src="./img/./menu_drink_beverage/Kiwi_Juice.png" alt="키위 주스">`,
        `<img src="./img/./menu_drink_beverage/Mango_Juice.png" alt="망고 주스">`,
        `<img src="./img/./menu_drink_beverage/Strawberry_Juice.png" alt="딸기 주스">`,
        `<img src="./img/./menu_drink_beverage/Tomato_Juice.png" alt="토마토 주스">`,
        `<img src="./img/./menu_drink_beverage/Vanilla_Espresso_Fresccino.png" alt="바닐라 프레스치노">`,
        `<img src="./img/./menu_drink_beverage/Green_Tea_Fresccino.png" alt="그린티 프레스치노스">`,
        `<img src="./img/./menu_drink_beverage/Chocolate_Oreo_Fresccino.png" alt="초코 오레오 프레스치노">`
    ]
    let img_list_5 = [
        `<img src="./img/./menu_dessert/Double_Cheese_Cake.png" alt="더블 치즈 케이크">`,
        `<img src="./img/./menu_dessert/Oreo_Milk_Cake.png" alt="오레오 우유 케이크">`,
        `<img src="./img/./menu_dessert/Macaron.png" alt="마카롱">`,
        `<img src="./img/./menu_dessert/Honey_Bageteubol.png" alt="허니 바게트볼">`,
        `<img src="./img/./menu_dessert/Honey_Cinamon_Waffle.png" alt="허니 시나몬 와플">`,
        `<img src="./img/./menu_dessert/Mocha_Bun.png" alt="모카번">`

    ]

    let img_list = [img_list_0, img_list_1, img_list_2, img_list_3, img_list_4, img_list_5]




    let popup_div_list_0 = [
        `
        <h1 class="midft">아메리카노</h1>
        <p class="smallft">Americano</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>200</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>5</td>
                <th>포화지방(g)</th>
                <td>10</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>3</td>
                <th>카페인(mg)</th>
                <td>173</td>
            </tr>
        </table>`,
    `
            <h1 class="midft">흑당 버블 카페라떼</h1>
            <p class="smallft">Brown Sugar Bubble Cafe Latte</p>
            <table>
                <tr>
                    <th>열량(Kcal)</th>
                    <td>200</td>
                    <th>나트륨(mg)</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>당류(g)</th>
                    <td>5</td>
                    <th>포화지방(g)</th>
                    <td>10</td>
                </tr>
                <tr>
                    <th>단백질(g)</th>
                    <td>3</td>
                    <th>카페인(mg)</th>
                    <td>173</td>
                </tr>
            </table>
    `,
    `
    <h1 class="midft">시크릿 바닐라라떼</h1>
            <p class="smallft">The Vanilla Latte</p>
            <table>
                <tr>
                    <th>열량(Kcal)</th>
                    <td>200</td>
                    <th>나트륨(mg)</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>당류(g)</th>
                    <td>5</td>
                    <th>포화지방(g)</th>
                    <td>10</td>
                </tr>
                <tr>
                    <th>단백질(g)</th>
                    <td>3</td>
                    <th>카페인(mg)</th>
                    <td>173</td>
                </tr>
            </table>
    `,
    `
    <h1 class="midft">카라멜 마끼아또</h1>
            <p class="smallft">Caramel Macchiato</p>
            <table>
                <tr>
                    <th>열량(Kcal)</th>
                    <td>200</td>
                    <th>나트륨(mg)</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>당류(g)</th>
                    <td>5</td>
                    <th>포화지방(g)</th>
                    <td>10</td>
                </tr>
                <tr>
                    <th>단백질(g)</th>
                    <td>3</td>
                    <th>카페인(mg)</th>
                    <td>173</td>
                </tr>
            </table>
    `
    ,
    `
    <h1 class="midft">헤이즐넛 라떼</h1>
            <p class="smallft">Hazelnut Caffe Mocha</p>
            <table>
                <tr>
                    <th>열량(Kcal)</th>
                    <td>200</td>
                    <th>나트륨(mg)</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>당류(g)</th>
                    <td>5</td>
                    <th>포화지방(g)</th>
                    <td>10</td>
                </tr>
                <tr>
                    <th>단백질(g)</th>
                    <td>3</td>
                    <th>카페인(mg)</th>
                    <td>173</td>
                </tr>
            </table>
    `,
    `
    <h1 class="midft">시크릿 라떼 슈페너</h1>
            <p class="smallft">Secret Latte with Cream</p>
            <table>
                <tr>
                    <th>열량(Kcal)</th>
                    <td>200</td>
                    <th>나트륨(mg)</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>당류(g)</th>
                    <td>5</td>
                    <th>포화지방(g)</th>
                    <td>10</td>
                </tr>
                <tr>
                    <th>단백질(g)</th>
                    <td>3</td>
                    <th>카페인(mg)</th>
                    <td>173</td>
                </tr>
            </table>
    `,
    `
    <h1 class="midft">카푸치노</h1>
            <p class="smallft">Cappuccino</p>
            <table>
                <tr>
                    <th>열량(Kcal)</th>
                    <td>200</td>
                    <th>나트륨(mg)</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>당류(g)</th>
                    <td>5</td>
                    <th>포화지방(g)</th>
                    <td>10</td>
                </tr>
                <tr>
                    <th>단백질(g)</th>
                    <td>3</td>
                    <th>카페인(mg)</th>
                    <td>173</td>
                </tr>
            </table>
    `,
    `
    <h1 class="midft">연유라떼</h1>
            <p class="smallft">Dolce Latte</p>
            <table>
                <tr>
                    <th>열량(Kcal)</th>
                    <td>200</td>
                    <th>나트륨(mg)</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>당류(g)</th>
                    <td>5</td>
                    <th>포화지방(g)</th>
                    <td>10</td>
                </tr>
                <tr>
                    <th>단백질(g)</th>
                    <td>3</td>
                    <th>카페인(mg)</th>
                    <td>173</td>
                </tr>
            </table>
    `
    ]
    let popup_div_list_1 = [
        `
        <h1 class="midft">흑당 버블 우유라떼</h1>
        <p class="smallft">Brown Sugar Bubble Milk Latte</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>255</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>10</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">흑당 버블 초코라떼</h1>
        <p class="smallft">Brown Sugar Bubble Choco Latte</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>255</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>10</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>121</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">버블 블랙티</h1>
        <p class="smallft">Bubble Black Tea</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>215</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>20</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">버블 초코티</h1>
        <p class="smallft">Bubble Choco Tea</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>275</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>20</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">버블 밀크티</h1>
        <p class="smallft">Bubble Milk Tea</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>158</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>20</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">버블 타로티</h1>
        <p class="smallft">Bubble Taro Tea</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>199</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>20</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`


    ]
    let popup_div_list_2 = [
        `
        <h1 class="midft">문경 오미자 유자차</h1>
        <p class="smallft">Mungyeong Omija Yuja Tea</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>155</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">생자몽 머스캣티</h1>
        <p class="smallft">Grapefruit Muscat Tea</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>155</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">제주 청귤 한라봉티</h1>
        <p class="smallft">Green Tangerine Hanrabong Tea</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>155</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">레몬 스파클링 에이드</h1>
        <p class="smallft">Lemon Sparkling Ade</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>155</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">자몽 스파클링 에이드</h1>
        <p class="smallft">Grapefruit Sparkling Ade</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>155</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">유자 스파클링 에이드</h1>
        <p class="smallft">Citron Sparkling Ade</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>155</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">복숭아 아이스티</h1>
        <p class="smallft">Peach Iced Tea</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>155</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,


    ]
    let popup_div_list_3 = [
        `
        <h1 class="midft">딸기 스무디</h1>
        <p class="smallft">Strawberry_Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>215</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>21</td>
                <th>포화지방(g)</th>
                <td>14</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">애플 망고 스무디</h1>
        <p class="smallft">Apple Mango Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>175</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>5</td>
                <th>포화지방(g)</th>
                <td>5</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">유자 스무디</h1>
        <p class="smallft">Citron Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>185</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>12</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">패션후르츠 스무디</h1>
        <p class="smallft">Passionfruit Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>152</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>4</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">복숭아 스무디</h1>
        <p class="smallft">Peach Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>214</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>5</td>
                <th>포화지방(g)</th>
                <td>2</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">자두 스무디</h1>
        <p class="smallft">Plum Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>171</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>7</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">청포도 스무디</h1>
        <p class="smallft">Green Grape Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>124</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">딸기 요거트 스무디</h1>
        <p class="smallft">Strawberry Yogurt Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>155</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>7</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">플레인 요거트 스무디</h1>
        <p class="smallft">Plain Yogurt Smoothie</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>125</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>12</td>
                <th>포화지방(g)</th>
                <td>12</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`




    ]
    let popup_div_list_4 = [
        `
        <h1 class="midft">키위 주스</h1>
        <p class="smallft">Kiwi Juice</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>101</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>7</td>
                <th>포화지방(g)</th>
                <td>2</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">망고 주스</h1>
        <p class="smallft">Mango Juice</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>210</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>4</td>
                <th>포화지방(g)</th>
                <td>5</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">딸기 주스</h1>
        <p class="smallft">Strawberry Juice</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>177</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>10</td>
                <th>포화지방(g)</th>
                <td>10</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">토마토 주스</h1>
        <p class="smallft">Tomato Juice</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>75</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>2</td>
                <th>포화지방(g)</th>
                <td>2</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">바닐라 프레스치노</h1>
        <p class="smallft">Vanilla Espresso Fresccino</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>285</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>25</td>
                <th>포화지방(g)</th>
                <td>25</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>120</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">그린티 프레스치노</h1>
        <p class="smallft">Green Tea Fresccino</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>215</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>17</td>
                <th>포화지방(g)</th>
                <td>12</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>135</td>
            </tr>
        </table>`,
        `
        <h1 class="midft">초코 오레오 프레스치노</h1>
        <p class="smallft">Chocolate Oreo Fresccino</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>301</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>25</td>
                <th>포화지방(g)</th>
                <td>24</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>154</td>
            </tr>
        </table>`



    ]
    let popup_div_list_5 = [
        `
        <h1 class="midft">더블 치즈 케이크</h1>
        <p class="smallft">Double Cheese Cake</p>
        <table>
            <tr>
                <th>열량(Kcal)</th>
                <td>325</td>
                <th>나트륨(mg)</th>
                <td>0</td>
            </tr>
            <tr>
                <th>당류(g)</th>
                <td>31</td>
                <th>포화지방(g)</th>
                <td>25</td>
            </tr>
            <tr>
                <th>단백질(g)</th>
                <td>0</td>
                <th>카페인(mg)</th>
                <td>0</td>
            </tr>
        </table>`
,
`
<h1 class="midft">오레오 우유 케이크</h1>
<p class="smallft">Oreo Milk Cake</p>
<table>
    <tr>
        <th>열량(Kcal)</th>
        <td>385</td>
        <th>나트륨(mg)</th>
        <td>0</td>
    </tr>
    <tr>
        <th>당류(g)</th>
        <td>21</td>
        <th>포화지방(g)</th>
        <td>29</td>
    </tr>
    <tr>
        <th>단백질(g)</th>
        <td>0</td>
        <th>카페인(mg)</th>
        <td>0</td>
    </tr>
</table>`,
`
<h1 class="midft">마카롱</h1>
<p class="smallft">Macaron</p>
<table>
    <tr>
        <th>열량(Kcal)</th>
        <td>195</td>
        <th>나트륨(mg)</th>
        <td>0</td>
    </tr>
    <tr>
        <th>당류(g)</th>
        <td>12</td>
        <th>포화지방(g)</th>
        <td>15</td>
    </tr>
    <tr>
        <th>단백질(g)</th>
        <td>0</td>
        <th>카페인(mg)</th>
        <td>0</td>
    </tr>
</table>`
,
`
<h1 class="midft">허니 바게트볼</h1>
<p class="smallft">Honey Bageteubol</p>
<table>
    <tr>
        <th>열량(Kcal)</th>
        <td>265</td>
        <th>나트륨(mg)</th>
        <td>0</td>
    </tr>
    <tr>
        <th>당류(g)</th>
        <td>20</td>
        <th>포화지방(g)</th>
        <td>15</td>
    </tr>
    <tr>
        <th>단백질(g)</th>
        <td>0</td>
        <th>카페인(mg)</th>
        <td>0</td>
    </tr>
</table>`,
`
<h1 class="midft">허니 시나몬 와플</h1>
<p class="smallft">Honey Cinamon Waffle</p>
<table>
    <tr>
        <th>열량(Kcal)</th>
        <td>225</td>
        <th>나트륨(mg)</th>
        <td>0</td>
    </tr>
    <tr>
        <th>당류(g)</th>
        <td>15</td>
        <th>포화지방(g)</th>
        <td>10</td>
    </tr>
    <tr>
        <th>단백질(g)</th>
        <td>0</td>
        <th>카페인(mg)</th>
        <td>15</td>
    </tr>
</table>`,
`
<h1 class="midft">모카번</h1>
<p class="smallft">Mocha Bun</p>
<table>
    <tr>
        <th>열량(Kcal)</th>
        <td>153</td>
        <th>나트륨(mg)</th>
        <td>0</td>
    </tr>
    <tr>
        <th>당류(g)</th>
        <td>10</td>
        <th>포화지방(g)</th>
        <td>8</td>
    </tr>
    <tr>
        <th>단백질(g)</th>
        <td>0</td>
        <th>카페인(mg)</th>
        <td>3</td>
    </tr>
</table>`

    ]
    let popup_div_list = [popup_div_list_0,popup_div_list_1,popup_div_list_2,popup_div_list_3,popup_div_list_4,popup_div_list_5]


    let change_div_0 = [
        `
        <h2 class="bigft">아메리카노</h2>
        <p class="midft">Americano</p>
        <p class="smallft">깊은 향의 에스프레소 커피를 맑고 풍성하게 즐기는 커피 음료 </p>
    `,
    `
    <h2 class="bigft">흑당 버블 카페라떼</h2>
    <p class="midft">Brown Sugar Bubble Cafe Latte</p>
    <p class="smallft">달달한 브라운 슈가, 카페라떼와 쫀득한 타피오카의 조합이 일품인 음료</p>
    `,  
    `
    <h2 class="bigft">시크릿 바닐라 라떼</h2>
    <p class="midft">The Vanilla Latte
    </p>
    <p class="smallft">풍부한 크림이 바닐라와 만나 더욱 진하고 풍미가 가득한 라떼 
    </p>
    `,

    `
    <h2 class="bigft">카라멜 마끼아또</h2>
    <p class="midft">Caramel Macchiato
    </p>
    <p class="smallft">부드러운 거품에 시럽이 듬뿍! 달콤 부드럽게 즐기는 커피음료 
    
    </p>
    `,
    `
    <h2 class="bigft">헤이즐넛 라떼</h2>
    <p class="midft">Hazelnut Caffe Mocha
    </p>
    <p class="smallft">그윽한 향이 일품인 헤이즐넛으로
    지친 몸과 마음을 달래주는 헤이즐넛라떼
    
    </p>
    `,
    `
    <h2 class="bigft">시크릿 라떼 슈페너
    </h2>
    <p class="midft">Secret Latte with Cream
    </p>
    <p class="smallft">달콤한 크림이 올라가 풍미를 더한 시크릿 라떼 슈페너
    </p>
    `,
    `
    <h2 class="bigft">카푸치노</h2>
    <p class="midft">Cappuccino
    </p>
    <p class="smallft">실크같이 부드러운 우유거품과
    풍부한 맛의 에스프레소를 함께 즐기는 커피음료 
    </p>
    `,
    `
    <h2 class="bigft">연유라떼</h2>
    <p class="midft">Dolce Latte
    </p>
    <p class="smallft">부드럽고 달달한 연유라떼
 
    </p>
    `

    ]
    let change_div_1 = [

        `
        <h2 class="bigft">흑당 버블 우유라떼</h2>
        <p class="midft">Brown Sugar Bubble Milk Latte</p>
        <p class="smallft">달달한 브라운 슈가와 타피오카, 고소한 우유가 어우러진 음료</p>
    `,
    `
        <h2 class="bigft">흑당 버블 초코라떼</h2>
        <p class="midft">Brown Sugar Bubble Choco Latte</p>
        <p class="smallft">달달한 브라운 슈가와 타피오카, 초코라떼가 조화를 이룬 음료</p>
    `,
    `
    <h2 class="bigft">버블 블랙티</h2>
    <p class="midft">Bubble Black Tea</p>
    <p class="smallft">깔끔한 홍차에 고소하고 쫀득한 타피오카 펄이 어우러진 메뉴 </p>
`,
`
<h2 class="bigft">버블 초코티</h2>
<p class="midft">Bubble Choco Tea</p>
<p class="smallft">진한 초콜렛의 달콤함과 쫀득한 타피오카 펄을 함께 즐기는 메뉴  </p>
`,
`
<h2 class="bigft">버블 밀크티</h2>
<p class="midft">Bubble Milk Tea</p>
<p class="smallft">은은하게 퍼지는 얼그레이 홍차의 풍미와 타피오카의 조화로 쫀득하게 씹히는 식감이 일품인 메뉴 </p>
`,
`
<h2 class="bigft">버블 타로티</h2>
<p class="midft">Bubble Taro Tea</p>
<p class="smallft">고소하고 달콤한 타로를 베이스로 쫀득한 타피오카 펄이 듬뿍 들어간 더카페 베스트 메뉴 </p>
`,



    ]
    let change_div_2 = [

        `
        <h2 class="bigft">문경 오미자 유자차</h2>
        <p class="midft">Mungyeong Omija Yuja Tea</p>
        <p class="smallft">기분 좋은 건강차, 문경 오미자 유자차
        </p>
    `,
    `
        <h2 class="bigft">생자몽 머스캣티</h2>
        <p class="midft">Grapefruit Muscat Tea</p>
        <p class="smallft">생자몽이 들어간 싱그러운 프룻티</p>
    `,
    `
    <h2 class="bigft">제주 청귤 한라봉티</h2>
    <p class="midft">Green Tangerine Hanrabong Tea
    </p>
    <p class="smallft">제주의 청량함을 그대로 담은 청귤과 한라봉 프룻티</p>
`,
`
<h2 class="bigft">레몬 스파클링 에이드</h2>
<p class="midft">Lemon Sparkling Ade</p>
<p class="smallft">상큼 깔끔한 레몬과 톡톡튀는 탄산수로 상큼하게 즐기는 시원한 음료 
</p>
`,
`
<h2 class="bigft">자몽 스파클링 에이드</h2>
<p class="midft">Grapefruit Sparkling Ade
</p>
<p class="smallft">새콤달콤한 자몽과 톡톡 튀는 탄산이 만나 상큼하게 즐기는 시원한 음료 </p>
`,
`
<h2 class="bigft">유자 스파클링 에이드
</h2>
<p class="midft">Citron Sparkling Ade
</p>
<p class="smallft">비타민이 풍부한 유자를 탄산과 함께 상큼하게 즐기는 시원한 음료</p>
`,
`
<h2 class="bigft">복숭아 아이스티
</h2>
<p class="midft">Peach Iced Tea
</p>
<p class="smallft">달콤한 복숭아의 맛을 깔끔하고 상쾌하게 즐기는 시원한 음료</p>
`,

    ]
    let change_div_3 =[
        `
<h2 class="bigft">딸기 스무디

</h2>
<p class="midft">Strawberry Smoothie</p>
<p class="smallft">피로 회복을 돕는 새콤 달콤한 Real 딸기 스무디 </p>
`,
`
<h2 class="bigft">애플 망고 스무디</h2>
<p class="midft">Apple Mango Smoothie</p>
<p class="smallft">두 눈을 밝게, 피부는 맑게 하는 망고를 듬뿍 넣은 애플 망고 스무디</p>
`,
`
<h2 class="bigft">유자 스무디
</h2>
<p class="midft">Citron Smoothie
</p>
<p class="smallft">유자가 듬뿍 들어간 리얼 홍시 스무디</p>
`,
`
<h2 class="bigft">패션후르츠 스무디
</h2>
<p class="midft">Passionfruit Smoothie
</p>
<p class="smallft">신선한 패션후르츠가 가슴 속까지
파고드는 차가운 눈꽃 얼음과 어우러져
더욱 시원한 음료</p>
`,
`
<h2 class="bigft">복숭아 스무디
</h2>
<p class="midft">Peach Smoothie
</p>
<p class="smallft">상큼한 복숭아 맛의 과일 스무디</p>
`,
`
<h2 class="bigft">자두 스무디
</h2>
<p class="midft">Plum Smoothie
</p>
<p class="smallft">상큼한 자두 맛의 과일 스무디
</p>
`,
`
<h2 class="bigft">청포도 스무디
</h2>
<p class="midft">Green Grape Smoothie
</p>
<p class="smallft">달콤 향긋한 블루베리와 가슴 속까지 파고드는
차가운 눈꽃 얼음의 시원한 요거트 음료 
</p>
`,
`
<h2 class="bigft">딸기 요거트 스무디
</h2>
<p class="midft">Strawberry Yogurt Smoothie

</p>
<p class="smallft">신선한 딸기를 통째로 갈아서 만든
시원한 Real 딸기 요거트 스무디</p>
`,
`
<h2 class="bigft">플레인 요거트 스무디

</h2>
<p class="midft">Plain Yogurt Smoothie
</p>
<p class="smallft">상큼한 요거트가 가슴 속까지 파고드는
차가운 눈꽃 얼음과 어우러져 더욱 시원한 음료 </p>
`,

    ]
    let change_div_4 =[
        `
        <h2 class="bigft">키위 주스</h2>
        <p class="midft">Kiwi Juice
        </p>
        <p class="smallft">건강에도 좋고, 맛도 최고인 인기 메뉴,
        키위 생과일 주스 </p>
        `,
        `
<h2 class="bigft">망고 주스
</h2>
<p class="midft">Mango Juice
</p>
<p class="smallft">망고를 그대로 갈아 만든
신선한 망고 주스 </p>
`,
`
<h2 class="bigft">딸기 주스</h2>
<p class="midft">Strawberry Juice
</p>
<p class="smallft">퓨레가 아닌 딸기 그대로를 사용한
새콤달콤한 딸기 생과일주스  </p>
`,
`
<h2 class="bigft">토마토 주스
</h2>
<p class="midft">Tomato Juice
</p>
<p class="smallft">항암, 항산화 효과로 여자에게 더욱 좋은
토마토 생과일주스</p>
`,
`
<h2 class="bigft">바닐라 프레스치노
</h2>
<p class="midft">Vanilla Espresso Fresccino
</p>
<p class="smallft">바닐라향 커피와 부드럽고
상쾌한 눈꽃 얼음이 어우러진 시원한 음료</p>
`,
`
<h2 class="bigft">그린티 프레스치노
</h2>
<p class="midft">Green Tea Fresccino
</p>
<p class="smallft">풋풋한 어린 녹차잎과 상쾌한
눈꽃 얼음이 어우러진 시원한 음료</p>
`,
`
<h2 class="bigft">초코오레오 프레스치노
</h2>
<p class="midft">Chocolate Oreo Fresccino
</p>
<p class="smallft">오레오와 초콜렛이 듬뿍 들어간 키즈 베스트 메뉴,
오레오 프레스치노 </p>
`,

    ]
    let change_div_5 = [
    `
    <h2 class="bigft">더블 치즈 케이크
    </h2>
    <p class="midft">Double Cheese Cake
    </p>
    <p class="smallft">부드럽고 진한 크림 치즈의 풍미가 바삭한 크러스트와 어우러져 입안에서 사르르 녹는 케이크</p>
    `,
    `
    <h2 class="bigft">오레오 우유 케이크
    </h2>
    <p class="midft">Oreo Milk Cake
    </p>
    <p class="smallft">오레오의 바삭한 쿠키와 부드러운 우유 크림이 어우러져, 한 입 먹을 때마다 달콤하고 고소한 풍미가 폭발하는 독특한 매력을 지닌 케이크</p>
    `,
    `
    <h2 class="bigft">마카롱
    </h2>
    <p class="midft">Macaron
    </p>
    <p class="smallft">바삭한 겉과 쫀득한 속이 조화를 이루며, 다양한 맛과 화려한 색상으로 시각과 미각을 동시에 만족시키는 매력적인 디저트</p>
    `,
    `
    <h2 class="bigft">허니 바게트 볼
    </h2>
    <p class="midft">Honey Bageteubol
    </p>
    <p class="smallft">바삭한 표면과 달콤한 허니 향이 어우러져 입안에서 달콤한 미감을 선사하는 볼</p>
    `,
    `
    <h2 class="bigft">허니 시나몬 와플
    </h2>
    <p class="midft">Honey Cinamon Waffle
    </p>
    <p class="smallft">고소한 와플과 달콤한 허니가 어우러져 풍미를 더한 디저트</p>
    `,
    `
    <h2 class="bigft">모카번
    </h2>
    <p class="midft">Mocha Bun
    </p>
    <p class="smallft">겉은 바삭하고 속은 쫀득한 식감이 모카의 부드럽고 달콤한 크림의 조화가 입안 가득 퍼지는 디저트</p>
    `

    ]
    let change_div = [change_div_0,change_div_1,change_div_2,change_div_3,change_div_4,change_div_5]



    let bot_sec_menu_ul_li = [bot_sec_menu_ul_li_0,bot_sec_menu_ul_li_1,bot_sec_menu_ul_li_2,bot_sec_menu_ul_li_3,bot_sec_menu_ul_li_4,bot_sec_menu_ul_li_5]


    let menu_list = document.querySelector(".menu_list")

    for(let i=0;i<best_menu_ul_li.length;i++){






    best_menu_ul_li[i].addEventListener("click",function(){
        best_menu_ul_li.forEach(function(li){
            li.classList.remove("on")
        })

        best_menu_ul_li[i].classList.add("on")
        menu_list.innerHTML = result[i]
        getmenuinfo()
    })
}

let result = ["","","","","",""]





for(let j=0; j<result.length;j++){

    for(let i=0;i<img_list[j].length;i++){
        
        result[j] += `
        <li>
        ${img_list[j][i]}
        ${change_div[j][i]}
        <div class="menu_info">
        ${change_div[j][i]}
        ${popup_div_list[j][i]}
        </div>
        </li>
    `
    }


}

menu_list.innerHTML = result[0]



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




    function getmenuinfo(){
        let menu_li = document.querySelectorAll(".menu_list>li")
        let menu_info = document.querySelectorAll(".menu_info")
    
        for(let i=0; i<menu_li.length;i++){
            menu_li[i].addEventListener("click",function(){
    
                for(let j=0;j<menu_li.length;j++){
                    menu_info[j].style.opacity =`0`
                    menu_info[j].style.pointerEvents =`none`
                }
    
                
                menu_info[i].style.opacity =`1`
                menu_info[i].style.pointerEvents=`auto`
            })
        }


    }
getmenuinfo()





   






}