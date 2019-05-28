function main() {
    document.getElementById("btnMain").onclick = function (){
        this.disabled = true;
    }

    let points = 0, food = 100, walk = 100, fun = 100;

    let pointsCounter = setInterval(getPoints, 400);

    let clock1 = setInterval(emptyFood, 300);
    let clock2 = setInterval(emptyWalk, 301);
    let clock3 = setInterval(emptyFun, 302);

    let faster = false, bone = false, gameOver = false;

    document.getElementById("btnFood").onclick = fillFood;
    document.getElementById("btnWalk").onclick = fillWalk;
    document.getElementById("btnFun").onclick = fillFun;

    document.getElementById("fasterId").onclick = fillFaster;
    document.getElementById("boneId").onclick = fillBone;

    function gameOverCheck() {
        if (food == 0 && walk == 0 && fun == 0) {
            alert("На жаль, ти програв.");
            gameOver = true;
        }
    }

    function getPoints() {
        if (food > 0 && walk > 0 && fun > 0) {
            document.getElementById("pointsValue").value = points;
            points++;
        } else if ((food > 0 && walk > 0) || (food > 0 && fun > 0) || (walk > 0 && fun > 0)) {
            document.getElementById("pointsValue").value = points;
            points++;
        }
    }

    function fillFaster() {
        if (faster == false && points >= 150) {
            points -= 150;
            faster = true;
            clearInterval(pointsCounter);
            pointsCounter = setInterval(getPoints, 100);
        }
    }

    function fillBone() {
        if (faster == true && bone == false && points >= 1000) {
            points -= 1000;
            bone = true;
            clearInterval(clock1);
            clearInterval(clock2);
            clearInterval(clock3);
            clearInterval(pointsCounter);
            alert("Мої вітання! Ти переміг!");
        }
    }

    function fillFood() {
        if (food <= 99 && food != 0)
            food += 2;
    }

    function fillWalk() {
        if (walk <= 99 && walk != 0)
            walk += 2;
    }

    function fillFun() {
        if (fun <= 99 && fun != 0)
            fun += 2;
    }

    function emptyFood() {
        if (food == 0) {
            clearInterval(clock1);
            alert("Твоє щеня неабияк зголодніло.");
            gameOverCheck();
            clearInterval(pointsCounter);
            pointsCounter = setInterval(getPoints, 700);
        } else {
            food--;
            document.getElementById("foodBar").value = food;
        }
    }

    function emptyWalk() {
        if (walk == 0) {
            clearInterval(clock2);
            alert("Твоє щеня втомилось.");
            gameOverCheck();
            clearInterval(pointsCounter);
            pointsCounter = setInterval(getPoints, 700);
        } else {
            walk--;
            document.getElementById("walkBar").value = walk;
        }
    }

    function emptyFun() {
        if (fun == 0) {
            clearInterval(clock3);
            alert("Твоє щеня сумує.");
            gameOverCheck();
            clearInterval(pointsCounter);
            pointsCounter = setInterval(getPoints, 700);
        } else {
            fun--;
            document.getElementById("funBar").value = fun;
        }
    }
}



