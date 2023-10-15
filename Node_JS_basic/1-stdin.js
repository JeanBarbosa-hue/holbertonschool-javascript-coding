console.log('Welcome to Holberton School, what is your name?');

// await input
process.stdin.resume();

// Define a variable to store user input
let name = '';

// Once input is entered
process.stdin.on('data', (data) => {
  name += data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  
  // Check if input is coming from the terminal
  if (process.stdin.isTTY) {
    process.exit();
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
