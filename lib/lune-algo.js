function checkLuhn(number) {
    var sum = 0;
    var numDigits = number.length;
    var parity = numDigits % 2;

    for (var i = 0; i < numDigits; i++) {
        var digit = number.substring(i, 1);
        if (parity == (i % 2)) {
            digit = parseInt(digit) * 2;
            if (9 < digit) {
                digit = digit - 9;
            }
        }
        sum += digit;
    }
    return (0 == (sum % 10));
}

module.exports = { checkLuhn };
