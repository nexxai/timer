const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
    if (key === 'b') {
      beep();
    } else if (key >= 1 && key <= 9) {
      console.log(`Setting timer for ${key} seconds...`);
      timer(key);
    } else if (key === "\u0003") {
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
})

const timer = function(arg) {
  let delay = arg * 1000;

  setTimeout(() => {
    beep();
  }, delay);
}

const beep = function() {
  process.stdout.write('\x07');
}

