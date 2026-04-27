// Print the current date/time every second (was: only once with setTimeout).
setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);