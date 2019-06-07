module.exports = {
	
	url : function(){
		return this.api.launchUrl
	},
	
  elements: {
		popup: {
			selector: '._1XBjg-.row',
		},		
	
		loginField: {
			selector: '._1XBjg-.row input[type="text"]'
		},

		loginPassword: {
			selector: '._1XBjg-.row input[type="password"]'
		},

		loginBtn: {
			selector: '._1XBjg-.row button'
		},
		myAccount: {
			selector: '//div[text()="My Account"]',
			locateStrategy: 'xpath'
		},
		logoutBtn: {
			selector: '//div[contains(text(),"Logout")]',
			locateStrategy: 'xpath'
		},
		searchField: {
			selector: '.O8ZS_U input'
		},
		searchBtn:{
			selector: '.O8ZS_U+button'
		},
		images: {
			selector: '._3togXc'
		},
		imageText: {
			selector: '.IIdQZO._1R0K0g._1SSAGr ._2mylT6'
		},
		addToCartBtn: {
			selector: '._2AkmmA._2Npkh4._2MWPVK'
		},
		heroImage: {
			selector: '._3togXc._3wp706'
		},
		continueBtn: {
			selector: '//span[text()="CONTINUE"]//ancestor::button',
			locateStrategy: 'xpath'
		},
		lgnwthPsswordBtn: {
			selector: 'form div.emVTqr+button'
		}
	}
	
	// sections: {
		
	// 	menu :{
	// 			selector: '._1XhL1B li',
	// 			index: 9,
	
	// 			elements: {
	// 					logoutBtn: {
	// 						selector: 'div'
	// 			 }
	// 		}
	
		

	// }

	//}
}
