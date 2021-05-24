const Xbp = {
  symbol: 'xbp',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#21AF67"/><path d="M16 28C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12zm4.613-16.349c-.176-.24-.463-.435-.857-.587-.393-.151-.934-.227-1.62-.227h-1.45l1.177-3.235.785-2.157a10.867 10.867 0 00-2.41-.321c-.08 0-.16-.006-.24-.006a8.99 8.99 0 00-.368.01C9.801 5.322 5.118 10.122 5.118 16c0 3.133 1.352 6.113 3.71 8.174l.853-2.345A8.571 8.571 0 017.396 16c0-4.328 3.212-7.917 7.377-8.515.206-.03.419-.05.63-.068l-3.142 8.634 6.269-.617a.064.064 0 00-.01-.004c.195-.063.382-.146.56-.25a4.084 4.084 0 001.185-1.027c.178-.23.32-.488.418-.763.11-.294.173-.604.186-.917a1.277 1.277 0 00-.256-.822zm-2.674 2.105c-.137.372-.35.634-.645.785a1.943 1.943 0 01-.897.228h-1.13l.758-2.084h1.13c.135 0 .27.017.4.052a.727.727 0 01.32.168.517.517 0 01.151.33 1.16 1.16 0 01-.087.521zM19.2 5.598l-.781 2.147a8.603 8.603 0 11-5.76 16.183 8.703 8.703 0 01-.519-.243l.892-2.445h1.448c1.312 0 2.388-.222 3.23-.668.841-.445 1.44-1.156 1.797-2.134.131-.362.18-.68.141-.954a1.732 1.732 0 00-.242-.704 1.531 1.531 0 00-.46-.47 2.652 2.652 0 00-.46-.238l-6.326.624-2.035 5.581-.83 2.284a10.936 10.936 0 002.584 1.508c1.307.538 2.707.814 4.121.813 6 0 10.882-4.881 10.882-10.882 0-4.887-3.238-9.032-7.682-10.402zm-4.64 11.475h1.32c.158.001.315.016.47.045.15.024.295.079.424.16.12.082.206.204.242.344.042.151.02.349-.069.594a1.73 1.73 0 01-.376.631c-.142.147-.31.266-.496.352a1.91 1.91 0 01-.54.154 3.804 3.804 0 01-.497.036h-1.323l.845-2.316z" fill="#FFF"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-4c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm4.613-16.349c.178.236.268.527.256.822a2.932 2.932 0 01-.186.917c-.099.275-.24.532-.418.763a4.084 4.084 0 01-1.186 1.027 2.846 2.846 0 01-.56.25.064.064 0 01.01.004l-6.268.617 3.142-8.634a9.836 9.836 0 00-.63.068c-4.165.598-7.377 4.187-7.377 8.515 0 2.161.816 4.243 2.285 5.829l-.852 2.345A10.856 10.856 0 015.118 16c0-5.877 4.683-10.677 10.512-10.873.122-.004.245-.01.369-.01.08 0 .159.007.238.007.813.017 1.622.124 2.411.321l-.785 2.157-1.177 3.235h1.45c.686 0 1.227.076 1.62.227.394.152.681.347.857.587zm-2.674 2.105a1.16 1.16 0 00.087-.52.517.517 0 00-.151-.33.735.735 0 00-.32-.17 1.546 1.546 0 00-.4-.05h-1.13l-.758 2.083h1.13c.313-.002.62-.08.897-.228.295-.151.508-.413.645-.785zM19.2 5.598c4.444 1.37 7.682 5.515 7.682 10.402 0 6-4.881 10.882-10.882 10.882a10.822 10.822 0 01-6.706-2.32l.831-2.285 2.035-5.581 6.326-.624c.16.064.315.143.46.237.185.122.342.282.46.47.13.215.213.455.242.705.038.273-.01.592-.141.954-.357.978-.956 1.69-1.798 2.134-.841.446-1.917.668-3.229.668h-1.448l-.892 2.445c.17.086.342.168.519.243a8.603 8.603 0 105.76-16.183l.781-2.147zm-4.64 11.475l-.845 2.316h1.323c.167 0 .333-.013.498-.036.186-.025.368-.077.54-.154.185-.086.353-.205.495-.352a1.73 1.73 0 00.376-.631c.088-.245.111-.443.069-.594a.587.587 0 00-.242-.343 1.121 1.121 0 00-.424-.161 2.689 2.689 0 00-.47-.045h-1.32z"/>`;
  }
};
export default Xbp;
