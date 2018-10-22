const formatOutput = require('../formatOuput')

describe('FormatOutput', ()=>{
    it('Should return the expected object structure', ()=>{
        const payload = [{Count:2, Results: [{VehicleDescription: 'Honda', VehicleId:123}, {VehicleDescription: 'Toyota', VehicleId:124}]}]        
        const expected = {Count:2, Results: [{Description: 'Honda', VehicleId:123}, {Description: 'Toyota', VehicleId:124}]} 
        const action = formatOutput(payload)   
        expect(action).toEqual(expected)
    })
})