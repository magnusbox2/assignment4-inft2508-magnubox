import {I18n} from "i18n-js";
import translations from "./translations.json"
import * as RNLocalize from "react-native-localize";
    
const locales = RNLocalize.getLocales();

const i18n = new I18n({...translations});
i18n.locale = locales[0].languageCode;
i18n.enableFallback = true;
i18n.fallbackLocale = "en";
    
export default i18n;
