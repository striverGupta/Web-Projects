// alert("test");
function addnewWEField(){
    // console.log("adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here ");
    newNode.setAttribute("rows",3);


    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
    
    
    
}

const deleteWe=()=>{
    let a = document.getElementsByClassName("wefield");
    a[a.length-1].remove();
}


const deleteAq=()=>{
    let a = document.getElementsByClassName("aqfield");
    a[a.length-1].remove();
}

function addnewAQField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here ");
    newNode.setAttribute("rows",3);

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

 // print cv
 const printCV = ()=>{
    window.print();
}


// generating cv:
function generateCV() {

    let nameFiled = document.getElementById("nameFiled").value;

    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameFiled;
    //direct
    document.getElementById("nameT2").innerHTML = nameFiled;

    //contact
    document.getElementById("contactT2").innerHTML=document.getElementById(
        "contactfilled"
        ).value;
        //address
        document.getElementById("addressT3").innerHTML=document.getElementById(
            "addressfilled"
        ).value;
        document.getElementById("FBT").innerHTML=document.getElementById(
            "fbfilled"
        ).value;   
        
        document.getElementById("INSTAT").innerHTML=document.getElementById(
            "instafilled"
        ).value;
        document.getElementById("TWIT").innerHTML=document.getElementById(
           "Twitterfilled"
        ).value;
        document.getElementById("LINKT").innerHTML=document.getElementById(
            "Linkendfilled"
        ).value;

    // objective
    document.getElementById("ObjectiveT2").innerHTML=document.getElementById(
        "ObjectiveField"
    ).value;  
    
    // work experience
    let wes = document.getElementsByClassName("wefield");
    console.log(wes);
    let str =" ";

    for(let e of wes){
        str = str +`<li>${e.value}</li>`;
    }
    document.getElementById("WET2").innerHTML=str;
     

    // Acadmeic QUALIFICATION

    let aqs = document.getElementsByClassName(" aqfield");
    let str1 =" ";

    for(let e of aqs){
        str1 = str1 +`<li>${e.value}</li>`;
    }
    document.getElementById("AQT3").innerHTML=str1;
     
    document.getElementById('cv-form').style.display="none"
    document.getElementById("cv-template").style.display="block"

   

     //profile pic 

    let profile =document.getElementById("setProfile").files[0];
    
    console.log(profile);
    let reader = new FileReader();
    reader.readAsDataURL(profile);

    reader.onloadend= ()=>{
        document.getElementById('profile').setAttribute('src',reader.result);
    }


    console.log(reader.result);


    

    
}
