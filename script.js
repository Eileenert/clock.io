function showDate(){
	var now= new Date();            //get all the years,day,weeks,...
	var year= now.getFullYear();
	var month=now.getMonth();
	var todayNumber= now.getDate();
	var today= now.getDay();
	var hours= now.getHours();
	var minutes= now.getMinutes();
	var seconds= now.getSeconds();
	
	if(hours< 10 ){			//to add a nice time not a 2:3:9 but 02:03:09
	hours = "0" + hours;}
	if(minutes< 10){
    minutes = "0" + minutes ;}
	if(seconds < 10){
	var seconds = "0" + seconds ;}
	
	if (hours<20 && hours >=7 ){
	document.getElementById("night").style.display="none";
	document.getElementById("day").style.display="flex";
	document.getElementById("body").style.backgroundColor="#4da6ff";
	}else if (hours>20 || hours<7) {
	document.getElementById("night").style.display = "flex";
	document.getElementById("day").style.display="none";
	document.getElementById("body").style.backgroundColor="#000033";
	}
	
	
	document.getElementById("clock").innerHTML= hours+ ":" + minutes + ":" + seconds; //Put the time
	
	var monthsName=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	document.getElementById("date").innerHTML= dayName[today] +" "+ todayNumber+" "+ monthsName[month]+ " "+ year;
	
	
	setTimeout(showDate, 1000);
	
	
}
showDate();

