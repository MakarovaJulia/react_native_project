import LangService from './LangService';
import {makeAutoObservable} from 'mobx';
import {LangType} from './LangType';

export default class LangStore {
  langService;
  lang: LangType | undefined;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);

    this.langService = new LangService();
  }

  setLang = (lang: any) => {
    this.lang = lang;
  };

  changeLang = async (lang: LangType) => {
    this.setIsLoading(true);
    await this.langService.changeLang(lang);
    this.setLang(lang);
    this.setIsLoading(false);
  };

  getLang = () => {
    this.setIsLoading(true);
    let lang = this.langService.getLang();
    console.log('lang store' + lang);
    this.setLang(lang);
    this.setIsLoading(false);
  };

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };
}
