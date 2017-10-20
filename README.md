# NodeJS App
Web app to store credit card information

* Node version 'v6.6.0'
* Postgres version '9.5.4'

# Setting up the app in *development* mode

In the root of the app:
* npm install
* bower instal
* create database 'nodejs_test'
* gulp bootstrap-db (to sync models with database) or sequelize db:migrate (if you add this module to existing project)
* npm start

# Start the app server in *development* mode

Run npm start every time you need to start the server.

Control c to stop the server.

With server running, go to:
http://localhost:3000/#/payments

# Encryption Algorithm Details

For Encryption I am using crypto and its methods which is built-in in nodejs.
Crypto provide many methods to encrypt your data.
The method which I am using is *Randomness With an Initialization Vector(IV)*

=> Benefits
 The encrypted content never produces the same output
 This is similar to a salt, and will be stored with our encrypted data so we can decrypt it later along with the key

# Luhn Algorithm Details

 * I am using built-in node module https://www.npmjs.com/package/luhn-alg
 * Why I am using this algo, because our project initially requirement is to validate american credit cards so this algorithm is best to check credit card number patterns without using any third party api.
 * Why I am using this built-in method, because its built-in and we don't have to waste time to write whole Algorithm itself
