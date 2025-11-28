sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("demo.fiori.pedidos.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        // Llamamos al init estándar
        UIComponent.prototype.init.apply(this, arguments);

        // Modelo de pedidos desde el JSON local
        var oOrdersModel = new JSONModel(
          sap.ui.require.toUrl("demo/fiori/pedidos/localService/orders.json")
        );

        // Registramos el modelo con el nombre "orders"
        this.setModel(oOrdersModel, "orders");
        // 🔥 importantísimo para que el routing tenga efecto
        this.getRouter().initialize();
      },
    });
  }
);
