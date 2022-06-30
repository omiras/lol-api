const championService = require("../services/championService");


const getAllChampions = (req, res) => {
    const allChampions = championService.getAllChampions();
    res.send({ status: "OK", data: allChampions });
};

const getChampionById = (req, res) => {
    const id = req.params.id;
    const champion = championService.getChampionById(id);

    if (!champion) {
        return res.status(404).send({ status: "KO", error: `Champion ${id} not found` });
    }

    return res.send({ status: "OK", data: champion });

}

module.exports = {
    getAllChampions,
    getChampionById
};