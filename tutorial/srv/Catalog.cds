using {GWSIMPLE} from './external/GWSIMPLE';
service catalog {

    entity UserData as projection on GWSIMPLE.ZLAUNCHUSERINFOSet;
    entity AppData as projection on GWSIMPLE.ZLAUNCHAPPINFOSet;

}