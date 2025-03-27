module.exports = (int) => {
    const splitted = int.toString().split('');
    let sign = '';

    if (splitted[0] === '-') {
        sign = splitted.shift();
    }

    if (splitted.length === 1) {
        return int;
    }

    return parseInt(sign + splitted
        .reduce(
            (carry, char) => char !== '0' ? char + carry : carry, '')
        );
};