const { tiquetsSources } = require('../models');

//service retournant l'ensemble des tiquets sources
exports.getTiquetsSources = async (req, res) => {
    return await tiquetsSources.findAll();
}

//service permettant d'ajouter un tiquet de source
exports.addTiquetSource = async (wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source, id_source, id_user) => {
    return await tiquetsSources.create({
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
        id_source: id_source,
        id_user: id_user
    });
}

//service permettant de supprimer un tiquet de source par son id
exports.deleteTiquetSource = async (id) => {
    const tiquetSource = await this.getTiquetSourceById(id);
    return await tiquetSource.destroy();
}

//service permettant de récupérer un tiquet de source par son id
exports.getTiquetSourceById = async (id) => {
    return await tiquetsSources.findByPk(id);
}
