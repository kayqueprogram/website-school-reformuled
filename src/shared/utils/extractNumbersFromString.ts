
function extractNumberFromString(str:string) {
    const regex = /\d+(\.\d+)?/g; 
    const match = str.match(regex); 
    return match ? parseFloat(match[0]) : null;
}

export default extractNumberFromString;
