let https = require('https')

module.exports.getScenario1Path = (modelyear, make, model) => {
    return `/webapi/api/SafetyRatings/modelyear/${modelyear}/make/${make}/model/${model}?format=json`    
}
module.exports.getScenario3Path = (vehicleId) => {
    return `/webapi/api/SafetyRatings/VehicleId/${vehicleId}?format=json`    
}

module.exports.call = (path, retrievedData, resolve, reject)=>{
    var options = {
        host: process.env.NHTSA_API_URL,        
        path: path,        
      };
     //console.log(path)
     let data= ""
        https.get(options, (res)=>{            
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                data += chunk            
            });
            res.on('end', () => {
                try{               
                    retrievedData.data.push(JSON.parse(data))
                    resolve("Success")
                 }catch(e){
                    reject('ERROR parsing JSON')
                 }
            });   
        }).on("error",(err)=> console.log(err))
    
}