'use strict';

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

// let score = 0;
// let userName = prompt('\t   Who are you..?\n\nPlease tell us your name..!\n ');
// console.log(userName);

// // function greeting(message) {
// //   alert(message);
// // }
// // greeting('\n\tWelcome to my WebPage..' + userName.toUpperCase() + ' \n\t\t\tIam Abdallah\n\t\tI used to work as a chef\n\t\t\tIam from irbid\nI would like it if you played this guessing game');

// let userConfirm = prompt('Do You Like Quzzies? Answer with yes/no');

// console.log(userConfirm.toLowerCase());

// userConfirm = userConfirm.toLowerCase();

// if (userConfirm === 'yes' || userConfirm === 'y') {
//   console.log('I think you will have fun ..!');
// } else if (userConfirm === 'no' || userConfirm === 'n') {
//   console.log('Come On ..!, Just try it\n\tIt will be fun');
// }
// console.log(userConfirm);

// let favFood = prompt('Do i love Mansaf?');

// console.log(favFood.toLowerCase());

// favFood = favFood.toLowerCase();

// if (favFood === 'yes' || favFood === 'y') {
//   console.log('Bingo Thats right');
//   score = score + 1;
// } else if (favFood === 'no' || favFood === 'n') {
//   console.log('Wrong..?\n\tCome on i said that before');
// } else {
//   console.log(favFood);
// }

// let petType = prompt('Am i a cat person');

// console.log(petType.toLowerCase());

// petType = petType.toLowerCase();

// if (petType === 'yes' || petType === 'y') {
//   console.log('Yes bravo you nailed it ');
//   score = score + 1;
// } else if (petType === 'no' || petType === 'n') {
//   console.log('no wrong but if there is any comfort to you\n i like dogs & parrots too but not as the fluffy pets');
// } else {
//   console.log(petType);
// }

// let bestStudent = prompt('Do you think iam a good student?');

// console.log(bestStudent.toLowerCase());

// bestStudent = bestStudent.toLowerCase();

// if (bestStudent === 'yes' || bestStudent === 'y') {
//   console.log('Really!!,.. Thanks a lot for your honest answer infact i feel like i am so thank you a lot for your supporting all of us');
//   score = score + 1;
// } else if (bestStudent === 'no' || bestStudent === 'n') {
//   console.log('Nooo, come on why you answered you should believe in me');
// } else {
//   console.log(bestStudent);
// }

// let homeJob = prompt('Because iam a chef as i said before, Do you think i cook in home?');

// console.log(homeJob.toLowerCase());

// homeJob = homeJob.toLowerCase();

// if (homeJob === 'yes' || homeJob === 'y') {
//   console.log('you are right again oh omg i feel like you really know me');
//   score = score + 1;
// } else if (homeJob === 'no' || homeJob === 'n') {
//   console.log('well believe it or not infact i do usually... lol');
// } else {
//   console.log(homeJob);
// }

// let favTime = prompt('what time do i like to work on tasks? is it night?');

// console.log(favTime.toLowerCase());

// favTime = favTime.toLowerCase();

// if (favTime === 'yes' || favTime === 'y') {
//   console.log('yes and now i started to believe that you know me very well');
//   score = score + 1;
// } else if (favTime === 'no' || favTime === 'n') {
//   console.log('wrong you dont know anything about me infact i have a quote about that on my whats app status');
// } else {
//   console.log(favTime);
// }
// alert('welcome again' + userName.toUpperCase() + 'I hope you enjoyed the quizes see told you it will be fun');

// let myBirthYear;
// for (let i = 1; i <= 4; i++) {
//   myBirthYear = prompt('\t    Try to guess my birth Year?\n\t    Hint:Iam from the late 80`s\nPlease mind that you have only 4 Attempts ');
//   myBirthYear = parseInt(myBirthYear);

//   if (myBirthYear === 1988) {
//     alert('Yes My year birth date is 1988');
//     score = score + 1;
//     break;

//   } else if (myBirthYear < 1988) {
//     alert('No Try Again and try to type a greater number than that');
//   } else if (myBirthYear > 1988) {
//     alert('No Try Again and try to type a lower number than that');
//   }
// }

// let myKids = ['majd', 'leen', 'majdoleen'];
// let c = 0;
// let m = 0;
// for (let index = 0; index <= 3; index++) {
//   c++;
//   let myFavKid = prompt('\n\t\tLets Say i will have three kids in the future?\n\t\t\t |  Majd  |  leen  |  Majdoleen  |\nWhich one of them do you think will be my favorite kid ..?');
//   for (let a = 0; a <= 3; a++) {
//     if (myFavKid.toLowerCase() === myKids[a]) {
//       alert('Basiclly Majdoleen Contains Majd & leen put them togther');
//       console.log('And Voila ..!');
//       score = score + 1;
//       m++;
//     }
//   }
//   if (m === 1)
//     break;
// }
// if (c === 4) {
//   alert('Ok infact all of them will be my favorite');
// }
// document.write(myKids);
// alert(`Here is your Score: ${score} out of 7`);
