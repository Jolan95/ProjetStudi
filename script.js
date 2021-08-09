$(document).ready(function(){  
    let dice = document.getElementById('dice');
    
    dice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-dice-6 red de" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'

    reset()

    function reset(){
        score1 = 0;
        score2 = 0;
        scorecurr1 = 0
        scorecurr2 = 0
    }

        
    $('#scoreCurr2').text(scorecurr2)
    $('#scoreCurr1').text(scorecurr1)
    let tour = 0
    
    function end() {
        if(score1 >= 100){
            alert (`Victoire Player 1 : ${score1} à ${score2}`)
        } else {
            alert (`Victoire player 2 : ${score2} à ${score1} `)
        }
        reset()
            $("#score1").text(score1)
            $("#score2").text(score2)            
            $('#scoreCurr2').text(scorecurr2)
            $('#scoreCurr1').text(scorecurr1)
     }
        
        function redrond(){
            
            if(tour % 2 === 0) {
                $('#p1').show()
                $('#p2').hide()
            } else {
            $('#p2').show()
            $("#p1").hide()
        }
    }
   
    $("#roll").click(function() {
        var dice = Math.floor(Math.random() * (7 - 1) + 1);
        console.log(dice);
        displayDice(dice);
        if(tour % 2 === 0){
            scorecurr1 += dice;
        } else {
            scorecurr2 += dice;
        }
        if(dice === 6){
            tour++;
            scorecurr1 = 0;
            scorecurr2 = 0
            redrond()
            $("#one").css('color','red')
            $('#six').css('color','red')
            $('#five').css('color','red')
            $('#four').css('color','red')
            $('#two').css('color','red')
            $('#three').css('color','red')
            $("#seven").css('color','red')
        } else{
            $("#one").css('color','black')
            $('#six').css('color','black')
            $('#five').css('color','black')
            $('#four').css('color','black')
            $('#two').css('color','black')
            $('#three').css('color','black')
            $("#seven").css('color','black')
        }
        
        $('#scoreCurr1').text(scorecurr1)
        $("#scoreCurr2").text(scorecurr2)
    })
    
    
    redrond();

    $("#hold").click(function(){
        score1 += scorecurr1
        score2 += scorecurr2
        $("#score1").text(score1)
        $("#score2").text(score2)
        if(score1 >= 100 || score2 >= 100){
          end()
        }
        scorecurr1 = 0;
        scorecurr2 = 0;
        tour++
        console.log(tour)
        redrond()
        
        
    })

    $("#new").click(function(){
        reset()
        $("#score1").text(score1)
        $("#score2").text(score2)

        
        $('#scoreCurr2').text(scorecurr2)
        $('#scoreCurr1').text(scorecurr1)
        tour = 0
    })
    
    /*Affichage des scores */
    $("#score1").text(score1)
    $("#score2").text(score2)
    
    function displayDice(threw){
        
        switch(threw) {
            case 1 : 
            dice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-dice-1 white de" viewBox="0 0 16 16"><circle cx="8" cy="8" r="1.5"/><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/></svg>'
            console.log(1)
            break;
            case 2 : 
            dice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-dice-2 white de" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
            console.log(2)
        break;
            case 3 :
            dice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-dice-3 white de" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
            console.log(3)
        break;
            case 4 : 
            dice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-dice-4 white de" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
            console.log(4)
         break;
            case 5 : 
            dice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-dice-5 white de" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
            console.log(5)
         break;
            case 6 : 
            dice.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-dice-6 red de" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>'
      console.log(6)
         break; 
}
}  




})
