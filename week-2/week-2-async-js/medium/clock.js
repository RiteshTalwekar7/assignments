function FetchTime() {
  setTimeout(() => {
    const now = new Date();
    console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    FetchTime();
  }, 1000);
}

FetchTime();
// const now = new Date();
// console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());