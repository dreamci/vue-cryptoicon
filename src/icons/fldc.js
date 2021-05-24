const Fldc = {
  symbol: 'fldc',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c40e09" r="16"/><path d="M22.2 7.14c.09.07.171.13.246.195.198.175.397.35.59.531.153.146.298.302.445.455.012.012.022.04.018.056-.09.348-.226.676-.408.982-.16.268-.344.514-.558.735-.29.3-.615.55-.971.755-.155.09-.314.17-.473.25-.507.257-1.047.401-1.597.503-.375.07-.754.12-1.131.172-.496.068-.993.123-1.488.195-.73.106-1.445.272-2.123.587-.746.347-1.367.854-1.789 1.603-.281.5-.395 1.045-.39 1.623.009 1.107.388 2.064 1.042 2.915.4.52.856.982 1.336 1.418.332.303.671.597 1.002.9.423.39.847.779 1.21 1.234.19.24.378.486.541.747.278.446.499.925.644 1.438.08.28.128.565.15.857a4.04 4.04 0 01-.114 1.292c-.043.173-.045.176-.216.207-.241.045-.482.091-.724.13-.177.027-.355.044-.533.064-.062.008-.125.011-.188.016l-.037-.001c.001-.014 0-.028.004-.04.054-.143.114-.284.165-.428a4.23 4.23 0 00.226-.958 2.932 2.932 0 00-.303-1.672 4.005 4.005 0 00-.694-.946c-.376-.395-.79-.741-1.205-1.086-.693-.577-1.363-1.18-1.975-1.852a10.08 10.08 0 01-1.012-1.302 6.405 6.405 0 01-.768-1.606 4.713 4.713 0 01-.025-2.718c.146-.514.343-.997.647-1.43.402-.573.921-1 1.516-1.33.6-.335 1.24-.555 1.899-.72.53-.134 1.067-.234 1.608-.3.61-.074 1.22-.136 1.83-.205.498-.056.993-.125 1.474-.277a3.03 3.03 0 001.177-.672c.291-.272.507-.598.662-.972.143-.345.213-.709.264-1.078.011-.082.017-.166.027-.267zm-7.06 12.826c.219-.043.427-.08.634-.125.532-.118 1.057-.26 1.55-.512a4.1 4.1 0 001.269-1c.36-.426.655-.895.809-1.451a3.11 3.11 0 00.1-1.082 4.316 4.316 0 00-.734-2.066 8.374 8.374 0 00-1.08-1.288c-.07-.071-.144-.14-.215-.21-.01-.01-.018-.022-.033-.04l.38-.059.823-.125c.144-.022.288-.046.432-.065.017-.002.041.017.055.032.256.298.518.59.764.897.32.398.59.834.81 1.304.195.419.338.855.408 1.317.049.323.07.649.037.975-.096.913-.367 1.758-.902 2.496-.332.459-.741.83-1.202 1.14a6.87 6.87 0 01-1.735.823c-.263.084-.529.156-.794.23a.087.087 0 01-.071-.015c-.427-.38-.852-.763-1.277-1.145-.008-.006-.014-.015-.027-.03zm2.116-9.698l-.644.1-.73.113c-.085.014-.171.03-.258.039a.124.124 0 01-.088-.028 7.558 7.558 0 01-.781-.835c-.13-.165-.262-.33-.377-.507-.39-.604-.695-1.249-.824-1.974a3.968 3.968 0 01.098-1.86c.011-.04.023-.06.07-.069.268-.046.533-.106.8-.15.22-.035.444-.053.666-.079L15.37 5c-.016.036-.025.06-.036.081a4.384 4.384 0 00-.391 1.24 2.868 2.868 0 00.271 1.722c.221.445.523.822.865 1.17.356.36.742.684 1.129 1.007.014.012.026.025.049.048zm-3.174 11.288l-.426.045c-.18.02-.36.034-.54.062-.277.043-.555.085-.829.146-1.003.222-1.784.754-2.21 1.777a5.76 5.76 0 00-.347 1.159c-.003.018-.009.036-.017.068-.057-.044-.11-.08-.158-.122-.2-.178-.399-.354-.594-.536-.141-.132-.274-.273-.414-.407-.047-.045-.056-.09-.039-.154a3.884 3.884 0 011.079-1.79 5.145 5.145 0 011.11-.785c.566-.31 1.171-.488 1.791-.622.072-.015.146-.023.216-.042.044-.012.073 0 .104.029l.578.529.641.589a.85.85 0 01.055.054zm4.327-4.378c-.05-.012-.1-.023-.148-.038l-3.451-1.079c-.443-.138-.885-.275-1.327-.414-.17-.053-.257-.192-.244-.334.018-.21.088-.356.285-.395a.346.346 0 01.162.014c.374.115.747.235 1.12.351l2.641.824 1.053.327a.34.34 0 01.247.37c-.029.223-.162.368-.338.374zm-7.29 6.496c.032.008.07.015.107.026l4.805 1.5c.165.052.263.19.248.352-.019.218-.133.363-.304.378a.419.419 0 01-.156-.022c-1.325-.412-2.649-.826-3.973-1.24-.276-.086-.552-.17-.827-.257-.154-.049-.256-.18-.245-.33.016-.198.089-.349.266-.394.023-.007.048-.008.08-.013zM21.249 7.91c-.015.044-.035.136-.078.213-.07.126-.213.173-.354.129L18.5 7.528c-.829-.259-1.658-.518-2.488-.775-.141-.044-.246-.127-.262-.287-.018-.18.065-.421.301-.448a.332.332 0 01.132.018l4.816 1.503c.16.05.25.168.25.371zm-6.915 6.463c.01-.207.1-.363.262-.395a.406.406 0 01.191.012c.486.148.97.301 1.456.453l1.832.57a.34.34 0 01.244.386c-.037.23-.174.37-.36.35-.095-.012-.188-.05-.282-.079l-2.382-.744-.718-.224a.326.326 0 01-.243-.329zm-.332 1.89c.064.017.112.026.159.04l3.02.944c.083.026.167.05.25.077.185.06.275.232.227.428-.037.155-.111.274-.271.301a.349.349 0 01-.156-.013c-.384-.117-.767-.238-1.15-.358-.713-.222-1.425-.445-2.137-.665-.132-.041-.232-.12-.254-.265-.025-.161.017-.31.146-.413.05-.039.116-.053.166-.075zm-2.783 9.187c.014-.216.108-.385.303-.406a.32.32 0 01.127.013c1.108.345 2.216.69 3.324 1.037.178.056.265.232.22.42-.038.16-.12.272-.277.308a.18.18 0 01-.09.002l-3.107-.97c-.091-.029-.183-.056-.275-.086a.329.329 0 01-.225-.318zm.997-2.72c.03.008.07.015.109.027l3.281 1.024c.16.05.26.19.248.346-.017.214-.127.361-.295.382a.416.416 0 01-.168-.021c-.885-.275-1.77-.553-2.654-.83-.211-.065-.423-.13-.633-.197-.154-.05-.247-.177-.234-.335.016-.206.096-.34.268-.385.022-.006.045-.006.078-.01zm7.622-13.562c-.108-.032-.213-.061-.318-.094-1.027-.32-2.054-.643-3.082-.964-.205-.065-.288-.23-.232-.448.035-.139.107-.239.242-.27a.36.36 0 01.18.006c.91.281 1.821.566 2.732.85.195.06.389.122.584.183a.33.33 0 01.226.36c-.017.132-.054.26-.18.325-.047.024-.1.034-.152.052zm.983-2.7c-.019.133-.055.278-.207.352a.322.322 0 01-.245.007l-2.365-.74-.923-.29c-.194-.06-.278-.228-.225-.435.036-.141.104-.25.245-.28a.382.382 0 01.186.01c.622.192 1.243.388 1.864.582l1.425.444c.155.049.246.17.245.35z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.2-24.86c-.01.101-.015.185-.026.267-.051.369-.12.733-.264 1.078-.155.374-.371.7-.662.972a3.03 3.03 0 01-1.177.672c-.48.152-.976.22-1.473.277-.61.069-1.221.131-1.83.205-.542.066-1.079.166-1.61.3-.658.165-1.298.385-1.898.72-.595.33-1.114.757-1.516 1.33-.304.433-.501.916-.647 1.43a4.713 4.713 0 00.025 2.718 6.4 6.4 0 00.768 1.606c.3.465.642.895 1.012 1.302.612.672 1.282 1.275 1.975 1.852.415.345.83.691 1.205 1.086.27.284.513.59.694.946.266.524.366 1.08.303 1.672a4.23 4.23 0 01-.226.958c-.05.144-.11.285-.165.428-.005.012-.003.026-.004.04.012 0 .025.002.037 0 .063-.004.126-.007.188-.015.178-.02.356-.037.533-.065.242-.038.483-.084.724-.129.171-.031.173-.034.216-.207a4.04 4.04 0 00.114-1.292 4.332 4.332 0 00-.15-.857 5.598 5.598 0 00-.644-1.438 8.04 8.04 0 00-.542-.747c-.362-.455-.786-.844-1.21-1.233-.33-.304-.669-.598-1.001-.9-.48-.437-.936-.899-1.336-1.419-.654-.85-1.033-1.808-1.042-2.915-.005-.578.109-1.123.39-1.623.422-.75 1.043-1.256 1.79-1.603.677-.315 1.393-.481 2.122-.587.495-.072.992-.127 1.488-.195.377-.052.756-.103 1.13-.172.551-.102 1.091-.246 1.598-.503.159-.08.318-.16.473-.25.356-.205.681-.456.971-.755a3.911 3.911 0 00.966-1.717c.004-.016-.006-.044-.018-.056-.147-.153-.292-.31-.446-.455-.192-.181-.39-.356-.589-.53-.075-.067-.156-.125-.245-.196zm-7.06 12.826c.014.016.02.025.028.031.425.382.85.765 1.277 1.145.016.015.05.021.07.015.266-.074.532-.146.795-.23a6.87 6.87 0 001.735-.824c.461-.309.87-.68 1.202-1.139.535-.738.806-1.583.902-2.496a3.837 3.837 0 00-.037-.975 4.785 4.785 0 00-.408-1.317c-.22-.47-.49-.906-.81-1.304-.246-.307-.508-.599-.764-.897-.014-.015-.038-.034-.055-.032-.144.019-.288.043-.432.065l-.822.125-.38.058c.014.02.022.03.032.04l.215.21c.397.396.767.817 1.08 1.289.413.622.672 1.308.733 2.066a3.11 3.11 0 01-.1 1.082c-.153.556-.447 1.025-.808 1.45a4.1 4.1 0 01-1.27 1.001c-.492.252-1.017.394-1.55.512-.206.045-.414.082-.632.125zm2.116-9.698c-.023-.023-.035-.036-.05-.048a15.428 15.428 0 01-1.128-1.008 4.566 4.566 0 01-.865-1.17 2.868 2.868 0 01-.271-1.72c.062-.437.206-.846.391-1.24L15.37 5l-.18.018c-.223.026-.446.044-.667.08-.267.043-.532.103-.8.15-.047.007-.059.028-.07.068a3.968 3.968 0 00-.098 1.86c.129.725.433 1.37.824 1.974.115.176.246.342.377.507.238.3.502.576.781.835.021.02.06.03.088.028.087-.009.173-.025.259-.039l.73-.114.643-.099zm-3.174 11.288c-.025-.026-.04-.04-.055-.054a895.37 895.37 0 00-.641-.59 94.97 94.97 0 01-.578-.528c-.031-.03-.06-.041-.104-.03-.07.02-.144.028-.216.043-.62.134-1.225.313-1.791.622a5.145 5.145 0 00-1.11.784 3.884 3.884 0 00-1.079 1.791c-.017.063-.008.109.04.154.139.134.272.275.413.407.195.182.395.358.594.536.048.042.1.078.158.122.008-.032.014-.05.017-.068.075-.4.193-.785.348-1.159.425-1.023 1.206-1.555 2.209-1.777.274-.061.552-.103.83-.146.179-.028.36-.043.54-.062.136-.015.273-.03.425-.045zm4.327-4.378c.176-.006.31-.151.338-.373a.343.343 0 00-.247-.371c-.35-.11-.702-.218-1.053-.327l-2.64-.824c-.374-.116-.747-.236-1.121-.35a.346.346 0 00-.162-.015c-.197.039-.267.186-.285.395-.013.142.074.281.244.334.442.139.884.276 1.327.414l3.451 1.08c.049.014.099.025.148.037zm-7.29 6.496c-.03.005-.056.006-.08.013-.176.045-.25.196-.265.395-.011.15.091.28.245.329l.827.257c1.324.414 2.648.828 3.973 1.24a.4.4 0 00.156.022c.171-.015.285-.16.304-.378.015-.162-.083-.3-.248-.352l-4.805-1.5c-.037-.011-.075-.018-.106-.026zM21.249 7.91c0-.203-.09-.321-.25-.37-1.605-.502-3.21-1.004-4.816-1.504a.332.332 0 00-.132-.018c-.236.027-.319.268-.3.448.015.16.12.243.261.287.83.257 1.659.516 2.488.775l2.317.724c.141.044.285-.003.354-.129.043-.077.063-.169.078-.213zm-6.915 6.463c0 .16.086.28.243.329l.718.224 2.382.744c.094.03.187.067.282.078.186.021.323-.119.36-.35a.34.34 0 00-.244-.384l-1.832-.571c-.485-.152-.97-.305-1.456-.453a.406.406 0 00-.191-.012c-.162.032-.251.188-.262.395zm-.332 1.89c-.05.023-.117.037-.166.076-.13.103-.171.252-.146.413.022.145.122.224.254.265.712.22 1.424.443 2.136.665.384.12.767.24 1.151.358.05.015.106.022.156.013.16-.027.234-.146.271-.301.048-.196-.042-.369-.226-.428l-.252-.077c-1.006-.315-2.013-.63-3.02-.943-.046-.015-.094-.024-.158-.04zm-2.783 9.187a.33.33 0 00.225.318c.092.03.184.057.275.086l3.107.97a.18.18 0 00.09-.002c.158-.036.239-.148.277-.307.045-.19-.042-.365-.22-.421a1759.84 1759.84 0 00-3.324-1.037.32.32 0 00-.127-.013c-.195.021-.289.19-.303.406zm.997-2.72c-.033.005-.056.005-.078.01-.172.046-.252.18-.268.386-.013.158.08.285.234.335.21.068.422.132.633.198.885.276 1.77.554 2.654.829a.416.416 0 00.168.02c.168-.02.278-.167.295-.381a.336.336 0 00-.248-.346 6633.9 6633.9 0 00-3.281-1.024c-.04-.012-.08-.02-.11-.027zm7.622-13.562c.053-.018.105-.028.151-.052.127-.066.164-.193.181-.325a.33.33 0 00-.226-.36c-.195-.06-.39-.123-.584-.183-.91-.284-1.821-.569-2.733-.85a.36.36 0 00-.18-.006c-.134.031-.206.131-.241.27-.056.219.027.383.232.448l3.082.964c.105.033.21.062.318.094zm.983-2.7c0-.18-.09-.301-.245-.35l-1.425-.444c-.621-.194-1.242-.39-1.864-.581a.382.382 0 00-.186-.012c-.141.03-.21.14-.245.281-.053.207.03.375.225.436l.923.29 2.365.739a.322.322 0 00.245-.007c.152-.074.188-.219.207-.352z" fill-rule="evenodd"/>`;
  }
};
export default Fldc;
