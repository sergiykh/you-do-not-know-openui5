import MessageToast from "sap/m/MessageToast";

export default sap.ui.controller("app.controllers.CustomerDetail", {

  printDetails() {

    MessageToast.show("Customer's Detail Printed");
  }
})
