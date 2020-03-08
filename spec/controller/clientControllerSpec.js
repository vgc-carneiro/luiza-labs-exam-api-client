describe('clientController', () => {

	const controller = require('../../src/components/controller/clientController');
	const mongoService = require('../../src/components/service/mongoService');

	beforeEach(() => {
		client = {
			_id: 		'5e6452ff94fd2082e8b8b6a5',
			name: 		'Vinicius',
			email: 		'vinicius@email.com',
			active:		true,
			updatedAt: '2020-03-08T02:05:51.997Z',
			createdAt: '2020-03-08T02:05:51.997Z',
			__v:		0
		}
    });

    describe("get client", function() {
        it('get without id client', async  () => {
			await controller.getClientById(null).then((result) => {
				fail('Promise should not resolve', result);
			}).catch((e) => {
				expect(e).toEqual({status: 400, data: {message: 'Falta de parâmetros.'}});
			});
		});
        it('get with wrong id client', async  () => {
			await controller.getClientById('234123').then((result) => {
				fail('Promise should not resolve', result);
			}).catch((e) => {
				expect(e).toEqual({status: 400, data: {message: 'ID malformado.'}});
			});
		});
        it('get client', async  () => {
			spyOn(mongoService, 'getClient').and.returnValue(Promise.resolve(client));
			await controller.getClientById(client._id).then((result) => {
				expect(result).toEqual(result);
			}).catch((e) => {
				fail('Promise should not reject', e);
			});
		});
        it('get client but not found mongo', async  () => {
			spyOn(mongoService, 'getClient').and.returnValue(Promise.resolve());
			await controller.getClientById(client._id).then((result) => {
				fail('Promise should not resolve', result);
			}).catch((e) => {
				expect(e).toEqual({status: 404, data: {message: 'Cliente não encontrado.'}});
			});
		});
        it('get client but not found mongo', async  () => {
			spyOn(mongoService, 'getClient').and.returnValue(Promise.resolve());
			await controller.getClientByEmail(client.email).then((result) => {
				fail('Promise should not resolve', result);
			}).catch((e) => {
				expect(e).toEqual({status: 404, data: {message: 'Cliente não encontrado.'}});
			});
		});
        it('get client but not found mongo', async  () => {
			spyOn(mongoService, 'getClient').and.returnValue(Promise.resolve(client));
			await controller.getClientByEmail(client.email).then((result) => {
				expect(result).toEqual(client);
			}).catch((e) => {
				fail('Promise should not reject', e);
			});
		});
        it('get without email client', async  () => {
			await controller.getClientByEmail(null).then((result) => {
				fail('Promise should not resolve', e);
			}).catch((e) => {
				expect(e).toEqual({status: 400, data: {message: 'Falta de parâmetros.'}});
			});
		});
	});
});