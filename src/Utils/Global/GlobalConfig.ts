interface IGlobalConfig {
    appendDom: HTMLElement | null;
}
class GlobalConfig implements IGlobalConfig{
    constructor(){
        this.appendDom = document.getElementById('app');
    }
    public appendDom: HTMLElement | null = document.getElementById('app');
}

export default new GlobalConfig();