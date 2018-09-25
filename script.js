function renderTime(){

//date
 var myDate= new Date();
 var year= myDate.getYear();
	if(year<1000)
	{
	year+= 1900;
	}
	var day= myDate.getDay();
	var month= myDate.getMonth();
	var daym= myDate.getDate();
	var dayarr= new Array("Sun","Mon","Tue","Wed","Thurs","Fri","Sat");
	var montharr=new Array("Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec");
	//date end
	
	//time
	var currentTime= new Date();
	var h= currentTime.getHours();
	var m= currentTime.getMinutes();
	var s=currentTime.getSeconds();
	if(h==24)
{
	h=0;
}
	else if(h>12){
	h=h-0;
	}
	if(h<10){
	h="0"+ h;
	}
	if(m<10){
	m="0"+m;
	}

	if(s<10){
	s="0"+s;
	}
var myClock= document.getElementById("clockDisplay");
myClock.textContent= "" +dayarr[day]+ " "+ daym+ " "+ montharr[month]+ " "+ year+" | " +h + ":" + m + ":" + s ;
myClock.innerText= "" +dayarr[day]+ " "+ daym+ " "+ montharr[month]+ " "+ year+" | " +h + ":" + m + ":" + s ; 

setTimeout("renderTime()",1000);
}
renderTime();
