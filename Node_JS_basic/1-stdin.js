console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
    
    if (process.stdin.isTTY) {
      process.exit(0); // Exit with success status
    } else {
      process.stdout.write('This important software is now closing\n');
      process.exit(0); // Exit with success status
    }
  }
});

process.stdin.on('error', (err) => {
  console.error('An error occurred:', err);
  process.exit(1); // Exit with an error status
});
