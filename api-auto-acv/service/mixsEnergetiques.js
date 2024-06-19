const { mixsEnergetiques } = require('../models');

//service retournant un mix energetique par le champs country
exports.getMixByCountry = async (country_Mix) => {
    console.log(country_Mix);
    return await mixsEnergetiques.findOne({
        where:{
            country: country_Mix
        }
    });
}

//service modifiant un mix energetique par le champ country
exports.updateMixByCountry =  async (country, wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source) => {
    const modifiedMix = await this.getMixByCountry(country);
    console.log(country)
    return await modifiedMix.update({
        wind:wind, 
        solar:solar, 
        geothermal:geothermal,
        biomass:biomass,
        hydroelectric:hydroelectric,
        nuclear:nuclear,
        coal:coal,
        oil:oil,
        gaz_fired:gaz_fired,
        source:source
    });
}
