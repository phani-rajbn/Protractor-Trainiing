describe("Calc App", function(){
    var v1 = element(by.model('v1'));
    var v2 = element(by.model('v2'));
    var btn = element(by.id('btnSubtract'));
    var res = element(by.binding('result'));

    beforeEach(function(){
        browser.get("http://localhost:8080/Calc.html");
    })

    function subOperation(a, b){
        v1.sendKeys(a),
        v2.sendKeys(b)
        btn.click();
    }

    it("Should add the numbers", function(){
        subOperation(4,3);
        browser.sleep(5000);
    })
    
})