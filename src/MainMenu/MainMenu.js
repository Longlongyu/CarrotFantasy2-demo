var MainMenuScene = cc.Scene.extend({
	backgroundLayer : null,
	mainLayer : null,
	ctor : function() {
		this._super();
	},
	onEnter : function () {
		this._super();
		this.loadBackgroundLayer();
		this.loadMainLayer();
	},
	loadBackgroundLayer : function(){
		this.backgroundLayer = new MMBackgroundLayer();
		this.addChild(this.backgroundLayer);
	},
	loadMainLayer : function(){
		this.mainLayer = new MMMainLayer();
		this.addChild(this.mainLayer);
	}
});