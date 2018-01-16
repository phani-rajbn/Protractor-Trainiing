require('./animal_selection.js');

var home_page = function(){
	this.provideInputs = function(model, value){
		element(by.model(model)).sendKeys(value)
	}

	this.getDynamicText = function(){
		return element(by.binding('person.name')).getText();	
	}
	this.clickContinue = function(){
		element(by.buttonText("Continue")).click();
		return require('./animal_selection.js');
	}
}
module.exports = new home_page(); 