// Now we can use import/export modules (feature of ES6)
// Import openui5 modules
import Page from "sap/m/Page";
import MessageToast from "sap/m/MessageToast";
import Input from "sap/m/Input";
import Label from "sap/m/Label";
import Button from "sap/m/Button";


// Create object and export as module to use in future
export default new Page("customerDetail", {

  title: "Customer Detail",
  showNavButton: true,
  navButtonPress : function () {
    app.back();
  },
  content: [
    new Label({
      text: "Username"
    }),
    new Input({
      value: "Awesome Username"
    }),
    new Label({
      text: "Email"
    }),
    new Input({
      value: "Awesome@Email.com"
    }),
    new Button({
      text : "Print Details",
      press : () => {
        MessageToast.show("Customer's Detail Printed");
      }
    })
  ]
})
