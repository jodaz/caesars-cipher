const assert = require('assert');
const cipher = require('./index.js');

describe('Caesar Cipher', () => {
    it('should decode to FREE CODE CAMP', () => {
        assert.equal("FREE CODE CAMP", cipher.rot13("SERR PBQR PNZC"))
    })
    it('should decode to FREE PIZZA!', () => {
        assert.equal("FREE PIZZA!", cipher.rot13("SERR CVMMN!"))
    })
    it ('should decode to FREE LOVE?', () => {
        assert.equal("FREE LOVE?", cipher.rot13("SERR YBIR?"))
    })
    it('should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
        assert.equal("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", cipher.rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
    })
})