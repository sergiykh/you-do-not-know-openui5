export default sap.ui.controller("app.controllers.Login", {

  navToCustomers() {

    app.to("customers");
  },

  navToCreateCustomer() {

    app.to("create-customer");
  }
})
