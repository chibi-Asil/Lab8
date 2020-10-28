// TO DO: Set up a JS File
// Documentation help: http://www.flashbynight.com/tutes/blanks/

//  Set up initial variables in JavaScript code
// Creation of the variables for the quiz
var pos = 0 // Is used to record what the position the user is at in the test eg. question 3 out of 4.
var correct = 0 // Shows how many you answered correctly
var blank_test, blank_test_status, blank_question, fill_in_blank // This is for fill-in-the blank question

//Then we will need to create the questions 
var blank_questions = [
    {
        blank_question: "Monsieur Hood sings, 'I like an honest fight and a saucy little maid.' Merry Men sings, 'What he's basically saying is he likes to get...'",
        blank_box:" ", 
        answer: "laid",
    },
    {
        blank_question: "What’s the difference between a Catholic priest and a zit?",
        blank_box: " ",
        answer: "A zit will wait until you’re twelve before it comes on your face.",
    },
    {
        blank_question: "Although she lives with seven other men, she is not easy. Who is she?"
        blank_box: " ",
        answer: "Snow White",
    }
    ];
// Next step would be to create the get() function
function get(y){
    return document.getElementById(y);
}

// Creating a function to display the questions
//Part 1 questions
// Will need to create a submit button that changes colour if the answer is correct or not
function submitButton(_this){
    buttons = document.getElementsByName("buttons");
    for (var i = 0; i < buttons.length; i++){
        if(buttons[i].checked){
            button = buttons[i].value;    
        }
    }
    // Checks if answer matches the correct choice
    if(choice == questions[pos].answer){
        _this.style.backgroundColor = "green";
    }
    if(choice != questions[pos].answer){
        _this.style.backgroundColor = "red";
    }
}

// Part 2 questions
function blankQuestion(){
        blank_test = get("blank_test");
    if(pos >= blank_questions.length){
        blank_test.innerHTML = "<h3> You got " + correct + " of " + blank_questions.length + "questions correct.</h3>";
        get("blank_test_status").innerHTML = "Part 2 is now completed. You earned your freedom...or did you really? Because you know what you said...and we captured your data.";
        pos++;
        correct++;
        return false;
    }
get("blank_test_status").innerHTML = "Question "+ (pos+1) + " of "+ blank_questions.length;
    blank_question = blank_questions[pos].blank_box;


    //display the question
    blank_test.innerHTML= "<h3>"+blank_question+</h3>;
    //Displaying the answer options
    blank_test.innerHTML +="<label><input type = 'button' name = 'buttons' onclick = 'submitButton' value = 'A'>" + chaA + "</label><br>";
    mc_test.innerHTML +="<label><input type = 'button' name = 'buttons' onclick = 'submitButton' value = 'B'>" + chaB + "</label><br>";
    mc_test.innerHTML +="<label><input type = 'button' name = 'buttons' onclick = 'submitButton' value = 'C'>" + chaC + "</label><br>";
    mc_test.innerHTML +="<label><input type = 'button' name = 'buttons' onclick = 'submitButton' value = 'D'>" + chaD + "</label><br>";
}
// Creating a function to check for the answers
function mcAnswer(){
    // use the getElementByName because we have an array which it can loop through
    buttons = document.getElementsByName("buttons");
    for (var i = 0; i < buttons.length; i++){
        if(buttons[i].checked){
            button = buttons[i].value;    
        }
    }
    // Checks if answer matches the correct choice
    if(choice == questions[pos].answer){
        correct++;
    }
    // Which then changes the position on which the user is now on 
    pos++;
    mcQuestion();
}
// Adding an event listner to call mcAnswer on the page load event
window.addEventListner("load", mcAnswer);




