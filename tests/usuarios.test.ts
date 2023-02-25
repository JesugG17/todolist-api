import { Done } from 'mocha';
import request from 'supertest';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { Usuarios } from '../routes';
import { StatusCodes } from 'http-status-codes';

chai.use( chaiHttp );

const expect = chai.expect;
const url = 'http://localhost:8080/'

describe('POST /usuarios ERR', () => {
    it('Retorna un BAD REQUEST porque el correo ya esta registrado', (done: Done) => {
        chai.request(url)
        .post('v1/api/usuarios')
        .send({
            correo: 'jesus@gmail.com',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(StatusCodes.BAD_REQUEST);
            done();
        })
    });
    
});

describe('POST /usuarios', () => {
    it('Retorna un CREATED creando al nuevo usuario ', (done: Done) => {
        chai.request(url)
        .post('v1/api/usuarios')
        .send({
            correo: 'miamor1@gmail.com',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(StatusCodes.CREATED);
            done();
        });
    });
});

describe('GET /usuarios', () => {
    it('Retorna un status 200 obteniendo a todos los usuarios', (done: Done) => {
        chai.request(url)
        .get('v1/api/usuarios')
        .end((err, res) => {

            expect(res).to.have.status(StatusCodes.OK);
            expect(res.body).not.to.be.empty;

            done();
        });
    })
});
