const formatOutput = require('../util/formatOuput')
const objectManipulation = require('../util/objectManipulation')
module.exports.findVehicle = (req, res, next)=>{      
    req.query = objectManipulation.objectKeysToLowerCase(req.query) 
    if(!req.query.withrating || req.query.withrating.toLowerCase() !== 'true')
        res.status(200).send(formatOutput(req.data))
    else
        next()
}

module.exports.getRating = (req, res)=>{    
    let data = req.retrievedData
    data.Results = req.data.map((e,i)=>{
        let result = e.Results[0]        
        return Object.assign({},
            data.Results.find(e=>e.VehicleId === result.VehicleId),
             {CrashRating: result.OverallRating})
    })
    
    res.status(200).send(data)
}

