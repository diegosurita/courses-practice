module.exports = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Param has to be an string');
    }

    return str
        .split('')
            .reduce(
                (reversed, charachter) => charachter + reversed,
                ''
            );
};