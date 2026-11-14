// #Added a button to delete all saved items

let leads=[]
// `["a","b","c"]`

// leads=JSON.parse(leads)
// leads.push("d")
// leads=JSON.stringify(leads)
// console.log("typeOf leads: "+ typeof leads)

const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

const deleteBtn=document.getElementById("delete-btn")

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

deleteBtn.addEventListener("dblclick",function(){
    console.log("double clicked!")
    localStorage.clear()
    leads=[]
    renderLeads()
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

