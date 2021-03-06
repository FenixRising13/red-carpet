// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/queue", function (req, res) {
    res.render("queue");
  });

  // queue route loads watchlist
  app.get("/watchlist", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/watchlist.html"));
  });

  // privacy route loads privacypolicy.html
  app.get("/privacy", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/privacypolicy.html"));
  });

};
