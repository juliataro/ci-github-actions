const request = require('supertest')('localhost:4000');
const assert = require('chai').assert;

describe('Users API', () => {
    it('GET /test', () =>{
        // Make a GET request to the users route
        return request
            .get('/')
            .expect(200)
            .then((res) => {
                // assert data bieng return to not be empty
                assert.isNotEmpty(res.body);
            });
    });
});