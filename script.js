const play = document.querySelector(".buttons--play");
const pause = document.querySelector(".buttons--pause");
const reset = document.querySelector(".buttons--reset");

const minute2 = document.querySelector(".minute2");
const minute1 = document.querySelector(".minute1")
const second2 = document.querySelector(".second2");
const second1 = document.querySelector(".second1");
const seconds = document.querySelector(".seconds");

const span = document.querySelectorAll(".clock--time > span");
const clock = document.querySelector(".clock--container");

const title = document.querySelector(".title");

const timers = document.querySelectorAll(".options > div");

timers.forEach((element)=>{
	element.addEventListener("click", function(){

		
			let color = element.style.backgroundColor;

			title.style.color= color;

			play.style.backgroundColor= color;
			pause.style.backgroundColor= color;
			reset.style.backgroundColor= color;

			seconds.style.color=color;

			span.forEach(element=>{
				element.style.color = color;
			});

			clock.style.background = `conic-gradient(${color} 360deg,${color} 360deg 360deg)`;

			minute2.innerHTML = element.getAttribute("value").charAt(0);
			minute1.innerHTML = element.getAttribute("value").charAt(1);
			second1.innerHTML = 0;
			second2.innerHTML = 0;

			initialS1=0; initialS2=0;
			initialM1=minute1.innerHTML; initialM2=minute2.innerHTML;

			clearInterval(time);
		
	});
});

let initialS1=second1.innerHTML, initialS2=second2.innerHTML,
	initialM1=minute1.innerHTML, initialM2=minute2.innerHTML;

let playToggle=false, pauseToggle=false, resetToggle=false,
	toggle = false, time;


play.addEventListener("click", function(){

	if(!playToggle){

		time = setInterval(function(){

			if(toggle){
				
				toggle=false;
			}
			else{
				
				seconds.style.color= title.style.color;
				toggle=true;
			}

			if(parseInt(second1.innerHTML)==0){

				if(parseInt(second2.innerHTML)==0){
					

					if(parseInt(minute1.innerHTML)==0){

						if(parseInt(minute2.innerHTML)==0){
							clearInterval(time);

						}
						else{
							minute2.innerHTML= parseInt(minute2.innerHTML)-1;
						}

					minute1.innerHTML = "9";
					}
					else{
						minute1.innerHTML = parseInt(minute1.innerHTML)-1;
					}

				second2.innerHTML = "5";
				}
				else{
					second2.innerHTML = parseInt(second2.innerHTML)-1;
				}

			second1.innerHTML = "9";	
			}
			else{
				second1.innerHTML = parseInt(second1.innerHTML)-1;
			}
		},1000);

		playToggle=true;
	}
		
});

pause.addEventListener("click", function(){
	clearInterval(time);
	playToggle=false;

	seconds.style.color=title.style.color;
	toggle=true;
});

reset.addEventListener("click", function(){
	clearInterval(time);

	second1.innerHTML=0;
	second2.innerHTML=0;
	minute1.innerHTML=initialM1;
	minute2.innerHTML=initialM2;

	playToggle=false;

	seconds.style.color=title.style.color;
	toggle=true;
});





