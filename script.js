document.addEventListener("DOMContentLoaded",function(){
    alert("Thank you for visiting my portfolio!");

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name= document.getElementById("name").value.trim();
        const email=document.getElementById("email").value.trim();
        const message=document.getElementById("message").value.trim();   
    

        if(!name || !email || !message){
            alert("Please fill iin all fields");
            return;
        }
        if(!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)){
            alert("Please enter a valid email address");
            return;
        }

        alert(`Thank you ${name}! Your message has been received`);
        form.reset();
    });
});