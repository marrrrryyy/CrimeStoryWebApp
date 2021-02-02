var curPage = 0;
var myQuiz = [
    ["Question header 1", "answer1", "answer2", "answer3", "answer4", 1],
    ["Question header 2", "answer1.2", "answer2.2", "answer3.2", "answer4.2", 1]
];
console.log(myQuiz.length);

document.getElementById("btnNext").addEventListener("click", moveNext);
document.getElementById("btnPrevious").addEventListener("click", moveBack);

var myHeader = document.getElementById("quizHeader");
var classname = document.getElementsByClassName("answer");
var myQuestion = document.getElementById("questions");
console.log(myQuestion);
console.log(myQuestion.children[0]);
console.log(myQuestion.children[1]);
console.log(myQuestion.children[2]);
console.log(myQuestion.children[3]);

checkPage();
console.log(classname);

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener("click", myAnswer, false);
}

function myAnswer() {
    var idAnswer = this.getAttribute("data-id");
    document.getElementById("page1").innerHTML = "Answer " + idAnswer;
}
function moveNext() {
    if(curPage < (myQuiz.length-1)){
        curPage++;
        checkPage(curPage);
    } else {
        console.log("end of quiz page" + curPage);
    }
    
}

function checkPage(i) {
    console.log(curPage+1);
    myHeader.innerHTML = myQuiz[curPage][0];
    for (var i = 0; i < myQuestion.children.length; i++) {
        var curNode = myQuestion.children[i];
        console.log(curNode.childNodes[1].innerHTML);
        curNode.childNodes[1].innerHTML = myQuiz[curPage][(i+1)];
    }
}

function moveBack() {
    if (curPage > 0) {
        curPage--;
        checkPage(curPage);
    }else{
        console.log("end of quiz page "+ curPage);
    }
}