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