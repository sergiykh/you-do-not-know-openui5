import Input from "sap/m/Input";
import Label from "sap/m/Label";
import Button from "sap/m/Button";

export default sap.ui.jsview("app.views.Login", {

  getControllerName: function() {
    return "app.controllers.Login";
  },

  createContent: function(oController) {
    return [
      new Label({
        text: "Username"
      }),
      new Input({
        placeholder: "type here"
      }),
      new Label({
        text: "Password"
      }),
      new Input({
        placeholder: "type here"
      }),
      new Button({
        text : "Login",
        press : [oController.navToCustomers, oController]
      })
    ]
  }
})
