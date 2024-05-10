const powerSourcesService = require('../service/powerSources');

exports.getPowerSources = async (req, res) => {
    try {
        const powerSources = await powerSourcesService.getPowerSources();
        res.status(201).json({success: true, powerSources});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getPowerSourceById = async (req, res) => {
    try{
        const powerSources = await powerSourcesService.getPowerSourceById(req.param.id_PowerSource);
        if(!powerSources){
            res.status(404).json({ error: "sourcé d'énergie non trouvée" });
        }
        res.status(201).json({success: true, powerSources});
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getPowerSourceByName = async (req, res) => {
    try{
        const powerSources = await powerSourcesService.getPowerSourceByName(req.param.powerSource_name);
        if(!powerSources){
            res.status(404).json({ error: "source d'énergie non trouvée" });
        }
        res.status(201).json({success: true, powerSources});
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

exports.editPowerSources = async (req, res, next) => {
    const {powerSources, sources} = req.body;
    console.log(powerSources);
    let thesePowerSources=[];
    for (let powerSourceKey in powerSources) {
        const powerSourceValue = powerSources[powerSourceKey];
        try{
            const thisPowerSource = await powerSourcesService.editPowerSources(powerSourceKey,powerSourceValue,sources);
            if (!thisPowerSource) {
                res.status(404).json({ error: "un champ essenciel n'est pas présent ou incorrect" });
            }
            thesePowerSources.push(thisPowerSource);
        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    }
    return res.status(201).json({success: true, thesePowerSources}).send()
}
