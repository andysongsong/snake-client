const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: "135.23.223.133", // IP address here,
    port: 50542, // PORT number here,
  });
  conn.on("connect", () => {
    console.log("you are now connected!");
    conn.write("Name: ADS ");
  });
  conn.on("data", (data) => {
    console.log("new message: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = { connect };
console.log("Connecting ...");
connect();
