sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("demo.fiori.pedidos.controller.Main", {
    onInit: function () {
      // La vista ya está conectada al modelo "orders"
    },

    onListItemPress: function (oEvent) {
      var oItem = oEvent.getSource();
      var sOrderId = oItem.getBindingContext("orders").getProperty("OrderID");

      // Opcional: seguir mostrando el toast
      MessageToast.show("Pedido seleccionado: " + sOrderId);

      // Navegación al detalle usando el router
      this.getOwnerComponent().getRouter().navTo("Detail", {
        OrderID: sOrderId
      });
    }
  });
});
