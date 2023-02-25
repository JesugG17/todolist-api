import { Done } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { StatusCodes } from 'http-status-codes';

chai.use( chaiHttp );

const expect = chai.expect;
const url = 'http://localhost:8080/'

describe('POST /auth', () => {
    it('Retorna un status 200 siendo el login exitoso', (done: Done) => {
        chai.request(url)
        .post('v1/api/auth/login')
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