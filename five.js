function isValidUrl(url) {
    const urlRegex = /^(https?:\/\/)([\w.-]+)(\.[\w.]+)$/;
    return urlRegex.test(url);
  }
  
  const url1 = "https://www.example.com";
  const url2 = "http://google.com";
  const url3 = "invalid_url";
  
  console.log(isValidUrl(url1)); // Output: true
  console.log(isValidUrl(url2)); // Output: true
  console.log(isValidUrl(url3)); // Output: false