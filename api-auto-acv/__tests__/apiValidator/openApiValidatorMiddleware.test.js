const request = require('supertest');
const express = require('express');
const OpenApiValidator = require('express-openapi-validator');

const app = express();
app.use(
    OpenApiValidator.middleware({
        apiSpec: './openApi.yml',
        validateResponses: true,
        ignoreUndocumented: true,
    }),
);

// Ajoutez vos routes ici
app.use('/vehicules', require('../../routers/vehicles'));

describe('OpenApiValidator middleware', () => {
    it('should validate requests and responses according to the OpenAPI spec', async () => {
        const res = await request(app)
            .get('/vehicules') // Remplacez ceci par une route valide dans votre API
            .expect(200); // Remplacez ceci par le code de statut HTTP attendu
        // Ici, vous pouvez ajouter des assertions supplémentaires sur la réponse
        // Par exemple, vérifier que la réponse correspond à ce qui est défini dans votre spécification OpenAPI
    });
});