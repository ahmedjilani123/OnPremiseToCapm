const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const cds = require("@sap/cds")
const {ZLAUNCHUSERINFOSet} = cds.entities("GWSIMPLE");
const UpdateData = async (req)=>{
    let data = req.data
const service = await cds.connect.to("GWSIMPLE");
const result = await service.run(UPDATE(ZLAUNCHUSERINFOSet).set(data).where({Userid:data.Userid})).then((res,rej)=>{
    try {
        return req.data;
    } catch (error) {
        console.log(error);
    }
})
return result;



    // try {
    //     const payload = req.data;
    //     await executeHttpRequest( { destinationName: 'MainDev' }, {
    //         method: 'PUT',
    //         url: `sap/opu/odata/sap/ZAJ_LAUNCHPAD_DAFF_SRV/ZLAUNCHUSERINFOSet(Userid='${req.data.Userid}')`,
    //         data: payload 
    //     });
    //     req.notify(`Successfully Updated : ${req.data.Userid}`,200)
    //     return {Userid : req.data.Userid};

    // } catch (error) {
    //     req.error(400, error);
    //     return;
    // }
}
module.exports={
    UpdateData
}