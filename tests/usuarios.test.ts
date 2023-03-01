import { Done, describe } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { StatusCodes } from 'http-status-codes';

chai.use( chaiHttp );

const expect = chai.expect;
const url = 'http://localhost:8080/';
const api = 'v1/api/usuarios';

/*
 NOTE: THIS TESTS IS ONLY FOR PRACTICE, I ALREADY TESTED ALL THE ENDPOINTS WITH
 POSTMAN BUT I NEED TO KNOW HOW TO WORK WITH UNIT TEST WITH 'MOCHA, CHAI' ETC.
*/

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




