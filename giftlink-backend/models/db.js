// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance
    };

    try {
        const client = new MongoClient(url);

        // Task 1: Connect to MongoDB
        await client.connect()

        // Task 2: Connect to database giftDB and store in variable dbInstance
        const dbInstance = client.db(dbName)

        // Task 3: Return database instance
        return dbInstance
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error; 
    }
}

module.exports = connectToDatabase;
