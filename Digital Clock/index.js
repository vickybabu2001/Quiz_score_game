const hour=document.getElementById("h");
const min=document.getElementById("m");
const sec=document.getElementById("s");
const se=document.getElementById("am");
 function updateclock() {
 	// body...
 	let h=new Date().getHours();
 	let m=new Date().getMinutes();
 	let s=new Date().getSeconds();
 	let ampm ="AM";
 	if(h>12){
 		h=h-12;
 		ampm="PM";
 	}
 	hour.innerText=h;
 	min.innerText=m;
 	sec.innerText=s;
 	se.innerText=ampm;
  setTimeout(()=>{
 	updateclock();
 },1000);
 }

 updateclock();
