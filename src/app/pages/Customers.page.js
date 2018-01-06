import Page from "sap/m/Page";
import TileContainer from "sap/m/TileContainer";
import StandardTile from "sap/m/StandardTile";

const customer = "Customer";

// Create object and export as module to use in future
export default new Page("customers", {

  title: "Customers",
  showNavButton: true,
  navButtonPress : function () {
    app.back();
  },
  content: [
    new TileContainer({
      tiles: [
        new StandardTile({
          icon: "sap-icon://customer",
          // Now we can use string templates (feature if ES6)
          title : `${customer} 1`,
          info : "Active",
          press: () => {
            app.to("customerDetail")
          }
        }),
        new StandardTile({
          icon: "sap-icon://customer",
          title : `${customer} 2`,
          info : "Not Active",
          press: () => {
            app.to("customerDetail")
          }
        })
      ]
    })
  ]
})
