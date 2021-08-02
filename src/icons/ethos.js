const Ethos = {
  symbol: 'ethos',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#00FFBA"/><g fill="#FFF"><path d="M10.871 10.904a1.707 1.707 0 00-.194 2.148 1.693 1.693 0 001.42.756 2.188 2.188 0 01-.001 4.377A6.086 6.086 0 017.819 7.767 6.084 6.084 0 0116 7.425a6.085 6.085 0 00-2.182 4.673 2.188 2.188 0 002.175 2.189 2.188 2.188 0 01-2.188-2.189 1.69 1.69 0 00-.29-.955 1.727 1.727 0 00-.754-.622 1.723 1.723 0 00-1.33 0 1.714 1.714 0 00-.56.383zm14.64 6.628a6.094 6.094 0 01-1.242 6.613 6.084 6.084 0 01-10.45-4.243 2.188 2.188 0 114.375 0 1.7 1.7 0 001.045 1.577c.43.18.913.178 1.341-.005a1.721 1.721 0 00.905-.918 1.717 1.717 0 00-.916-2.23 1.694 1.694 0 00-.665-.134 2.188 2.188 0 010-4.377 6.081 6.081 0 015.606 3.717z"/><path d="M15.994 17.714c1.208 0 2.188.98 2.188 2.188a6.085 6.085 0 01-10.467 4.226 6.087 6.087 0 014.381-10.313 2.188 2.188 0 010 4.377c-.34-.001-.672.1-.954.29a1.726 1.726 0 00-.622.755 1.71 1.71 0 00.346 1.852v.002a1.706 1.706 0 002.184.23 1.7 1.7 0 00.755-1.42c0-1.207.98-2.187 2.189-2.187zm9.326-8.396a6.09 6.09 0 01-5.417 8.868 2.189 2.189 0 010-4.378 1.71 1.71 0 001.577-1.045 1.721 1.721 0 00-.054-1.444 1.705 1.705 0 00-2.477-.64 1.698 1.698 0 00-.756 1.42 2.188 2.188 0 11-4.375-.001 6.085 6.085 0 019.717-4.886l.004.003a6.103 6.103 0 011.78 2.103z" opacity=".7"/></g></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16.035 14.286a2.188 2.188 0 002.159-2.188 1.698 1.698 0 01.756-1.42 1.705 1.705 0 012.477.64c.228.451.248.979.053 1.445a1.726 1.726 0 01-1.067.969 1.71 1.71 0 01-.51.076 2.188 2.188 0 00-2.183 2.326 2.188 2.188 0 002.184 2.058 1.694 1.694 0 011.419.756c.319.475.38 1.078.162 1.608a1.718 1.718 0 01-.905.918 1.723 1.723 0 01-1.341.005 1.727 1.727 0 01-.754-.622 1.696 1.696 0 01-.291-.955 2.188 2.188 0 00-2.2-2.188c-1.21 0-2.188.98-2.188 2.188a1.7 1.7 0 01-.756 1.42 1.706 1.706 0 01-2.184-.231v-.002a1.71 1.71 0 011.23-2.897 2.188 2.188 0 002.18-2.39 2.188 2.188 0 00-2.18-1.994 1.72 1.72 0 01-.665-.133 1.726 1.726 0 01-.754-.623 1.707 1.707 0 01.754-2.53 1.723 1.723 0 011.33 0c.306.13.568.346.754.621.19.282.292.615.29.955a2.188 2.188 0 002.23 2.188zM16 7.426a6.081 6.081 0 00-8.208.367 6.086 6.086 0 00-.37 8.208 6.087 6.087 0 00.293 8.127 6.085 6.085 0 008.284.447 6.084 6.084 0 008.27-.43 6.094 6.094 0 00.307-8.147 6.093 6.093 0 00.744-6.68 6.103 6.103 0 00-1.78-2.103l-.005-.003A6.085 6.085 0 0016 7.425zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path d="M14.275 15.803a2.188 2.188 0 01-2.179 2.39 1.69 1.69 0 00-.954.29 1.726 1.726 0 00-.622.754 1.71 1.71 0 00.346 1.852v.002a1.706 1.706 0 002.184.23 1.7 1.7 0 00.755-1.42 2.188 2.188 0 012.201-2.187c-1.208 0-2.188.98-2.188 2.188A6.084 6.084 0 0016 24.575a6.085 6.085 0 01-8.284-.447 6.087 6.087 0 01-.293-8.127 6.086 6.086 0 004.674 2.184 2.188 2.188 0 002.18-2.382zm10.3.195a6.081 6.081 0 00-4.671-2.183 2.188 2.188 0 00-2.189 2.182c0-1.209.98-2.189 2.188-2.189a1.71 1.71 0 001.577-1.045 1.721 1.721 0 00-.054-1.444 1.705 1.705 0 00-2.477-.64 1.698 1.698 0 00-.756 1.42 2.188 2.188 0 11-4.375-.001 6.085 6.085 0 019.717-4.886l.004.003a6.09 6.09 0 011.037 8.783z" opacity=".622"/>`;
  }
};
export default Ethos;
