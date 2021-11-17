
/**
 * converts celesius to f
 * @param {number} celsius 
 * @returns 
 */
function celsiusToFarenheit(celsius) {
    const cTemp = celsius;
    const result = cTemp * 9 / 5 + 32;
    const message = `Converted ${cTemp}\xB0C to ${result} \xB0F.`;
    console.log(message);

    return result
}