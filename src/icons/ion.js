const Ion = {
  symbol: 'ion',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#57beea" r="16"/><path d="M7.026 19.009A2.712 2.712 0 014 16.309a2.712 2.712 0 012.682-2.718c.96-4.41 4.87-7.711 9.546-7.711.873 0 1.72.115 2.525.33A2.7 2.7 0 0121.005 5a2.712 2.712 0 012.705 2.718c0 .469-.118.91-.326 1.294A9.809 9.809 0 0126 15.698a9.811 9.811 0 01-2.904 6.985c.326.448.518 1.001.518 1.599A2.712 2.712 0 0120.908 27a2.707 2.707 0 01-2.519-1.724 9.76 9.76 0 01-2.16.24c-4.241 0-7.851-2.714-9.203-6.507zm.49-.105c1.3 3.568 4.71 6.115 8.712 6.115.695 0 1.372-.077 2.023-.222a2.712 2.712 0 012.657-3.233c.72 0 1.376.283 1.86.744a9.314 9.314 0 002.737-6.61c0-2.41-.91-4.606-2.405-6.26-.496.61-1.25.999-2.095.999a2.712 2.712 0 01-2.706-2.719c0-.374.076-.731.212-1.056a9.253 9.253 0 00-2.283-.284c-4.416 0-8.112 3.101-9.047 7.255a2.715 2.715 0 012.23 2.676 2.718 2.718 0 01-1.896 2.595zm8.712-.484a2.715 2.715 0 01-2.708-2.722c0-1.503 1.212-2.721 2.708-2.721s2.709 1.218 2.709 2.721a2.715 2.715 0 01-2.709 2.722z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M7.026 19.009c1.352 3.793 4.962 6.508 9.202 6.508a9.76 9.76 0 002.161-.241A2.707 2.707 0 0020.91 27a2.712 2.712 0 002.705-2.718c0-.598-.192-1.15-.518-1.6A9.811 9.811 0 0026 15.699a9.809 9.809 0 00-2.616-6.686 2.71 2.71 0 00.326-1.294A2.712 2.712 0 0021.005 5a2.7 2.7 0 00-2.252 1.21 9.742 9.742 0 00-2.525-.33c-4.677 0-8.586 3.301-9.546 7.711A2.712 2.712 0 004 16.31a2.712 2.712 0 003.026 2.7zm.49-.105a2.718 2.718 0 001.895-2.595c0-1.338-.963-2.45-2.23-2.676.935-4.154 4.63-7.255 9.047-7.255.788 0 1.553.098 2.283.284a2.72 2.72 0 00-.212 1.056 2.712 2.712 0 002.706 2.719c.845 0 1.6-.39 2.095-1a9.311 9.311 0 012.405 6.261 9.314 9.314 0 01-2.736 6.61 2.69 2.69 0 00-1.86-.745 2.712 2.712 0 00-2.658 3.234 9.267 9.267 0 01-2.023.222c-4.002 0-7.412-2.547-8.713-6.115zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.228-13.58a2.715 2.715 0 002.709-2.722c0-1.503-1.213-2.721-2.709-2.721s-2.708 1.218-2.708 2.721a2.715 2.715 0 002.708 2.722z" fill-rule="evenodd"/>`;
  }
};
export default Ion;
