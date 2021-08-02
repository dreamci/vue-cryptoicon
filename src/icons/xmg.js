const Xmg = {
  symbol: 'xmg',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#004a80" r="16"/><path d="M23 19.54L21.517 25H9v-.913l6.79-7.719-6.653-8.376V7h12.331l.43 4.252h-.79c-.521-.969-.963-1.694-1.328-2.175-.364-.481-.689-.78-.975-.899-.202-.098-.48-.168-.834-.21a10.88 10.88 0 00-1.273-.065h-3.503l5.249 6.54v.315l-6.488 7.365h7.405c.364 0 .698-.087 1-.26.302-.174.564-.392.785-.654a5.63 5.63 0 00.615-.873 8.22 8.22 0 00.498-1.022z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7-12.46l-.741-.226a8.22 8.22 0 01-.498 1.022 5.602 5.602 0 01-.615.873 2.92 2.92 0 01-.785.654c-.302.173-.636.26-1 .26h-7.405l6.488-7.365v-.314l-5.249-6.54h3.503c.494 0 .918.02 1.273.063.354.043.632.113.834.211.286.118.611.418.975.899.365.481.807 1.206 1.327 2.175h.79L21.469 7H9.137v.992l6.653 8.376L9 24.087V25h12.517z" fill-rule="evenodd"/>`;
  }
};
export default Xmg;
