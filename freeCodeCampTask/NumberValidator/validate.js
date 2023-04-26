function telephoneCheck(str) {
    return /^(1 |1)?((\d{3})|(\(\d{3}\)))(-| |)(\d{3})(-| |)(\d{4})$/.test(str);
}