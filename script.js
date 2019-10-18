     
     let totbill = document.querySelector(".totalBill");
     let service = document.querySelector("#services");
     let people = document.querySelector(".person");
     let calc = document.querySelector(".calculate");

     calc.addEventListener("click",function(){
         console.log("works")
         console.log(totbill.value)
         console.log(people.value)
         console.log(service.value);
         
         let tip = (totbill.value)*(service.value/100);
         let per_tip = (tip)/(people.value);

         document.querySelector("#tip_result").innerHTML = `Tip per person : ${per_tip}`;
         document.querySelector("#total_amount").innerHTML = `Total : ${tip}`;
        

     })