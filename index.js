let count = 0

window.onload = function() {
    document.getElementById('question1').style.display = 'none'
    document.getElementById('question2').style.display = 'none'
    document.getElementById('question3').style.display = 'none'
    document.getElementById('question4').style.display = 'none'
    document.getElementById('question5').style.display = 'none'
    document.getElementById('results').style.display = 'none'
    // count = 0;
}

function startQuiz() {
    document.getElementById('main').style.display = 'none'
    document.getElementById('question1').style.display = 'block'
}

function question1() {
    let result1 = document.forms["Q1"]["quest1"].value;
    if (result1 == ""){
        alert("Please fill in radio button")
    }
    else if (result1 == 1) {
        document.getElementById('question1').style.display = 'none'
        document.getElementById('results').style.display = 'block'
    }
    else {
        document.getElementById('question1').style.display = 'none'
        document.getElementById('results').style.display = 'block'
        count = count +1
        document.getElementById('score').innerHTML = `${count} out of 5`
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
        score ++
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

function results() {
    document.getElementById('question5').style.display = 'none'
    document.getElementById('results').style.display = 'block'
}
