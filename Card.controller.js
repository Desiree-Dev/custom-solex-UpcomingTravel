sap.ui.define([
    'sap/m/library',
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (mobileLibrary,MessageToast, Controller, JSONModel) {
	"use strict";
    var URLHelper = mobileLibrary.URLHelper;
	return Controller.extend("custom.solex.UpcomingTravel.Card", {
        onBookAccommodation : function(){
            var url = "https://www.concursolutions.com/home.asp";
			URLHelper.redirect( url, true);
        },
        onRegsExpenses : function() {
            var url = "https://www.concursolutions.com/nui/expense";
            URLHelper.redirect( url, true);
        },
		onInit: function () {
			var oModel = new JSONModel({
				"cities": [
					{
						"text": "Berlin",
						"key": "BR"
					},
					{
						"text": "London",
						"key": "LN"
					},
					{
						"text": "Madrid",
						"key": "MD"
					},
					{
						"text": "Prague",
						"key": "PR"
					},
					{
						"text": "Paris",
						"key": "PS"
					},
					{
						"text": "Sofia",
						"key": "SF"
					},
					{
						"text": "Vienna",
						"key": "VN"
					}
                ],
                "Employees": [
                    {
                        "Name": "Train",
                        "JobTitle": "Tampere Central Station",
                        "Icon": "sap-icon://subway-train",
                        "JobResponsibilities": "Plans, organizes and manages the operations and activities of an accounts payables.\nSupervises employees and monitors activities.\nFinal check of accounts payable payments and sign off.\nReporting to the head of finance.\n\n\"I am a diligent person. I put great attention to detail.\"",
                        "HireDate": "Date(1617064320000)"
                    },
                    {
                        "Name": "Sabine Mayer",
                        "JobTitle": "Configuration Expert",
                        "Photo": "/images/Sabine_Mayer.png",
                        "Icon": "sap-icon://settings",
                        "JobResponsibilities": "Implementing new Public Cloud ERP Financials system into his company and keeping it aligned with business.\nDuring the initial set-up of an ERP system: Customizing Financial Accounting settings such as organizational  structures, chart of accounts, and tax configuration (as part of implementation projects).\nDuring the ongoing maintenance of the configuration: Adapting the configuration to organizational and  process changes in business.\n\n\"I’m a versatile person. I keep the big picture in mind.\"",
                        "HireDate": "Date(1376290800000)"
                    }
                ]
			});
			this.getView().setModel(oModel);
		}
	});
});