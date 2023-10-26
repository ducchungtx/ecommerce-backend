/**
 * Filename: server.js
 * Author: Chung Nguyen
 * Date: 11/27/2022
 * Version: 1.0
 * Last Updated: 11/27/2022
 * Description: This is the server file. Done and tested
 */

const app = require("./src/app");

const PORT = process.env.PORT || 3055;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    // add your code here. maybe send an email or something
  });
});

module.exports = server;