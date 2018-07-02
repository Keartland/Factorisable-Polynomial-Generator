scale = 5
i=0
function run(){
	a = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	b = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	c = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	d = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	if (document.getElementById("checkBox").checked){
		eq = "x³ " + pm(a + b + c) + " " + Math.abs(a + b + c) + "x² " + pm(a*b + a*c + b*c) + " " + Math.abs(a*b + a*c + b*c) + "x " + pm(a*b*c) + " " + Math.abs(a*b*c)
		ans = "(x " + pm(a) + " " + Math.abs(a) + ")(x " + pm(b) + " " + Math.abs(b) + ")(x " + pm(c)	 + " " + Math.abs(c) + ")"
	} else {
		eq = pm(a*c) + Math.abs(a*c) + "x² " + pm(b*c + d*a) + " " + Math.abs(b*c + d*a) + "x " + pm(b*d) + " " + Math.abs(b*d)
		ans = "(" + a + "x " + pm(b) + " " + Math.abs(b) + ")(" + c + "x " + pm(d) + " " + Math.abs(d) + ")"
	}
	document.getElementById("container").innerHTML  += "<br><b>Q"+(i +1) + ".</b><div>"+ eq +"</div><button class='ans' id=\""+i+"b\" onclick=\"document.getElementById('"+i+"b').outerHTML ='<div>"+ans+"</div>'\">Ans</button>"
	i++
}
function pm(value){
	return value < 0 ? "−" : "+"
}
