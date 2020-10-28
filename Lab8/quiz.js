// TO DO: Set up a JS File
// Documentation help: https://www.codemahal.com/video/javascript-quiz-tutorial/
$(document).ready(function(){
//  Set up initial variables in JavaScript code
// Creation of the variables for the quiz
    var pos = 0 // Is used to record what the position the user is at in the test eg. question 3 out of 4.
    var correct = 0 // Shows how many you answered correctly
    var mc_test, mc_test_status, mc_question, button, buttons, chA, chB, chC, chD; // The test variable contains the ‘test’ div and the test_status variable is used to contain the ‘test_status’ heading which displays the user’s progress in the test. The question variable will contain a question grabbed from an array, the choice variable will contain the user’s selected answer for a question, choices variable will contain the possible answers that will be displayed to the user, and chA, chB, and chC variables will contain each possible answer (A, B, or C) in the multiple-choice quiz. Since my question has 4 choices, it is choice_a, choice_b, choice_c, choice_d. We also have a fill_in_blank question

//Then we will need to create the questions 
// this is a multidimensional array with 5 inner array elements with 6 elements inside them
// Sample javascript json array
/*
{
  "shareInfo": [{
      "id": "1",
      "a": "sss",
      "b": "sss",
      "question": "whi?"
    },
    {
      "id": "2",
      "a": "sss",
      "b": "sss",
      "question": "whi?"
    },
    {
      "id": "3",
      "a": "sss",
      "b": "sss",
      "question": "whi?"
    },
    {
      "id": "4",
      "a": "sss",
      "b": "sss",
      "question": "whi?"
    }
  ]
}
*/
// NOTE: Simplified labels and kept question and answer as the first 2 indexes to make iterating through the array easier
// Made the multiple choice options its own array to compartmentalize the choices that will be buttons displayed
    var multiple_choice_questions = [
        {
            "question": "On the contest on who has been the worst to black Americans?",
            "answer": "Donald Trump",
            "multiple_choices": [
                "Adolf Hitler",
                "Ted Bundy",
                "Donald Trump",
                "Clementine Barnabet"
            ]
            
        },
        {
            "question": "When does early voting start in NYS in 2020?",
            "answer": "October 24, 2020",
            "multiple_choices": [
                "October 01, 2020",
                "October 24, 2020",
                "October 05, 2020",
                "Never. It was suspended because the US now lives in a dictatorship"
            ]
        },
        {
            "question": "On October 26, 2020, NASA released a picture of the moon cracking. What can it be?",
            "answer": "The Eldrich creatures",
            "multiple_choices": [
                "The Eldrich creatures",
                "Water",
                "Aliens have invaded us and will blow up the White House",
                "At the rate that 2020 is going, Godzilla's egg has crashed landed into the ocean"
            ]
           
        },
        {
            "question": "Why is there an Among Us porn?",
            "answer": "It is 2020. All bets are off. And who doesn't want to wank off to some virtual creatures",
            "multiple_choices": [
                "Because it is the rule of the Internet",
                "It is 2020. All bets are off. And who doesn't want to wank off to some virtual creatures",
                "Horny humans are horny",
                "Some of us have Imposter Syndrome and we get off on him having fun"
            ]
            
        }
        ];

    // Next step would be to create the get() function
    /*function get(x){
        return document.getElementById(x);
    }
*/
// Creating a function to display the questions
//Part 1 questions
// Will need to create a submit button that changes colour if the answer is correct or not
/* TODO checkAnswer
- Get the html elment id and value
- From the value the last character is the index in multiple_choice_questions that you will need. Ex:multiple_choice_questions[0] from id='multiple_choice_questions_0'
- Check if multiple_choice_questions[0].answer matches the value submitted
*/
    /*function checkAnswer(_this){
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
    }*/
// This function should show the question for display on the page
   /* function mcQuestion(){
        mc_test = get("mc_test");
        if(pos >= multiple_choice_questions.length){
            mc_test.innerHTML = "<h3> You got "+ correct+ " of " + multiple_choice_questions.length + "questions correct</h3>";
            get("mc_test_status").innerHTML = "Part 1 is now completed. I guess you are almost free...but freedom is an illusion.";
            pos = 0;
            correct = 0;
        // stops the rest of the showQuestion function from running when the test is done with
            return false;
        }
        get("mc_test_status").innerHTML = "Question "+ (pos+1) + " of "+ multiple_choice_questions.length;
        mc_question = multiple_choice_questions[pos].mc_question;
        chA = multiple_choice_questions[pos].A;
        chB = multiple_choice_questions[pos].B;
        chC = multiple_choice_questions[pos].C;
        chD = multiple_choice_questions[pos].D;

    //display the question
        mc_test.innerHTML= "<h3>"+mc_question+</h3>;
    //Displaying the answer options
        mc_test.innerHTML +="<label><input type = 'button' name = 'buttons' onclick = 'checkAnswer' value = 'A'>" + chaA + "</label><br>";
        mc_test.innerHTML +="<label><input type = 'button' name = 'buttons' onclick = 'checkAnswer' value = 'B'>" + chaB + "</label><br>";
        mc_test.innerHTML +="<label><input type = 'button' name = 'buttons' onclick = 'checkAnswer' value = 'C'>" + chaC + "</label><br>";
        mc_test.innerHTML +="<label><input type = 'button' name = 'buttons' onclick = 'checkAnswer' value = 'D'>" + chaD + "</label><br>";
    }*/

// Creating a function to check for the answers
    // function DisplayMulitpleChoiceQuestions(){
    // // use the getElementByName because we have an array which it can loop through
    //     buttons = document.getElementsByName("buttons");
    //     for (var i = 0; i < buttons.length; i++){
    //         if(buttons[i].checked){
    //             button = buttons[i].value;    
    //         }
    //     }
    // // Checks if answer matches the correct choice
    //     if(choice == questions[pos].answer){
    //         correct++;
    //     }
    // // Which then changes the position on which the user is now on 
    //     pos++;
    //     mcQuestion();
    // }

    // Display the multiple choice question from multiple_choice_questions array and the multiple choice options
    function DisplayMulitpleChoiceQuestions(){
// get name of button to know which question
// for the number of 
var numberOfQuestions = multiple_choice_questions.length;//
console.log("Hey Lisa :P");//
console.log(numberOfQuestions);//

// inside multiple_choice_test for each question create a button with onclick event of 
// for each question
// display the question
// display the button options 

            for (var i = 0; i < numberOfQuestions; i++){
                $("#multiple_choice_test").append( "<h3>"+multiple_choice_questions[i].question+"</h3>" );// display the question

                // display the multiple choice options
                for (var j = 0; j < multiple_choice_questions[i].multiple_choices.length; j++){
                    console.log(multiple_choice_questions[i].multiple_choices[j]);//
                    
                    // NOTE: If you want to change the layout of the buttons add some css
                    // The id contains the index in multiple_choice_questions array to reference for the question
                    // Button has value that can be directly checked if it matches multiple_choice_questions.answer
                    $("#multiple_choice_test").append( "<button id='"+"multiple_choice_questions_"+i+"' name='multiple_choice_button' type='button' onclick='checkAnswer(this)' value='"+multiple_choice_questions[i].multiple_choices[j]+"'>"+multiple_choice_questions[i].multiple_choices[j]+"</button></br></br>" );// display the question
                }

            }
        }

    // Adding an event listner to call DisplayMulitpleChoiceQuestions on the page load event
    // NOTE: Dont confuse jquery with regular js.
    window.addEventListener("load", DisplayMulitpleChoiceQuestions());
});
