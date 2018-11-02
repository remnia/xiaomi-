	var li1 = document.querySelectorAll(".gundong .gundongtiao li");
	var li2 = document.querySelectorAll(".gundong .bt-phone li");
	li1.forEach(function(val, index) {
		val.onmouseenter = function() {
			li1.forEach(function(val, index) {				
					val.classList.remove("origin-sign");
					li2[index].classList.remove("b");
			});
			val.classList.add("origin-sign");
			li2[index].classList.add("b");
		}

	});
	
var imgList = document.querySelectorAll(".midban .bannertu li");
var yuanList = document.querySelectorAll(".midban .diankuang li");
var leftButton = document.querySelector(".midban .zuojiantou");
var rightButton = document.querySelector(".midban .youjiantou");
var box = document.querySelector(".midban");
var n = 0;
var move = function() {
	if(n > 4) {
		n = 0;
	} else if(n < 0) {
		n = 4;
	}
	imgList.forEach(function(val, index) {
		val.style.opacity = 0;
		yuanList[index].style.background = "black";

	});

	imgList[n].style.opacity = 1;
	yuanList[n].style.background = "gainsboro";

}
var time = setInterval(function() {
	move();
	n++;
}, 2000);
box.onmouseover = function() {
	clearInterval(time);
}
box.onmouseout = function() {
	time = setInterval(function() {
		move();
		n++;
	}, 2000);
}
leftButton.onclick = function() {

	move();
	n--;
}
rightButton.onclick = function() {

	move();
	n++;
}
yuanList.forEach(function(val, index) {
	yuanList[index].onclick = function() {
		n = index;
		move();

	}
});



/*var imgList1 = document.querySelectorAll(".xmxsq .xmgdk li");
var yuanList1 = document.querySelectorAll(".xmxsq .game-down .game-point li span");
var leftBut = document.querySelector(".xmxsq .ds1");
//console.log(leftBut);
var rightBut = document.querySelector(".xmxsq .ds2");
//console.log(rightBut);
var box1 = document.querySelector(".xmgdk");
var c = 0;
var a = 0;

var move1 = function() {
	if(c > 3) {
		c = 0;
	} else if(c < 0) {
		c= 3;
	}
	imgList1.forEach(function(val, index) {
		val.style.opacity = 0;
		yuanList1[index].style.background = "orange";

	});

	imgList1[c].style.opacity = 1;
	yuanList1[c].style.background = "gainsboro";

}
var time1 = setInterval(function() {
	move1();
	c++;
}, 2000);
box1.onmouseover = function() {
	clearInterval(time1);
}
box1.onmouseout = function() {
	time1 = setInterval(function() {
		move1();
		c++;
	}, 2000);
}
leftBut.onclick = function() {

	move1();
	c--;
}
rightBut.onclick = function() {

	move1();
	c++;
}
yuanList1.forEach(function(val, index) {
	yuanList1[index].onclick = function() {
		c = index;
		move1();

	}
});*/

let imgList1 = document.querySelector(".xmxsq .xmgdk");
console.log(imgList1);
let yuanList1 = document.querySelectorAll(".xmxsq .game-down .game-point li span");
console.log(yuanList1);
var leftBut = document.querySelector(".xmxsq .ds1");
console.log(leftBut);
var rightBut = document.querySelector(".xmxsq .ds2");
console.log(rightBut);
var box1 = document.querySelector(".xmgdk");
console.log(box1);
var a = 0;

var move1 = function  () {
	if (a<0) {
		a= 0;
		return;
	}if (a>yuanList1.length -1) {
		a = yuanList1.length - 1;
		return;
	}
	imgList1.style.left = -a*310+"px";
	yuanList1.forEach(function  (val,index) {

		yuanList1[index].style.background = "#b0b0b0";
		yuanList1[index].style.border = "2px solid #f5f5f5";
	});
		yuanList1[a].style.background = "#fff";
		yuanList1[a].style.border = "2px solid #ff6700";
	
	
	
}
	leftBut.onclick = function(){
		a--;
		move1();
	};
	rightBut.onclick = function(){
		a++;
		move1();
	};
yuanList1.forEach(function(val, index) {
	val.onclick = function() {
		a = index;
		move1();

	}
});



window.onscroll = function  () {
	let tiao = document.querySelector(".tou");
	let top = document.documentElement.scrollTop;
console.log(tiao);
console.log(top);
	if (top>600) {
		tiao.style.top = "0";
		setTimeout(function  () {
			tiao.style.transition = "all 0s";
		},30)
	} else{
		tiao.style.top = "-100px";
		setTimeout(function  () {
			tiao.style.transition = "all 1s";
		},30)
	}
};


let imgList2 = document.querySelector(".box-bd .flashbg .xiaomishangouwaikuang .xiaomishangouneirong ");
console.log(imgList2);
var leftBut = document.querySelector(".flash-Purchase .plan-box .box-hd .flash-more .control-p");
console.log(leftBut);
var rightBut = document.querySelector(".flash-Purchase .plan-box .box-hd .flash-more .control-h");
console.log(rightBut);

var b = 0;

