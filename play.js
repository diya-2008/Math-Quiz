p1name=localStorage.getItem("un1");
p2name=localStorage.getItem("un2");
p1score=0;
p2score=0;
document.getElementById("player1name").innerHTML=p1name+" : ";
document.getElementById("player2name").innerHTML=p2name+" : ";
document.getElementById("player1score").innerHTML=p1score;
document.getElementById("player2score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="question turn: " + p1name;
document.getElementById("player_answer").innerHTML="answer turn: " + p2name;
function send(){
get_number1=document.getElementById("number1").value;
get_number2=document.getElementById("number2").value;
answer=parseInt(get_number1)*parseInt(get_number2);
qno="<h4>"+get_number1+"x"+get_number2+"</h4>";

abox="<br>Answer: <input type='text' id='input_check_box'>";
b2="<br><br><button class='btn btn-danger' onclick = 'check()'>Check</button>";
show=qno+abox+b2;
document.getElementById("output").innerHTML=show;
document.getElementById("number1"). value="";
document.getElementById("number2"). value="";

}
qturn="player1";
aturn="player2";
function check(){
getans=document.getElementById("input_check_box"). value;
if (getans==answer){
if (aturn=="player1"){
p1score=p1score+1;
document.getElementById("player1score").innerHTML=p1score;
}
else{
p2score=p2score+1;
document.getElementById("player2score").innerHTML=p2score;
}
}
if(qturn=="player1"){
qturn="player2";
document.getElementById("player_question").innerHTML="Question turn: "+p2name;
}
else{
qturn="player1";
document.getElementById("player_question").innerHTML="Question turn: "+p1name;    
}
if(aturn=="player1"){
aturn="player2";
document.getElementById("player_answer").innerHTML="Answer turn: "+p2name;
}
else{
aturn="player1";
document.getElementById("player_answer").innerHTML="Answer turn: "+p1name;
}
document.getElementById("output").innerHTML="";;
}