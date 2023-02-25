import { Done, describe } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { StatusCodes } from 'http-status-codes';

chai.use( chaiHttp );

const expect = chai.expect;
const url = 'http://localhost:8080/';
const api = 'v1/api/usuarios';

describe('POST /usuarios ERR', () => {
    it('Retorna un BAD REQUEST porque el correo ya esta registrado', (done: Done) => {
        chai.request(url)
        .post(api)
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
        .post(api)
        .send({
            correo: 'miamor2@gmail.com',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(StatusCodes.CREATED);

            done();
        })
    });
});

describe('GET /usuarios', () => {
    it('Retorna un status 200 obteniendo a todos los usuarios', (done: Done) => {
        chai.request(url)
        .get(api)
        .end((err, res) => {
            expect(res).to.have.status(StatusCodes.OK);
            expect(res.body).not.to.be.empty;
            expect(res.body.usuarios).to.be.an('array');
            done();
        });
    })
});




