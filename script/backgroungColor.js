document.getElementById('bg-btn').addEventListener('click', function(){
    const colorCode ='0123456789abcdef';
    let bgColor ='#';
    for(let i=0 ; i<6 ; i++){
        bgColor = bgColor + colorCode[Math.floor((Math.random())*16)];
        
    }

    const backColor = document.getElementById("bg-color");
    backColor.style.backgroundColor= bgColor ;
})