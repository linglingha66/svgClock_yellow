var clock   = Snap("#clock");
var hour_line   = clock.rect(79, 35, 4, 55).attr({fill: "#000"});
var minute_line = clock.rect(79, 20, 3, 70).attr({fill: "#000"});
var second_line = clock.rect(80, 10, 1, 80).attr({fill: "#000"});
var middle =   clock.circle(80, 80, 2).attr({fill: "#85b9b4"});

var updateTime = function(_clock, _hour, _minute, _sencond) {
	var currentTime, hour, minute, second;
	currentTime = new Date();
	second = currentTime.getSeconds();
	minute = currentTime.getMinutes();
	hour = currentTime.getHours() % 12;
	hour = (hour == '00')? 12 : hour;

	//mina.elastic:有弹性效果
	_hour.animate({transform: "r" + (hour * 30 + minute/2) + "," + 80 + "," + 80}, 200, mina.elastic);
	_minute.animate({transform: "r" + minute * 6 + "," + 80 + "," + 80}, 200, mina.elastic);
	_sencond.animate({transform: "r" + second * 6 + "," + 80 + "," + 80}, 500, mina.elastic);
}

setInterval(function(){
	updateTime(clock, hour_line, minute_line, second_line);
}, 1000);