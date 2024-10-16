using {GWSIMPLE} from './external/GWSIMPLE';
service catalog {

    entity UserData as projection on GWSIMPLE.ZLAUNCHUSERINFOSet;
    entity AppData as projection on GWSIMPLE.ZLAUNCHAPPINFOSet;

}
@cds.persistence.skip:false
extend service catalog with {
    entity NewUserData as select from GWSIMPLE.ZLAUNCHUSERINFOSet{
        *,
        Username || ' '|| Userpass as full_name:String
    }
}