function test(v)
{
    // //alert('ok');
    // console.log("I am from onload event");
    // var i = 1.0;
    // i = i+1.1;
    // console.log("Value of i = "+i); //output 1+1
    // i = i+" ok";
    // console.log("Value of i = "+i); //output 1+1+ok

    // var res = false;
    // if(res)
    // {
    //     console.log("Value of res is true");
    // }
    // else{
    //     console.log("Value of res is false");
    // }

    // console.log("Value of option selected "+ document.getElementById("optvalue").value);
    // document.getElementById("txtval").value = document.getElementById("optvalue").value;
   // document.getElementById("txtval").style.color="red";   
   for (var i = 0; i < v; i++) {
    setTimeout(60000);
    document.getElementById("pid").style.color="red";
    //document.getElementById("pid").style.color="black";
  }
}

function test2(i,j)
{
    console.log("Value of i & j are "+i+" "+j);
}
