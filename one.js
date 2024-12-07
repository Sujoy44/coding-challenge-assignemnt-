function reverseStringWithDelay(inputString) {
    setTimeout(() => {
      const reversedString = inputString.split('').reverse().join('');
      console.log(reversedString);
    }, 2000); // Delay of 2 seconds
  }
  
  const inputString = "Hello, World!";
  reverseStringWithDelay(inputString);