var move3 = function  () {
	if (b<0) {
		b= 0;
		return;
	}if (b>1) {
		b = 1;
		return;
	}
	imgList2.style.left = -b*976+"px";

}
	leftBut.onclick = function(){
		b--;
		move3();
	};
	rightBut.onclick = function(){
		b++;
		move3();
	};

let imgList11 = document.querySelector(".xmxsq1 .xmgdk");
console.log(imgList11);
let yuanList11 = document.querySelectorAll(".xmxsq1 .game-down .game-point li span");
console.log(yuanList11);
var leftBut11 = document.querySelector(".xmxsq1 .ds1");
console.log(leftBut11);
var rightBut11 = document.querySelector(".xmxsq1 .ds2");
console.log(rightBut11);
var box11 = document.querySelector(".xmxsq1 .xmgdk");
console.log(box11);
var a1 = 0;

var move11 = function  () {
	if (a1<0) {
		a1= 0;
		return;
	}if (a1>yuanList11.length -1) {
		a1 = yuanList11.length - 1;
		return;
	}
	imgList11.style.left = -a1*310+"px";
	yuanList11.forEach(function  (val,index) {

		yuanList11[index].style.background = "#b0b0b0";
		yuanList11[index].style.border = "2px solid #f5f5f5";
	});
		yuanList11[a1].style.background = "#fff";
		yuanList11[a1].style.border = "2px solid #ff6700";
	
	
	
}
	leftBut11.onclick = function(){
		a1--;
		move11();
	};
	rightBut11.onclick = function(){
		a1++;
		move11();
	};
yuanList11.forEach(function(val, index) {
	val.onclick = function() {
		a1 = index;
		move11();

	}
});
let imgList12 = document.querySelector(".xmxsq2 .xmgdk");
console.log(imgList12);
let yuanList12 = document.querySelectorAll(".xmxsq2 .game-down .game-point li span");
console.log(yuanList12);
var leftBut12 = document.querySelector(".xmxsq2 .ds1");
console.log(leftBut12);
var rightBut12 = document.querySelector(".xmxsq2 .ds2");
console.log(rightBut12);
var box12 = document.querySelector(".xmxsq2 .xmgdk");
console.log(box12);
var a2 = 0;

var move12 = function  () {
	if (a2<0) {
		a2= 0;
		return;
	}if (a2>yuanList12.length -1) {
		a2 = yuanList12.length - 1;
		return;
	}
	imgList12.style.left = -a2*310+"px";
	yuanList12.forEach(function  (val,index) {

		yuanList12[index].style.background = "#b0b0b0";
		yuanList12[index].style.border = "2px solid #f5f5f5";
	});
		yuanList12[a2].style.background = "#fff";
		yuanList12[a2].style.border = "2px solid #ff6700";
	
	
	
}
	leftBut12.onclick = function(){
		a2--;
		move12();
	};
	rightBut12.onclick = function(){
		a2++;
		move12();
	};
yuanList12.forEach(function(val, index) {
	val.onclick = function() {
		a2 = index;
		move12();

	}
});
let imgList13 = document.querySelector(".xmxsq3 .xmgdk");
console.log(imgList13);
let yuanList13 = document.querySelectorAll(".xmxsq3 .game-down .game-point li span");
console.log(yuanList13);
var leftBut13 = document.querySelector(".xmxsq3 .ds1");
console.log(leftBut13);
var rightBut13 = document.querySelector(".xmxsq3 .ds2");
console.log(rightBut13);
var box13 = document.querySelector(".xmxsq3 .xmgdk");
console.log(box13);
var a3 = 0;

var move13 = function  () {
	if (a3<0) {
		a3= 0;
		return;
	}if (a3>yuanList13.length -1) {
		a3 = yuanList13.length - 1;
		return;
	}
	imgList13.style.left = -a3*310+"px";
	yuanList13.forEach(function  (val,index) {

		yuanList13[index].style.background = "#b0b0b0";
		yuanList13[index].style.border = "2px solid #f5f5f5";
	});
		yuanList13[a3].style.background = "#fff";
		yuanList13[a3].style.border = "2px solid #ff6700";
	
	
	
}
	leftBut13.onclick = function(){
		a3--;
		move13();
	};
	rightBut13.onclick = function(){
		a3++;
		move13();
	};
yuanList13.forEach(function(val, index) {
	val.onclick = function() {
		a3 = index;
		move13();

	}
});


		let time8 = setInterval(function() {
			let nowTime = new Date().getTime();
			console.log(nowTime)
			let futureTime = new Date(2018, 11, 4, 8, 0, 0).getTime();
			console.log(futureTime)
			let differ = futureTime - nowTime;
			console.log(differ)
			let hours = Math.floor(differ / 1000 / 60 / 60);
			let mins = Math.floor((differ - hours * 60 * 60 * 1000) / 1000 / 60);
			let seconds = Math.floor((differ - hours * 60 * 60 * 1000 - mins * 60 * 1000) / 1000);
			console.log(hours, mins, seconds)
			document.querySelector(" .shi").innerHTML = hours >= 10 ? hours : "0" + hours;
			document.querySelector(" .fen").innerHTML = mins >= 10 ? mins : "0" + mins;
			document.querySelector(" .miao").innerHTML = seconds >= 10 ? seconds : "0" + seconds;
		}, 1000);