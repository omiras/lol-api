const Champion = require("../database/Champion");

const getAllChampions = () => {
    const allChampions = Champion.getAllChampions();
    return allChampions;
}

module.exports = {
    getAllChampions
}