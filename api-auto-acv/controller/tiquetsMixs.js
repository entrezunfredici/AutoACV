const tiquetsMixsServices = require('../service/tiquetsMixs');

//controleur pour obtenir tous les tiquets des MixsEnergetiques
exports.getTiquetsMixs = async (req, res) => {
    try {
        const tiquetsMixs = await tiquetsMixsServices.getTiquetsMixs();
        res.status(200).json({success: true, tiquetsMixs});
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

//controlleur pour ajouter un tiquet de mixsEnergetiques
exports.addTiquetMix = async (req, res) => {
    const {wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source, country, id_user} = req.body;
    try {
        const tiquetMix = await tiquetsMixsServices.addTiquetMixs(wind, solar, geothermal, biomass, hydroelectric, nuclear, coal, oil, gaz_fired, source, country, id_user);
        if(!tiquetMix){
            res.status(400).json({ error: "Le tiquet n'a pas été ajouté" });
        }
        console.log(res);
        res.status(201);
        return res.json({success: true, tiquetMix});
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

//controller pour supprimer un tiquet de mix par son id
exports.deleteTiquetMix = async (req, res) => {
    try {
        const tiquetMix = await tiquetsMixsServices.deleteTiquetMix(req.params.id);
        if(!tiquetMix){
            res.status(404).json({ error: "Le tiquet n'a pas été trouvé" });
        }
        res.status(201).json({success: true, tiquetMix});
    } catch (error) {
        res.status(404).end();
    }
}
