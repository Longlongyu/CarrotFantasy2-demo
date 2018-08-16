var MMMainLayer = cc.Layer.extend({
	actionDuration : 1,
	isUpUnlock : false,
	upLock : null,
	ctor : function() {
		this._super();
		this.loadConfig();
		this.loadMenu();
		this.loadSet();
		this.loadHelp();
		this.loadBackMonster();
		this.loadBackSmoke();
		this.loadForeMonster();
		this.loadForeSmoke();
		this.loadCarrot();
		this.loadForeground();
		this.registerEvent();
	},
	registerEvent : function(){
		var listener = cc.EventListener.create({
			event       : cc.EventListener.CUSTOM,
			target      : this,
			eventName   : jf.EventName.OPEN_UNLOCK_UP_LAYER,
			callback    : function(event) {
				var target = event.getCurrentTarget();
				var data = event.getUserData();
				cc.log("触发OPEN_UNLOCK_UP_LAYER");
				target.unlockLayer = new MMUnlockLayer();
				target.addChild(target.unlockLayer);
				/*if (data.isSuccess !== undefined && data.isSuccess) {

					cc.sys.localStorage.getItem(Config.Is_UP_UNLOCK_KEY, "YES");
					target.isUpUnlock = true;
					target.upLock.removeFromParent();
				}*/
			}
		});
		cc.eventManager.addListener(listener, this);
	},
	loadConfig : function() {
		this.isUpUnlock = cc.sys.localStorage.getItem(Config.IS_UP_UNLOCK_KEY) || "NO";
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
				cc.audioEngine.playEffect(res.sd_mm_Select_mp3);
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
				cc.log("点击“天天向上”按钮");
				cc.audioEngine.playEffect(res.sd_mm_Select_mp3);
				if (this.isUpUnlock == "NO") {
					cc.eventManager.dispatchEvent(new cc.EventCustom(jf.EventName.OPEN_UNLOCK_UP_LAYER));
				} else {
					cc.log("TODO: 实现“天天向上”按钮的功能");
				}
			}.bind(this)
		);
		floor.setPosition(cc.winSize.width / 2 - 8, cc.winSize.height / 2 - 45);

		var menu = new cc.Menu(start, floor);
		this.addChild(menu);
		menu.setPosition(0, 0);

		if (this.isUpUnlock == "NO") {
			var upLock = new cc.Sprite(res.FrontBtnFloorLocked_png);
			floor.addChild(upLock);
			this.upLock = upLock;
			upLock.setPosition(floor.width + 5, floor.height / 2 + 25);
		}
	},
	loadSet : function () {
		var setBg = new cc.Sprite(res.FrontMonster4_png);
		this.addChild(setBg);
		setBg.setPosition(cc.winSize.width / 2 - 350, 490);

		// Animation
		var moveBy1 = cc.moveBy(this.actionDuration, cc.p(0, -10));
		var moveBy2 = cc.moveBy(this.actionDuration, cc.p(0, 10));
		var seq = cc.sequence(moveBy1, moveBy2);
		var action = seq.repeat(100);
		setBg.runAction(action);

		var set = new cc.Sprite(res.FrontBtnSettingNormal_png);
		setBg.addChild(set);
		set.setPosition(157, 80);
	},
	loadHelp : function () {
		var helpBg = new cc.Sprite(res.FrontMonster6Hand_png);
		this.addChild(helpBg);
		helpBg.setPosition(cc.winSize.width / 2 + 270, 270);

		// Animation
		var rotateBy1 = cc.rotateBy(this.actionDuration * 0.8, -5);
		var rotateBy2 = cc.rotateBy(this.actionDuration * 0.8, 5);
		var seq = cc.sequence(rotateBy1, rotateBy2);
		var action = seq.repeatForever();
		helpBg.runAction(action);

		var help = new cc.Sprite(res.FrontBtnHelpNormal_png);
		helpBg.addChild(help);
		help.setPosition(155, 365);

		var helpBody = new cc.Sprite(res.FrontMonster6_png);
		this.addChild(helpBody);
		helpBody.setPosition(cc.winSize.width / 2 + 400, 280);

		// Animation
		var helpBodyMoveBy1 = cc.moveBy(this.actionDuration * 2, cc.p(0, 5));
		var helpBodyMoveBy2 = cc.moveBy(this.actionDuration * 2, cc.p(0, -5));
		var helpBodySeq = cc.sequence(helpBodyMoveBy1, helpBodyMoveBy2);
		var helpBodyAction = helpBodySeq.repeatForever();
		helpBody.runAction(helpBodyAction);
	},
	loadBackMonster : function() {
		var leftYellow = new cc.Sprite(res.FrontMonster3_png);
		this.addChild(leftYellow);
		leftYellow.setPosition(cc.winSize.width / 2 - 360, 220);

		//Animation
		var yellowMoveBy1 = cc.moveBy(this.actionDuration * 0.8, cc.p(0, 5));
		var yellowMoveBy2 = cc.moveBy(this.actionDuration * 0.8, cc.p(0, -5));
		var yellowSeq = cc.sequence(yellowMoveBy1, yellowMoveBy2);
		var yellowAction = yellowSeq.repeatForever();
		leftYellow.runAction(yellowAction);

		var leftGreen = new cc.Sprite(res.FrontMonster1_png);
		this.addChild(leftGreen);
		leftGreen.setPosition(cc.winSize.width / 2 - 300, 185);

		//Animation
		var greenMoveBy1 = cc.moveBy(this.actionDuration * 0.7, cc.p(-3, 0));
		var greenMoveBy2 = cc.moveBy(this.actionDuration * 0.7, cc.p(3, 0));
		var greenSeq = cc.sequence(greenMoveBy1, greenMoveBy2);
		var greenAction =  greenSeq.repeatForever();
		leftGreen.runAction(greenAction);
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

		//Animation
		var yellowMoveBy1 = cc.moveBy(this.actionDuration * 0.85, cc.p(-3, 0));
		var yellowMoveBy2 = cc.moveBy(this.actionDuration * 0.85, cc.p(3, 0));
		var yellowSeq = cc.sequence(yellowMoveBy1, yellowMoveBy2);
		var yellowAction =  yellowSeq.repeatForever();
		rightYellow.runAction(yellowAction);

		var leftCambridgeBlue = new cc.Sprite(res.FrontMonster2_png);
		this.addChild(leftCambridgeBlue);
		leftCambridgeBlue.setPosition(cc.winSize.width / 2 - 300, 150);

		//Animation
		var action0 = cc.moveTo(this.actionDuration * 0.2, cc.p(cc.winSize.width / 2 - 220, 170));
		var action1 = cc.sequence(action0, cc.callFunc(function() {
			var blueMoveBy1 = cc.moveBy(this.actionDuration * 0.55, cc.p(0, -5));
			var blueMoveBy2 = cc.moveBy(this.actionDuration * 0.55, cc.p(0, 5));
			var blueSeq = cc.sequence(blueMoveBy1, blueMoveBy2);
			var blueAction = blueSeq.repeatForever();
			leftCambridgeBlue.runAction(blueAction);
		}, this));
		leftCambridgeBlue.runAction(action1);
	},
	loadForeSmoke : function() {
		var node = new cc.Sprite(res.FrontSmoke2_png);
		this.addChild(node);
		node.setPosition(cc.winSize.width / 2 +290, 140);
	},
	loadCarrot : function () {
		var node = new cc.Sprite(res.FrontCarrot_png);
		this.addChild(node);
		node.setPosition(cc.winSize.width / 2 + 100, 20);

		//Animation
		node.setScale(0.7);
		node.setPosition(cc.winSize.width / 2 + 320, 120);
		var controlPointsTo = [
			cc.p(cc.winSize.width / 2 + 400, 100),
			cc.p(cc.winSize.width / 2 + 120, 0),
			cc.p(cc.winSize.width / 2 + 100, 20)];
		var bezierTo = cc.bezierTo(this.actionDuration * 0.8, controlPointsTo);
		var scaleTo = cc.scaleTo(this.actionDuration * 0.8, 1);
		var spawn = cc.spawn(bezierTo, scaleTo);
		node.runAction(spawn);
	},
	loadForeground : function() {
		var node = new cc.Sprite(res.FrontFront_png);
		this.addChild(node);
		node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
	}
});