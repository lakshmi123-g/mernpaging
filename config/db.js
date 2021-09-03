const mongoose = require("mongoose");

const connection = mongoose.connect(
    "mongodb://localhost:27017/paging",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (!error) {
            console.log("Database connected");
        } else {
            console.log("Database not connected");
        }
    },
);

module.exports = connection;