sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/routing/History",
  "sap/ui/core/format/NumberFormat"
], function (Controller, JSONModel, History, NumberFormat) {
  "use strict";

  return Controller.extend("demo.fiori.pedidos.controller.Detail", {

    onInit: function () {
      console.log("Detail.controller - onInit");

      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("Detail").attachPatternMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function (oEvent) {
      console.log("Detail.controller - _onRouteMatched");

      var sOrderId = oEvent.getParameter("arguments").OrderID;
      console.log("Detail.controller - OrderID:", sOrderId);

      var oOrdersModel = this.getOwnerComponent().getModel("orders");
      if (!oOrdersModel) {
        console.error("Detail.controller - Modelo 'orders' no encontrado");
        return;
      }

      var aOrders = oOrdersModel.getProperty("/orders") || [];
      console.log("Detail.controller - Cantidad de pedidos:", aOrders.length);

      var oOrder = aOrders.find(function (o) {
        return o.OrderID === sOrderId;
      });

      console.log("Detail.controller - Pedido encontrado:", oOrder);

      var oDetailModel = new JSONModel(oOrder || {});
      this.getView().setModel(oDetailModel, "order");
    },

    // ✅ Formatter de moneda usando sap.ui.core.format.NumberFormat
    formatCurrency: function (value, currency) {
      if (value == null) {
        return "";
      }
      var oFormat = NumberFormat.getCurrencyInstance();
      return oFormat.format(value, currency);
    },

    onNavBack: function () {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("Main", {}, true);
      }
    }

  });
});
