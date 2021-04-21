	let convertNumbersToBgnCurrency  = (number) => {
		
		  let num0 =
		  [
			"нула", "един", "два", "три", "четири", "пет", "шест",
			"седем", "осем", "девет", "десет", "единадесет","дванадесет"
		  ]
		let num100 = [
			"","сто", "двеста",  "триста"
		]

		let div10 = (number - number % 10) / 10;
		let mod10 = number % 10;
		let	div100 = (number - (number % 100)) / 100;
		let mod100 = number % 100;
		let div1000 = (number - number % 1000) / 1000;
		let mod1000 = number % 1000;
		let div1000000 = (number - number % 1000000) / 1000000;
		let mod1000000 = number % 1000000;
		let div1000000000 = (number - number % 1000000000) / 1000000000;
		let mod1000000000 = number % 1000000000;

	  if (number == 0) {
				return num0[number];
			}


		/* До двайсет */
			if (number > 0 && number < 20) {
				if (number == 1) {
					return "една";
				}
				if (number == 2)
					return "два";
				return (num0[number]) ? num0[number] : num0[mod10] +"надесет";
			}

			/* До сто */
			if (number > 19 && number < 100) {
				let tmp = (div10 == 2) ? "двадесет" : num0[div10] + "десет";
				tmp = mod10 ? tmp + " и " + convertNumbersToBgnCurrency(mod10) : tmp;
				return tmp;
			}

			/* До хиляда */
			if (number > 99 && number < 1000) {
				tmp = (num100[div100]) ? num100[div100] : num0[div100]+"стотин";
				if ((mod100 % 10 == 0 || mod100 < 20) && mod100 != 0) {
					tmp += " и";
				}
				if (mod100) {
					tmp += " "+convertNumbersToBgnCurrency(mod100);
				}
				return tmp;
			}

		/* До милион */
			if (number > 999 && number < 1000000) {
				/* Damn bulgarian @#$%@#$% два хиляди is wrong :) */
				tmp = (div1000 == 1) ? "хиляда" :
					   ((div1000 == 2) ? "две хиляди" : convertNumbersToBgnCurrency(div1000)+" хиляди");
				num0[2] = "два";
				if ((mod1000 % 10 == 0 || mod1000 < 20) && mod1000 != 0) {
					if (!((mod100 % 10 == 0 || mod100 < 20) && mod100 != 0)) {
						tmp += " и";
					}
				}
				if ((mod1000 % 10 == 0 || mod1000 < 20) && mod1000 != 0 && mod1000 < 100) {
					tmp += " и";
				}
				if (mod1000) {
					tmp += " " +convertNumbersToBgnCurrency(mod1000);
				}
				return tmp;
			}


				/* Над милион */
			if (number > 999999 && number < 1000000000) {
				tmp = (div1000000 == 1) ? "един милион" : convertNumbersToBgnCurrency(div1000000)+" милиона";
				if ((mod1000000 % 10 == 0 || mod1000000 < 20) && mod1000000 != 0) {
					if (!((mod1000 % 10 == 0 || mod1000 < 20) && mod1000 != 0)) {
						if (!((mod100 % 10 == 0 || mod100 < 20) && mod100 != 0)) {
							tmp += " и";
						}
					}
				}
				tmp += ", ";
				if ((mod1000000 % 10 == 0 || mod1000000 < 20) && mod1000000 != 0 && mod1000000 < 1000) {
					if ((mod1000 % 10 == 0 || mod1000 < 20) && mod1000 != 0 && mod1000 < 100) {
						tmp += " и";
					}
				}
				if (mod1000000) {
					tmp += " "+ convertNumbersToBgnCurrency(mod1000000);
				}
				return tmp;
			}

		/* Над милиард */
			if (number > 99999999 && number <= 2000000000) {
				tmp = (div1000000000 == 1) ? "един милиард" : "";
				tmp = (div1000000000 == 2) ? "два милиарда" : tmp;
				if (mod1000000000) {
					tmp += " "+convertNumbersToBgnCurrency(mod1000000000);
				}
				return tmp;
			}
			
			return "твърде голямо число";
			
			
	}



    console.log(convertNumbersToBgnCurrency (1));
    console.log(convertNumbersToBgnCurrency (4));

    console.log(convertNumbersToBgnCurrency (14));
    console.log(convertNumbersToBgnCurrency (17));

    console.log(convertNumbersToBgnCurrency (27));
    console.log(convertNumbersToBgnCurrency (97));
    console.log(convertNumbersToBgnCurrency (100));

    console.log(convertNumbersToBgnCurrency (102));
    console.log(convertNumbersToBgnCurrency (112));
    console.log(convertNumbersToBgnCurrency (132));

    console.log(convertNumbersToBgnCurrency (202));
    console.log(convertNumbersToBgnCurrency (312));
    console.log(convertNumbersToBgnCurrency (432));
	
	console.log(convertNumbersToBgnCurrency (1202));
    console.log(convertNumbersToBgnCurrency (2312));
    console.log(convertNumbersToBgnCurrency (3432));

	console.log(convertNumbersToBgnCurrency (5678));
    console.log(convertNumbersToBgnCurrency (6666));
    console.log(convertNumbersToBgnCurrency (8888));

    console.log(convertNumbersToBgnCurrency (21202));
    console.log(convertNumbersToBgnCurrency (42312));
    console.log(convertNumbersToBgnCurrency (63432));

    console.log(convertNumbersToBgnCurrency (121202));
    console.log(convertNumbersToBgnCurrency (242312));
    console.log(convertNumbersToBgnCurrency (363432));

    console.log(convertNumbersToBgnCurrency (3121202));
    console.log(convertNumbersToBgnCurrency (4242312));
    console.log(convertNumbersToBgnCurrency (5363432));

    console.log(convertNumbersToBgnCurrency (103121202));
    console.log(convertNumbersToBgnCurrency (204242312));
    console.log(convertNumbersToBgnCurrency (335363432));

    console.log(convertNumbersToBgnCurrency (1233121202));
    console.log(convertNumbersToBgnCurrency (34544242312));
    console.log(convertNumbersToBgnCurrency (666675363432));