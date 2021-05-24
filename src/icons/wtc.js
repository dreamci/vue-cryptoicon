const Wtc = {
  symbol: 'wtc',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#8200FF" fill-rule="nonzero"/><path fill="#FFF" d="M18.414 13.166l-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 01-.836-.492.662.662 0 01-.02-.164V11.52c0-.31.215-.58.522-.656l3.448-.844a.69.69 0 01.836.492c.014.053.02.108.02.163v2.491zm-7.586-.042l-.852.209c-.614.15-1.045.69-1.045 1.31v4.58l-2.074.508a.69.69 0 01-.836-.492.662.662 0 01-.021-.164V11.52c0-.31.215-.58.522-.656l3.449-.844a.69.69 0 01.836.492c.014.053.02.108.02.163v2.45zm10.867-2.239l3.448-.844a.69.69 0 01.836.491.653.653 0 01.021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164V11.54c0-.31.215-.58.522-.655z"/><path fill="#FFF" d="M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z" opacity=".504"/></g>`;
  },
  plainIcon: c => {
    return `<g fill-rule="evenodd"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="nonzero" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.414-18.834v-2.49a.662.662 0 00-.02-.164.69.69 0 00-.837-.492l-3.448.844a.678.678 0 00-.523.656v7.555c0 .056.007.11.02.164a.69.69 0 00.837.492l2.247-.55v-4.538c0-.62.43-1.16 1.044-1.31l.68-.167zm-7.586-.042v-2.449a.662.662 0 00-.021-.163.69.69 0 00-.836-.492l-3.449.844A.678.678 0 006 11.52v7.555c0 .056.007.11.02.164a.69.69 0 00.837.492l2.074-.508v-4.58c0-.62.43-1.16 1.045-1.31l.852-.209zm10.867-2.239a.678.678 0 00-.523.655v7.556a.69.69 0 00.857.655l3.449-.844a.678.678 0 00.522-.655v-7.556a.662.662 0 00-.02-.164.69.69 0 00-.837-.491l-3.448.844zm-8.798 2.429l-2.754.674a.678.678 0 00-.522.655v7.556c0 .055.007.11.02.164a.69.69 0 00.837.491l3.448-.844a.678.678 0 00.522-.655v-.94a1.379 1.379 0 01-1.51-1.012 1.324 1.324 0 01-.041-.328v-5.761zm7.586.042l-2.581.632a.678.678 0 00-.523.655v7.556c0 .055.007.11.02.164a.69.69 0 00.837.491l3.449-.844a.678.678 0 00.522-.655v-.951l-.01.002c-.74.181-1.488-.259-1.673-.982a1.324 1.324 0 01-.041-.328v-5.74z"/><path d="M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z" opacity=".504"/></g>`;
  }
};
export default Wtc;
