const tiquetsSourcesServices = require('../service/tiquetsSources');

//controleur pour obtenir tous les tiquets des sources d'energies
exports.getTiquetsSources = async (req, res) => {
    try {
        const tiquetsSources = await tiquetsSourcesServices.getTiquetsSources();
        res.status(200).json({success: true, tiquetsSources});
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

//controlleur pour obtennir un tiquet de source par son id
exports.addTiquetSource = async (req, res) => {
    const {wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source, id_source, id_user} = req.body;
    try {
        const tiquetSource = await tiquetsSourcesServices.addTiquetSource(wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source, id_source, id_user);
        if(!tiquetSource){
            res.status(400).json({ error: "Le tiquet n'a pas été ajouté" });
        }
        console.log(res);
        res.status(200);
        return res.json({success: true, tiquetSource});
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

//controller pour supprimer un tiquet de source par son id
exports.deleteTiquetSource = async (req, res) => {
    try {
        const tiquetSource = await tiquetsSourcesServices.deleteTiquetSource(req.params.id);
        if(!tiquetSource){
            res.status(404).json({ error: "Le tiquet n'a pas été trouvé" });
        }
        res.status(201).json({success: true, tiquetSource});
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
