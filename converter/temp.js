var celsius=document.getElementById("celsius");
var fahrenheit=document.getElementById("fahrenheit");

celsius.addEventListener('input',function(){
    let c=this.value;
    let f=(c*9/5)+32;
    fahrenheit.value=f;
});

fahrenheit.addEventListener('input', function(){
    let f=this.value;
    let c=(f-32)*(5/9);
    if(!Number.isInteger(c))
    {
        c.toFixed(2);
    }
    celsius.value=c;
})

