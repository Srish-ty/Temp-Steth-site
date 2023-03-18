

//let btn2 =document.getElementById('menuico');

//btn2.innerHTML="This is to be clicked";

btn2.addEventListener("click",()=>{
    let btn2 =document.getElementById('menuico');
    window.alert(101);
    let nav2= document.getElementById('navi');
    nav2.style.display= block;
})

function showmenu(){
    let btn2 =document.getElementById('menuico');
    //window.alert(101);
    let nav2= document.getElementById('navi');
    let ni = document.getElementsByClassName('n-i');
    for(item of ni){
        //item.innerHTML="hey hye";
        if(item.style.display=='inline' || item.style.display=='block'){
            item.style.display='none';
        }
        else{
            item.style.display='block';
        }
    }
    //nav2.innerHTML="Hello is hti s working";
    
}