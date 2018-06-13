scale = 5
i=0
function run(){
	a = Math.floor((Math.random() * scale)+1);
	b = Math.floor((Math.random() * scale)+1);
	c = Math.floor((Math.random() * scale)+1);
	d = Math.floor((Math.random() * scale)+1);

	eq = a*c + "x² + " + (b*c + d*a) + "x + " + b*d
	ans = "(" + a + "x + " + b + ")(" + c + "x + " + d + ")"
	document.getElementById("container").innerHTML  += "<br><b>Q"+(i +1) + ".</b><div>"+ eq +"</div><button class='ans' id=\""+i+"b\" onclick=\"document.getElementById('"+i+"b').outerHTML ='<div>"+ans+"</div>'\">Ans</button>"
	i++
}
