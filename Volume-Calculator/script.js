
const volumesphere=()=>{
    var radius=document.getElementById("Radius").value;
    var ans=document.getElementById("area_circle");
    let volume=(4*radius*radius*radius)/3;
    if(radius<0){alert("Measurements can't be negative");
ans.style.display="none" }
    if(radius!=0)
    document.getElementById('area_circle').innerHTML="The Volume of Sphere is : " + volume +" cu.cm";
    else {
        alert("Please enter a valid radius")
        ans.style.display="none";
    }
    
}

const volumecubiod=()=>{
    var height= document.getElementById("h_tri").value;
    var base = document.getElementById('b_tri').value;
    var length = document.getElementById('l_tri').value;
    var ans = document.getElementById('area_triangle');
    var vol_cub = (height*base*length);
    if(height<0 || base<0 || length<0){alert("Measurements can't be negative");
    ans.style.display="none";
}
    else if(height>0 && base>0 && length>0)
    document.getElementById('area_triangle').innerHTML="The Volume of Cubiod is :" + vol_cub+ " cu.cm";
    else {
        alert("please enter a valid height or base or length")
        ans.style.display="none";
    }
}

const volumepry=()=>{
    var height=document.getElementById("h_pry").value;
    var base=document.getElementById("b_pry").value;
    var length=document.getElementById("l_pry").value;
    var ans = document.getElementById('vol_pyramid');
    var vol_pry=(height*base*length)/3;
    if(height<0 || base<0 || length<0){alert("Measurements can't be negative");
ans.style.display="none"}
    else if(height>0 && base>0 && length>0)
    document.getElementById('vol_pyramid').innerHTML="The Volume of Pyramid is :" + vol_pry+ " cu.cm";
    else {
        ans.style.display="none";
        alert("please enter a valid height or base or length")
    }
}