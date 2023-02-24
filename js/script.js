let webdevbtn = document.getElementsByClassName('webdevbtn');

Array.from(webdevbtn).forEach((element,index) => {
    element.addEventListener('click',()=>{

        console.log("yeah it is working",index);
        location.href=`../Web-Development/webDevelopment${index}.html`;
    })
});


let appdevbtn = document.getElementsByClassName('appdevbtn');

Array.from(appdevbtn).forEach((element,index) => {
    element.addEventListener('click',()=>{
        console.log("yeah it is working",index);
        location.href=`../Application-Development/applicationDevelopment${index+1}.html`;
    })
});

let VTSdevbtn = document.getElementsByClassName('VTSdevbtn');

Array.from(VTSdevbtn).forEach((element,index) => {
    element.addEventListener('click',()=>{
        console.log("yeah it is working",index);
        location.href=`../VTS-Development/VTSDevelopment${index+1}.html`;
    })
});


