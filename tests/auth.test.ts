import { describe, Done } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { StatusCodes } from 'http-status-codes';

chai.use( chaiHttp );

const expect = chai.expect;
const url = 'http://localhost:8080/'
const api = 'v1/api/auth/login';

describe('POST /auth', () => {
    it('Retorna un status 200 siendo el login exitoso', (done: Done) => {
        chai.request(url)
        .post(api)
        .send({
            correo: 'miamor@gmail.com',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(StatusCodes.OK)
            expect(res.body.token).not.to.be.empty;
            expect(res.body.usuario).to.be.an('object');
            done();
        });
    });
});

describe('POST /auth', () => {
    it('Retorna un status 400 porque el correo no es valido', (done: Done) => {
        chai.request(url)
        .post(api)
        .send({
            correo: 'asdasdasda',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(StatusCodes.BAD_REQUEST);
            expect(res.body)
            done();
        });
    }); 
});