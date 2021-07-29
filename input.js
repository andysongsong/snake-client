let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key, connection);
    return stdin;
  });
};
const handleUserInput = function (key, conn) {
  if (key === `\u0003`) {
    process.exit();
  }
  if (key === "w") {
    conn.write("Move: up");
  }
  if (key === "h") {
    conn.write("Say: HAH");
  }
  if (key === "g") {
    conn.write("Say: gg");
  }
  if (key === "s") {
    conn.write("Move: down");
  }
  if (key === "a") {
    conn.write("Move: left");
  }
  if (key === "d") {
    conn.write("Move: right");
  }
};

// your code here

module.exports = { setupInput };
