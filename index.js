window.onload = function() {
    document.getElementById('question1').style.display = 'none'
    document.getElementById('question2').style.display = 'none'
    document.getElementById('question3').style.display = 'none'
    document.getElementById('question4').style.display = 'none'
    document.getElementById('question5').style.display = 'none'
}

function startQuiz() {
    document.getElementById('main').style.display = 'none'
    document.getElementById('question1').style.display = 'block'
}

function question2() {
    let result1 = document.forms["Q1"]["quest1"].value;
    if (result1 == ""){
        alert("fill in radio button")
        return false;
    }
    else if (result1 = 1) {
        document.getElementById('question1').style.display = 'none'
        document.getElementById('question2').style.display = 'block'
        return true;
    }
    else {
        document.getElementById('question1').style.display = 'none'
        document.getElementById('question2').style.display = 'block'
        return true;    
    }
}

function question3() {
    let result2 = document.forms["Q2"]["quest2"].value;
    if (result2 == ""){
        alert("fill in radio button")
        return false;
    }
    else if (result2 = 1) {
        document.getElementById('question2').style.display = 'none'
        document.getElementById('question3').style.display = 'block'
        return true;
    }
    else {
        document.getElementById('question2').style.display = 'none'
        document.getElementById('question3').style.display = 'block'
        return true;    
    }
}

function question4() {
    document.getElementById('question3').style.display = 'none'
    document.getElementById('question4').style.display = 'block'
}

function question5() {
    document.getElementById('question4').style.display = 'none'
    document.getElementById('question5').style.display = 'block'
}