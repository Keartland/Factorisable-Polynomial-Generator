scale = 5
i=0
function run(){
	a = Math.floor((Math.random() * scale)+1) * (Math.random() < 0.5 ? -1 : 1);
	b = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	c = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	d = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	pmb = b < 0 ? "−" : "+"
	if (document.getElementById("checkBox").checked){
		eq = "x³ + " + (a + b + c) + "x² + " + (a*b + a*c + b*c) + "x + " + a*b*c
		pma = a < 0 ? "−" : "+"
		pmc = c < 0 ? "−" : "+"
		ans = "(x " + pma + " " + Math.abs(a) + ")(x " + pmb + " " + Math.abs(b) + ")(x " + pmc + " " + Math.abs(c) + ")"
	} else {
		pmd = d < 0 ? "−" : "+"
		eq = a*c + "x² + " + (b*c + d*a) + "x + " + b*d
		ans = "(" + a + "x " + pmb + " " + Math.abs(b) + ")(" + c + "x " + pmd + " " + Math.abs(d) + ")"
	}
	document.getElementById("container").innerHTML  += "<br><b>Q"+(i +1) + ".</b><div>"+ eq +"</div><button class='ans' id=\""+i+"b\" onclick=\"document.getElementById('"+i+"b').outerHTML ='<div>"+ans+"</div>'\">Ans</button>"
	i++
}
