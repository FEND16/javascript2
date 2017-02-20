/*======================================
=            Module Pattern            =
======================================*/

/**
 * Our Module which is a IIFE saved to a variable. The function will not
 * just be assigned, it will immedietly be run and return the object
 * after the return statement which consists of a function that
 * returns the private variable
 * @return {Object}     Object containing the getPrivateVariable function
 */
 var Module = (function(){
    var privateVariable = "Respect my privacy";
    return {
        getPrivateVariable: function(){
            //The function knows about the variable
            //in the scope above.
            return privateVariable;
        },
        setPrivateVariable: function(value){
            privateVariable = value;
        }
    }
})();




function log1(){
    //The Module object can use the function and get the variable
    console.log(Module.getPrivateVariable());
    //But we can not get the variable directy === undefined
    console.log(Module.privateVariable = ""); 
    console.log(Module.setPrivateVariable("new value")); 
}

// log1();




/*----------  Passing Parameters to a Module  ----------*/


var ModuleWithParameters = (function(papa){
    var privateVariable = "Respect my privacy";
    return {
        getPrivateVariable: function(){
            //The function knows about the variable
            //in the scope above.
            return privateVariable;
        },
        returnPassedParams: function(){
          return papa;
      }
  }
})("Woho!");



function log2(){
    //The Module object can use the function and get the variable
    console.log(ModuleWithParameters.getPrivateVariable());
    //But we can not get the variable directy === undefined
    console.log(ModuleWithParameters.returnPassedParams());  
}

// log2();


/*================================================
=            Revealing Module Pattern            =
================================================*/


/**
 * The Revealing Module pattern is a extended implementation of the
 * regular module pattern. Here we make all functions private and
 * choose to expose (reveal) certain functions that we want public.
 * @return {Object}     Module Object
 */
 var RevealModule = (function(){
    var privateVariable = "Respect my privacy";

    //The function is now also private, and we can choose
    //to reveal it if we want, but if we don't it will always
    //be private.
    var privateFunction = function(){
        return privateVariable;
    }
    return{
        //Here we choose which function or variables
        //that will be public. The property name is
        //the public name. And the value of that property
        //is the privateFunction. So we can have a private function
        //named whatever, then we can choose what it will be called
        //when it is exposed.
        publicFunction: privateFunction
    }
})();

function log3(){
    //This will work because we have returned the public function
    console.log(RevealModule.publicFunction())
    //This will not work because we have not returned the private function
    console.log(RevealModule.privateVariable);
}


/*============================
=            IIFE            =
============================*/

var a = 10;

(function(global) {
  console.log(global, a);
})(window);

(()=>console.log('Hello!'))();

(function(){
  console.log('What');
}());


/*==================================================
=            JavaScript: The Dark Parts            =
==================================================*/



/*----------  I don't even  ----------*/


!function(){
  console.log('the fuck!!!!')
}();

+function(){
  console.log('What=???');
}();

0, function(){
  console.log('ok');
}();
