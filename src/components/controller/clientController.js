const mongoService = require('../service/mongoService');

function getClientById(id){
	return new Promise((resolve, reject) => {
		if(!id){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			if (id.match(/^[0-9a-fA-F]{24}$/)) {
				let data = {
					_id: id,
					active: true
				};
				mongoService.getClient(data).then((result) => {
					if(result){
						resolve(result);
					}else{
						reject({status: 404, data: {message: 'Cliente não encontrado.'}});
					}
				});
			} else {
				reject({status: 400, data: {message: 'ID malformado.'}});
			}
		}
	});
}

function getClientByEmail(email){
	return new Promise((resolve, reject) => {
		if(!email){
			reject({status: 400, data: {message: 'Falta de parâmetros.'}});
		}else{
			let data = {
				email: email,
				active: true
			};
			mongoService.getClient(data).then((result) => {
				if(result){
					resolve(result);
				}else{
					reject({status: 404, data: {message: 'Cliente não encontrado.'}});
				}
			});
		}
	});
}

module.exports = {getClientByEmail, getClientById};