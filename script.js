document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("RForm");
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        const fName = document.getElementById("firstName").value.trim();
        if (fName.length < 2) {
            document.getElementById('fNameError').innerHTML ='&nbsp; 2 characters required';
            isValid = false;
        } else {
            document.getElementById('fNameError').innerHTML ='';
        }

        const lName = document.getElementById("lastName").value.trim();
        if (lName.length < 2) {
            document.getElementById('lNameError').innerHTML ='&nbsp; 2 characters required';
            isValid = false;
        } else {
            document.getElementById('lNameError').innerHTML ='';
        }

        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').innerHTML ='&nbsp; email required';            
            isValid = false;
        } else {
            document.getElementById('emailError').innerHTML ='';
        }

        const pass = document.getElementById("pass").value.trim();
        if (pass.length < 8) {
            document.getElementById('passError').innerHTML ='&nbsp; 8 characters required';
            isValid = false;
        } else if(!(/[0-9]+/.test(pass) && /[A-Z]+/.test(pass))) {
            document.getElementById('passError').innerHTML ='&nbsp; At least one number and uppercase character required';
            isValid = false;
        } else {
            document.getElementById('passError').innerHTML ='';
        }
        
        const cpass = document.getElementById('cpass').value.trim();
        if(cpass != pass) {
            document.getElementById('cpassError').innerHTML ='&nbsp; Confirmation does not match password';
            isValid = false;
        }else {
            document.getElementById('cpassError').innerHTML ='';
        }
        const age = document.getElementById("age").value.trim();
        if (age != '' && (age < 18 || age > 100)){
            document.getElementById("ageError").innerHTML = "&nbsp; If included, age must be 18-100";
            isValid=false;
        } else {
            document.getElementById('ageError').innerHTML = '';
        }

        const phone = document.getElementById("phone").value.trim();
        const phonePattern = /[0-9]{3}\-[0-9]{3}\-[0-9]{4}/;
        if(phone !='' && !phonePattern.test(phone)) {
            document.getElementById('phoneError').innerHTML ='&nbsp; If included, phone number must be correct format: XXX-XXX-XXXX';
            isValid = false;
        } else {
            document.getElementById('phoneError').innerHTML ='';
        }

        if(isValid){
            const form_data = {fName:fName, lName:lName, email:email, pass:pass, age:parseInt(age), phone:phone};
            console.log(JSON.stringify(form_data));
            alert("Form submitted!");
            //form.submit();  //<- left commented out so that the console log can be viewed without it switching away
        }
    });
});