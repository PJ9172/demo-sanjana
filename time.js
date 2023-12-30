var first=document.getElementById('first')
setInterval(()=>{
    const t=new Date();
    first.innerText=t.toLocaleTimeString();
    console.log(t.toLocaleTimeString());
},1000);