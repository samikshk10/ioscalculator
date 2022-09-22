let result=document.getElementById('inputtext');
var count =0;
let display=n=>{
    count++;
    if(count==1)
    {
    result.value="";
    result.value+=n;
}

else{
    
    result.value+=n;
    if(result.value.length==8)
    {
    document.getElementById('inputtext').style.fontSize="44px";
}


    }
    
}
let res= function(){
    try{
    result.value=eval(result.value);
    }
    catch (error)
    {
        alert("Invalid operation");
        }
}

function clr()
{
    count=0;
    result.value=0;
    
        document.getElementById('inputtext').style.fontSize="65px";

    
    
   
}

function del()
{

    if(result.value.length==0)
    {
        count=0;
    result.value=0;
    }
    else{

        result.value=result.value.slice(0,-1);
        if(result.value.length<8)
{
        document.getElementById('inputtext').style.fontSize="65px";

    }
        if(result.value.length==0)
        {
            count=0;
        result.value=0;
        }
    }
}











