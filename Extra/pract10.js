function fun(){
var no = document.getElementById("num").value;
var a=0,b=1;
for (var i = 0; i <= no; i++) 
{
	var c=a+b
	a=b
	b=c
	document.write(c + "<br>");
}	
}

function prime()
{
	var no1 = document.getElementById("num1").value;
	var no2 = document.getElementById("num2").value;
	var count=0;
	for (var i = no1; i <= no2; i++) {
		for(var j=2;j<i;j++)
		{
			if(i%j==0)
				{
					count = 1;
					break;
				}
			else
				count = 0;
		}
		if(count==0)
			document.write(i + "<br/>");
		count = 0;
	}
}


function date1()
{
		var d = new Date("2017-09-12");
		document.write(d);
}

function date2()
{
	var d = new Date("09/12/2017");
	document.write(d);
}

function date3(){
	var d = new Date("Mar 12 2017");
	document.write(d);
}

function date4(){
	var d = new Date("Thu Sep 12 2017 10:00:10 GMT+05");
	document.write(d);
}