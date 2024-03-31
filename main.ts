#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000  //Dollars
let myPin = 1234 ;


let pinAnswres = await inquirer.prompt(
  [ 
     {
        name : "pin",
        message : "Enter your pin",
        type : "number"
    }
 ]
);

if (pinAnswres.pin === myPin) {
    console.log("Correct pin code !!!");

    let OperationAns = await inquirer.prompt(
        [
            {
                name : "Operation",
                message : "Please select option",
                type : "list",
                choices : ["Withdraw" , "Check Balance"]
            }
        ]
    );

    if (OperationAns.Operation === "Withdraw" ) {
        let amountAns = await inquirer.prompt (
            [ 
                {
                    name : "amount",
                    message : "Enter your amount",
                    type : "number"
                }
            ]
        );

        myBalance -= amountAns.amount ;
        console.log("Your remaining balace is " + myBalance)

    } else if (OperationAns.Operation === "Check Balance") {
        console.log("Your balace is  " + myBalance);
        
    }
    

} else{
    console.log("Incorrect pin Code");
    
}