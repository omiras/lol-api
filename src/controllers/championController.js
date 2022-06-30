const championService = require("../services/championService");


const getAllChampions = (req, res) => {
    const allChampions = championService.getAllChampions();
    res.send({ status: "OK", data: allChampions });
};

module.exports = {
    getAllChampions
};