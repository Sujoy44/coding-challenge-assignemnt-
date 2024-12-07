function isValidLinkedInUrl(url) {
    const linkedinUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return linkedinUrlRegex.test(url);
  }
  
  const url1 = "https://www.linkedin.com/in/johndoe";
  const url2 = "https://www.linkedin.com/in/jane_smith123";
  const url3 = "https://linkedin.com/in/invalid_url";
  const url4 = "https://www.linkedin.com/in/too_short";
  
  console.log(isValidLinkedInUrl(url1)); // Output: true
  console.log(isValidLinkedInUrl(url2)); // Output: true
  console.log(isValidLinkedInUrl(url3)); // Output: false
  console.log(isValidLinkedInUrl(url4)); // Output: false