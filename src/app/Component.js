// Now we can use import/export modules (feature of ES6)
// Import openui5 modules
import UIComponent from "sap/ui/core/UIComponent";
import App from "sap/m/App";
import Login from "app/pages/Login.page";
import Customers from "app/pages/Customers.page";
import CustomerDetail from "app/pages/CustomerDetail.page";

// Create object and export as module to use in future
// Also here we are using extends (feature of ES6)
export default class Component extends UIComponent {

  metadata = {
    manifest: "json"
  }

  createContent() {

    app = new App("app", {
      initialPage: "login"
    });

    return app
      .addPage(Login)
      .addPage(Customers)
      .addPage(CustomerDetail);
  }
}
