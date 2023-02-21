import { Done } from 'mocha';
import request from 'supertest';

import { Usuarios } from '../routes';

// WARNING: This test are not fully completed, this crash because I dont made the configuration for Typescript already

describe('Crea un usuario exitosamente', () => {
    it('Crea el usuario retornando 201', (done: Done) => {
        request(Usuarios)
        .post('/v1/api/usuarios')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send({
          'correo': 'jesus@gmail.com',
          'password': '123456'
        })
        .expect(201, done)

    });
    
});

describe('Intenta crear un usuario sin mandar el correo', () => {
    it('Manda un mensaje de error retornando un 400 BAD REQUEST', (done: Done) => {
        request(Usuarios)
        .post('/v1/api/usuarios')
        .set('Accept', 'application/json')
        .expect('Accept', /json/)
        .send({
            'correo': '',
            'password': '123456'
        })
        .expect(400, done)
    });
});
