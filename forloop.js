let student = [
    {id:1,s_name:'venkat',city:'hyderabad'},
    {id:2,s_name:'charan',city:'bangalore'},
    {id:3,s_name:'manoj',city:'rajamundry'},
    {id:4,s_name:'kartikeya',city:'vijyawada'},
    {id:5,s_name:'vijay',city:'chennai'},
    {id:1,s_name:'kabir',city:'kadapa'}


]

console.log(`OUTPUT FOR USING FOR IN LOOP`)
for(let i in student ){
    console.log(`${student[i].s_name} from ${student[i].city}`)
}

console.log(`OUTPUT FOR USING FOR OF LOOP`)
for(let i of student){
    console.log(`${i.s_name} from ${i.city}`)
}
