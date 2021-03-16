$(document).ready(function(){  
    $("#one").hide();
    $('#six').show()
    $('#five').show()
    $('#four').show()
    $('#two').show()
    $('#three').show()
    $("#seven").show()
    
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
            $("#one").show();
            $('#six').hide()
            $('#five').hide()
            $('#four').hide()
            $('#two').hide()
            $('#three').hide()
            $("#seven").hide()
            console.log(1)
            break;
            case 2 : 
            $("#one").hide();
            $('#six').hide()
            $('#five').hide()
            $('#four').hide()
            $('#two').show()
            $('#three').show()
            $("#seven").hide()
            console.log(2)
        break;
            case 3 :
            $("#one").show();
            $('#six').hide()
            $('#five').hide()
            $('#four').hide()
            $('#two').show()
            $('#three').show()
            $("#seven").hide()
            console.log(3)
        break;
            case 4 : 
            $("#one").hide();
            $('#six').hide()
            $('#five').show()
            $('#four').show()
            $('#two').show()
            $('#three').show()
            $("#seven").hide()
            console.log(4)
         break;
            case 5 : 
            $("#one").show();
            $('#six').hide()
            $('#five').show()
            $('#four').show()
            $('#two').show()
            $('#three').show()
            $("#seven").hide()
            console.log(5)
         break;
            case 6 : 
            $("#one").hide();
            $('#six').show()
            $('#five').show()
            $('#four').show()
            $('#two').show()
            $('#three').show()
            $("#seven").show()
      console.log(6)
         break; 
}
}  




})