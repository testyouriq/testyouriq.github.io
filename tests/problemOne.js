//////////////////////////////////////////////////////
let answerOne = document.getElementById("answerOne");
let answerTwo = document.getElementById("answerTwo");
let answerThree = document.getElementById("answerThree");
let answerFour = document.getElementById("answerFour");
let answerFive = document.getElementById("answerFive");
let answerSix = document.getElementById("answerSix");
let answerSeven = document.getElementById("answerSeven");
let answerEightOne = document.getElementById("answerEightOne");
let answerEightTwo = document.getElementById("answerEightTwo");
let answerNine = document.getElementById("answerNine");
let answerTen = document.getElementById("answerTen");
let answerEleven = document.getElementById("answerEleven");
let answerTwelve = document.getElementById("answerTwelve");
let answerThirteen = document.getElementById("answerThirteen");
let answerFourteen = document.getElementById("answerFourteen");
let answerFifteen = document.getElementById("answerFifteen");
//////////////////////////////////////////////////////

var result = 0;

function checkAnswerOne(){
    document.getElementById("testOneT").style.visibility="hidden";
    document.getElementById("testTwoT").style.visibility="visible";
    if(answerOne.value == "B" || answerOne.value == "b"){
        document.getElementById("result").innerHTML=result;
        result += 20;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerTwo(){
    document.getElementById("testTwoT").style.visibility="hidden";
    document.getElementById("testThreeT").style.visibility="visible";
    if(answerTwo.value == "A" || answerTwo.value == "a"){
        document.getElementById("result").innerHTML=result;
        result += 20;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerThree(){
    document.getElementById("testThreeT").style.visibility="hidden";
    document.getElementById("testFourT").style.visibility="visible";
    if(answerThree.value == "A" || answerThree.value == "a"){
        document.getElementById("result").innerHTML=result;
        result += 20;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerFour(){
    document.getElementById("testFourT").style.visibility="hidden";
    document.getElementById("testFiveT").style.visibility="visible";
    if(answerFour.value == "T" || answerFour.value == "t"){
        document.getElementById("result").innerHTML=result;
        result += 20;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerFive(){
    document.getElementById("testFiveT").style.visibility="hidden";
    document.getElementById("testSixT").style.visibility="visible";
    if(answerFive.value == "B" || answerFive.value == "b"){
        document.getElementById("result").innerHTML=result;
        result += 20;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerSix(){
    document.getElementById("testSixT").style.visibility="hidden";
    document.getElementById("testSevenT").style.visibility="visible";
    if(answerSix.value == "0"){
        document.getElementById("result").innerHTML=result;
        result += 4;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerSeven(){
    document.getElementById("testSevenT").style.visibility="hidden";
    document.getElementById("testEightT").style.visibility="visible";
    if(answerSeven.value == "53"){
        document.getElementById("result").innerHTML=result;
        result += 4;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerEight(){
    document.getElementById("testEightT").style.visibility="hidden";
    document.getElementById("testNineT").style.visibility="visible";
    if(answerEightOne.value == "7" && answerEightTwo.value == "3" || answerEightOne.value == "3" && answerEightTwo.value == "7"){
        document.getElementById("result").innerHTML=result;
        result += 4;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerNine(){
    document.getElementById("testNineT").style.visibility="hidden";
    document.getElementById("testTenT").style.visibility="visible";
    if(answerNine.value == "4" ){
        document.getElementById("result").innerHTML=result;
        result += 4;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerTen(){
    document.getElementById("testTenT").style.visibility="hidden";
    document.getElementById("testElevenT").style.visibility="visible";
    if(answerTen.value == "20" ){
        document.getElementById("result").innerHTML=result;
        result += 4;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerEleven(){
    document.getElementById("testElevenT").style.visibility="hidden";
    document.getElementById("testTwelveT").style.visibility="visible";
    if(answerEleven.value == "6" ){
        document.getElementById("result").innerHTML=result;
        result += 10;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerTwelve(){
    document.getElementById("testTwelveT").style.visibility="hidden";
    document.getElementById("testThirteenT").style.visibility="visible";
    if(answerTwelve.value == "72" ){
        document.getElementById("result").innerHTML=result;
        result += 10;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerThirteen(){
    document.getElementById("testThirteenT").style.visibility="hidden";
    document.getElementById("testFourteenT").style.visibility="visible";
    if(answerThirteen.value == "9717" ){
        document.getElementById("result").innerHTML=result;
        result += 10;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerFourteen(){
    document.getElementById("testFourteenT").style.visibility="hidden";
    document.getElementById("testFifteenT").style.visibility="visible";
    if(answerFourteen.value == "10" ){
        document.getElementById("result").innerHTML=result;
        result += 10;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
}
function checkAnswerFifteen(){
    document.getElementById("testFifteenT").style.visibility="hidden";
    document.getElementById("resultT").style.visibility="visible";
    document.getElementById("q").style.visibility="hidden";
    if(answerFifteen.value == "simple" ){
        document.getElementById("result").innerHTML=result;
        result += 10;
    }
    else{
        document.getElementById("result").innerHTML=result;
        result += 0;
    }
    document.getElementById("result").innerHTML=result;
}
document.getElementById("result").innerHTML=result;

function backToStart(){
    location.href="Start.html";
}
/////////////////////////////////////////////////////////////

function backTwo(){
    document.getElementById("testTwoT").style.visibility="hidden"
    document.getElementById("testOneT").style.visibility="visible"
}
function backThree(){
    document.getElementById("testThreeT").style.visibility="hidden"
    document.getElementById("testTwoT").style.visibility="visible"
}
function backFour(){
    document.getElementById("testFourT").style.visibility="hidden"
    document.getElementById("testThreeT").style.visibility="visible"
}
function backFive(){
    document.getElementById("testFiveT").style.visibility="hidden"
    document.getElementById("testFourT").style.visibility="visible"
}
function backSix(){
    document.getElementById("testSixT").style.visibility="hidden"
    document.getElementById("testFiveT").style.visibility="visible"
}
function backSeven(){
    document.getElementById("testSevenT").style.visibility="hidden"
    document.getElementById("testSixT").style.visibility="visible"
}
function backEight(){
    document.getElementById("testEightT").style.visibility="hidden"
    document.getElementById("testSevenT").style.visibility="visible"
}
function backNine(){
    document.getElementById("testNineT").style.visibility="hidden"
    document.getElementById("testEightT").style.visibility="visible"
}
function backTen(){
    document.getElementById("testTenT").style.visibility="hidden"
    document.getElementById("testNineT").style.visibility="visible"
}
function backEleven(){
    document.getElementById("testElevenT").style.visibility="hidden"
    document.getElementById("testTenT").style.visibility="visible"
}
function backTwelve(){
    document.getElementById("testTwelveT").style.visibility="hidden"
    document.getElementById("testElevenT").style.visibility="visible"
}
function backThirteen(){
    document.getElementById("testThirteenT").style.visibility="hidden"
    document.getElementById("testTwelveT").style.visibility="visible"
}
function backFourteen(){
    document.getElementById("testFourteenT").style.visibility="hidden"
    document.getElementById("testThirteenT").style.visibility="visible"
}
function backFifteen(){
    document.getElementById("testFifteenT").style.visibility="hidden"
    document.getElementById("testFourteenT").style.visibility="visible"
}







