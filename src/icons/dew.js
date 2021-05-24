const Dew = {
  symbol: 'dew',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#fec907" r="16"/><path d="M12.161 22.816c.618 0 1.12.49 1.12 1.092 0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 01-.354-.833V8.149c0-.305.124-.597.345-.813.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092 0 .29-.119.567-.329.772-.21.204-.495.32-.791.32h-.345v13.632zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491s-.395 3.153-1.182 4.492-1.662 2.365-3.099 3.294c-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092 0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07.986-.568 1.618-1.499 2.19-2.503.573-1.003.86-2.124.86-3.362-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 00-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091 0-.29.119-.568.329-.772.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 013.223 3.15z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.839-9.184h-.271V9.183h.345c.296 0 .581-.115.791-.32.21-.204.328-.482.328-.771 0-.603-.501-1.092-1.12-1.092h-1.556c-.313 0-.612.12-.833.336a1.136 1.136 0 00-.345.813v15.673c0 .312.127.612.354.833.226.22.533.345.854.345h1.453c.618 0 1.12-.489 1.12-1.092 0-.603-.502-1.091-1.12-1.092zm12.17-11.452a8.368 8.368 0 00-3.222-3.15c-1.369-.761-2.9-1.142-4.591-1.142h-.349c-.297 0-.581.115-.791.32-.21.204-.328.482-.328.772 0 .603.501 1.091 1.12 1.091h.296c1.227 0 2.343.29 3.347.866a6.372 6.372 0 012.376 2.372c.58 1.004.87 2.133.871 3.388 0 1.238-.286 2.36-.858 3.362-.573 1.004-1.205 1.935-2.191 2.503-.987.569-1.865 1.07-3.076 1.07h-.69c-.618 0-1.12.488-1.12 1.091S15.628 25 16.246 25h.567c1.709 0 3.088-.504 4.407-1.358 1.437-.93 2.312-1.955 3.099-3.294s1.182-2.835 1.182-4.492-.39-3.153-1.169-4.491z" fill-rule="evenodd"/>`;
  }
};
export default Dew;
