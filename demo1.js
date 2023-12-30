var inputbox=document.getElementById('inputbox');
// console.log(inputbox);

var data=JSON.parse(localStorage.getItem('data'))||[];


var outputbox=document.getElementById('outputbox');

showdata()

function showdata(){
    if(data.length==0){
        outputbox.innerHTML="<h2>no recordes....</h2>";
    }
}

function check(){
    console.log("hhhhh.....");
   
}