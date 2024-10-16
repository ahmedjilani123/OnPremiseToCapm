const cds = require('@sap/cds');
const {ZLAUNCHUSERINFOSet}= cds.entities("GWSIMPLE");
const ReadData = async (req) => {
    const service = await cds.connect.to('GWSIMPLE');
    const result = await service.run(SELECT.from(ZLAUNCHUSERINFOSet)).then((res,rej)=>{
        try {
            if(res.length>0){
                return res;
              }else{
                req.error(400,"Data Is Not Found");
              } 
        } catch (error) {
            req.error(500,"Data is not Found Server Error")
        }
    });
    
    return result;
}
module.exports = {
    ReadData
}