let uname=prompt("Enter your name","himanshu");
let user=prompt("Enter S W G","");
let cpu1=Math.floor(Math.random()*3);
// document.getElementById("res1").innerText=cpu1;
let cpu=["s","w","g"][cpu1];
// document.getElementById("res1").innerText=cpu;


const match=(cpu,user)=>{

    if(cpu===user){
        return "Match TIED";
    }
    else if(cpu==="s" && user==="w"){
        return "cpu win";
    }
    else if(cpu==="s" && user==="g"){
        return uname+" win";
    }else if(cpu==="g" && user==="w"){
        return uname+" win";
    }else if(cpu==="g" && user==="s"){
        return "cpu win";
    }else if(cpu==="w" && user==="s"){
        return uname+" win";
    }else if(cpu==="w" && user==="g"){
        return "cpu win";
    }
}


let result=match(cpu,user);
// alert(result);

// document.getElementById("res1").innerText='aa';




if(result==="cpu"){
    document.getElementById("res1").innerText+=result;
    document.getElementById('user').style.border="1px solid red";

   
}else{
    document.getElementById("res2").innerText+=result;

}

