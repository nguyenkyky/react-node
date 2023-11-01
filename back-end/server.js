var express = require("express");
var log = require("morgan")("dev");
var bodyParser = require("body-parser");
var cors = require("cors");
var properties = require("./config/properties");
var db = require("./config/database");
var apiRoutes = require("./config/api.routes");
var app = express();
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
var router = express.Router();
const test = require("./config/api.routes");
// var whitelist = properties.CORS;
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// app.use(cors(corsOptions));

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use("/api", test);

db();
// app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
// app.use("/api", router);
// apiRoutes(router);

app.listen(properties.PORT, (req, res) => {
  console.log(`Server is running on ${properties.PORT} port.`);
});
