// Now we can use import/export modules (feature of ES6)
// Import openui5 modules
import Page from "sap/m/Page";

// Create object and export as module to use in future
export default new Page("customerDetail", {

  title: "Customer Detail",
  showNavButton: true,
  navButtonPress : function () {
    app.back();
  },
  // Now content of Page is XMLView
  // We also can use other factory function instead of sap.ui.view()
  content: sap.ui.xmlview("customer-detail-view", "app.views.CustomerDetail")
  // content: sap.ui.view({
  //   id:"customer-detail-view",
  //   type:sap.ui.core.mvc.ViewType.XML,
  //   viewName:"app.views.CustomerDetail"
  // })
})
