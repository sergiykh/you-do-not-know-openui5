// Now we can use import/export modules (feature of ES6)
// Import openui5 modules
import Page from "sap/m/Page";

// Create object and export as module to use in future
export default new Page("create-customer", {

  title: "Create Customer",
  showNavButton: true,
  navButtonPress : function () {
    app.back();
  },
  // Now content of Page is HTMLView
  content: sap.ui.view({
    id:"create-customer-view",
    type:sap.ui.core.mvc.ViewType.HTML,
    viewName:"app.views.CreateCustomer"
  })
})
