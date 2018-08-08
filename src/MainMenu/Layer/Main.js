var MMMainLayer = cc.Layer.extend({
	actionDuration : 1,
	ctor : function() {
		this._super();
		this.loadMenu();
		this.loadSet();
		this.loadHelp();
		this.loadBackMonster();
		this.loadBackSmoke();
		this.loadForeMonster();
		this.loadForeSmoke();
		this.loadCarrot();
		this.loadForeground();
	},
	loadMenu : function() {
		var startNormal = new cc.Sprite(res.FrontBtnStartNormal_png);
		var startPress = new cc.Sprite(res.FrontBtnStartPressed_png);
		var startDisabled = new cc.Sprite(res.FrontBtnStartNormal_png);
		var start = new cc.MenuItemSprite(
			startNormal,
			startPress,
			startDisabled,
			function (){
				cc.log("点击“开始冒险”按钮");
			}.bind(this)
		);
		start.setPosition(cc.winSize.width / 2 - 8, cc.winSize.height / 2 + 75);

		var floorNormal = new cc.Sprite(res.FrontBtnFloorNormal_png);
		var floorPress = new cc.Sprite(res.FrontBtnFloorPressed_png);
		var floorDisabled = new cc.Sprite(res.FrontBtnFloorNormal_png);
		var floor = new cc.MenuItemSprite(
			floorNormal,
			floorPress,
			floorDisabled,
			function (){
				cc.log("点击“天天向上”按钮")
			}.bind(this)
		);
		floor.setPosition(cc.winSize.width / 2 - 8, cc.winSize.height / 2 - 45);

		var menu = new cc.Menu(start, floor);
		this.addChild(menu);
		menu.setPosition(0, 0);
	},
	loadSet : function () {
		var setBg = new cc.Sprite(res.FrontMonster4_png);
		this.addChild(setBg);
		setBg.setPosition(cc.winSize.width / 2 - 350, 490);

		var set = new cc.Sprite(res.FrontBtnSettingNormal_png);
		setBg.addChild(set);
		set.setPosition(157, 80);
	},
	loadHelp : function () {
		var helpBg = new cc.Sprite(res.FrontMonster6Hand_png);
		this.addChild(helpBg);
		helpBg.setPosition(cc.winSize.width / 2 + 270, 270);

		var help = new cc.Sprite(res.FrontBtnHelpNormal_png);
		helpBg.addChild(help);
		help.setPosition(155, 365);

		var helpBody = new cc.Sprite(res.FrontMonster6_png);
		this.addChild(helpBody);
		helpBody.setPosition(cc.winSize.width / 2 + 400, 280);

	},
	loadBackMonster : function() {
		var leftYellow = new cc.Sprite(res.FrontMonster3_png);
		this.addChild(leftYellow);
		leftYellow.setPosition(cc.winSize.width / 2 - 360, 220);

		var leftGreen = new cc.Sprite(res.FrontMonster1_png);
		this.addChild(leftGreen);
		leftGreen.setPosition(cc.winSize.width / 2 - 300, 185);

	},
	loadBackSmoke : function() {
		var left = new cc.Sprite(res.FrontSmoke1_png);
		this.addChild(left);
		left.setPosition(cc.winSize.width / 2 - 410, 190);

		var right = new cc.Sprite(res.FrontSmoke3_png);
		this.addChild(right);
		right.setPosition(cc.winSize.width / 2 + 405, 190);
	},
	loadForeMonster : function() {
		var rightYellow = new cc.Sprite(res.FrontMonster5_png);
		this.addChild(rightYellow);
		rightYellow.setPosition(cc.winSize.width / 2 + 290, 185);

		var leftCambridgeBlue = new cc.Sprite(res.FrontMonster2_png);
		this.addChild(leftCambridgeBlue);
		leftCambridgeBlue.setPosition(cc.winSize.width / 2 - 300, 150);

	},
	loadForeSmoke : function() {
		var node = new cc.Sprite(res.FrontSmoke2_png);
		this.addChild(node);
		node.setPosition(cc.winSize.width / 2 +320, 150);
	},
	loadCarrot : function () {
		var node = new cc.Sprite(res.FrontCarrot_png);
		this.addChild(node);
		node.setPosition(cc.winSize.width / 2 + 100, 20);
	},
	loadForeground : function() {
		var node = new cc.Sprite(res.FrontFront_png);
		this.addChild(node);
		node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
	}
});