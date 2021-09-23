// import the NPM dependancy package
const express = require("express");
// initialize express() inside and write to the app variable
const app     = express();
//mport route module and pass your app
require("./routes/userRoutes"),(app);
//choose what port on which to run server 
const PORT = 5000;
//use the app varianme and listen to the port
app.listen(PORT, () => {
    console.log(`Server running`);
});
