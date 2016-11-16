require('./css/layout.css')
require('./template/layout.html')


var sayHi=require('./js/sayHi')
sayHi()

module.exports={
	sayHello:function(){
		sayHi()
		console.log('hello')
	}
}