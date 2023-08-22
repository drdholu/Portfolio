document.querySelector('.cross').style.display='none';
document.querySelector('.nav-icons').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        setTimeout(()=>{
            document.querySelector('.ham').style.display='inline'
            },350);
        document.querySelector('.cross').style.display='none'
    }
    else{
        
        document.querySelector('.ham').style.display='none'
        setTimeout(()=>{
        document.querySelector('.cross').style.display='inline'
        },300);
    }

})

// document.onclick = fucntion(e){
//     if(e.target.id ==='sidebar' && e.target.id ==='sidebarGo'){
//         document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     }
// }
