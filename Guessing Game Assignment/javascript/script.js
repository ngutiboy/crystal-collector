$(document).ready(function(){

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max-1))+1;
    }

    var randomNumber = getRandomInt(120);
    $("#randomNumber").text(randomNumber);

    var crystalBoxes = {
        crystalBox1: getRandomInt(12),
        crystalBox2: getRandomInt(12),
        crystalBox3: getRandomInt(12),
        crystalBox4: getRandomInt(12)
    }

    var totalScore = 0;
    var win = 0;
    var loss = 0;

    function reset() {
        randomNumber = getRandomInt(120)
        crystalBoxes = {
            crystalBox1: getRandomInt(12),
            crystalBox2: getRandomInt(12),
            crystalBox3: getRandomInt(12),
            crystalBox4: getRandomInt(12)
        }
        totalScore = 0;
        
        $("#randomNumber").text(randomNumber);
    }

    function restart() {
        reset();
        win = 0;
        loss = 0;
    }

    $(".crystal").on("click", function(){        
        totalScore += crystalBoxes[$(this).attr('id')];

        if(totalScore === randomNumber){
            win++;
            $("#win").text(win);
            reset();
        }else if(totalScore > randomNumber) {
            loss++;
            $("#loss").text(loss);
            reset();
        }

        $("#currentScore").text(totalScore);
    });
});

