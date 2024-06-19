const mixsEnergetiquesService = require('../service/mixsEnergetiques');

//controlleur pour récupérer un mix energetique par le champs country
exports.getMixsByCountry = async (req, res) => {
    try {
        const mixs = await mixsEnergetiquesService.getMixByCountry(req.params.country);
        if(!mixs){
            res.status(400).json({ error: "mixs energetiques non trouvé" });
        }
        res.status(200).json({success: true, mixs});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//contrôle pour modifier un mix energetique par le champ country
exports.updateMixByCountry = async (req, res, next) => {
    const country = req.params.country;
    const {wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source} = req.body;
    try {
        const mixs = await mixsEnergetiquesService.updateMixByCountry(country, wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source);
        if (!mixs) {
            res.status(404).json({ error: "un champ essentiel n'est pas présent ou incorrect" });
        }
        return res.status(200).json({success: true, mixs}).send()
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}