// Finish.js

var Climb = Climb || {};

//loading the game assets
Climb.Instructions = function() {};

Climb.Instructions.prototype = {
	init: function() {
		this.game.world.resize(settings.WIDTH, settings.HEIGHT);
	},
	create: function() {

		createBG(0x222222);
		createCopyright();

		// start game text
		var text = "Comment jouer";
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 230, text, h1_style);
		t.anchor.set(0.5);

		createInstructions();

		// create buttons
		// Continue
		var continueBt = Climb.game.add.sprite(Climb.game.width / 2, Climb.game.height / 2 + 160, "square");
		createBt(continueBt, "commencer à jouer", "Game");	  

		// Back button
		var backBt = Climb.game.add.sprite(Climb.game.width / 2, Climb.game.height / 2 + 220, "square");
		createBt(backBt, "Menu principal", "MainMenu");
	},
	update: function() {}
};

function createInstructions() {

	// create and add text sprite telling the player they have won    

	var text = "1. Appuie sur les touches A, M, I et S\nsur ton clavier.\n\n";	
	text += "2. Maintiens les touches enfoncées pour\naider tes grimpeurs à gravir la montagne.\n\n";
	text += "3. Les grimpeurs peuvent s’entraider en\ntirant leurs co-équipiers vers le haut.\n\n";
	text += "4. Pour gagner, tu dois atteindre\nle sommet.";

	var instructions = Climb.game.add.text(Climb.game.width / 2 - 75, Climb.game.height / 2 - 182, text, p_style);

	var rope_img = Climb.game.add.sprite(Climb.game.width / 2 - 215, Climb.game.height / 2 - 175, "inst-rope");
	rope_img.scale.set(0.7);

	var stack_img = Climb.game.add.sprite(Climb.game.width / 2 - 215, Climb.game.height / 2 - 25, "inst-stack");
	stack_img.scale.set(0.7);  
}