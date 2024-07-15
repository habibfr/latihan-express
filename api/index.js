/* eslint-disable comma-dangle */
/* eslint-disable no-useless-return */
/* eslint-disable semi */
/* eslint-disable quotes */
const express = require("express");
const mysql = require("mysql2");

// Konfigurasi koneksi MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mock_database",
});

connection.connect((err) => {
  if (err) {
    console.log("error connect");
    return;
  } else {
    console.log("connect");
  }
});

// Create express instance
const app = express();

app.set("connection", connection)

// Require API routes
const users = require("./routes/users");
const test = require("./routes/test");

// Import API Routes
app.use(users);
app.use(test);

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
