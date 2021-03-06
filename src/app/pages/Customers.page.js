// Now we can use import/export modules (feature of ES6)
// Import openui5 modules
import Page from "sap/m/Page";

// Create object and export as module to use in future
export default new Page("customers", {

  title: "Customers",
  showNavButton: true,
  navButtonPress : function () {
    app.back();
  },
  // Now content of Page is JSONView
  // We also can use other factory function instead of sap.ui.view()
  content: sap.ui.jsonview("customers-view", "app.views.Customers")
  // content: sap.ui.view({
  //   id:"customers-view",
  //   type:sap.ui.core.mvc.ViewType.JSON,
  //   viewName:"app.views.Customers"
  // })
})
