const request = require('supertest');
const app = require('../app')
const {payload, expected, expectedWithRating} = require('./testData')
describe('Test the paths', () => {
  
    test('It should response the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
    test('It should response the GET method and return the expected data', () => {
        return request(app)
                .get(`/vehicles/${payload.modelyear}/${payload.manufacturer}/${payload.model}`)
                .expect(200)
                .then(response => {
                        expect(response.body).toEqual(expected)
                    })
    });
    test('It should response the GET method and return the expected data with rating', () => {
        return request(app)
                .get(`/vehicles/${payload.modelyear}/${payload.manufacturer}/${payload.model}?WithRating=true`)
                .expect(200)
                .then(response => {
                        expect(response.body).toEqual(expectedWithRating)
                    })
    });
    test('It should response the POST method and return the expected data', () => {
        return request(app)
                .post("/vehicles")
                .send(payload)
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    expect(response.body).toEqual(expected)
                })
    });
   
})