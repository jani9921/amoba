var jatekos=1; //globális változó. Melyik játékos van soron
//var mezo;
let src2 = '<img src="kor.png" style="width:100%; height:100%">';
let src1 = '<img src="x.png" style="width:100%; height:100%">'; //Az 1-es játékos szimbóluma az X
//var meret;
var foglalt_mezo=document.getElementById("foglalt_mezo");
//var uresMezok = document.querySelectorAll("td:empty")
function gombfunkcio()
{
	palya_lathatosag();
	megrajzol();
	
}
function megrajzol()
{
	
	let meret=document.getElementById("palya_meret").value; //Input mezőben megadott érték
	var palya=''; //Pálya változó deklaráció
	let szelesseg=100/Number(meret); //Kiszámoljuk hogy egy cella hány százalék széles legyen
	for (var i=0;i<meret;i++) //Ciklus 1 a Tábla soraira, annyiszor fut le amekkora méretet állítottunk be
	{
		palya=palya+'<tr>'; //Új sor
		for (var j=0;j<meret;j++) // Ciklus az adott soron belül az oszlopokra, annyiszor fut le amekkora méretet állítottunk be
		{
			palya=palya+'<td class=mytd style="width:'+szelesseg+'%; height:'+szelesseg+'%;" id="'+i+'_'+j+'" onclick="feluliras2(this.id);"></td>'; // Új cella
			// Méreteit a szelesseg változó alapján állítjuk be, onclick eseményre beállítjuk a kijelol függvényt
		}
		palya=palya+'</tr>'; //sor lezárása
	} //ciklus vége
	document.getElementById("amoba_palya").innerHTML=palya; // A dinamikusan összeállított pálya változót értékül adjuk az amoba_palya belsejének
	
	const contentString = "Player 1";

	document.getElementById("jatekos_1").innerHTML = contentString.bold(); // Az 1-es játékost megvastagítjuk
	document.getElementById("jatekos_1").style.fontSize = "24px";
	document.getElementById("jatekos_1").style.backgroundColor="rgba(255, 255, 255, 0.7);"
}

function kijelol(azonosito) //azonosito ID-t paraméterül kapja
{
	//Változó deklaráció
	if (jatekos === 1) // Ha jatekos globális változó értéke 1 volt
	{

		jatekos = 2; // Átállítja, hogy a következő körben a 2-es játékos jön
		const contentString = "Player 2";
		document.getElementById("jatekos_2").innerHTML = contentString.bold();
		document.getElementById("jatekos_2").style.fontSize = "24px";
document.getElementById("jatekos_2").style.backgroundColor="rgba(255, 255, 255, 0.7);"		// A 2-es játékost megvastagítjuk
		document.getElementById("jatekos_1").innerHTML = "Player 1"; //Az 1-es játékos szövege sima lesz
		document.getElementById(azonosito).innerHTML = src1;
	} else //Ellenkező esetben (2-es játékos)
	{

		jatekos = 1;
		const contentString = "Player 1";
		document.getElementById("jatekos_1").innerHTML = contentString.bold();
		document.getElementById("jatekos_1").style.fontSize = "24px";
		document.getElementById("jatekos_1").style.backgroundColor="rgba(255, 255, 255, 0.7);"
		document.getElementById("jatekos_2").innerHTML = "Player 2";
		document.getElementById(azonosito).innerHTML = src2;
	}
	 //Az adott ID-jú elembe (cellába) betesszük a képet

}
/**function feluliras(azonosito)
{
	mezo=document.getElementById(azonosito);
	if(mezo.innerHTML.trim()!=="")
	{
		alert('ez a mezo mar foglalt, valassz masikat')
		return;

	}
	else
	kijelol(azonosito);
	tele2();
}
	**/
