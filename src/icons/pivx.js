const Pivx = {
  symbol: 'pivx',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#5E4778" fill-rule="nonzero"/><path fill="#FFF" stroke="#FFF" d="M10.5 12.241h6.153v1.255H10.5v-1.255zm12 .59c0 2.974-2.11 4.895-5.028 4.895H13.43V24h-1.6v-7.693h5.425c2.175 0 3.595-1.292 3.595-3.476 0-2.158-1.42-3.413-3.57-3.413h-1.688l-4.043.013V8h5.91c2.93 0 5.04 1.857 5.04 4.831h.001z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.153-20.259H10v2.255h7.153v-2.255zM23 12.831l-.02-.5c-.225-2.92-2.433-4.831-5.52-4.831h-6.41v2.432l4.543-.014h1.688c1.92 0 3.07 1.076 3.07 2.913 0 1.873-1.161 2.976-3.096 2.976h-5.924V24.5h2.599v-6.274h3.542c3.238 0 5.528-2.187 5.528-5.395z"/>`;
  }
};
export default Pivx;
