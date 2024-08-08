// Console log a welcome message with instructions to mad libs
let welcome = "Welcome to Mad Libs Story"

console.log(welcome)
// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let q1 = prompt("Give me an adjective:")
let q2 = prompt("Give me an plural noun:")
let q3 = prompt("Give me an verb(present time):")
let q4 = prompt("Give me another adjective:")

// Create an array that stores the values the user entered
let array = []
array.push(q1)
array.push(q2)
array.push(q3)
array.push(q4)
// Console log the story with the array values passed into the blanks
console.log(`In a small, ${array[0]} school in the Bronx, there was a problem with too many, ${array[2]}. These ${array[2]} loved to ${array[q3]}, which caused Mr. P so many headaches. However, no one wanted to remove them because they were too ${array[4]} so they stayed there forever.`)
// Make sure you are referencing the values of the array (rather than the user inputs themselves)

// You can use any type of string manipulation that feels more intuitive








