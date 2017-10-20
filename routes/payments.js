var express = require('express');
var router = express.Router();
var Payment = require("../models").Payment;

var paymentValidator = require("../validation/payment.js"); // custom payment validation

 /// save payment information //

router.post('/save', function(req, res, next) {

  var record = req.body.data;

  paymentValidator.validateCard(record)
  .then((result) => {
   console.log(record);
    Payment.add(record)
      .then(function(payment){
        res.send(payment);
      }).catch(function(err){
        var e = err.errors.map(function(x) {
          return  "</br>" + x.message;
        });
        res.status(500).send({errors: e.toString()});
     });
  }).catch((err) => {
    console.log(err);
    res.status(400).send({errors: err.message});
  });
});




module.exports = router;
