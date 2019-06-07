var flipkart

module.exports = {

	'Test case login' : (browser)=>{
		 flipkart = browser.page.flipkart()

	
		flipkart.navigate()
			.waitForElementVisible('@popup',10000)
			.setValue('@loginField','hrshsingh482@gmail.com')
			.pause(3000)


		// var promise = new Promise(function(resolve,reject){
		// 		flipkart.useXpath()
		// 			.click('@continueBtn')

		// })

		// promise.then(function(resolve){
		// 	flipkart
		// 			.waitForElementVisible('@lgnwthPsswordBtn',3000)
		// 			.pause(30000)
		//  			.click('@lgnwthPsswordBtn')

		// })	
		try{	
		flipkart.element('xpath','@continueBtn',()=>{
			if(result.status != -1){
        		flipkart.click('@continueBtn')
        				.waitForElementVisible('@lgnwthPsswordBtn',3000)
        				.pause(3000)
        				.click('@lgnwthPsswordBtn')
   			 } else{
        		throw result
        	}
			})
		}
		catch(e) {
				console.log('ERRRORORROROROR MESSAGE')
		} 


		flipkart	
			.setValue('@loginPassword','Madrascafe@123',()=>{
				flipkart.click('@loginBtn')
			})
			.useXpath()
			.waitForElementVisible('@myAccount',3000)
			
		
		flipkart
			.assert.visible('@myAccount')

	},

	'Test case search' : (browser)=>{
			var searchText = "Flip"
			flipkart.setValue('@searchField',searchText)
					.click('@searchBtn')
					.assert.urlContains(flipkart.url()+"search?q="+searchText)
					//expect('@images').count.to.not.equal(0)
	},

	'Test case image details page' : (browser)=>{
			var imageUrl
			flipkart.useCss()
					.waitForElementVisible('@images',30000)
					.getAttribute('@imageText','href',function(result){
										imageUrl = result.value
										flipkart
											.click('@images')
											.pause(3000);
											browser.windowHandles((result)=>{
												console.log(""+result+"-------------------------------")
												browser.switchWindow(result.value[1])
												flipkart.waitForElementVisible('@heroImage')
											});
											flipkart.assert.urlContains(imageUrl)
								}).assert.visible('@heroImage')
								  .assert.visible('@addToCartBtn')	
			
	},

	'Test Logout functionality' : (browser)=>{
		flipkart.moveToElement('@myAccount',10,10)
			.waitForElementVisible('@logoutBtn',3000)
			.click('@logoutBtn')
			.waitForElementNotPresent('@myAccount',3000)
			.assert.elementNotPresent('@myAccount')
	}
}

