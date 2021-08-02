const Gup = {
  symbol: 'gup',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#37DCD8"/><path fill="#FFF" d="M15.99 12.679l-2.784-2.804A32.574 32.574 0 0116 6a32.464 32.464 0 012.79 3.859l-2.8 2.82zm5.718 2.81c.786 2.202 1.939 4.404.84 6.518a7.503 7.503 0 01-3.112 3.135c-3.619 1.92-8.099.51-10.005-3.135-1.11-2.114.183-4.49.97-6.691.721-1.623 1.45-3.119 2.278-4.557l3.31 3.334 3.329-3.352c.875 1.514 1.631 3.072 2.39 4.749z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.01-19.321l2.8-2.82A32.464 32.464 0 0016 6a32.574 32.574 0 00-2.794 3.875l2.784 2.804zm5.718 2.81c-.759-1.676-1.515-3.234-2.39-4.748l-3.328 3.352-3.31-3.334c-.828 1.438-1.558 2.934-2.28 4.557-.786 2.202-2.078 4.577-.97 6.691 1.907 3.644 6.387 5.054 10.006 3.135a7.503 7.503 0 003.112-3.135c1.099-2.114-.054-4.316-.84-6.517z"/>`;
  }
};
export default Gup;
