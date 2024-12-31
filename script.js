function focusfunction(element){

    element.style.background= 'lime';

}

function blurfunction(rrfd){

    rrfd.style.background= '';

}

function inputfunction(element){

    var x=element.value;document.getElementById("test").innerHTML=x;

}

function changefunction(element){

    var x=element.value;
    
    document.getElementById("test").innerHTML=x;
    
}

function selectfunction(element){

    console.log("You Selected a Text");

}

function submitFunction(){

    var x=document.getElementById("fname").value
    
    alert("Hello " + x);

}