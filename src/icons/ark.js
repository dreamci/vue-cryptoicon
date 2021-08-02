const Ark = {
  symbol: 'ark',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F70000"/><path fill="#FFF" d="M15.947 13.347L5 24.89 15.996 7 27 25 15.947 13.347zm1.588 4.585h-3.422l1.76-1.936 1.662 1.953v-.017zm-6.6 3.177v-.024l1.941-1.987v-.009l5.92-.025 1.998 2.045h-9.858z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.053-18.653L27 25 15.996 7 5 24.891l10.947-11.544zm1.588 4.585v.017l-1.662-1.953-1.76 1.936h3.422zm-6.6 3.177h9.859l-1.998-2.045-5.92.025v.009l-1.94 1.987v.024z"/>`;
  }
};
export default Ark;
