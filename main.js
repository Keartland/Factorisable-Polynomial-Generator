scale = 5
i=0
function run(){
	a = Math.floor((Math.random() * scale)+1) * (Math.random() < 0.5 ? -1 : 1);
	b = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	c = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	d = Math.floor((Math.random() * scale)+1)* (Math.random() < 0.5 ? -1 : 1);
	pmb = b < 0 ? "−" : "+"
	if (document.getElementById("checkBox").checked){
		pm1 = (a + b + c) < 0 ? "−" : "+"
		pm2 = (a*b + a*c + b*c) < 0 ? "−" : "+"
		pm3 = (a*b*c) < 0 ? "−" : "+"
		eq = "x³ " + pm1 + " " + Math.abs(a + b + c) + "x² " + pm2 + " " + Math.abs(a*b + a*c + b*c) + "x " + pm3 + " " + Math.abs(a*b*c)
		pma = a < 0 ? "−" : "+"
		pmc = c < 0 ? "−" : "+"
		ans = "(x " + pma + " " + Math.abs(a) + ")(x " + pmb + " " + Math.abs(b) + ")(x " + pmc	 + " " + Math.abs(c) + ")"
	} else {
		pm1 = (b*c + d*a) < 0 ? "−" : "+"
		pm2 = b*d < 0 ? "−" : "+"
		eq = a*c + "x² " + pm1 + " " + Math.abs(b*c + d*a) + "x " + pm2 + " " + Math.abs(b*d)
		pmd = d < 0 ? "−" : "+"
		ans = "(" + a + "x " + pmb + " " + Math.abs(b) + ")(" + c + "x " + pmd + " " + Math.abs(d) + ")"
	}
	document.getElementById("container").innerHTML  += "<br><b>Q"+(i +1) + ".</b><div>"+ eq +"</div><button class='ans' id=\""+i+"b\" onclick=\"document.getElementById('"+i+"b').outerHTML ='<div>"+ans+"</div>'\">Ans</button>"
	i++
}
