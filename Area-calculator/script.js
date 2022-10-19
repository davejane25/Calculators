
const areacircle=()=>{
    var radius=document.getElementById("Radius").value;
    let area=3.14*radius*radius;
    if(radius!=0)
    document.getElementById('area_circle').innerHTML="The Area of Circle is :" + area +" cm.sq";
    else alert("Please enter a valid radius")
    
}

const areatriangle=()=>{
    var height= document.getElementById("h_tri").value;
    var base = document.getElementById('b_tri').value;
    var area_trian = (height*base)/2;
    if(height!=0 || base!=0)
    document.getElementById('area_triangle').innerHTML="The Area of Triangle is :" + area_trian+ " cm.sq";
    else alert("please enter a valid height or base")
}
const mysel=()=>{
    var rec=document.getElementById('rectangle');
    var sqre=document.getElementById('square');
    var rhom=document.getElementById('Rhombus');
    var no=document.getElementById('no');
    var drop=document.getElementById('quad3').value;
    console.log(drop);
    if(drop=="Rectangle/Parallelogram"){
        sqre.style.display="none";
        rhom.style.display="none";
        rec.style.display="block";
    }
    else if(drop=="Square"){
        
        sqre.style.display="block";
        rhom.style.display="none";
        rec.style.display="none";
    }
    else if(drop=="Rhombus"){
        rhom.style.display="block";
        sqre.style.display="none";
        rec.style.display="none";
    }
    else if(drop=="No Selection"){
        no.style.display="block";
        sqre.style.display="none";
        rec.style.display="none";
        rhom.style.display="none";
    }
}
const arearect=()=>{
    var height= document.getElementById("h_quad").value;
    var base = document.getElementById('b_quad').value;
    var area_quad = (height*base);
    
    var rec=document.getElementsByClassName('rectangle')
    if(height!=0 && base!=0){
        
    document.getElementById('area_rect').innerHTML="The Area of Quadilateral is :" + area_quad + " cm.sq";
    

    }
    else if(height==0 || base==0){
        document.getElementById('area_rect').innerHTML="The height or base can't be zero";
    }
    else alert("Please enter a valid height or base")
}
const arearhom=()=>{
    var height= document.getElementById("h_rhom").value;
    var base = document.getElementById('b_rhom').value;
    var area_rhom = (height*base)/2;
    
    
    if(height!=0 || base!=0){
        
    document.getElementById('area_rhom').innerHTML="The Area of Rhombus is :" + area_rhom + " cm.sq";
    

    }
    else if(height==0 || base==0){
        document.getElementById('area_rhom').innerHTML="The diagonal can't be zero";
    }
    else alert("Please enter a valid height or base")
}
const areasqre=()=>{
   var side = document.getElementById('s_sqre').value;
    var area_sqre = (side*side);
    
    var rec=document.getElementsByClassName('rectangle')
    if(side!=0){
        
    document.getElementById('area_sqre').innerHTML="The Area of Square is :" + area_sqre + " cm.sq";
    

    }
    else if(side==0 ){
        document.getElementById('area_sqre').innerHTML="The side can't be zero";
    }
    else alert("Please enter a valid side")
}