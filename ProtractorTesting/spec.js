//spec.js file
// describe('Sample App', function(){
//     it('Display Title', function(){
//         browser.ignoreSynchronization=true;
//         //It Ensures that Protractor does not wait for Angular Promises like $http to resolve the page and the Page execution could happen as expected..

//         browser.get('http://www.google.com');
//         expect(browser.getTitle()).toBe('Google')
//     })
// });

describe("Calc App", function(){
    var v1 = element(by.model('v1'));
    var v2 = element(by.model('v2'));
    var btn = element(by.id('btnClick'));
    var res = element(by.binding('result'));

    beforeEach(function(){
        browser.get("http://localhost:8080/Calc.html");
    })


    function addOperation(a, b){
        v1.sendKeys(a),
        v2.sendKeys(b)
        btn.click();
    }
    it("Should add the numbers", function(){
        addOperation(3,4);
    })
    
})