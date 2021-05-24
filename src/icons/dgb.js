const Dgb = {
  symbol: 'dgb',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#006AD2"/><path fill="#FFF" d="M12.368 25l.479-1.282-.85.084-.306.81c-.024.061-.044.125-.075.183-.067.125-.17.203-.313.204-.63.001-1.258 0-1.888-.001-.015 0-.03-.009-.063-.019l.402-1.085c-.733-.02-1.446-.032-2.156-.113.012-.133 4.062-10.345 4.223-10.652.04-.003.087-.01.135-.01h3.27c.033 0 .066 0 .098.002.331.025.515.305.4.623-.153.42-.315.838-.472 1.256l-2.058 5.474c-.021.056-.039.114-.065.19.058.003.103.009.148.007 3.096-.135 5.368-1.613 6.836-4.39a6.711 6.711 0 00.67-1.935c.073-.395.096-.791-.003-1.186a1.763 1.763 0 00-.698-1.03c-.468-.337-.994-.481-1.562-.484H7.5c.024-.06.035-.1.054-.136l1.388-2.501a.754.754 0 01.706-.418h5.866l.601-1.59h1.782c.044 0 .088-.003.13.003.127.02.2.12.181.25-.008.054-.028.106-.048.158-.123.331-.249.661-.372.992-.021.056-.038.113-.06.18h.805c.02-.043.04-.087.058-.132l.496-1.317c.05-.133.052-.134.185-.134.564 0 1.129-.002 1.693 0 .238.001.323.127.238.357-.135.369-.274.735-.412 1.102-.019.051-.036.103-.06.173.055.01.1.02.145.026.785.096 1.549.274 2.274.601.551.249 1.052.574 1.464 1.03.558.615.835 1.35.879 2.18.042.805-.105 1.581-.372 2.33-.632 1.775-1.53 3.388-2.83 4.747-.896.936-1.93 1.68-3.064 2.282-1.224.65-2.518 1.105-3.858 1.427-.12.03-.183.082-.224.2-.147.41-.303.818-.457 1.226-.095.25-.19.318-.452.318h-1.868z"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.632-7h1.868c.262 0 .357-.067.452-.318.154-.408.31-.815.457-1.226.041-.118.105-.17.224-.2 1.34-.322 2.634-.778 3.858-1.427 1.134-.602 2.168-1.346 3.064-2.282 1.3-1.36 2.198-2.972 2.83-4.746.267-.75.414-1.526.372-2.33-.044-.831-.321-1.566-.879-2.182-.412-.455-.913-.78-1.464-1.029-.725-.327-1.49-.505-2.274-.601-.045-.006-.09-.016-.146-.026l.061-.173c.138-.367.277-.733.412-1.102.085-.23 0-.356-.238-.357-.564-.002-1.129 0-1.693 0-.133 0-.135.001-.185.134l-.496 1.317c-.017.045-.039.089-.058.133h-.805c.022-.068.039-.125.06-.18.123-.332.249-.662.372-.993.02-.052.04-.104.048-.158.019-.13-.054-.23-.18-.25-.043-.006-.087-.003-.13-.003h-1.784l-.601 1.59H9.648a.754.754 0 00-.706.418l-1.388 2.5c-.02.036-.03.077-.054.136h11.02c.568.004 1.094.148 1.562.485.353.256.59.598.698 1.03.099.395.076.791.003 1.186a6.711 6.711 0 01-.67 1.935c-1.468 2.777-3.74 4.255-6.836 4.39-.045.002-.09-.004-.148-.008.026-.075.044-.133.065-.189L15.252 15c.157-.418.319-.835.471-1.256.116-.318-.068-.598-.399-.623-.032-.002-.065-.002-.097-.002h-3.271c-.048 0-.095.007-.135.01-.16.307-4.21 10.519-4.223 10.652.71.081 1.423.094 2.156.113l-.402 1.085c.033.01.048.019.063.019.63 0 1.259.002 1.888 0 .143 0 .246-.078.313-.203.031-.058.051-.122.075-.184l.306-.81.85-.083L12.368 25z"/>`;
  }
};
export default Dgb;
