
const { CreateData } = require('./Controller/Create');
const { ReadData } = require('./Controller/Read');
const { UpdateData } = require('./Controller/Update');
const { DeleteData } = require('./Controller/Delete');


module.exports =(srv)=>{

	srv.on('READ', ["UserData","NewUserData"],ReadData);
	srv.on("CREATE", "UserData",CreateData);
	srv.on("DELETE","UserData",DeleteData)
	srv.on("UPDATE","UserData",UpdateData);
	
};
