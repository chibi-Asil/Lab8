// TO DO: Set up a JS File
// Documentation help: https://www.codemahal.com/video/javascript-quiz-tutorial/

//  Set up initial variables in JavaScript code
// Creation of the variables for the quiz
var pos = 0 // Is used to record what the position the user is at in the test eg. question 3 out of 4.
var correct = 0 // Shows how many you answered correctly
var mc_test, mc_test_status, mc_question, button, buttons, chA, chB, chC, chD; // The test variable contains the ‘test’ div and the test_status variable is used to contain the ‘test_status’ heading which displays the user’s progress in the test. The question variable will contain a question grabbed from an array, the choice variable will contain the user’s selected answer for a question, choices variable will contain the possible answers that will be displayed to the user, and chA, chB, and chC variables will contain each possible answer (A, B, or C) in the multiple-choice quiz. Since my question has 4 choices, it is choice_a, choice_b, choice_c, choice_d. We also have a fill_in_blank question
var blank_test, blank_test_status, blank_question, fill_in_blank // This is for fill-in-the blank question

//Then we will need to create the questions 
// this is a multidimensional array with 5 inner array elements with 6 elements inside them
var mc_questions = [
    {
        mc_question: "On the contest on who has been the worst to black Americans",
        A: "Adolf Hitler",
        B: "Ted Bundy",
        C: "Donald Trump",
        D: "Clementine Barnabet",
        answer: "C"
    },
    {
        mc_question: "When does early voting start in NYS in 2020?",
        A: "October 01, 2020",
        B: "October 24, 2020",
        C: "October 05, 2020",
        D: "Never. It was suspended because the US now lives in a dictatorship",
        answer: "B"
    },
    {
        mc_question: "On October 26, 2020, NASA released a picture of the moon cracking. What can it be?",
        A: "The Eldrich creatures",
        B: "Water"
        C: "Aliens have invaded us and will blow up the White House",
        D: "At the rate that 2020 is going, Godzilla's egg has crashed landed into the ocean",
        answer: "A"
    },
    {
        mc_question: "Why is there an Among Us porn?",
        A: "Because it is the rule of the Internet",
        B: "It is 2020. All bets are off. And who doesn't want to wank off to some virtual creatures",
        C: "Horny humans are horny",
        D: "Some of us have Imposter Syndrome and we get off on him having fun",
        answer: "B"
    }
    ];

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
function get(x){
    return document.getElementById(x);
}

// Creating a function to display the questions
// This function should show the question for display on the page

//Part 1 questions
function mcQuestion(){
    mc_test = get("mc_test");
    if(pos >= mc_questions.length){
        mc_test.innerHTML = "<h3> You got "+ correct+ " of " + mc_questions.length + "questions correct</h3>";
        get("mc_test_status").innerHTML = "Part 1 is now completed. I guess you are almost free...but freedom is an illusion.";
        pos = 0;
        correct = 0;
        // stops the rest of the showQuestion function from running when the test is done with
        return false;
    }
    get("mc_test_status").innerHTML = "Question "+ (pos+1) + " of "+ mc_questions.length;
    mc_question = mc_questions[pos].mc_uestion;
    chA = mc_questions[pos].a;
    chB = mc_questions[pos].b;
    chC = mc_questions[pos].c;
    chD = mc_questions[pos].d;

    //display the question
    mc_test.innerHTML= "<h3>"+mc_question+</h3>;
    //Displaying the answer options
    mc_test.innerHTML +="<label><input type = 'button' name = 'button' value = 'A'>" + chaA + "</label><br>";
    mc_test.innerHTML +="<label><input type = 'button' name = 'button' value = 'B'>" + chaB + "</label><br>";
    mc_test.innerHTML +="<label><input type = 'button' name = 'button' value = 'C'>" + chaC + "</label><br>";
    mc_test.innerHTML +="<label><input type = 'button' name = 'button' value = 'D'>" + chaD + "</label><br>";
}
// Creating a function to check for the answers

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
blank_question = blank_questions[pos].question;
chA = blank_questions[pos].a;
chB = blank_questions[pos].b;
chC = blank_questions[pos].c;
chD = blank_questions[pos].d;




