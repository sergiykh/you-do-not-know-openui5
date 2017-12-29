let app;

// Now we can use arrow functions in our code (feature of ES6)
sap.ui.getCore().attachInit(() => {
  sap.ui.require([
    "app/pages/Login.page",
    "app/pages/Customers.page",
    "app/pages/CustomerDetail.page"
  ], (Login, Customers, CustomerDetail) => {

    app = new sap.m.App({
      initialPage: "login"
    });

    app.addPage(Login);
    app.addPage(Customers);
    app.addPage(CustomerDetail);

    app.placeAt("content");
  });
});
