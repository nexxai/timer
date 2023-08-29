const args = process.argv.slice(2);

if (!args) {
  process.exit;
}

for (let arg of args) {
  if (arg < 0 || isNaN(arg)) {
    break;
  }

  let delay = arg * 1000;

  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}