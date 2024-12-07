function generateRandomNumberWithDelay(delay) {
    let countdown = delay;
  
    const intervalId = setInterval(() => {
      console.log(`Generating random number in ${countdown} seconds...`);
      countdown--;
  
      if (countdown < 0) {
        clearInterval(intervalId);
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000);
  }
  
  generateRandomNumberWithDelay(3); // Delay of 3 seconds