const nhtsa = require('../apis/nhtsa')
const objectManipulation = require('../util/objectManipulation')
const formatJSON = require('../util/formatOuput')
 function ratingHandler (req, res, next){
   
    req.data = formatJSON(req.data)
    req.retrievedData = Object.assign({}, req.data)
    req.data = []
    let promises = [] 
    req.retrievedData.Results.forEach((e,i)=> {
       
        promises.push(new Promise((resolve, reject)=>nhtsa.call(nhtsa.getScenario3Path(e.VehicleId), req, resolve, reject)  
            ))
    })
    Promise.all(promises).then(()=>next()).catch(()=> res.status(200).json({Count: 0, Results:[]})) 
    
}
module.exports = ratingHandler