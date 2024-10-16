const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const cds=require("@sap/cds")
const {ZLAUNCHUSERINFOSet}= cds.entities("GWSIMPLE");
const DeleteData = async (req)=>{
    const service = await cds.connect.to("GWSIMPLE");

    const result = await service.run(DELETE.from(ZLAUNCHUSERINFOSet).where({Userid:req.data.Userid})).then((res,rej)=>{
        try {
                return req.data.Userid;   
        } catch (error) {
            req.error(500,"Data is not Found Server Error")
        }
    });
   
    return result;
}
module.exports={
    DeleteData
}

// try {
//     const destination = { destinationName: 'MainDev' };
//     const response = await executeHttpRequest(destination, {
//         method: 'DELETE',
//         url: `sap/opu/odata/sap/ZAJ_LAUNCHPAD_DAFF_SRV/ZLAUNCHUSERINFOSet(Userid='${req.data.Userid}')`
//     });

//     req.notify(`successfully created : ${req.data.Userid}`,200)
//     return {Userid : req.data.Userid};

// } catch (error) {
//     req.error(400, error);
//     return;
// }