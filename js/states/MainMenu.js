// MainMenu.js
var Climb = Climb || {};

Climb.MainMenu = function() {};

Climb.MainMenu.prototype = {
	init: function() {
		this.game.world.resize(settings.WIDTH, settings.HEIGHT);
	},
	create: function() {

		// set BG
		createBG(0x015096);
		createCopyright();

		// Game wordmark "The Ascent"
		var wordmark = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, "wordmark");
		wordmark.anchor.set(0.5);

		// subtitle
		var text = "atteindre le sommet en équipe";
		var s = this.game.add.text(this.game.width / 2, this.game.height / 2 + 20, text.toUpperCase(), h3_style);
		s.anchor.set(0.5);		

		// create Buttons
		// Play now 
		var PlayBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 120, "square");
		createBt(PlayBt, "Commencer", "Instructions");

	},
	update: function() {}
};