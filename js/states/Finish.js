// Finish.js

var Climb = Climb || {};

//loading the game assets
Climb.Finish = function() {};

Climb.Finish.prototype = {
	init: function() {
		this.game.world.resize(settings.WIDTH, settings.HEIGHT);
	},
	create: function() {

		createBG(0x483D8B);
		createCopyright();

		// We're on your team.
		var text = "Tu peux nous compter\ndans ton équipe,";		
		var t2 = this.game.add.text(this.game.world.centerX, this.game.height/2-200, text, h2_style);
		t2.anchor.set(0.5);

		// All mountains; big and small.
		text = "quelle que soit la montagne à gravir !";		
		var t = this.game.add.text(this.game.world.centerX, this.game.height/2-120, text, h3_style);
		t.anchor.set(0.5);		

		// BroTalk Logo		
		var logo = this.add.sprite(this.game.world.centerX, this.game.height/2-10, 'logo');
		logo.anchor.set(0.5);
		logo.scale.setTo(0.75,0.75);

		// Chat with a counsellor
		var ChatBt = this.game.add.sprite(this.game.world.centerX, this.game.height/2 + 120, "square");
		createBt(ChatBt, "Clavarder avec un intervenant", "Contact");
		ChatBt.events.onInputUp.add(function(){
			trackEvent("Chat with a Counsellor clicked", Vent.game.state.getCurrentState().key+" screen");
		}, this);

		// Play again 
		var PlayAgainBt = this.game.add.sprite(this.game.world.centerX, this.game.height/2 + 180, "square");
		createBt(PlayAgainBt, "Menu principal", "MainMenu");		
	},
	update: function() {
	}
};