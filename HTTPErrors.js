
var 
  dummy
, util = require('util')
, http = require('http')
;

var e = {};
exports = module.exports = e;

Object.keys( http.STATUS_CODES).forEach( function(httpError){

  var errorName;

  // Extrapolate the error message from the module
  var message = http.STATUS_CODES[ httpError ];

  // Work out the "machine's" error name ('Not found' => 'NotFoundError' )
  errorName = message.replace( /\b./g, function(a){ return a.toUpperCase(); }).replace( /[^a-zA-Z]/g, '') + 'Error';

  console.log(' * [' + httpError + '] ' + '`'+errorName + "`: " + message );

  // Make up the constructur
  e[errorName] = function( parameter, constr ){

    // Add stack trace information to this error
    // Error.captureStackTrace(this, constr || this)
        
    // Make up the p object depending on the parameter
    // This ensures that you can use the shorthand version passing just a string
    var p;
    if( typeof( parameter ) === 'undefined' ){
      p = {}
    } else if( typeof( parameter) === 'string' ){
      p = { message: parameter };
    } else if( typeof( parameter)  === 'object' ){
      p = parameter;
    } else {
      throw( new Error("Parameter needs to be string or object to construct " + errorName ) );
    }

    // Initialised object according to what was passed
    for( var k in p ){
      this[ k ] = p[ k ];
    }
 
    if( typeof( p.message ) === 'undefined' ){
      this.message = message;
    }

    this.httpError = httpError;

  }

  util.inherits ( e[ errorName ], Error );
  e[ errorName ].prototype.name = errorName;

});

