function cutString(str:string, numChars:number) {
    if (str.length <= numChars) {
      return str; 
    } else {
      const truncatedString = str.substring(0, numChars); 
      return truncatedString;
    }
}

export default cutString