// Now we can use import/export modules (feature of ES6)
// Import openui5 modules
import Page from "sap/m/Page";

// Create object and export as module to use in future
export default new Page("login", {

  title: "Login",
  showNavButton: false,
  // Now content of Page is JSView
  content: sap.ui.view({
    id:"login-view",
    type:sap.ui.core.mvc.ViewType.JS,
    viewName:"app.views.Login"
  })
})
