const cipher = {};

cipher.rot13 = (str) => {
    return str.split('')
            .map((s) => {
                let code = s.charCodeAt();
                if ( code >= 65 &&  code <= 77) {
                    return String.fromCharCode( code+13);
                } else if ( code>= 78 &&  code <= 90) {
                    return String.fromCharCode( code-13);
                }
                return String.fromCharCode(code);
            })
            .join('');
}

module.exports = cipher;