import inquirer from "inquirer"
function random_number(min:number , max:number)
{
  return Math.floor(Math.random() * (max-min) + (min))
}    
let smallest = 1
let biggest = 30
let answer = random_number(smallest , biggest)
let i = 1
let j = 1000
while(i < j){
  let guessing_game = await inquirer.prompt([
    {
      type: 'number',
      name: 'guess',
      message: `Guess a Number between ${smallest} and ${biggest}: `
    }
  ])
  if(guessing_game.guess == answer){
    console.log(`"Well Done it took you ${i} tries`)
    i++;
    break
  }
  else if(guessing_game.guess < answer && guessing_game.guess >= smallest){
    console.log(`The number is higher than ${guessing_game.guess} Try No:${i}`)
    i++;
  }
  else if(guessing_game.guess > answer && guessing_game.guess <= biggest){
    console.log(`The number is lower than ${guessing_game.guess} Try No:${i}`)
    i++;
  }
  else if(guessing_game.guess > biggest){
    console.log( `Invalid guess. You can only guess numbers between ${smallest} and ${biggest}`)
  }
  else if(guessing_game.guess < smallest){
    console.log( `Invalid guess. You can only guess numbers between ${smallest} and ${biggest}`)
  }
}