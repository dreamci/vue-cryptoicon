const Deez = {
  symbol: 'deez',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#939393" fill-rule="nonzero"/><path fill="#FFF" d="M13.707 19.86c.365-.237 2.818-1.74 5.208-3.204 1.723-1.054 1.723-1.054 1.693-1.157-.03-.125-10.7-6.609-10.809-6.674a21.481 21.481 0 01-.602-.369c.196-.136.577-.396 1.033-.706L11.34 7l.762.456c.94.562 11.26 6.892 12.706 7.793-.59.355-2.68 1.592-5.49 3.247l-5.583 3.29a36.218 36.218 0 01-.02-.874 46.32 46.32 0 01-.007-1.051zm-2.368-6.296c.185.11.505.303.899.548l1.029.638.022 1.93c.065 5.577.065 5.577.146 5.634l.054.037.06-.022c.03-.009.041-.013 10.871-6.402l.58-.342-.191 2.683-.07.04a5095.12 5095.12 0 01-13.389 7.664c-.004-.699-.01-3.085-.011-6.196v-6.212zM9 24.8l.025-15.967.388.229c.312.182 2.416 1.465 4.793 2.919a1210.99 1210.99 0 005.114 3.118l.715.43-2.364 1.446-.472-.275a279.81 279.81 0 01-2.83-1.732 260.976 260.976 0 00-2.76-1.688l-.652-.38-.005 6.769c-.002 3.054-.005 5.592-.007 6.332-.193-.117-.522-.32-.908-.56L9 24.8z"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.293-12.14a53.764 53.764 0 00.027 1.927l5.583-3.29c2.81-1.656 4.9-2.893 5.49-3.248A2999.434 2999.434 0 0012.1 7.456L11.339 7l-1.109.75c-.456.31-.837.57-1.033.706.127.082.335.21.602.37.108.064 10.78 6.548 10.809 6.673.03.103.03.103-1.693 1.157a658.095 658.095 0 00-5.208 3.205zm-2.368-6.296v6.212c.002 3.111.007 5.497.011 6.196 1.587-.9 12.974-7.417 13.389-7.663l.07-.04.191-2.684-.58.342c-10.83 6.389-10.842 6.393-10.87 6.402l-.061.022-.054-.037c-.08-.057-.08-.057-.146-5.634l-.022-1.93-1.03-.638a48.502 48.502 0 00-.898-.548zM9 24.8l1.037.641c.386.24.715.443.908.56.002-.74.005-3.278.007-6.332l.005-6.768.651.379c.25.146 1.488.902 2.76 1.688 1.266.783 2.536 1.558 2.831 1.732l.472.275 2.364-1.446-.715-.43c-.488-.292-2.782-1.69-5.114-3.118a779.624 779.624 0 00-4.793-2.92l-.388-.228L9 24.8z"/>`;
  }
};
export default Deez;
