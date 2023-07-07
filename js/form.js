function sendMail(){
    console.log("yaha aagya")
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value,
    };

    const serviceID = "service_n55l0lq";
    const templateId = "template_kdqzamp";
    
    emailjs.send(serviceID,templateId,params).then((res)=>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("subject").value ="";
        document.getElementById("phone").value ="";
        document.getElementById("message").value ="";
    }).catch((err)=>{
        console.log(err)
    })

}