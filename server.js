const express = require("express");
const cors = require("cors")
const path = require("path");
const mysql = require("mysql");
const bodyParser = require("body-parser");
// const routes = require("./routes");
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

const SELECT_ALL = "SELECT * FROM category";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Apparatus987..",
    database: "sarah_db"
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.get('/', (req, res) => {
    res.send("find the /category")
});

app.get('/category/add', (req, res) => {
    const { category_name } = req.query;
    const INSERT_CATEGORY = `INSERT INTO category (category_name) VALUES('${category_name}')`
    connection.query(INSERT_CATEGORY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send("added category")
        }
    })
})

app.get("/category", (req, res) => {
    connection.query(SELECT_ALL, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });
});

app.get("/:id", (req, res) => {
    connection.query("SELECT * FROM category where ID = ?", [req.params.id], (err, data) => {
        if (err) throw err;

        console.log(data)
        res.json({ data: [0] })
    });
});


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Start the API server
app.listen(PORT, function () {
    console.log(PORT);
    console.log(`API Server now listening on http://localhost/${PORT}`);
});