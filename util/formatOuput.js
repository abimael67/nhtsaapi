module.exports = (values)=>{    
    let {Count, Results} = values[0]
    Results = Results.map(element=>{
        let objectToReturn = 
            {Description:element.VehicleDescription, VehicleId:element.VehicleId}
        return objectToReturn
    })
    return {Count:Count, Results: Results}
}