
$(document).ready(function (){
    $("#start").click(function (){
        location.reload()
    })
    //player one X 1
    //player two O 2
    var turn = 1;
    var totalTurns = 0;
    var c1=11,c2=12,c3=13,c4=14,c5=15,c6=16,c7=17,c8=18,c9=19;

    function endGame(){
        $("#c1").addClass("selected")
        $("#c2").addClass("selected")
        $("#c3").addClass("selected")
        $("#c4").addClass("selected")
        $("#c5").addClass("selected")
        $("#c6").addClass("selected")
        $("#c7").addClass("selected")
        $("#c8").addClass("selected")
        $("#c9").addClass("selected")
        $("#yourTurn").css('display','none')
        $("#youWon").css('display','inline-block')
    }

    function check(){
        if( (c1==c2&&c1==c3) || (c1==c4&&c1==c7) || (c1==c5&&c1==c9)  || (c2==c5&&c2==c8)  || (c3==c6&&c3==c9)  || (c3==c5&&c3==c7)  || (c4==c5&&c4==c6)  || (c7==c8&&c7==c9) ){
            endGame();
            return
        }
        if (turn==1){
            document.getElementById("turn").innerText="1"
        } else {
            document.getElementById("turn").innerText="2"
        }
        if (totalTurns==9){
            $("#player").css('display','none')
            $("#draw").css('display','block')
        }
    }

    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }

    if (detectMob()){
        $("#c1").on('touchstart', function (){
            if (turn==1){
                $("#c1").addClass("optX selected")
                c1=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c1").addClass("optO selected")
                c1=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c2").on('touchstart', function (){
            if (turn==1){
                $("#c2").addClass("optX selected")
                c2=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c2").addClass("optO selected")
                c2=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c3").on('touchstart', function (){
            if (turn==1){
                $("#c3").addClass("optX selected")
                c3=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c3").addClass("optO selected")
                c3=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c4").on('touchstart', function (){
            if (turn==1){
                $("#c4").addClass("optX selected")
                c4=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c4").addClass("optO selected")
                c4=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c5").on('touchstart', function (){
            if (turn==1){
                $("#c5").addClass("optX selected")
                c5=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c5").addClass("optO selected")
                c5=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c6").on('touchstart', function (){
            if (turn==1){
                $("#c6").addClass("optX selected")
                c6=1
                turn = 2;
                totalTurns++;
            } else {
                $("#c6").addClass("optO selected")
                c6=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c7").on('touchstart', function (){
            if (turn==1){
                $("#c7").addClass("optX selected")
                c7=1
                turn = 2;
                totalTurns++;
            } else {
                $("#c7").addClass("optO selected")
                c7=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c8").on('touchstart', function (){
            if (turn==1){
                $("#c8").addClass("optX selected")
                c8=1
                turn = 2;
                totalTurns++;
            } else {
                $("#c8").addClass("optO selected")
                c8=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c9").on('touchstart', function (){
            if (turn==1){
                $("#c9").addClass("optX selected")
                c9=1
                turn = 2;
                totalTurns++;
            } else {
                $("#c9").addClass("optO selected")
                c9=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
    } else {
        $("#c1").mousedown(function (){
            if (turn==1){
                $("#c1").addClass("optX selected")
                c1=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c1").addClass("optO selected")
                c1=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c2").mousedown(function (){
            if (turn==1){
                $("#c2").addClass("optX selected")
                c2=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c2").addClass("optO selected")
                c2=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c3").mousedown(function (){
            if (turn==1){
                $("#c3").addClass("optX selected")
                c3=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c3").addClass("optO selected")
                c3=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c4").mousedown(function (){
            if (turn==1){
                $("#c4").addClass("optX selected")
                c4=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c4").addClass("optO selected")
                c4=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c5").mousedown(function (){
            if (turn==1){
                $("#c5").addClass("optX selected")
                c5=1;
                turn = 2;
                totalTurns++;
            } else {
                $("#c5").addClass("optO selected")
                c5=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c6").mousedown(function (){
            if (turn==1){
                $("#c6").addClass("optX selected")
                c6=1
                turn = 2;
                totalTurns++;
            } else {
                $("#c6").addClass("optO selected")
                c6=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c7").mousedown(function (){
            if (turn==1){
                $("#c7").addClass("optX selected")
                c7=1
                turn = 2;
                totalTurns++;
            } else {
                $("#c7").addClass("optO selected")
                c7=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c8").mousedown(function (){
            if (turn==1){
                $("#c8").addClass("optX selected")
                c8=1
                turn = 2;
                totalTurns++;
            } else {
                $("#c8").addClass("optO selected")
                c8=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
        $("#c9").mousedown(function (){
            if (turn==1){
                $("#c9").addClass("optX selected")
                c9=1
                turn = 2;
                totalTurns++;
            } else {
                $("#c9").addClass("optO selected")
                c9=2
                turn = 1;
                totalTurns++;
            }
            check();
        })
    }
})