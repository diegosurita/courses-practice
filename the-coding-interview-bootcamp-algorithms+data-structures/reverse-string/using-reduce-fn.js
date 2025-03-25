module.exports = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Param has to be an string');
    }

    // split the string into a array of characters and use reduce function to create the reversed string
    return str
        .split('')
            .reduce(
                (reversed, charachter) => charachter + reversed,
                ''
            );
};