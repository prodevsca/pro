import { r as registerInstance, h, F as Fragment, j as getElement } from './p-c03ea8d2.js';

const imageCss = ":root{--pro-color-primary:#3880ff;--pro-color-primary-rgb:56, 128, 255;--pro-color-primary-contrast:#ffffff;--pro-color-primary-contrast-rgb:255, 255, 255;--pro-color-primary-shade:#3171e0;--pro-color-primary-tint:#4c8dff;--pro-color-secondary:#0cd1e8;--pro-color-secondary-rgb:12, 209, 232;--pro-color-secondary-contrast:#ffffff;--pro-color-secondary-contrast-rgb:255, 255, 255;--pro-color-secondary-shade:#0bb8cc;--pro-color-secondary-tint:#24d6ea;--pro-color-tertiary:#7044ff;--pro-color-tertiary-rgb:112, 68, 255;--pro-color-tertiary-contrast:#ffffff;--pro-color-tertiary-contrast-rgb:255, 255, 255;--pro-color-tertiary-shade:#633ce0;--pro-color-tertiary-tint:#7e57ff;--pro-color-success:#10dc60;--pro-color-success-rgb:16, 220, 96;--pro-color-success-contrast:#ffffff;--pro-color-success-contrast-rgb:255, 255, 255;--pro-color-success-shade:#0ec254;--pro-color-success-tint:#28e070;--pro-color-text:#000000;--pro-color-text-rgb:#000000;--pro-color-text-contrast:#000000;--pro-color-text-contrast-rgb:#000000;--pro-color-text-shade:#000000;--pro-color-text-tint:#000000;--pro-color-warning:#ffce00;--pro-color-warning-rgb:255, 206, 0;--pro-color-warning-contrast:#ffffff;--pro-color-warning-contrast-rgb:255, 255, 255;--pro-color-warning-shade:#e0b500;--pro-color-warning-tint:#ffd31a;--pro-color-danger:#f04141;--pro-color-danger-rgb:245, 61, 61;--pro-color-danger-contrast:#ffffff;--pro-color-danger-contrast-rgb:255, 255, 255;--pro-color-danger-shade:#d33939;--pro-color-danger-tint:#f25454;--pro-color-dark:#222428;--pro-color-dark-rgb:34, 34, 34;--pro-color-dark-contrast:#ffffff;--pro-color-dark-contrast-rgb:255, 255, 255;--pro-color-dark-shade:#1e2023;--pro-color-dark-tint:#383a3e;--pro-color-medium:#989aa2;--pro-color-medium-rgb:152, 154, 162;--pro-color-medium-contrast:#ffffff;--pro-color-medium-contrast-rgb:255, 255, 255;--pro-color-medium-shade:#86888f;--pro-color-medium-tint:#a2a4ab;--pro-color-light:#f4f5f8;--pro-color-light-rgb:244, 244, 244;--pro-color-light-contrast:#000000;--pro-color-light-contrast-rgb:0, 0, 0;--pro-color-light-shade:#d7d8da;--pro-color-light-tint:#f5f6f9;--pro-color-trnas:transparent;--pro-color-trnas-rgb:transparent;--pro-color-trnas-contrast:transparent;--pro-color-trnas-contrast-rgb:transparent;--pro-color-trnas-shade:transparent;--pro-color-trnas-tint:transparent;--pro-text-color-rgb:255, 0, 0;--pro-color-scrollbar:#dfdfdf;--pro-btn-background-contrast:#000000;--pro-btn-background-contrast-rgb:0, 0, 0}@media (prefers-color-scheme: light){:root{--color-toolbar-background:white;--color-toolbar-text:black;--pro-background-color:#ffffff;--pro-background-color-rgb:255, 255, 255}}:root{}:root body.dark{--pro-color-scrollbar:#373636;--pro-color-primary:#428cff;--pro-color-primary-rgb:66, 140, 255;--pro-color-primary-contrast:#ffffff;--pro-color-primary-contrast-rgb:255, 255, 255;--pro-color-primary-shade:#3a7be0;--pro-color-primary-tint:#5598ff;--pro-color-secondary:#50c8ff;--pro-color-secondary-rgb:80, 200, 255;--pro-color-secondary-contrast:#ffffff;--pro-color-secondary-contrast-rgb:255, 255, 255;--pro-color-secondary-shade:#46b0e0;--pro-color-secondary-tint:#62ceff;--pro-color-tertiary:#6a64ff;--pro-color-tertiary-rgb:106, 100, 255;--pro-color-tertiary-contrast:#ffffff;--pro-color-tertiary-contrast-rgb:255, 255, 255;--pro-color-tertiary-shade:#5d58e0;--pro-color-tertiary-tint:#7974ff;--pro-color-success:#2fdf75;--pro-color-success-rgb:47, 223, 117;--pro-color-success-contrast:#000000;--pro-color-success-contrast-rgb:0, 0, 0;--pro-color-success-shade:#29c467;--pro-color-success-tint:#44e283;--pro-color-warning:#ffd534;--pro-color-warning-rgb:255, 213, 52;--pro-color-warning-contrast:#000000;--pro-color-warning-contrast-rgb:0, 0, 0;--pro-color-warning-shade:#e0bb2e;--pro-color-warning-tint:#ffd948;--pro-color-danger:#ff4961;--pro-color-danger-rgb:255, 73, 97;--pro-color-danger-contrast:#ffffff;--pro-color-danger-contrast-rgb:255, 255, 255;--pro-color-danger-shade:#e04055;--pro-color-danger-tint:#ff5b71;--pro-color-dark:#f4f5f8;--pro-color-dark-rgb:244, 245, 248;--pro-color-dark-contrast:#000000;--pro-color-dark-contrast-rgb:0, 0, 0;--pro-color-dark-shade:#d7d8da;--pro-color-dark-tint:#f5f6f9;--pro-color-medium:#989aa2;--pro-color-medium-rgb:152, 154, 162;--pro-color-medium-contrast:#000000;--pro-color-medium-contrast-rgb:0, 0, 0;--pro-color-medium-shade:#86888f;--pro-color-medium-tint:#a2a4ab;--pro-color-light:#222428;--pro-color-light-rgb:34, 36, 40;--pro-color-light-contrast:#ffffff;--pro-color-light-contrast-rgb:255, 255, 255;--pro-color-light-shade:#1e2023;--pro-color-light-tint:#383a3e;--color-toolbar-background:black;--color-toolbar-text:white;--pro-text-color-rgb:255, 255, 255;--pro-color-text-contrast:#ffffff;--pro-btn-background-contrast:#000000;--pro-btn-background-contrast-rgb:0, 0, 0}:root .ios body.dark{--pro-background-color:#000000;--pro-background-color-rgb:0, 0, 0;--pro-text-color:#ffffff;--pro-text-color-rgb:255, 255, 255;--pro-color-step-50:#0d0d0d;--pro-color-step-100:#1a1a1a;--pro-color-step-150:#262626;--pro-color-step-200:#333333;--pro-color-step-250:#404040;--pro-color-step-300:#4d4d4d;--pro-color-step-350:#595959;--pro-color-step-400:#666666;--pro-color-step-450:#737373;--pro-color-step-500:#808080;--pro-color-step-550:#8c8c8c;--pro-color-step-600:#999999;--pro-color-step-650:#a6a6a6;--pro-color-step-700:#b3b3b3;--pro-color-step-750:#bfbfbf;--pro-color-step-800:#cccccc;--pro-color-step-850:#d9d9d9;--pro-color-step-900:#e6e6e6;--pro-color-step-950:#f2f2f2;--pro-toolbar-background:#0d0d0d;--pro-item-background:#1c1c1c;--pro-item-background-activated:#313131;--color-toolbar-background:black;--color-toolbar-text:white}:root .md body.dark{--pro-background-color:#121212;--pro-background-color-rgb:18, 18, 18;--pro-text-color:#ffffff;--pro-text-color-rgb:255, 255, 255;--pro-border-color:#222222;--pro-color-step-50:#1e1e1e;--pro-color-step-100:#2a2a2a;--pro-color-step-150:#363636;--pro-color-step-200:#414141;--pro-color-step-250:#4d4d4d;--pro-color-step-300:#595959;--pro-color-step-350:#656565;--pro-color-step-400:#717171;--pro-color-step-450:#7d7d7d;--pro-color-step-500:#898989;--pro-color-step-550:#949494;--pro-color-step-600:#a0a0a0;--pro-color-step-650:#acacac;--pro-color-step-700:#b8b8b8;--pro-color-step-750:#c4c4c4;--pro-color-step-800:#d0d0d0;--pro-color-step-850:#dbdbdb;--pro-color-step-900:#e7e7e7;--pro-color-step-950:#f3f3f3;--pro-item-background:#1a1b1e;--color-toolbar-background:black;--color-toolbar-text:white}@media (prefers-color-scheme: dark){:root{--color-toolbar-background:black;--color-toolbar-text:white;--pro-background-color:#000000;--pro-background-color-rgb:255, 0, 0}}:root body{overflow-y:auto;overflow-x:hidden;margin:0}:root pro-modal{--width:100% !important;--height:100% !important}:root app-root{display:block}:host{box-sizing:border-box}:host div{display:flex;flex-direction:column}:host img{position:absolute}";

const Image = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showImg = false;
    this.src = `https://picsum.photos/200?random=1`;
  }
  connectedCallback() {
    var _a, _b;
    if (this.height && this.width) {
      this.height = (_a = this.height) !== null && _a !== void 0 ? _a : (this.height = this.host.shadowRoot.querySelector('img').height);
      this.width = (_b = this.width) !== null && _b !== void 0 ? _b : (this.width = this.host.shadowRoot.querySelector('img').width);
    }
  }
  handleImgLoad() {
    this.host.shadowRoot.querySelector('img').style.visibility = null;
    this.showImg = true;
  }
  render() {
    return (h(Fragment, null, h("div", null, h("pro-skeleton", { width: 200, height: 200 }), h("img", { innerHTML: this.host.innerHTML, style: { ['visibility']: 'hidden' }, onLoad: () => this.handleImgLoad(), loading: "lazy", src: this.src, width: this.width, height: this.height }))));
  }
  get host() { return getElement(this); }
};
Image.style = imageCss;

export { Image as pro_img };
