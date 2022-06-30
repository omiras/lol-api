const DB = require("./db.json");

const getAllChampions = () => {
    return DB;
}

const getChampionById = (id) => {
    return DB.find(c => c.id == id);
}

module.exports = {
    getAllChampions,
    getChampionById
}