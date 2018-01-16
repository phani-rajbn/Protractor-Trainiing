describe('Complete E2E Testing', function() {
	beforeEach(function(){
		browser.get('http://localhost:8080/HomePage.html');
	})

	xit('Should automatte the process', function() {
		element(by.model('person.name')).sendKeys("Test123");
		var dText = element(by.binding('person.name')).getText();
		expect(dText).toBe('Test123');
		element(by.buttonText("Continue")).click();
		element(by.model('animal')).$('[value ="2"]').click();
		element(by.buttonText("Continue")).click();
		var tNote = element(by.css("h1")).getText();
		expect(tNote).toContain("Thank you");
	});
	var home_page = require('./PageTests/home_page.js');
	it('Automate using Page Object', function() {
		var input = "Test123"
		home_page.provideInputs("person.name", input);
		var text = home_page.getDynamicText();
		expect(text).toBe(input);
		home_page.clickContinue();
	});
});