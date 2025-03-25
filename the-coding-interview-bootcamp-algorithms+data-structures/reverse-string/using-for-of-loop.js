module.exports = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Param has to be an string');
    }

    let reversed = []; // create an empty string of the reversed string

    for (let character of str) { // walk through every character of the string
        reversed = character + reversed; // concatenate the current character in the reversed string
    }

    return reversed;
};