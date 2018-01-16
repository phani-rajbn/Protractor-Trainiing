describe('Should process the complete e2e', function() {
	beforeEach(function(){
		browser.get("http://localhost:8080/HomePage.html");		
	})
	it('Should be able to go to correct Page', function(){
		expect(browser.getCurrentUrl()).toContain("HomePage");
	})

	it('Entered text should match', function() {
		var textMessage ="Apple123";
		element(by.model('person.name')).sendKeys(textMessage);
		element(by.binding('person.name')).getText().then(function(text){
			console.log(text);
			expect(text).toEqual(textMessage);
			element(by.buttonText('Continue')).click();
			element(by.model('animal')).$('[value ="1"]').click();
			element(by.partialButtonText('Con')).click();			
		})		
	});

	it("should check the no of items in the listbox", function(){
		element(by.buttonText('Continue')).click();
		//element(by.model('animal')).$('[value="2"]').click();
		element.all(by.css('.ng-prestine option')).then(function(items){
			expect(items.length).toBe(4);
			console.log("The no of items: " + items.length)
			//expect(items[2].getText()).toBe("Samba, the Lion");
		}) 
		element(by.model('animal')).$('[value="2"]').click();
		expect(by.model('animal').getText()).toBe("Samba, the Lion");
	})

	it("check for thank you in the last page", function(){
		element(by.buttonText('Continue')).click();
		element(by.buttonText('Continue')).click();
		expect(browser.getCurrentUrl()).toContain("confirm")
		element(by.css('table td h1')).getText().then(function(text){
			expect(text).toContain('Thank you')
		})
	})
});