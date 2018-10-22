# NHTSA API
 Enhanced NHTSA API for query cars crashing tests

## Installation instructions
    1- Git clone https://github.com/abimael67/nhtsaapi.git
    2- Run 'npm install' in the terminal
    3- Run 'npm start'

## Usage
#### Legend
    * modelyear: the release year of the car (2015,2005,1994)
    * manufacturer: the make of the car (Toyota, Honda, BMW)
    * model: the model of the car (Camry, Civic, X6)
#### Scenario 1
    GET http://<host>:<port>/vehicles/<modelyear>/<manufacturer>/<model>

    This path will return all cars that matched the data supplied in the following JSON body:

    {
        Count: <NUMBER OF RESULTS>,
        Results: [
            {
            Description: "<VEHICLE DESCRIPTION>",
            VehicleId: <VEHICLE ID>
            },
            {
            Description: "<VEHICLE DESCRIPTION>",
            VehicleId: <VEHICLE ID>
            }, ...
        ]
    }
#### Scenario 2
    POST http://<host>:<port>/vehicles
        With JSON body:
        {
            "modelYear": <modelyear>,
            "manufacturer": <manufacturer>,
            "model": <model>
        }
    You should obtain the same result as Scenario 1

#### Scenario 3
    GET http://<host>:<port>/vehicles/<modelyear>/<manufacturer>/<model>?withRating=true

    This path will return the same JSON body as scenario 1 but with an additional Results' field, CrashRating. So the JSON body received should be something like this:

    {
        Count: <NUMBER OF RESULTS>,
        Results: [
            {
            CrashRating: "<CRASH RATING>"
            Description: "<VEHICLE DESCRIPTION>",
            VehicleId: <VEHICLE ID>
            },...
        ]
    }
    