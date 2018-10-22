module.exports.payload = {	modelyear:2015,
    manufacturer:"Toyota",
    model:"Camry"
}
module.exports.expected = {
    Count: 1,
    Results: [
        {
            Description: "2015 Toyota Camry 4 DR FWD",
            VehicleId: 9121
        }
    ]
}
module.exports.expectedWithRating = {
    Count: 1,
    Results: [
        {
            Description: "2015 Toyota Camry 4 DR FWD",
            VehicleId: 9121,
            CrashRating: "5"
        }
    ]
}