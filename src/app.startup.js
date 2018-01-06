/*eslint-disable no-unused-vars*/
let app;
/*eslint-enable no-unused-vars*/

// Now we can use arrow functions in our code (feature of ES6)
sap.ui.getCore().attachInit(() => {
  sap.ui.require([
    "sap/ui/core/ComponentContainer",
    "app/Component"
  ], (ComponentContainer, MainComponent) => {

    // Our main Component of application
    let mainComponent = new MainComponent("main-component", {
      id: "main-component",
      name: "app"
    });

    // Our main Container for Component
    let componentContainer = new ComponentContainer("main-component-container", {
      component: mainComponent,
      height: "100%",
      width: "100%",
    });

    componentContainer.placeAt("content");
  });
});
