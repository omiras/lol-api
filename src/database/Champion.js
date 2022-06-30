const DB = require("./db.json");

const getAllChampions = () => {
    return DB;
}

module.exports = {
    getAllChampions
}