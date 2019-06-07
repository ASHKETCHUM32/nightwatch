module.exports = {
	
	url : function(){
		return "https://www.shutterstock.com/"
	},

	elements: {
		signUpBtn: {
			selector: 'button[data-automation="SecondaryItems_sign-up_button"]'
		},
		loginBtn: {
			selector: 'button[data-automation="SecondaryItems_log-in_button"]'	
		},
		myAccount: {
			selector: '.dropdown-toggle.navbar-link.hidden-xs'
		},
		logOut: {
			selector: 'a[href*="logout"]'
		}
	},

	sections: {
		
		login :{
				selector: 'section[class*="o_Dialog"]',
				elements: {
						loginField: {
							selector: 'input[data-automation="LoginForm_email_input"]'
				 },
				 		loginPassword:{
				 			selector: 'input[data-automation="LoginForm_password_input"]'
				 		},
				 		loginBtn: {
				 			selector: 'button[data-automation="LoginForm_continue_button"]'
				 		}
			}
		},
			signup: {
				selector: 'section[class*="o_Dialog"]',
					elements: {
						signUpField: {
							selector: 'input[data-automation="SignUpForm_email_input"]'
				 },
				 		signUpPassword:{
				 			selector: 'input[data-automation="SignUpForm_password_input"]'
				 		},
				 		signUpBtn: {
				 			selector: 'button[data-automation="SignUpForm_submit_button"]'
				 		}
			}
			}
		}
	};