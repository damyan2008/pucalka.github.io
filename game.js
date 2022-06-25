let myX = 0, myY = 500,updates=0, patronX=0, patronY=500, dvijenieNaPatron=1, vragX=400, vragY=0, brtochki=0,
brjivoti=3, vrag2X=50, vrag2Y=0;
let tochka=10, bonusjivotY=-250, bonusjivotX=200;
let bonusjivotRazmer1 = 100, bonusjivotRazmer2 = 100;
let text1X = 0, text2X = 0, txtX = -100000000, brtochkiTxtX = 900000, pobedaX = 300000, ZagubaBrtochki = 9000;
function init (){

}
function update() {

    myX = myX + (mouseX - myX)/10;
	
	vrag2Y = vrag2Y + 2

    if(dvijenieNaPatron == 2){
        patronY = patronY - 10
    };
	
	if(patronY <= 0){
	   patronY = 500
	   };
	
	if(patronY >= 500){
	   dvijenieNaPatron = 1
	   };
	
	if(dvijenieNaPatron == 1){
	   patronX = patronX + ((mouseX - 40) - patronX) / 10;
		patronY = patronY + (mouseY - patronY) / 10;
	   };
	
	vragY = vragY + 1
	
	if(vragY >= 650){
	   vragX = randomInteger(700)
		brjivoti = brjivoti - 1
	   };
	
	if(vragY >= 650){
	   vragY = 0
	   };
	
		if (vragX + 100 >= patronX){
			if(vragY < patronY){
				if((vragY + 100) > patronY){
					if(vragX <= patronX + 100){		   
						vragY = 0
						brtochki = brtochki + 1
						console.log("tochki=",brtochki)
					
				};
			};
		};

	};
    
	if(vragY <= 0){
	   vragX=randomInteger(700)
	   };
	
	if(brjivoti == 0){
	   vragY = 0
	   };
	
	if(brtochki >= 7){
	   vragY = vragY + 2
	   };
	
	if(brtochki >= 20){
	   vragY = vragY + 3
	   };
	
	if(vrag2Y >= 500){
	   vrag2Y = 2
	   };
	
	if(vrag2Y == 2){
	   vrag2X = randomInteger(700)
	   };
	
	if(brjivoti == 0){
		vrag2Y = 2
		};
	
		if (vrag2X + 100 >= patronX){
			if(vrag2Y < patronY){
				if((vrag2Y+100) > patronY){
					if(vrag2X <= patronX+100){		   
						vrag2Y = 0
						brjivoti = brjivoti - 1
					
				};
			};
		};

	};
	
	
	if(brtochki > 0){
	   tochka = brtochki*10
	   };
	
	if(tochka >= 600){
	   vrag2Y = 0
       vrag2X = 900000
		vragY = 0
        vragX = 9000000
        bonusjivotX = 9000
	   };
	
	bonusjivotY = bonusjivotY + 3
	
		if (bonusjivotX + 100 >= patronX){
			if(bonusjivotY < patronY){
				if((bonusjivotY + 100) > patronY){
					if(bonusjivotX <= patronX+100){		   
						bonusjivotY = -250
						brjivoti = brjivoti + 1
						 bonusjivotX = randomInteger(700)
					
				};
			};
		};

	};
	
	if(bonusjivotY >= 500){
	   bonusjivotX = randomInteger(700)
	   };
	
	if(bonusjivotY >= 500){
	   bonusjivotY = 2
	   };
	
	if(brjivoti == 0){
	   bonusjivotY = 0
	   };
	
	myY = myY + (mouseY - myY)/10;
	
	if(myY <= 300){
	   myY = 300
		patronY = 300
	   };
	
		if (vragX + 100 >= myX){
			if(vragY < myY){
				if((vragY+100) > myY){
					if(vragX <= myX+80){		   
						vragY = -1
						brtochki++
					
				};
			};
		};

	};

    if(brtochki >= 15){
        bonusjivotRazmer1 = 50;
        bonusjivotRazmer2 = 50;
    };

    if(brjivoti >= 5){
        bonusjivotX = 10000;
    };

    if(brjivoti <= 0){
        vragX = 10000
        bonusjivotX = 1000000
        vrag2X = 10000000000
    };

    if(isKeyPressed[67]){
        text1X = 99999
        text2X = 900000
        txtX = 9000000000000
    };

    if(isKeyPressed[84]){
    txtX = 0;
    };

    if(isKeyPressed[82]){
        text1X = 0
        text2X = 0
    };

    if(brjivoti <= 0){
        ZagubaBrtochki = 300
    };
    
    if(brtochki >= 60){
        pobedaX = 300
		brtochkiTxtX = 300
    }
	
}
function draw() {
    drawImage(backSpace,0, 0, 800, 600);
    drawImage(Spaceship, myX - 40, myY, 80, 110);
    drawImage(missile[1], patronX, patronY, 80, 80);
	drawImage(star, vragX, vragY, bonusjivotRazmer1, bonusjivotRazmer2);
	/*if(brjivoti == 0){
		if(brtochki < 5){
		   drawImage(gemRed,200,200,300,300);
		   };
	};
	
	if(brjivoti == 0){
		if(brtochki == 5){
		   drawImage(gemYellow,200,200,300,300);
		   };
	};*/
	
	/*if(brjivoti == 0){
		if(brtochki > 5){
		   drawImage(gemGreen,200,200,300,300);
		   };
	};*/
	
	drawImage(AlienSpaceship,vrag2X,vrag2Y,100,100);
	
	drawImage(paddle,780,0,10,tochka);
	
	drawImage(heart,bonusjivotX,bonusjivotY,100,100);

    context.font = "20px Arial"
    context.fillStyle = "white"
    context.fillText("T, за да видиш контролите и целта на играта.", text1X, 0, 400, 10);

    context.font = "20px Arial"
    context.fillStyle = "white"
    context.fillText("C, за да се махнат натписите (R - връщаш ги).", text2X, 20, 400, 10);
    drawImage(Txt, txtX, 40, 800, 500,);

    context.font = "20px Arial"
    context.fillStyle = "white"
    context.fillText("Ти загуби. Брой точки: " + brtochki, ZagubaBrtochki, 200, 400, 100);

	context.font = "20px Arial"
    context.fillStyle = "white"
    context.fillText("Брой точки: " + brtochki, brtochkiTxtX, 200, 400, 100);

    context.font = "20px Arial"
    context.fillStyle = "white"
    context.fillText("Брой животи: " + brjivoti ,600, 0, 400, 100);

    context.font = "20px Arial"
    context.fillStyle = "white"
    context.fillText("ТИ ПОБЕДИ!", pobedaX, 300, 400, 100);
	
};
function keyup(key) {
};
function mouseup() {

        if(mouseup){
		 dvijenieNaPatron = 2
		 };
};
//C = 67
//T = 84
//R = 82