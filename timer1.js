const args = process.argv
const seconds = args.slice(2);


for (let second of seconds) {
  setTimeout(() => {
    process.stdout.write('\x07')
  }, second * 1000)
}