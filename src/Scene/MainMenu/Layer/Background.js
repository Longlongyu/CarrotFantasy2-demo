var MMBackgroundLayer = cc.Layer.extend({
	ctor : function () {
		this._super();
		this.loadBackground();
		return true;
	 },
	loadBackground : function () {
		var node = new cc.Sprite(res.FrontBg_png);
		this.addChild(node);
		node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
	}
});