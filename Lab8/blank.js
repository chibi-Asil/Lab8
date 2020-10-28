// TO DO: Set up a JS File
// Documentation help: http://www.flashbynight.com/tutes/blanks/
(document).ready(function(){
//  Set up initial variables in JavaScript code
// Creation of the global variables for the quiz
    var blankQuestions = new Array; // This is for the array of fill-in the blanks for both answers and questions
    var currentQuestion;
    var currentAnswer;
    var number_Question;
    var questionPosition; // Is used to control the flow of the game
    var score;

// We will need to get data from our JSON file
    $.getJSON('questions.json', function(questions){ 
        number_Question = questions.Question_List.length;
        for(i = 0; i < questions.Question_List; i++){ // The point is to loop thru the JSON elements within our question bank
            typeArray = []; // Creating an empty and temporary two-dimensional array, we can store it in this. 
            typeArray[0] = questions.Question_List[i].question;
            typeArray[1] = questions.Question_List[i].response;
            blankQuestions[i] = typeArray;
        }
        alert(blankQuestions) 
        questionPositioin = 1;
        resetQuestion();
        update_question();
        
    })
    
    // Of course, we will need a loading page
    function part2_Question(){
        currentQuestion = 0;
        score = 0;
        $("#blank_test").empty();
        $("#blank_test").append("<h3>Trust me, it can ALWAYS get worse. Prepare to give me your soul. </h3>");
        $("#blank_test").append("<p> Do you want to play a game? Type in your answer and then press ENTER:</p>");
        $("blank_test").append('<p id = "wordBox"></p>');
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
    function questionControl(){
        switch (questionPosition){
            case 1:
                checkAnswer();
                break;
            case 2:
                update_question();
                break;
            case 3:
                scorePage();
            case 4:
                resetGame();
                update_question();
                break;
        } //switch
    }
    
    // We will need to create a checkAnswer function to ensure that we're doing it correctly
    function checkAnswer(){
        myAnswer = $("#inputBox").val();
        if(myAnswer.slice(myAnswer.length-1, myAnswer.length== " "){
            myAnswer = myAnswer.slice(0, myAnswer.length + 1);)}
        if(currentAnswer == myAnswer){
            score++;
            $("#feedback").append('<img src = https://images.app.goo.gl/Gm3Mo7HAakECMtgq7'>);
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
    
    // How did you do? Score Page
    function scorePage(){
        $("#blank_test").empty()
        $("#blank_test").append("<h1> You actually finished the quiz. Wow.</h1><br><br>");
        $("#blank_test").append("I hope you enjoy these quizzes since you just gave me your data<br><br>");
        $("#blank_test").append("Final score: " + score + " | " + number_Question + "<br><br>");
        $("#blank_test").append("Press ENTER if you would like to waste even more time and I can capture even more of your data.");
        gamePosition = 4;
    }
    
            
}
