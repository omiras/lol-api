const Champion = require("../database/Champion");

const getAllChampions = () => {
    const allChampions = Champion.getAllChampions();
    return allChampions;
}

const getChampionById = (name) => {
    const champion = Champion.getChampionById(name);
    return champion;
}

module.exports = {
    getAllChampions,
    getChampionById
}