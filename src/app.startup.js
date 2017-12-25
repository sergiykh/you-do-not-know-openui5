/**
 * @author Kholod, Serhii
 */

sap.ui.getCore().attachInit(function () {
  sap.ui.require([
  "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {

    jQuery("#content").html("You Do Not Know Openui5")
  });
});
