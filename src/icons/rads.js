const Rads = {
  symbol: 'rads',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#9d4bef" r="16"/><path d="M11.47 7.661a3.808 3.808 0 110 7.616 3.808 3.808 0 010-7.616zm3.807 12.87a3.808 3.808 0 11-3.808-3.808 5.253 5.253 0 005.253-5.253 3.808 3.808 0 113.808 3.808 5.253 5.253 0 00-5.252 5.253zm5.253 3.808a3.808 3.808 0 110-7.616 3.808 3.808 0 010 7.616zm0-2.66a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm-9.06 0a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm9.06-9.062a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296zm-9.06 0a1.148 1.148 0 100-2.296 1.148 1.148 0 000 2.296z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.47 7.661a3.808 3.808 0 100 7.617 3.808 3.808 0 000-7.617zm3.807 12.87a5.253 5.253 0 015.253-5.253 3.808 3.808 0 10-3.808-3.808c0 2.9-2.352 5.253-5.253 5.253a3.808 3.808 0 103.808 3.808zm5.253 3.808a3.808 3.808 0 10.001-7.616 3.808 3.808 0 000 7.616zm0-2.66a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm-9.06 0a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm9.06-9.062a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm-9.06 0a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296z" fill-rule="evenodd"/>`;
  }
};
export default Rads;
