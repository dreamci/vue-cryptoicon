const Tzc = {
  symbol: 'tzc',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#374851" r="16"/><path d="M17.7 15.4v7.598c.204-.05.404-.107.6-.173v2.91a10.029 10.029 0 01-4 .121V15.4h-3.5v-2.8h10.4v2.8zm1.4 10.11V22.5a7.2 7.2 0 10-6.2 0v3.01C8.895 24.205 6 20.44 6 16c0-5.523 4.477-10 10-10s10 4.477 10 10c0 4.44-2.895 8.205-6.9 9.51z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.7-16.6h3.5v-2.8H10.8v2.8h3.5v10.456a10.065 10.065 0 004-.122v-2.91a7.144 7.144 0 01-.6.174zm1.4 10.11C23.105 24.205 26 20.44 26 16c0-5.523-4.477-10-10-10S6 10.477 6 16c0 4.44 2.895 8.205 6.9 9.51V22.5a7.2 7.2 0 116.2 0z" fill-rule="evenodd"/>`;
  }
};
export default Tzc;
