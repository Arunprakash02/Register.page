// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mylogin");

    form.addEventListener("submit", (event) => {
        
        event.preventDefault();
        alert("Form Submitted")

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("dob").value;
        const time = document.getElementById("time").value;
        const gender = document.querySelector('input[name="gender"]:checked') 
            ? document.querySelector('input[name="gender"]:checked').value 
            : "Not selected";
        const password = document.getElementById("password").value;

        
        console.log("Form Input Data:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone Number:", phone);
        console.log("Date of Birth:", dob);
        console.log("Time:", time);
        console.log("Gender:", gender);
        console.log("Password:", password);
    });
});
