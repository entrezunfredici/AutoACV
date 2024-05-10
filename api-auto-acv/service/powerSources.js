const { powerSources } = require('../models');

exports.getPowerSources = async () => {
    return await powerSources.findAll();
}

exports.getPowerSourceById = async (id_PowerSource) => {
    return await powerSources.findOne({
        where:{
            id_PowerSource: id_PowerSource
        }
    });
}

exports.getPowerSourceByName = async (powerSource_name) => {
    return await powerSources.findOne({
        where:{
            powerSource_name: powerSource_name
        }
    });
}

exports.editPowerSources = async (powerSource_name, powerSource_impact, powerSource_info_sources) => {
    const powerSourceToEdit = await this.getPowerSourceByName(powerSource_name);
    if(powerSourceToEdit){
        return await powerSourceToEdit.update({
            powerSource_impact:powerSource_impact,
            powerSource_info_sources:powerSource_info_sources
        });
    }else{
        return await powerSources.create({
            powerSource_name:powerSource_name,
            powerSource_impact:powerSource_impact,
            powerSource_info_sources:powerSource_info_sources
        });
    }
}
