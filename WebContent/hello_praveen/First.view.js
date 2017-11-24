sap.ui.jsview("hello_praveen.First", {

	getControllerName : function() {
		return "hello_praveen.First";
	},

	createContent : function(oController) {

		 this.setHeight("100%");
	var oPage   = new sap.m.Page('page1',{title:"First Page",content:[new sap.m.Button({text:"Reject"})]})
	var oButton = new sap.m.Button('ob1',{
		text:"click me",
		type:"Accept"
	}) 
    oPage.addContent(oButton);
	return oPage;
		
	}

});