function feluliras2(azonosito) {
	var foglaltMezo = document.getElementById(azonosito);
	
	 //valtozo deklaracio
	if (foglaltMezo.innerHTML==src1 || foglaltMezo.innerHTML==src2)
	{ 			document.getElementById("foglalt_mezo").innerHTML="Ez a mező már foglalt!"	
				foglalt_mezo.style.visibility = "visible";
			     setTimeout(
				 function() 
		 {	
            foglalt_mezo.style.visibility = "hidden";
			foglalt_mezo.style.opacity = "0";			// Az elem teljesen eltűnik
        }, 5000); // 5000 ms = 5 másodperc
		return;

	}
		kijelol(azonosito);
		tele2();
		uresMezok = document.querySelectorAll("td img") //uresmezok ertekenek adjuk, az üres td-ket, a queryselectorral ezeket kikeressük

	if (uresMezok.length >=7) //megnezzuk a hosszat, ha 0 nincs tobb szabad td
	{
		gyozelem();

	}
}
/**function tele() {
	uresMezok = document.querySelectorAll("td:empty") //uresmezok ertekenek adjuk, az üres td-ket, a queryselectorral ezeket kikeressük
	alert(uresMezok.length)
	if (uresMezok.length === 0) //megnezzuk a hosszat, ha 0 nincs tobb szabad td
	{
		alert("Betelt a palya!");

	}
}
	**/
