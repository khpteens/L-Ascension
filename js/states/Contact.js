// Contact.js

var Climb = Climb || {};

//loading the game assets
Climb.Contact = function() {};

Climb.Contact.prototype = {
	init: function() {
		this.game.world.resize(settings.WIDTH, settings.HEIGHT);
	},
	create: function() {

		createBG(0x483D8B);
		createCopyright();

		var text = "Exprime-toi";
		var t = this.game.add.text(this.game.world.centerX, this.game.height / 2 - 200, text, h1_style);
		t.anchor.set(0.5);

		text = "Quelque chose te préoccupe ?\nCommunique avec l’un\nde nos intervenants.";
		var sub = this.game.add.text(this.game.world.centerX, this.game.height / 2 - 135, text, h3_style);
		sub.anchor.set(0.5);

		var messageButtonH = this.game.height / 2 - 30,
			phoneButtonH = this.game.height / 2 + 30;

		// Live Chat
		if (chatOpen) {
			text = chatOpen_txt[1];			
		} else {
			text = chatClosed_txt[1];
			messageButtonH = this.game.height / 2 + 30,
			phoneButtonH = this.game.height / 2 - 30;
		}
		var MessageBt = this.game.add.sprite(this.game.width / 2, messageButtonH, "square");
		createBt(MessageBt, text, false, false, "icon-chat");
		MessageBt.events.onInputUp.add(function() {
			trackEvent("Message a Counsellor clicked", Vent.game.state.getCurrentState().key+" screen");
			message_brotalk();
		}, this);

		// Phone
		text = "Téléphoner à\nun intervenant";
		var PhoneBt = this.game.add.sprite(this.game.width / 2, phoneButtonH, "square");
		createBt(PhoneBt, text, false, false, "icon-phone");
		PhoneBt.events.onInputUp.add(function() {
			trackEvent("Phone a Counsellor clicked", Vent.game.state.getCurrentState().key+" screen");
			phone_brotalk();
		}, this);

		// More info
		text = counsellor_txt[1];
		var LearnBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 90, "square");
		createBt(LearnBt, text, false);
		LearnBt.events.onInputUp.add(function() {
			trackEvent("Learn About Counsellors clicked", Vent.game.state.getCurrentState().key+" screen");
			moreAbout();
		}, this);

		// Phone
		var BackBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 210, "square");
		createBt(BackBt, "Menu principal", "MainMenu");

	},
	update: function() {}
};

function phone_brotalk() {
	var r = confirm("Êtes-vous sûr que vous voulez composer le numéro de Jeunesse, J'écoute ?");
	if (r === true) {
		trackEvent("Phone a Counsellor confirmed", Vent.game.state.getCurrentState().key+" screen");
		window.location = phone_url;
	} else {
		// do nothing if cancel is pressed
	}
}

function message_brotalk() {
	var r = confirm("Êtes-vous sûr de vouloir quitter cette page ?");
	if (r === true) {
		trackEvent("Message a Counsellor confirmed", Vent.game.state.getCurrentState().key+" screen");
		openInNewTab(chat_url);
	} else {
		// do nothing if cancel is pressed
	}
}

function moreAbout() {
	var r = confirm("Êtes-vous sûr de vouloir quitter cette page ?");
	if (r === true) {
		trackEvent("Learn About Counsellors confirmed", Vent.game.state.getCurrentState().key+" screen");
		openInNewTab(counsellor_url);
	} else {
		// do nothing if cancel is pressed
	}
}