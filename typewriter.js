const sentence = "hello there from lighthouse labs";

let i = 0;
const typeWriter = () => {
  if (i < sentence.length - 1) {
    process.stdout.write(sentence[i]);
    i++;
    setTimeout(typeWriter, 50);
  } else if (i === sentence.length - 1)
  {
    process.stdout.write(sentence[i] + "\n");
  }
}

typeWriter()
