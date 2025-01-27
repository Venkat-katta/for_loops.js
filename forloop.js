let student =[
{id:1,s_name:'venkat',city:'hyderabad'},
{id:2,s_name:'charan',city:'bangalore'},
{id:3,s_name:'manoj',city:'rajamundry'},
{id:4,s_name:'kartikeya',city:'vijyawada'},
{id:5,s_name:'vijay',city:'chennai'},
{id:6,s_name:'kabir',city:'kadapa'},

]

console.log(`output for using for in-loop`)
for(let i in students){

      console.log(`${students[i].s_name} from ${students[i].city}`)
    }

console.log(`output for using for of-loop`)
for(let i of students){
    
    console.log(`${i.s_name} form ${i.city}`)
}
