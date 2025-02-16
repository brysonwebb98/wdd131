// STEP 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);

document.querySelector("#myList").innerHTML = stepsHtml.join('');

// STEP 2
const grades = ['A', 'B', 'A']
function gradeFuction(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(gradeFuction)

// STEP 3
const totalPoints = gpaPoints.reduce((total, current) => total + current, 0)
const gpa = totalPoints / grades.length;

console.log(gpa)


// STEP 4
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortWords = words.filter(function(word){
    return word.length < 6;
});

// STEP 5
const numbers = [12, 34, 21, 54]
const luckyNumber = 21;
const notLucky = 350;
let luckyIndex = numbers.indexOf(luckyNumber)
let notluckyIndex = numbers.indexOf(notLucky);

console.log(luckyIndex);
console.log(notluckyIndex);
