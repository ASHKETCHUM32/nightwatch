var chai = require('chai').expect
module.exports = {
'Test case login' : function (browser) {
  var module =browser.page.google()

    module.navigate()
    
    module.setValue('@loginField','hrshsingh482@gmail.com')
    module.setValue('@loginPassword','Madrascafe@123',function(){
      module.click('@button',function(){
              module.assert.visible('@loggedIn')
              module.assert.containsText('@loggedIn','My Account').pause('3000')
              module.moveToElement('@loggedIn',10,10).pause(3000)
                          module.click('div[class="dHGf8H"] ul>li:nth-child(9) div').pause(3000)
        })
    })
    

  },

  'Test case' : function (browser){

       
                  
  }
  

}

