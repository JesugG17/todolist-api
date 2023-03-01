import { describe, Done } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { StatusCodes } from 'http-status-codes';

chai.use( chaiHttp );

const expect = chai.expect;
const url = 'http://localhost:8080/'
const login = 'v1/api/auth/login';
const register = 'v1/api/auth/register';

/*
 NOTE: THIS TESTS IS ONLY FOR PRACTICE, I ALREADY TESTED ALL THE ENDPOINTS WITH
 POSTMAN BUT I NEED TO KNOW HOW TO WORK WITH UNIT TEST WITH 'MOCHA, CHAI' ETC.
*/

describe('POST /auth/login', () => {
    it('Retorna un status 200 siendo el login exitoso', (done: Done) => {
        chai.request(url)
        .post(login)
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

describe('POST /auth/login', () => {
    it('Retorna un status 400 porque el correo no es valido', (done: Done) => {
        chai.request(url)
        .post(login)
        .send({
            correo: 'asdasdasda',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(StatusCodes.BAD_REQUEST);
            done();
        });
    }); 
});

describe('POST /auth/register', () => {
    it('Retorna un status 201 porque el usuario se registro y se creo exitosamente', (done: Done) => {
        chai.request(url)
        .post(register)
        .send({
            correo: 'gastelum@gmail.com',
            password: '123456'
        })
        .end((err, res) => {
            expect(res).to.have.status(StatusCodes.CREATED);
            expect(res.body).to.be.an('Object');
            done();
        });
    });
});