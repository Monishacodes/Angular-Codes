app.factory("myfactory",logic);
function logic(){
    var object = {
				computeHRA(salary){
					console.log("here this is HRA");
                     var hra = salary * 13/100;
					return hra;
				},
                computeDA(salary){
                     var DA = salary * 20/100;
                    return DA;
                },
                computeTA(salary){
                     var TA = salary * 10/100;
                    return TA;
                },
                computePF(salary){
                     var PF = salary * 5/100 * 2;
                    return PF;
                },
                computeGS(salary,hra,DA,TA){
                     var GS = salary + hra + DA + TA;
                    return GS;
                },
                computeNetSalary(salary,hra,DA,TA,PF){
                    var NetSalary = parseInt(salary + hra + DA + TA)-(PF*5/100);
                    return NetSalary;
                    
                },
                computeGrade(salary){
                    var perannum = salary * 12;
                    if(perannum>=100000)
                       /* return {msg:'Grade A', color : 'red'}*/
                        return "Grade A"
                    else if(perannum>=80000&&perannum<100000)
                        return "Grade B"
                    else if (perannum>=60000&&perannum<80000)
                        return "Grade C"
                    else if(perannum>=40000&&perannum<60000)
                        return "Grade D"
                    else return "Grade E"
                }
                               
			};
			return object;
		
		}
    

 