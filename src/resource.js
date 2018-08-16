/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var res = {
	HelloWorld_png : "res/HelloWorld.png",

	sd_mm_BGMusic_mp3 : "res/Sound/MainMenu/BGMusic.mp3",
	sd_mm_Select_mp3 : "res/Sound/MainMenu/Select.mp3",

	FrontBg_png : "res/MainMenu/zh/front_bg.png",
	FrontBtnFloorNormal_png : "res/MainMenu/zh/front_btn_floor_normal.png",
	FrontBtnFloorPressed_png : "res/MainMenu/zh/front_btn_floor_pressed.png",
	FrontBtnFloorLocked_png : "res/MainMenu/front_btn_floor_locked.png",
	FrontBtnStartNormal_png : "res/MainMenu/zh/front_btn_start_normal.png",
	FrontBtnStartPressed_png : "res/MainMenu/zh/front_btn_start_pressed.png",

	FrontCarrot_png : "res/MainMenu/front_carrot.png",
	FrontFront_png : "res/MainMenu/front_front.png",
	FrontMonster1_png : "res/MainMenu/front_monster_1.png",
	FrontMonster3_png : "res/MainMenu/front_monster_3.png",
	FrontMonster2_png : "res/MainMenu/front_monster_2.png",
	FrontMonster4_png : "res/MainMenu/front_monster_4.png",
	FrontMonster5_png : "res/MainMenu/front_monster_5.png",

	FrontBtnHelpNormal_png : "res/MainMenu/front_btn_help_normal.png",
	FrontBtnSettingNormal_png : "res/MainMenu/front_btn_setting_normal.png",

	FrontMonster6_png : "res/MainMenu/front_monster_6.png",
	FrontMonster6Hand_png : "res/MainMenu/front_monster_6_hand.png",

	FrontSmoke1_png : "res/MainMenu/front_smoke_1.png",
	FrontSmoke2_png : "res/MainMenu/front_smoke_2.png",
	FrontSmoke3_png : "res/MainMenu/front_smoke_3.png",

	WoodBgNotice_png : "res/Common/bg/woodbg_notice.png",
	UnlockFloor_png :"res/MainMenu/unlock_floor.png",
	BtnBlueM_png : "res/UI/btn_blue_m.png",
	BtnBlueMPressed_png : "res/UI/btn_blue_m_pressed.png",
	BtnBlueMOk_png :"res/UI/zh/btn_blue_m_ok.png",
	BtnGreenM_png : "res/UI/btn_green_m.png",
	BtnGreenMPressed_png : "res/UI/btn_green_m_pressed.png",
	BtnGreenMCancel_png : "res/UI/zh/btn_green_m_cancel.png"

};

var g_resources = [];
for (var i in res) {
	g_resources.push(res[i]);
}
