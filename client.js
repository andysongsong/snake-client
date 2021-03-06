const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });
  conn.on("connect", () => {
    console.log("you are now connected!");
    conn.write("Name: ADS ");
    // setInterval(function () {
    //   conn.write("Move: up");
    // }, 500);
    // setInterval(function () {
    //   conn.write("Move: left");
    // }, 1000);
  });
  conn.on("data", (data) => {
    console.log("new message: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = { connect };
