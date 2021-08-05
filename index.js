let count = 0

window.onload = function() {
    document.getElementById('question1').style.display = 'none'
    document.getElementById('question2').style.display = 'none'
    document.getElementById('question3').style.display = 'none'
    document.getElementById('question4').style.display = 'none'
    document.getElementById('question5').style.display = 'none'
    document.getElementById('results').style.display = 'none'
}



function startQuiz() {
    document.getElementById('main').style.display = 'none'
    document.getElementById('question1').style.display = 'block'
}

function question(w,x,y,z){
    document.getElementById[w]
    let v = document.forms[w][x].value;
            
    if (v == ""){
        alert("fill in radio button")
    }  

    else {
        document.getElementById(y).style.display = 'none'
        document.getElementById(z).style.display = 'block'
        count = count + parseInt(v)
        document.getElementById('score').innerHTML = `${count} out of 5`
    }
 
}

