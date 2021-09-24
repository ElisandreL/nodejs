const jsonfile = require('jsonfile');
const file_path = "./DB/users.json";

module.exports = app => {

/*
    //here is a basic get route which reads data from a local directory json file
    app.get("/users", (req, res) => {
    console.log("fetching all users");
    jsonfile.readFile(file_path, function(err, content) {
        res.send(content);
    });
});*/


    /*
    //here is a post route which writes data from a local directory json file

  app.post('/users/new', (req, res) => {
    // let email = req.body.email;
    // let username = req.body.username;
    let {email, username} = req.body;

    jsonfile.readFile('./DB/users.json', function(err, content) {
        content.push({"email": email, "username": username});

        console.log(`added ${email} to DB`);

        jsonfile.writeFile(file_path, content, function(err) {
            console.log(err);
        });
        res.sendStatus(200);
    });
})*/

/*

// Here is a delete route for a datastorage

app.delete("/users/destroy", (req, res) => {
    let email = req.body.email;

    jsonfile.readFile(file_path, function(err, content) {
        for (var i = content.length - 1; i >= 0; i--) {
             if (content[i].email === email) {
                 console.log(`removing ${content[i].email} from DB`);
                 content.splice(i,1);
             }
        }

        jsonfile.writeFile(file_path, content, function(err) {
            console.log(err);
        });

        res.sendStatus(200);
    });
}); */

/*
// Know, the turn of a PUT route

app.put("/users", (req, res) => {
    let user;
    let username = req.body.username;
    let email = req.query.email;

    jsonfile.readFile(file_path, function(err, content) {
        for (var i = content.length - 1; i >= 0; i--) {
            if (content[i].email === req.query.email) {
                console.log(`updated user ${req.query.email} has now username : ${username}`);
                user = content[i];
                user.username = username;
            }
        }

        jsonfile.writeFile(file_path, content, function(err) {
            console.log(err);
        });
    });
    res.send(user);
})*/

// Last GET route

app.get('/users', (req, res) => {
    let user;
    let email = req.query.email;

    jsonfile.readFile(file_path, function(err, content) {
        for (var i = content.length - 1; i >= 0; i--) {
            if (content[i].email === email) {
                console.log(`found user ${content[i]}`);
                console.log(content[i]);
                user = content[i];
            }
            
        }

        res.send(user);
    })
})

}