function tele2()
{
		var meret=document.getElementById("palya_meret").value;
		var osszesMezo=meret*meret; //ez hulyeseg csak proba volt
		var beteltmezo=0;
		

	for (var i = 0; i < meret; i++) { //forral vegigmegyunk a sorokon oszlopokon
		for (var j = 0; j < meret; j++) {
			var mezo = document.getElementById(i + "_" + j); //mezo erteke mindig az adott mezo lesz
			if (mezo.innerHTML.trim() !== "") { //hogyha nem ures, akkor noveljuk a beteltmezoket
				beteltmezo++;
			}
		}
	}

	if(osszesMezo===beteltmezo) //ha az osszes mezo megegyezik a betelt mezokkel, akkor betelt a palya
	{
		
		document.getElementById("foglalt_mezo").innerHTML="A pálya betelt!"	
				foglalt_mezo.style.visibility = "visible";
			     setTimeout(
				 function() 
		 {	
            foglalt_mezo.style.visibility = "hidden";
			foglalt_mezo.style.opacity = "0";			// Az elem teljesen eltűnik
        }, 5000); // 5000 ms = 5 másodperc
		return;

	}

}
function gyozelem() {
	var meret = document.getElementById("palya_meret").value;

	var gyozelemJatekos1Sor = 0;
	var gyozelemJatekos2Sor = 0;
	var gyozelemJatekos1Oszlop = 0;
	var gyozelemJatekos2Oszlop = 0;
	var	gyozelemJatekos1_atlo1=0;
	var	gyozelemJatekos1_atlo2=0;
	var gyozelemJatekos2_atlo1=0;
	var gyozelemJatekos2_atlo2=0;
	var jatekvege=4;

	for (var i = 0; i < meret; i++) //sor vegigfutas
	{
		gyozelemJatekos1Sor = 0;
		gyozelemJatekos2Sor = 0;
		gyozelemJatekos1Oszlop = 0;
		gyozelemJatekos2Oszlop = 0;
		gyozelemJatekos1_atlo1=0;
		gyozelemJatekos1_atlo2=0;
		gyozelemJatekos2_atlo1=0;
		gyozelemJatekos2_atlo2=0;
		for(var j=0;j<meret;j++)// oszlop vegigfutas
		{
			var Sor = document.getElementById(i+'_'+j); //sor ertekenek adjuk az adott id-ju tablat
			var Oszlop = document.getElementById(j + "_" + i); //oszlop ertekenek adjuk az adott idju tablat

			if (Sor&&Sor.innerHTML == src1) //ha sor.innerhtmlje megegyezik az src-vel noveljuk a gyozelemJatekos1Sor-t egyel, es alapba tesszuk a jatekos 2-t
			{ 

				gyozelemJatekos1Sor++;
				gyozelemJatekos2Sor=0;
			}
		else if (Sor&&Sor.innerHTML == src2) //ha sor.innerhtmlje megyegyezik a src2-vel akkor noveljuk a gyozelemjatekos2sor-t egyel, es alapbatesszük a jatekos1-et
		{
				gyozelemJatekos2Sor++;
				gyozelemJatekos1Sor = 0;
			}
			else {
				gyozelemJatekos1Sor = 0;
				gyozelemJatekos2Sor = 0;
			}
			if (Oszlop&&Oszlop.innerHTML == src1) {
				gyozelemJatekos1Oszlop++;
				gyozelemJatekos2Oszlop = 0;
			} else if (Oszlop&&Oszlop.innerHTML == src2) {
				gyozelemJatekos2Oszlop++;
				gyozelemJatekos1Oszlop = 0;
			} else {
				gyozelemJatekos1Oszlop = 0;
				gyozelemJatekos2Oszlop = 0;
			}
			if (!Sor || (Sor.innerHTML !== src1 && Sor.innerHTML !== src2)) {
			gyozelemJatekos1Sor = 0;
			gyozelemJatekos2Sor = 0;
}

			if (!Oszlop || (Oszlop.innerHTML !== src1 && Oszlop.innerHTML !== src2)) {
				gyozelemJatekos1Oszlop = 0;
				gyozelemJatekos2Oszlop = 0;
}
			if (gyozelemJatekos1Sor >= jatekvege || gyozelemJatekos1Oszlop >= jatekvege) // ha a jatekos eleri a vagy egyenlo vele 4-et ami a jatekvege akkor nyer az adott jatekos
			{
				
		document.getElementById("foglalt_mezo").innerHTML="Játékos 1 nyert!";	
				foglalt_mezo.style.visibility = "visible";
			     setTimeout(
				 function() 
		 {	
            foglalt_mezo.style.visibility = "hidden";
			foglalt_mezo.style.opacity = "0";			
        }, 5000);
				return;
			}
			if (gyozelemJatekos2Sor == jatekvege || gyozelemJatekos2Oszlop == jatekvege) 
			{
				
		document.getElementById("foglalt_mezo").innerHTML="Játékos 2 nyert!";	
				foglalt_mezo.style.visibility = "visible";
			     setTimeout(
				 function() 
		 {	
            foglalt_mezo.style.visibility = "hidden";
			foglalt_mezo.style.opacity = "0";			
        }, 5000);
				return;
			}

		}
	}
		gyozelemJatekos1Sor = 0;
		gyozelemJatekos2Sor = 0;
		gyozelemJatekos1Oszlop = 0;
		gyozelemJatekos2Oszlop = 0;
		gyozelemJatekos1_atlo1 = 0;
        gyozelemJatekos2_atlo1 = 0;
        gyozelemJatekos1_atlo2 = 0;
        gyozelemJatekos2_atlo2 = 0;
for (var l = 0; l < meret; l++)  //sor ciklus
	{
		gyozelemJatekos1Sor = 0;
		gyozelemJatekos2Sor = 0;
		gyozelemJatekos1Oszlop = 0;
		gyozelemJatekos2Oszlop = 0;
		gyozelemJatekos1_atlo1 = 0;
        gyozelemJatekos2_atlo1 = 0;
        gyozelemJatekos1_atlo2 = 0;
        gyozelemJatekos2_atlo2 = 0;

        for (let m = 0; m < meret; m++) //oszlop ciklus
		{
            for (let n = 0; n < jatekvege; n++)  //atlo ciklus
			{
						gyozelemJatekos1Sor = 0;
		gyozelemJatekos2Sor = 0;
		gyozelemJatekos1Oszlop = 0;
		gyozelemJatekos2Oszlop = 0;
		gyozelemJatekos1_atlo1 = 0;
        gyozelemJatekos2_atlo1 = 0;
        gyozelemJatekos1_atlo2 = 0;
        gyozelemJatekos2_atlo2 = 0;
                var Atlo_1 = document.getElementById((l + n) + "_" + (m + n)); //jobbrol balra le atlo
                var Atlo_2 = document.getElementById((l + n) + "_" + (m - n)); //balrol jobbra le atlo

               
                if (Atlo_1&&Atlo_1.innerHTML == src1) {
                    gyozelemJatekos1_atlo1++;
                    gyozelemJatekos2_atlo1 = 0;
                } else if (Atlo_1&&Atlo_1.innerHTML == src2) {
                    gyozelemJatekos2_atlo1++;
                    gyozelemJatekos1_atlo1 = 0;
                } else 
				{
                    gyozelemJatekos1_atlo1 = 0;
                    gyozelemJatekos2_atlo1 = 0;
                }

                if (Atlo_2&&Atlo_2.innerHTML === src1) {
                    gyozelemJatekos1_atlo2++;
                   gyozelemJatekos2_atlo2 = 0;
                } else if (Atlo_2&&Atlo_2.innerHTML === src2) {
                    gyozelemJatekos2_atlo2++;
                   gyozelemJatekos1_atlo2 = 0;
                } else {
                   gyozelemJatekos1_atlo2 = 0;
                   gyozelemJatekos2_atlo2 = 0;
                }

                if (gyozelemJatekos1_atlo1 >= jatekvege || gyozelemJatekos1_atlo2 >= jatekvege) 
				{
		document.getElementById("foglalt_mezo").innerHTML="Játékos 1 nyert!!";	
				foglalt_mezo.style.visibility = "visible";
			     setTimeout(
				 function() 
		 {	
            foglalt_mezo.style.visibility = "hidden";
			foglalt_mezo.style.opacity = "0";			// Az elem teljesen eltűnik
        }, 5000);
                    return;
                }
                if (gyozelemJatekos2_atlo1 >= jatekvege || gyozelemJatekos2_atlo2 >= jatekvege) {
                   
		document.getElementById("foglalt_mezo").innerHTML="Játékos 2 nyert!!";	
				foglalt_mezo.style.visibility = "visible";
			     setTimeout(
				 function() 
		 {	
            foglalt_mezo.style.visibility = "hidden";
			foglalt_mezo.style.opacity = "0";			// Az elem teljesen eltűnik
        }, 5000);
                    return;
                }
			}
		}
	}
console.log(gyozelemJatekos1_atlo1);
console.log(gyozelemJatekos2_atlo2);
console.log(gyozelemJatekos1Sor);
console.log(gyozelemJatekos2Sor);
console.log(gyozelemJatekos1Oszlop);
console.log(gyozelemJatekos2Oszlop);

}
function lathatosag()
{
	var start=document.querySelector('.jatek_start');
	
		 if (start.style.visibility === "" || start.style.visibility === "hidden") 
		 {
        start.style.visibility = "visible";
		 }
		 else
			 start.style.visibility="hidden";
		 var tabla_fejlec=document.querySelector('.tabla_fejlec');
		 		 if (tabla_fejlec.style.visibility === "" || tabla_fejlec.style.visibility === "hidden") 
		 {
        tabla_fejlec.style.visibility = "visible";
		 }
		 var kezdogomb=document.getElementById("startButton")
		 if(kezdogomb.style.visibility===""||kezdogomb.style.visibility==="visible")
		 {
			 kezdogomb.style.visibility="hidden"
		 }
		 else
		 {
			 kezdogomb.style.visibility="visible";
		 }
		 
		 var bevezeto=document.getElementById("bevezeto1");
		 bevezeto.remove();
		 
		 
		 
    }
function palya_lathatosag()
{
			 var jatek_megjelenit=document.querySelector('.jatek_megjelenit');
		 if(jatek_megjelenit.style.visibility===""||jatek_megjelenit.style.visibility==="hidden")
		 {
			 jatek_megjelenit.style.visibility="visible"
		 }
		 	var start=document.querySelector('.jatek_start');
	
		 if (start.style.visibility === "" || start.style.visibility === "hidden") 
		 {
        start.style.visibility = "visible";
		 }
		 else
			 start.style.visibility="hidden";
		 jatek_megjelenit.scrollIntoView({ behavior: "smooth", block: "start" });
	
}



