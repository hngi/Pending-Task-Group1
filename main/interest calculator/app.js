let calculate = document.querySelector('.button')
calculate.addEventListener('click', (e)=>{
    e.preventDefault()
     let amt = document.querySelector('.amount')
     let selection = document.querySelector('select')
    amt =   parseInt( amt.value)
    selection  =  parseInt( selection.value)
 let amount = 1600
 let interest;
 let rate  = 6 
 let time ;
 if(selection == 6){
     time = '10-30days'
 }
 else if(selection == 8){
     time = '31-60days'
 }
 else if(selection == 10){
     time = '90days'
 }
 else if(selection == 13){
     time = '91days- Over 2 years'
 }
 else{
     time = 'Over 2 years'
 }

 interest = (amt * selection  / 100 ) + amt
console.log(interest, amt,selection.textContent)
let newEle = document.querySelector('h3')
newEle.textContent = `Your locksafe balance on  N${amt} is N${interest} at a rate of ${selection}% in ${time} time `

})