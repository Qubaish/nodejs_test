'use strict';
var encryption = require("../lib/encryption.js"); // Encryption Methods
module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define('Payment', {
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cardCVV: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cardName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        is: {
          args: ["^[a-z]+$",'i'],
          msg: "Must be characters"
        }
      }
    },
    expiryMonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        not: ["[a-z]",'i']
      }
    },
    expiryYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        not: ["[a-z]",'i']
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Payment.add = function (data) {

    data = processData(data);

    return this.create (data);

  }


  // *************************************   Private Methods  ********************************

  function processData(record){
    let data = {};
    data.cardNumber = encryption.encrypt(record.number);
    data.cardName = record.name;
    data.expiryMonth = record.month;
    data.expiryYear = record.year;
    data.cardCVV = encryption.encrypt(record.cvv);
    return data;
  }


  return Payment;
};
