describe('Testing the App', function() {
	beforeEach(function(){
	  browser.get('http://localhost:8080/HomePage.html');	
	})

	it('should test using css', function() {
		
		//css tag name...
		element(by.css('input')).sendKeys("Test123");

		//css class
		element(by.css('.btnClass')).getText().then(function(text){
			console.log(text);
		})

		//css child nodes
		element(by.css('table tr a')).getText().then(function(text){
			console.log(text)
			expect(text).toEqual('Home Page');
		})
		//css id 
		element(by.css("button#continue")).click();
	});
});