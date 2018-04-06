/**
 * autogenerated code
 * @author Kholod, Serhii
 */

sap.ui.define("app/Component", ["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("app.component.custom.Component", {
    
    metadata: {
      manifest: "json",
      manifestFirst: true,
      properties: {
        customProperty: {type: "string"}
      },
      // custom event for child component
      events: {
        customEvent: {
        
        }
      }
    },
    
    createContent: function () {
      return new sap.m.VBox({
        items: [
          new sap.m.Label({text: "customProperty"}),
          new sap.m.Text({text: ""}),
          new sap.m.Label({text: "customEvent"}),
          new sap.m.Text({text: ""})]
        });
    },
    
    init: function init() {
      UIComponent.prototype.init.apply(this, [arguments]);
    },
    
    onAfterRendering() {
      this.getRootControl().getItems()[1].setText(this.mProperties['customProperty']);
      this.getRootControl().getItems()[3].setText(JSON.stringify(this.mEventRegistry['customEvent']));
      // Fire custom event of child component
      // I expect to see alert message ""I am child component custom event!"" (see App.controller.js and App.view.xml)
      this.fireCustomEvent();
    }
  });
});