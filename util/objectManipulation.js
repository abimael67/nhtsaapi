module.exports.objectKeysToLowerCase= (ob)=>{
    let newOb = {}
    Object.values(ob).forEach((v,i)=>{
        newOb[Object.keys(ob)[i].toLowerCase()] = v
    })
    return newOb
}

