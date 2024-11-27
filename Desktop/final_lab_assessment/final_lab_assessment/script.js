deleteButton = document.getElementById('deleteStudentButton');
// add an event listener to delete the last row/student on double clicking the deleteButton


button = document.getElementById('addStudentButton');
// add an event listener to style the button on click
 addEventListener(onclick.addStudentButton(){
    display: block;

});

function showNewStudentForm(){
// display the form on clicking the button
}

function validateForm(){
    // validate your form
    // regex for name: /^[A-Za-z]+(?: [A-Za-z]+)*$/  allows names habving one or more words with one white spaces in between
    // regex for email:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    // regex for student id: /^[a-zA-Z0-9]{7}$/  accepts alphanumeric values of 7 characters

    const name= "Enter your name";
    const email="Enter your email";
    const age="Enter your age";
    const student_id="Enter your student id";

    namePattern=/^[A-Za-z]+(?: [A-Za-z]+)*$/;
    emailPattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    student_id= /^[a-zA-Z0-9]{7}$/;

     namePattern() in name{
        alert("Invalid person's name");
    
    }
}



