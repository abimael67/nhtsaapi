const objectMani = require('../objectManipulation')

describe('FormatOutput', ()=>{
    it('Should return the expected object structure', ()=>{
        const payload = {Manufacturer:"Honda", ModelYear:2015, Model:"Civic" }        
        const expected = {manufacturer:"Honda", modelyear:2015, model:"Civic" }
        const action = objectMani.objectKeysToLowerCase(payload)   
        expect(action).toEqual(expected)
    })
})