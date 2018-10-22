const nhtsa = require('../apis/nhtsa')
const objectManipulation = require('../util/objectManipulation')
module.exports = (req, res, next)=>{
    let model, manufacturer, modelyear         
    req.body = objectManipulation.objectKeysToLowerCase(req.body) 
    req.data = [] 
    switch (req.method) {        
        case 'POST':            
            ({model, modelyear, manufacturer} = req.body)           
          break
        case 'GET':
                ({model, modelyear, manufacturer} = req.params)            
            break
        default:
            break
    }
    if(model && manufacturer && modelyear){
        let promise = new Promise((resolve, reject)=>nhtsa.call(nhtsa.getScenario1Path(modelyear, manufacturer, model), req,  resolve, reject))
        promise.then(()=> next()).catch(()=>res.status(200).json({Count: 0, Results:[]}))
    }
    else
        res.status(200).json({Count: 0, Results:[]}) 
}

