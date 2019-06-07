module.exports = {

	'Test case login' : (browser)=>{
		 var shutterstock = browser.page.shuttertock()

		 var menu = shutterstock.section.login

		 shutterstock.navigate()
		 			.waitForElementVisible('@loginBtn',3000)
		 			.waitForElementVisible('@signUpBtn',3000)
		 			.assert.visible('@loginBtn')

		shutterstock.click('@loginBtn')
					

		menu.setValue('@loginField','gsingh+test1685@shutterstock.com')
		menu.setValue('@loginPassword','Testing123')
		menu.click('@loginBtn')
		
		shutterstock.waitForElementVisible('@myAccount',10000)
					.assert.visible('@myAccount')

		shutterstock.click('@myAccount')
		shutterstock.waitForElementVisible('@logOut',3000)
					.click('@logOut')

		shutterstock.waitForElementVisible('@loginBtn')
					.assert.visible('@loginBtn')			
		 		
		},

		'Test case signup' : (browser)=>{
		 var shutterstock = browser.page.shuttertock()

		 var menu = shutterstock.section.signup

		 shutterstock.navigate()
		 			.waitForElementVisible('@signUpBtn',3000)
		 			.waitForElementVisible('@signUpBtn',3000)
		 			.assert.visible('@signUpBtn')

		shutterstock.click('@signUpBtn')
					

		menu.setValue('@signUpField','gsingh+test239@shutterstock.com')
		menu.setValue('@signUpPassword','Testing123')
		menu.click('@signUpBtn')
		
		shutterstock.waitForElementVisible('@myAccount',10000)
					.assert.visible('@myAccount')

		shutterstock.click('@myAccount')
		shutterstock.waitForElementVisible('@logOut',3000)
					.click('@logOut')

		shutterstock.waitForElementVisible('@signUpBtn')
					.assert.visible('@signUpBtn')			
		 		
		}
		
}

