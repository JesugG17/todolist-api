import { Done } from 'mocha';
import request from 'supertest';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { Usuarios } from '../routes';

chai.use( chaiHttp );

const expect = chai.expect;
const url = 'http://localhost:8080/'

describe('POST /usuarios', () => {
    it('Retorna un BAD REQUEST porque el correo ya esta registrado', (done: Done) => {
        chai.request(url)
        .post('v1/api/usuarios')
        .send({
            correo: 'jesus@gmail.com',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(400);
            done();
        })
    });
    
});

describe('POST /usuarios', () => {
    it('Retorna un CREATED creando al nuevo usuario ', (done: Done) => {
        chai.request(url)
        .post('v1/api/usuarios')
        .send({
            correo: 'miamor@gmail.com',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(201);
            done();
        })
    });
});
