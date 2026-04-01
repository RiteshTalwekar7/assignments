let count = 0;
function setTimeoutPromisified() {
  if (count >= 20) return;
  let timeout = setTimeout(() => {
    count++;
    console.log(count);
    setTimeoutPromisified();
  }, 1000)
}

setTimeoutPromisified();

