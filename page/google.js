module.exports = {
  url: function() { 
    return this.api.launchUrl; 
  },
  elements: {
  	searchBar: {
  		selector: 'input[type=text]'
  	},
  	button: {
  		selector: 'form div>button>span'
   	},
  	text: {
  		selector: 'div#main'
  	},
  	login: {
  		selector: 'a[href*="login"]'
  	},
  	loginField: {
  		selector: '._39M2dM>input[type="text"]'
  	},
  	loginPassword: {
  		selector: 'input[type="password"]'
  	},
  	loggedIn: {
  		selector: '._2aUbKa'
  	},
  	frameElement: {
  		selector: 'div.captcha iframe'
  	},
    hoverElements: {
      selector: 'div[class="dHGf8H"] ul>li:nth-child(10)',
    },
    click2:{
      selector: 'div[class="_1jcwFN _3dmQRh"]+svg'
    }
  }
};
