require("dotenv").config({ path: "./config.env" });
const fs = require("fs");
const Post = require("../models/Post");
const connection = require("../config/db");
const posts = JSON.parse(fs.readFileSync(`./posts.json`, 'utf-8'));
const importData = async () => {
    try {
        await Post.create(posts);
        console.log("Data Successfully imported ");
        process.exit();
    } catch (error) {
        console.log(`ERROR : ${error}`);
        process.exit(1);
    }
};

const deleteData = async () => {
    try {
        await Post.deleteMany({});
        console.log("Data successfully deleted");
        process.exit();
    } catch (error) {
        console.log(`ERROR : ${error}`);
        process.exit(1);
    }
};
if (process.argv[2] === "--import") {
    importData();
} else if (process.argv[2] === "--delete") {
    deleteData();
}
