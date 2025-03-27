// This is not an ideal solution.
// I can use this solution if the comparison have to be character by character, i.e. not the entire string comparison.
module.exports = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    }

    return true;
};