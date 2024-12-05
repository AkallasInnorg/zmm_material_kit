/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zmm_material_kit/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
