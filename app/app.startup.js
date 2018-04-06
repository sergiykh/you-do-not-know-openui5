/**
 * @author Kholod, Serhii
 */

sap.ui.getCore().attachInit(() => {
  sap.ui.require([
    "sap/ui/core/ComponentContainer"
  ], (ComponentContainer) => {

    sap.ui.component({
      id: "app-component",
      name: "app",
      async: true
    }).then((component) => {

      let mainContainer = new ComponentContainer("app-component-container", {
        component: component,
        height: "100%",
        width: "100%",
        propagateModel: true
      });
      mainContainer.placeAt("content");
    });
  });
});
