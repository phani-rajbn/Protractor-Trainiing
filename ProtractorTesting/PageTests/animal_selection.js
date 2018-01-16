require('./confirm_page.js');

var animal_selection = function(){
	this.selectedAnimal = function(index){
		element(by.model('animal')).$('[value ="' + index + '"]').click();
	}
	this.clickContinue = function(){
		element(by.buttonText("Continue")).click();
		return require('./confirm_page.js');
	}
}

module.exports = new animal_selection();