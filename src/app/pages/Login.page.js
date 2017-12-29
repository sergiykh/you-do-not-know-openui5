// Now we can use import/export modules (feature of ES6)
// Import openui5 modules
import Page from "sap/m/Page";
import Input from "sap/m/Input";
import Label from "sap/m/Label";
import Button from "sap/m/Button";


// Create object and export as module to use in future
export default new Page("login", {

  title: "Login",
  showNavButton: false,
  content: [
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
      press : () => {
        app.to("customers");
      }
    })
  ]
})
