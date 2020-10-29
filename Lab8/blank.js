// TO DO: Set up a JS File
// Documentation help: http://www.flashbynight.com/tutes/blanks/
$(document).ready(function(){
//  Set up initial variables in JavaScript code
// Creation of the global variables for the quiz
    var blankQuestions = new Array; // This is for the array of fill-in the blanks for both answers and questions
    var currentQuestion;
    var currentAnswer;
    var number_Question;
    var questionPosition; // Is used to control the flow of the game
    var score;
    var pos = 0;
    var correct = 0;
    var user_input = [];
    var ch1; // Answer to question 1
    var ch2; // Answer to question 2 
    var ch3; // Answer to question 3

// Creating the questions
    var question_list = [{
            "id": "1",
            "blank_question" : "Monsieur Hood sings, 'I like an honest fight and a saucy little maid.' Merry Men sings, 'What he's basically saying is he likes to get...'",
            "answer" : "laid",
            "blank_box" :[] 
        
        },
        {
            "id": "2",
            "blank_question" : "What’s the difference between a Catholic priest and a zit?",
            "answer" : "A zit will wait until you’re twelve before it comes on your face.",
            "blank_box" : []
            
        },
        {
            "id": "3",
            "blank_question" : "Although she lives with seven other men, she is not easy. Who is she?",
            "answer" : "Snow White",
            "blank_box" : []
            
        }
    ];
    
    // Of course, we will need a loading page
    function part2_Question(){
        currentQuestion = 0;
        score = 0;
        $("#blank_test").empty();
        $("#blank_test").append("<h3>Trust me, it can ALWAYS get worse. Prepare to give me your soul. </h3>");
        $("#blank_test").append("<p> Do you want to play a game? Type in your answer and then press ENTER:</p>");
        $("#blank_test").append('<p id = "wordBox"></p>');
        $("#blank_test").append("<input type = 'text' id = 'inputBox'>");
        $("#blank_test").append("<div id = 'No need for a feedback></div>'");
        $$("#blank_test").append("<p id = 'Really. I don't want to hear your complaints. What is done is done.'></p>")
        
    } 
    
    // Will need a function for updating the question
    function update_question(){
        $("wordBox").empty();
        $("wordBox").append(blankQuestions[currentQuestion][0]);
        $("#message").empty();
        $("#feedback").empty();
        $("inputBox").empty();
        $("#inputBox").prop("disabled", false);
        $("#inputBox").val("");
        $("#inputBox").css("background-color", "lilac");
        $("#inputBox").css("color", "black");
        $("#inputBox").focus()
        $("#inputBox").click(function(e) {e.stopPropagation();})
        currentAnswer = blankQuestions[currentQuestion][1];
        currentQuestion++;
        questionPosition = 1;
    } 
    
    // Next - we want to capture the inputs
    $(document).on("keyup", function(e){
        if(e.which == 13){questionControl();};
    });
    $("#blank_test").on("click tap", function(){
        questionControl();
    })
    // Will need to create a submit button that changes colour if the answer is correct or not
    function changeButton(){
        
    }
    function hidden(){
        
    }
    // This function should show the question for display on the page
    function blank_question(){
        blank_test = get("blank_test");
        if(pos >= question_list.length){
            if(pos >= question_list.length){
            blank_test.innerHTML = "<h3> You got "+ correct+ " of " + question_list.length + "questions correct</h3>";
            get("blank_test_status").innerHTML = "Part 2 is now completed. I guess you are almost free...but freedom is an illusion.";
            pos = 0;
            correct = 0;
        // stops the rest of the showQuestion function from running when the test is done with
            return false;
        }
        get("blank_test_status").innerHTML = "Question "+ (pos+1) + " of "+ question_list.length;
        question_list = question_list[pos].question_list;
        ch1 = question_list[pos].blank_box;
        ch2 = question_list[pos].blank_box;
        ch3 = question_list[pos].blank_box;
    }

    //display the question
        blank_test.innerHTML= "<h3>" + question_list + "</h3>";
    
    //Displaying the answer options
        blank_test.innerHTML += "<label><input type = 'text' name = 'Answer' onclick = 'checkAnswer' value = 'text_1'>" + ch1 + "</label><br>";
        blank_test.innerHTML += "<label><input type = 'text' name = 'Answer' onclick = 'checkAnswer' value = 'text_2'>" + ch2 + "</label><br>";
        blank_test.innerHTML += "<label><input type = 'text' name = 'Answer' onclick = 'checkAnswer' value = 'text_3'>" + ch3 + "</label><br>";
    }
    // We will need to create a checkAnswer function to ensure that we're doing it correctly
    function checkAnswer(){
        myAnswer = $("#inputBox").val();
        if(myAnswer.slice(myAnswer.length - 1, myAnswer.length== " "){
            myAnswer = myAnswer.slice(0, myAnswer.length + 1);
        }
        console.log(myAnswer);
        if(currentAnswer == myAnswer){
             score++;
            $("#feedback").append('<img src = https://images.app.goo.gl/Gm3Mo7HAakECMtgq7>');
            $("#inputBox").css("background-color", "white");
            $("#inputBox").css("color", "green");
        }
        else{
            $("feedback").append('<img src = https://images.app.goo.gl/urNGMnYtyUYC1Sd89>');
            $("#inputBox").css("background-color", "white");
            $("#inputBox").css("color", "burgundy");
            $("#inputBox").val($("#inputBox").val() +" (ans = "+currentAnswer +")");
        }
        $('#message').append('Press ENTER to continue');
        $("#inputBox").prop('disabled', true);
        $("#blank_test").focus();
        gamePosition = 2;
        if(currentQuestion == number_Question){gamePosition = 3;}
    }
    
    // How did you do? Score Page
    function scorePage(){
        $("#blank_test").empty()
        $("#blank_test").append("<h1> You actually finished the quiz. Wow.</h1><br><br>");
        $("#blank_test").append("I hope you enjoy these quizzes since you just gave me your data<br><br>");
        $("#blank_test").append("Final score: " + score + " | " + number_Question + "<br><br>");
        $("#blank_test").append("Press ENTER if you would like to waste even more time and I can capture even more of your data.");
        gamePosition = 4;
    }
    
            
});
