const { tiquetsMixs } = require('../models');

//service retournant l'ensemble des tiquets Mixs
exports.getTiquetsMixs = async (req, res) => {
    return await tiquetsMixs.findAll();
}

//service permettant d'ajouter un tiquet de mixs
exports.addTiquetMixs = async (wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source, country, id_user) => {
    return await tiquetsMixs.create({
        wind: wind,
        solar: solar,
        geothermal: geothermal,
        biomass: biomass,
        hydroelectric: hydroelectric,
        nuclear: nuclear,
        coal: coal,
        oil: oil,
        gaz_fired: gaz_fired,
        source: source,
        country: country,
        id_user: id_user
    });
}

//service permettant de supprimer un tiquet de mix par son id
exports.deleteTiquetMix = async (id) => {
    const tiquetMix = await this.getTiquetMixById(id);
    return await tiquetMix.destroy();
}

//service permettant de récupérer un tiquet de mix par son id
exports.getTiquetMixById = async (id) => {
    return await tiquetsMixs.findByPk(id);
}
