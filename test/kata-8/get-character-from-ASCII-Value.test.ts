import getChar from '../../src/kata-8/get-character-from-ASCII-Value'

describe('Should convert ASCII to character', () => {
    it('Should return character from decimal ASCII', () => {
        expect(getChar(55)).toEqual('7')
        expect(getChar(56)).toEqual('8')
        expect(getChar(57)).toEqual('9')
        expect(getChar(58)).toEqual(':')
        expect(getChar(59)).toEqual(';')
        expect(getChar(60)).toEqual('<')
        expect(getChar(61)).toEqual('=')
        expect(getChar(62)).toEqual('>')
        expect(getChar(63)).toEqual('?')
        expect(getChar(64)).toEqual('@')
        expect(getChar(65)).toEqual('A')
    })
})