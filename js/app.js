var questions = {
	"1":{
		"question":"Who is the  Inventor of the steam engine?",
		"answer": ["Niels Bohr","James Watt","Benjamin Franklin","Guglielmo Marconi"],
		"ta": 1
	},
	"2":{
		"question":"Which one of these was invented by Nikola Tesla?",
		"answer": ["Aeroplane","Telephone","Paper","Iduction motor"],
		"ta": 3
	},
	"3":{
		"question":"Who invented mechanical computer?",
		"answer": ["Charles Babbage","Steve Jobs","Grace Hopper","Bill Gates"],
		"ta": 0
	},
	"4":{
		"question":"Telephone was invented by",
		"answer": ["Alexander Graham Bell","Thomas Edison","James Watt","Guglielmo Marconi"],
		"ta": 0
	},
	"5":{
		"question":"Who Developed the http:// protocol for the internet?",
		"answer": ["Steve Balmer","Grace Hopper","Bill Gates","Tim Berners Lee"],
		"ta": 3
	},
	"6":{
		"question":"Who invented the electric light bulb?",
		"answer": ["Nikola Tesla","Galileo","Thomas Edison","James Watt"],
		"ta": 2
	},
	"7":{
		"question":"Who is the  author of \"Philosophiæ Naturalis Principia Mathematica\"?",
		"answer": ["Niels Bohr","Isaac Newton","Guglielmo Marconi","Ernest Rutherford"],
		"ta": 1
	},
	"8":{
		"question":"The equation E=mc^2 was given by",
		"answer": ["Albert Einstein","James Watt","Benjamin Franklin","Isaac Newton"],
		"ta": 0
	},
	"9":{
		"question":"Who is known for inventing a system of reading and writing for use by the blind or visually impaired?",
		"answer": ["John Harrison","Louis Braille","Lee de Forest","John Bardeen"],
		"ta": 1
	},
	"10":{
		"question":"What are the names of Wright brothers who invented world's first successful airplane?",
		"answer": ["Jan and Nikolaas","Niels and Aage N.","Alva and Gunnar","Orville and Wilbur"],
		"ta": 3
	},
	"score":0
}
$(document).ready(function () {
	$('#playButton').on('click', function(event) {
		//$( '#playButton,.title').remove();
		$("#playButton,.title").fadeOut(300,function() { $(".button_div").remove(); });
		new_game(questions);
	});
	for (i in questions) {
		console.log(questions[i].question);
	}
	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  		new_game(questions);
  	});
});
function new_game(questions) {
	var count = 1;
	questions.score = 0;
	form(questions[count].question,questions[count].answer,questions[count].ta,count);
}
function next_question(score ,count) {
	
}
function form(q,ans,ta,count) {
	$(".title").fadeIn(300,function() { $(this).text(q); });
	$("#que_no").text(count+" out of 10");
	$("#score").text("Correct " + questions.score);
	que_no
	que_no
	console.log($(".answers").has("input").length);
	if($(".answers").has("input").length !== 0){
		$('.answers').empty();
	}
	for (i in ans) {
		$("<input type=\"button\" class=\"playButton option\" name=\"q" +count+ "\" value=\""+ans[i]+"\" id=\"a"+i+"\"></br>").hide().appendTo(".answers").delay(300).fadeIn(300);
	}
	$('input[name=q'+count+']').click(function(){
		count++;
        if (this.value == ans[ta]){
        	$("#a"+ta).css("background-color","green");
        	questions.score += 1;
        	if (count <= 10) {
        		setTimeout(function() {
				    form(questions[count].question,questions[count].answer,questions[count].ta,count);
				}, 775);
        	} else {
        		$("#score").text(questions.score);
        		$(".correct_ans").text(questions.score);
        		$(".wrong_ans").text(10 - questions.score);
        		$(".overlay").fadeIn(1000);
        	}
        	
        }else{
        	console.log(this.id);
        	$("#"+this.id).css("background-color","red");
        	$("#a"+ta).css("background-color","green");
        	if (count <= 10){
        		setTimeout(function() {
				    form(questions[count].question,questions[count].answer,questions[count].ta,count);
				}, 775);
        	}
        	else{
        		$("#score").text(questions.score);
        		$(".correct_ans").text(questions.score);
        		$(".wrong_ans").text(10 - questions.score);
        		$(".overlay").fadeIn(1000);

        }
        	}
   });
}