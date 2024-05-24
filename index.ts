#! /usr/bin/env node

import inquirer from "inquirer";

console.log("*".repeat(25));

class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease(){
        this.fuel = 100
    }
}
class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
    name: "name",
    type: "input",
    message: "Please enter your Name",
}])
let opponent = await inquirer.prompt([{
    name: "select",
    type: "list",
    message: "Please select the opponent",
    choices: ["skeleton", "Allein", "zombie"],
}])
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
    if(opponent.select == "skeleton"){
        let ask = await inquirer.prompt([{
            name: "opt",
            type: "list",
            message: "Please select the opponent",
            choices: ["Attack", "Drink portion", "Run for your life"],
        }]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("You Loose, Better Luck Next Time.");
                    process.exit();
                }
                
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("You Win ");
                    process.exit();
                }
            }
        }   
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease();
            console.log(`You Drink Healthy Portion Fuel is ${p1.fuel}`);
            
        }
        if(ask.opt == "Run for your life"){
            console.log("You Loose, Better Luck Next Time!");
            process.exit();
        }
    }
    if(opponent.select == "Allein"){
        let ask = await inquirer.prompt([{
            name: "opt", 
            type: "list",
            message: "Please select the opponet",
            choices: ["Attack", "Drink portion", "Run for your life"]
        }]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("You Loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease();
            console.log(`You Drink Healthy Portion Fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run for your life"){
            console.log("You Loose, Better Luck Next Time!");
            process.exit();
        }
    }
    if(opponent.select == "zombie"){
        let ask = await inquirer.prompt([{
            name: "opt",
            type: "list",
            message: "Please select the opponet",
            choices: ["Attack", "Drink portion", "Run for your life"]
        }]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("You Loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("You Win");
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease();
            console.log(`You Drink Healthy Portion Fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run for your life"){
            console.log("You Loose, Better Luck Next Time!");
            process.exit();
        }
    }
}
while(true);