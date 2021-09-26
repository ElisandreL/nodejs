const express =  require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

require("./models/pet"),(app);
require("./route/petRoutes"),(app);

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Running");
})