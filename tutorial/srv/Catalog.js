const cds = require('@sap/cds');
module.exports = cds.service.impl(async function() {
	const service = await cds.connect.to('GWSIMPLE');
	this.on('READ', "UserData", async (req) => {
		const result = await service.run(req.query);
		return result;
	});
	this.on('READ', "AppData", async (req) => {
		const result = await service.run(req.query);
		return result;
	});
});