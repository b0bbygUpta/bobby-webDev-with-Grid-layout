// document.getElementById("count").innerText=5

// let count=5*0

// console.log("count: "+count)

// let myAge=35

// console.log("myAge: "+myAge)

// function increment(){
//     console.log("The button was clicked")
// }

// increment()

// increment()

// increment()

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()
// console.log("\n")

// countdown()
// console.log("\n")

// countdown()
// console.log("\n")


// let l1=53
// console.log(l1)

// let l2=43
// console.log(l2)

// let l3=12
// console.log(l3)

// function lapTime(){
//     let totalTime=l1+l2+l3
//     console.log(totalTime)

// }


// lapTime()

// lapTime()


// let lap=0

// function incrementLap(){
//     lap=lap+3
//     console.log(lap)
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lap)

// console.log("This will print.")

// process.exit(0)

// console.log("This will never print.")









// let countEl=document.getElementById("count-el")     //  pass the argument

// // console.log(countEl)

// let count=0

// function increment(){
//     count=count+1
//     countEl.innerText=count

//     // count=count+1
// }

// // increment()

// function save(){
//     console.log(count)
//     count=0
//     // increment()
//     reset()
// }

// function reset(){
//     count=0;    
//     countEl.innerText=count

// }

// save()




// let name="Bobby Gupta"
// let greeting="Hi, my name is"
// let myGreet=greeting+" "+name
// console.log(myGreet)

// console.log(4+5)
// console.log("2"+"4");
// console.log("5"+1)
// console.log(100+"100")
// console.log("100"+100)




// let welcomeEl=document.getElementById("welcome-el")

// let name="bobby"
// let g1="Welcome back "

// let g=""

// // welcomeEl.innerText=greet+name

// function greet(){
//     g=g1+name
//     welcomeEl.innerText=g

// }






// let saveEl=document.getElementById("save-el")
// let countEl=document.getElementById("count-el")

// let count=0

// function increment(){
//     count+=1
//     countEl.innerText=count
// }
// function save(){
//     let countstr=count+" - "
//     saveEl.textContent+=countstr
//     reset()
//     console.log(count)

// }
// function reset(){
//     count=0
//     countEl.innerText=count
// }











// let firstName="Bobby"
// let lastName="Gupta"
// let greet="Hi there"

// let fullName=firstName+" "+lastName

// function greetBobby(){
//     let s=greet+", "+fullName+"!"
//     console.log(s)

// }

// console.log(fullName+1)

// greetBobby()

// let pointEl=document.getElementById("point-el")

// let count=3

// function inc(){
//     count+=3
//     pointEl.innerText=count

// }

// function dec(){
//     count-=1
//     pointEl.innerText=count

// }









// let sumEl=document.getElementById("sum-el")

// let num1=8
// let num2=2

// document.getElementById("num1-el").textContent=num1
// document.getElementById("num2-el").textContent=num2

// let sumEl=document.getElementById("sum-el")

// function add(){
//     // num1+num2
//     // sumEl.innerText(num1+num2)
//     let result=num1+num2
//     sumEl.textContent("Sum: "+result)

//     // sumEl.textContent+=result
//     // reset()

// }

// function sub(){
//     // sumEl.innerText(num1-num2)
//     let result=num1-num2
//     // sumEl.textContent("Sum: "+result)
//     sumEl.textContent+=result
//     reset()
// }
// function div(){
//     // sumEl.innerText(num1/num2)
//     let result=num1/num2
//     // sumEl.textContent("Sum: "+result)
//     sumEl.textContent+=result
//     reset()
// }
// function mul(){
//     // sumEl.innerText(num1*num2)
//     let result=num1*num2
//     // sumEl.textContent("Sum: "+result)
//     sumEl.textContent+=result
//     reset()
// }
// function reset(){
//     let result=""
//     sumEl.textContent=result
// }









// let hasDiscountCode=true

// function processOrder(){
//     if(hasDiscountCode){
//         console.log("Discount applied to food order.")
//         hasDiscountCode=false
//     }
//     else{
//         console.log("No Discount applied")
//     }
// }

// processOrder()
// processOrder()




// let firstCard=10
// let secondCard=11
// let sum=firstCard+secondCard

// let hasbj=false
// let isalive=true

// let message=""

// let messageEl=document.getElementById("message-el")
// let cardsEl=document.getElementById("cards-el")
// let sumEl=document.getElementById("save-el")

// function startGame(){
//     cardsEl.textContent="Cards:"+firstCard+" "+secondCard
//     sumEl.textContent="Sum: "+sum

//     if(sum<=20){
//         message="Do you want to draw a new round?"
//     }else if(sum === 21){
//         message="Wohooo! You've got Blackjack!"
//         hasbj=true
//     }else{
//         message="You're out of the Game!"
//         isalive=false
//     }

//     // console.log(message)
//     messageEl.textContent=message
// }



// function getran(){
//     return Math.floor(Math.random()*13)+1
// }



// // getran()
// console.log(getran())



// // let random=Math.random()

// // console.log(Math.floor(random*15)+1)


// let leads=[]
// const inputEl=document.getElementById("input-id")
// const inputBtn=document.getElementById("input-btn")

// const showEl=document.getElementById("show")


// inputBtn.addEventListener("click", function(){
    

//     // leads.push("www.awesomelead.com")
//     leads.push(inputEl.value)

//     console.log(leads)

//     showEl.textContent=leads

// })



let leads=[]
// `["a","b","c"]`

// leads=JSON.parse(leads)
// leads.push("d")
// leads=JSON.stringify(leads)
// console.log("typeOf leads: "+ typeof leads)

const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("leads"))

if(leadsFromLocalStorage){
    leads=leadsFromLocalStorage
    renderLeads()
    
}
// localStorage.setItem("bobby","bobby_gupta")
// // console.log(localStorage.getItem("bobby"))


// localStorage.clear()
// console.log("testing localStorage: "+ localStorage.getItem("bobby"))


inputBtn.addEventListener("click", function(){
    // // console.log("Button clicked from addEvenetListener")

    // // leads.push("www.awesomelead.com")
    // console.log(leads)

    leads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("leads",JSON.stringify(leads))
    
    
    renderLeads()

    // inputEl.value=""
    
    console.log(localStorage.getItem("leads"))


})

function renderLeads(){
    
    let list=""
    for(let i=0;i<leads.length;i++){
        // list+="<li>"+leads[i]+"</li>"
        list+=`
            <li>
                <a target="_blank" href='${leads[i]}'>
                ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML=list

    // let list="<li>"+inputEl.value+"</li>"
    // ulEl.innerHTML+=list

}
