    // animals.push('sheep');
    // animals.pop();
    // animals.shift();
    // animals.unshift('horse');
    // animals.splice(1,3);
    // animals.reverse();
    // animals.sort();
    // animals[10] = 'horse';
    // animals.fill('mouse',6);
    //animals.sort().reverse();
    // var animals = ['cat', 'dog', 'rabbit', 'bird', 'fish', 'zebra'];
    // console.log(animals);

    // var newHolder = ['cat', 'dog', 'rabbit', 'bird'];
    // newHolder[10] = 'horse';
    // newHolder.fill('fish', 3, 10);
    // newHolder.reverse();
    // newHolder.pop();
    // newHolder.push('sheep');

    // console.log(newHolder);

    // var newHolder = ['cat', 'dog', 'rabbit', 'bird'];
    // var q = prompt('what did you want to look for?');
    // var p = newHolder.indexOf(q);
    // var message = p > -1 ? 'Found' : 'Not there' ;
    // console.log(message);

    // var arr = [3,4,5,77,33,22,4,1,55,2];
    // arr.sort();
    // console.log(arr);
    // var q = prompt('what do you want to remove');
    // var finder = arr.indexOf(q);

    // var v = (finder > -1) ? arr.splice(finder,1) : false;
    // console.log(v);

    // var car = {color:'red', make:'ford', doors:5, model:'mustang'};
    // console.log(obj);

    // var obj1 = new Object();
    // obj1.color = 'red';
    // obj1.make = 'ford';
    // console.log(obj1);
    // var prop = prompt('What did you wnat to know about the car?');
    // console.log(car[prop]);

    // for(var property in car){
    //   console.log(property + ": " + car[property]);
    // }

    // var bob = {
    //   age: 30,
    //   hair: 'brown',
    //   eyes: 'blue',
    //   works: 'developer',
    // }
    // var friends = {
    //   friend1: bob,
    //   friend2: {
    //     age:30,
    //     hair: 'black',
    //   }
    // }
    // var friends1 = [bob, {age: 30, hair: 'black'}];

    //console.dir(document);

    // var userNames = ["mike","john","larry"];
    // var userInput = prompt("what is your name?");
    // var output = document.getElementById("output");
    // var htmlOutput = "";
    // if(userNames.indexOf(userInput) > -1) {
    //      alert("hello");
    //     htmlOutput = "welcome it was true";
    //     var age = prompt("age");
    //     htmlOutput += age > 18 ? " you are over 18" : " you are under 18";
    // } else {
    //     htmlOutput =  "denied was not true ";   
    // }
    // output.innerHTML = htmlOutput + ", "+ userInput; 


  // if (myTime >= 8 && myTime < 12){
  //   output.innerHTML = 'Wake up its mornig';
  // } else if(myTime >= 12 && myTime < 13){
  //   output.innerHTML= 'go to lunch';
  // } else if(myTime >=13 && myTime <= 16){
  //   output.innerHTML= 'Go to work';
  // } else if(myTime >16 && myTime <20){
  //   output.innerHTML= 'Dinner time';
  // } else if(myTime >=22){
  //   output.innerHTML= 'Time to go sleep';
  // } else{
  //   output.innerHTML = 'its evening, go to sleep';
  // }

  // switch (Number(myTime)){
  //   case 8:
  //     html = 'Wake up time';
  //     break;
  //   case 12: 
  //     html = 'Lunch';
  //     break;
  //   case 16:
  //     html = "Dinner";
  //     break;
  //   default:
  //   html= 'Nothing to do';
  // }

  // output.innerHTML = html;


    // var html = "something went wrong";
  // var output = document.getElementById("output");
  // var question = prompt("heads or tails");
  // var result = question == "heads" ? 1 : 0;
  // var randomNumber = Math.floor(Math.random()*2);
  // if(result == randomNumber) {
  //     html = "yes guessed correctly";
  // }else{
  //     html = "you were wrong";        
  // }
  // output.innerHTML = html;

  // var answer = "something went wrong";
  // var output = document.getElementById("output");
  // var question = prompt('What is the question?');
  // var randomNumber = Math.floor(Math.random()*6);
  // switch(randomNumber){
  //   case 0:
  //   answer = 'it will work out';
  //   break;
  //   case 1:
  //   answer = 'Maybe, maybe not';
  //   break;
  //   case 2:
  //   answer = 'Probably not';
  //   break;
  //   case 3:
  //   answer = 'Highly likely';
  //   break;
  //   default:
  //   answer = 'I do not know about that';
  // }
  // output.innerHTML = "You asked me " + question + "<br> I think that "+answer; 


  // var output = document.getElementById('output');
  // var player = prompt("Do you choose Rock, Paper or Scissors?");
  // var ps = player.toUpperCase();
  // var win = false;

  // var computer = Math.floor(Math.random()*3);
  // if (computer == 1){computer = 'Rock';} 
  // else if (computer == 2){computer = 'Paper';} 
  // else {computer = 'Scissors';}

  // var cs = computer.toUpperCase();
  // console.log(computer);
  // var html='';

  // if(cs == ps){
  //   html += 'Its TIE';
  // } else {
  //   if(ps == 'ROCK'){
  //     if (cs == 'SCISSORS'){
  //       win = true;
  //     } else {
  //       viw = false;
  //     }

  //   }else if (ps =='PAPER'){
  //     if(cs == 'SCISSORS'){
  //       win = false
  //     } else {
  //       win = true;
  //     }
  //   }
  //   //ps == "SCISSORS"
  //   else {
  //     if(cs == 'PAPER'){
  //       win = true;
  //     } else {
  //       win = false;
  //     }
  //   }

  //   if(win){
  //     html += 'player wins';
  //   } else {
  //     html += 'computer wins';
  //   }

  // }
  // output.innerHTML = 'Player vs Computer<br>' + player + " vs " + computer + '<br> Result ' + html;



  //var output = document.getElementById("output");
  // var numberBananas = prompt('How many bananas do you want to eat?');
  // var caloriasBanana = 89;
  // var total= numberBananas * caloriasBanana;

  // output.innerHTML = "You will consume "+ total +" calories.";


  // var output = document.getElementById("output");

  // var html = '<table>';
  //   for (var row = 0; row < 10; row++){
  //     html += '<tr>';
  //       for (var col = 0; col < 5; col++){
  //         html += '<td> Cell = ' +((col+1)+(row*5))+ '</td>';
  //       }
  //       html += '</tr>';
  //   }
  //   html += '</table>';

  //   output.innerHTML = html;



  // var output = document.getElementById("output");
  // total = 0; 

  // for(var i = 0; i < 1000; i++){
  //   if (i % 5 === 0){
  //     total += i;
  //     output.innerHTML += 'value of i = '+ i +'<br>';
  //   }
  // }
  // output.innerHTML += 'Total is '+total;