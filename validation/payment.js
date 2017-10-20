var validator = require('validator');
var luhn = require('luhn-alg');

exports.validateCard = function(data) {

  return new Promise((resolve, reject) => {
    if( validator.isLength(data.number, 16) && validator.isLength(data.cvv, 3)){
      if(luhn(data.number)){
        resolve({ message: 'Card validated' });
      }else{
        reject({ message: 'Wrong card' });
      }
    }else{
      reject({ message: 'Card number/cvv length is not correct' });
    }
  });

}
