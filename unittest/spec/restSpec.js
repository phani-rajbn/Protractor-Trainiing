var request = require('request');
var service = require('../RestService');
var base_url = 'http://localhost:1234/'

describe('rest unit testing', function(){
    it('return statusCode 200', function(){
        request.get(base_url, function(err, res, body){
            expect(res.statusCode).toBe(200);
        })
    })

    it('body should display hellodata', function(){
        request.get(base_url, function(err, res, body){
            expect(body).toBe("Hello World");
        })
    })
})