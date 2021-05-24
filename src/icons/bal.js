const Bal = {
  symbol: 'bal',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle fill="#1E1E1E" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M16.092 23.196C10.518 23.196 6 21.586 6 19.428c0-1.126 1.23-2.14 3.2-2.856 1.538.987 4.117 1.493 7.042 1.493 2.856 0 5.38-.617 6.93-1.562 1.859.707 3.013 1.694 3.013 2.782 0 2.161-4.518 3.911-10.093 3.911z"/><path d="M16.152 17.58c-4.226 0-7.652-1.325-7.652-2.96 0-.906 1.056-1.718 2.712-2.259 1.182.617 2.953 1.011 4.94 1.011 1.987 0 3.758-.394 4.94-1.01 1.659.543 2.712 1.352 2.712 2.258.003 1.635-3.424 2.96-7.652 2.96z"/><path d="M16.124 12.88c-3.267 0-5.916-1.094-5.916-2.44 0-1.345 2.65-2.44 5.916-2.44 3.266 0 5.916 1.095 5.916 2.44 0 1.346-2.65 2.44-5.916 2.44z"/></g></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.173 16.503c-1.551.945-4.075 1.562-6.93 1.562-2.926 0-5.505-.506-7.043-1.493-1.97.715-3.2 1.73-3.2 2.856 0 2.158 4.518 3.768 10.092 3.768 5.575 0 10.093-1.75 10.093-3.911 0-1.088-1.154-2.075-3.012-2.782zm-2.081-4.142c-1.182.617-2.953 1.011-4.94 1.011-1.987 0-3.758-.394-4.94-1.01-1.656.54-2.712 1.352-2.712 2.258 0 1.635 3.426 2.96 7.652 2.96 4.228 0 7.655-1.325 7.652-2.96 0-.906-1.053-1.715-2.712-2.259zM16.124 8c-3.267 0-5.916 1.095-5.916 2.44 0 1.346 2.65 2.44 5.916 2.44 3.266 0 5.916-1.094 5.916-2.44 0-1.345-2.65-2.44-5.916-2.44z"/>`;
  }
};
export default Bal;
