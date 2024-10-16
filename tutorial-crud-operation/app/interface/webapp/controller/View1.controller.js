sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/BusyIndicator"
],
    function (Controller,BusyIndicator) {
        "use strict";

        return Controller.extend("interface.controller.View1", {
            onInit: function () {

            },
            CreateDialogOpen: function () {
                this.DialogCreate = new sap.ui.xmlfragment('interface.Fragment.Create', this);
                this.getView().addDependent(this.DialogCreate);
                this.DialogCreate.open();
            },
            CloseDialog: function (oEvent) {
                oEvent.getSource().getParent().close();
            },
            CreateUserDataPress: function (oEvent) {
                var userData = this.getOwnerComponent().getModel("CreateData").getData();
                userData.Userdesign=parseInt(userData.Userdesign);
                this.DialogCreate = undefined;
                BusyIndicator.show()
                var that=this;
                $.ajax({
                    type: "POST",
                    url: `/odata/v4/catalog/UserData`,
                    contentType: "application/json",
                    data: JSON.stringify(userData),
                    dataType: "json",
                    success: function(data) {
                       
                        console.log("Data saved successfully:", data);
                     
                        that.getView().getModel("Capm").refresh();
                        BusyIndicator.hide();
                    },
                    error: function(err) {
                       console.log(err);
                       BusyIndicator.hide();
                    }
                });
              this.getOwnerComponent().getModel("CreateData").setData({});
              this.getOwnerComponent().getModel("CreateData").refresh(true);
                oEvent.getSource().getParent().close();
            },
            DeletePress:function(oEvent){
                var that=this;
                BusyIndicator.show();
                $.ajax({
                    type: "DELETE",
                    url: `/odata/v4/catalog${oEvent.getSource().getBindingContext("Capm").getPath()}`,
                    contentType: "application/json",
                    success: function(data) {
                        console.log("Data delete successfully:", data);
                     
                        that.getView().getModel("Capm").refresh();
                        BusyIndicator.hide();
                    },
                    error: function(err) {
                       console.log(err);
                    }
                });
            },
            EditPress:function(oEvent){
                BusyIndicator.show();
                this.index =oEvent.getSource().getBindingContext("Capm").getPath()
                this.DialogCreate = new sap.ui.xmlfragment('interface.Fragment.Update', this);
                this.getView().addDependent(this.DialogCreate.bindElement({path:`Capm>${this.index}`,model:"Capm"}));
                this.DialogCreate.open();
                BusyIndicator.hide();
                
            },
            UpdateUserSingleData:function(odata){
                BusyIndicator.show();
                var object = odata.getSource().getParent().getBindingContext("Capm").getObject();
                delete object['@odata.context'];
                var that=this;
                $.ajax({
                    type: "PUT",
                    url: `/odata/v4/catalog${this.index}`,
                    contentType: "application/json",
                    data: JSON.stringify(object),
                    dataType: "json",
                    success: function(data) {
                        console.log("Data Update successfully:", data);
                        that.getView().getModel("Capm").refresh();
                        odata.getSource().getParent().close();
                        BusyIndicator.hide();
                    },
                    error: function(err) {
                       console.log(err);
                    }
                });
            }
        });
    });
