const Companies = [
    { name:"company one", category:"Finance",start:1981, end:2003},
    { name:"company two", category:"Retail",start:1992, end:2008},
    { name:"company three", category:"Auto",start:1999, end:2007},
    { name:"company four", category:"Retail",start:1989, end:2010},
    { name:"company five", category:"Technology",start:2009, end:2014},
    { name:"company six", category:"Finance",start:1987, end:2010},
    { name:"company seven", category:"Auto",start:1986, end:1996},
    { name:"company eight", category:"Technology",start:2011, end:2016},
    { name:"company nine", category:"Retail",start:1981, end:1989}
]
let moreCompanies=[ { name:"company eleven", category:"Technology",start:2021, end:2024},{ name:"company Twelve", category:"Logistics",start:2021, end:2024},
{ name:"company Thirteen", category:"EventManagement",start:2021, end:2024},{ name:"company Fourteen", category:"Logistics",start:2022, end:2024}]

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
Array.prototype.push.apply(Companies,moreCompanies)
console.log(Companies)
Companies.splice(2,1,{name:"threex", category:"AutoX", start:2025})
console.log(Companies)
console.log(Companies.length)
console.log(Companies);
Companies.splice(2,0, {name:"Company Fifteen",category:"HealthCare", start:2024,end:2028},{name:"Company Sixteen", category:"Agrictech",start:2024,end:2028})
console.log(Companies)

//for(let i=0; i < Companies.length; i++){
    //console.log(Companies[i])
//}

// Companies.forEach(function(company){
//     console.log(company)
// })
// let isEligible =[];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 35){
//         isEligible.push(ages[i]);
        
//     }
    
// }

// const retailCompanies = Companies.filter(function(Company){
// if(Company.category ===  'Retail'){
//     return true
// }

// })



// console.log(retailCompanies)
    
// 

const firstGenCompanies = Companies.filter(function(Company, start){
    if(Company.start <= 1989){
        return true
    }
})
console.log(firstGenCompanies)

const fourthGenCom = Companies.filter(Company => Company.start >= 2000)
console.log(fourthGenCom)




