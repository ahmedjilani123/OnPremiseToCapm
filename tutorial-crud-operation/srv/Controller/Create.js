const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const cds=require("@sap/cds")
const {ZLAUNCHUSERINFOSet}= cds.entities("GWSIMPLE");
const CreateData = async (req) => {
    const service = await cds.connect.to("GWSIMPLE");
    let ID = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString();
    req.data.Userid=ID;

    const result = await service.run(INSERT.into(ZLAUNCHUSERINFOSet).entries(req.data)).then((res,rej)=>{
        try {
                return res;   
        } catch (error) {
            req.error(500,"Data is not Found Server Error")
        }
    });
   
    return result;
    // try {
    //     req.data.Userid = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString();
    //     const response = await executeHttpRequest({ destinationName: 'MainDev' }, {
    //         method: 'POST',
    //         url: `sap/opu/odata/sap/ZAJ_LAUNCHPAD_DAFF_SRV/ZLAUNCHUSERINFOSet`,
    //         data: req.data
    //     });
    //     req.notify(`successfully created Userid: ${response.data.d.Userid}`, 200)
    //     return {
    //         ID: req.data.Userid
    //     };
    // }
    // catch(err){
    //     req.error(400, err);
    //     return;
    // }
}
module.exports = {
    CreateData
}