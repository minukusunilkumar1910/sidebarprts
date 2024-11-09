// const button=document.querySelector("button")
 
// const backg=document.querySelector("body");

// button.addEventListener("click",()=>{
//    if(backg.classList.contains('light'))
//    {
//       backg.classList.remove('light');
//       backg.classList.add('dark');
   
//    }
//    else
//    {
//       backg.classList.add('light');
//       backg.classList.remove('dark');
//    }
// });



const button=document.querySelector('.hamburger');
const sidebar=document.querySelector('.sidebar');
const show=document.querySelector('.show');
const closesb=document.querySelector('.close')

button.addEventListener("click",()=>
{
sidebar.classList.remove('hide')
});

closesb.addEventListener("click",()=>
   { 
   sidebar.classList.add('hide')
   });







