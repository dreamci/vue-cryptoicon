const Sngls = {
  symbol: 'sngls',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#B30D23"/><path fill="#FFF" fill-rule="nonzero" d="M16.913 21.234l-.932 1.736-.932-1.736C9.419 20.797 5 16.599 5 16.599c0-.01 4.294-4.078 9.809-4.614l.73-1.25.442-.735.75 1.25.422.735c5.514.526 9.809 4.614 9.809 4.614s-4.42 4.198-10.05 4.635zM5.932 16.599c-.01 0 4.246 2.908 8.521 3.523l-2.084-3.9.566-.982.52.972-.01.01 2.027 3.99c.163.01.326.01.49.01.163 0 .317 0 .48-.01l1.489-2.968 1.086-2.024.566.982-2.084 3.91c4.275-.605 8.53-3.443 8.53-3.523 0-.07-4.053-2.778-8.223-3.473l.634 1.102-.528 1.061-1.374-2.302a10.45 10.45 0 00-.557-.02c-.183 0-.375.01-.567.02l-1.403 2.302-.518-1.012.662-1.141c-4.169.705-8.223 3.473-8.223 3.473z"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.913-10.766c5.63-.437 10.049-4.635 10.049-4.635s-4.295-4.088-9.81-4.614l-.422-.735-.75-1.25-.441.734-.73 1.25C9.294 12.522 5 16.59 5 16.6c0 0 4.42 4.198 10.049 4.635l.932 1.736.932-1.736zM5.932 16.599s4.054-2.768 8.223-3.473l-.662 1.141.518 1.012 1.403-2.302c.192-.01.384-.02.567-.02.182 0 .374.01.557.02l1.374 2.302.528-1.061-.634-1.102c4.17.695 8.224 3.404 8.224 3.473 0 .08-4.256 2.918-8.531 3.523l2.084-3.91-.566-.982-1.086 2.024-1.49 2.967c-.162.01-.316.01-.48.01-.163 0-.326 0-.49-.01l-2.026-3.989.01-.01-.52-.972-.566.982 2.084 3.9c-4.275-.615-8.53-3.523-8.521-3.523z"/>`;
  }
};
export default Sngls;
