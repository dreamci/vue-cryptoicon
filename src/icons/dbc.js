const Dbc = {
  symbol: 'dbc',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#5bc1d4" r="16"/><path d="M13.785 16.928l-1.65 1.724c-.297.31-.588.623-.886.931-.05.052-.121.083-.182.124-.13-.021-.23-.102-.247-.22a16.66 16.66 0 01-.074-.54c-.03-.238-.103-.304-.344-.334-.497-.06-.993-.125-1.49-.19l-1.134-.147c-.226-.03-.308-.192-.19-.385.272-.438.546-.874.819-1.31l1.67-2.668c.066-.108.14-.182.282-.178.09.002.184-.02.273-.043.106-.026.189.006.263.076.131.123.264.245.394.369l1.508 1.431c.325.308.653.614.978.922.168.158.168.272.01.438zm11.09 2.319c.094.078.196.152.216.285.025.17-.043.293-.187.386-.85.55-1.7 1.103-2.55 1.654l-1.643 1.065a1.309 1.309 0 00-.148.109.343.343 0 00-.125.282c.008.205.02.41.023.614.003.235-.17.382-.406.355a.327.327 0 01-.215-.123 322.09 322.09 0 01-.592-.685c-.247-.286-.493-.574-.741-.859a.473.473 0 01-.135-.394l.034-1.195c.004-.14.087-.23.199-.302l1.358-.868c.76-.485 1.522-.968 2.28-1.458.16-.103.309-.134.485-.044.13.066.277.078.418.034.211-.067.373-.008.536.136.39.344.795.672 1.194 1.008zm-7.298.992a.47.47 0 01.127.22c.037.187-.037.314-.213.399-.585.282-1.169.567-1.759.84-.106.048-.239.054-.36.06-.489.022-.978.035-1.467.055-.289.011-.577.029-.843.043h-.196a.33.33 0 01-.24-.095c-.062-.057-.126-.112-.187-.17-.344-.327-.682-.66-1.033-.98-.196-.178-.199-.417-.012-.608.421-.434.837-.872 1.255-1.31.451-.472.902-.946 1.352-1.42a.386.386 0 01.562-.028l1.8 1.789c.404.402.812.8 1.214 1.205zm2.478-8.049c-.193-.298.025-.71.346-.763.858-.143 1.713-.307 2.57-.456.189-.033.339.054.443.21.18.27.357.541.535.812.376.57.753 1.14 1.125 1.712.05.077.075.17.112.255l-.022.01a.664.664 0 01-.154.398c-.524.704-1.054 1.405-1.577 2.11a.49.49 0 01-.807-.055c-.765-1.27-1.538-2.536-2.308-3.803-.087-.144-.172-.29-.263-.43zm-1.505 3.532l-.15 1.335c-.042.37-.087.738-.129 1.108l-.148 1.3c-.01.091-.011.184-.03.272-.01.043-.042.098-.078.112-.036.014-.1-.006-.132-.033-.142-.123-.277-.253-.413-.382-.49-.464-.977-.929-1.467-1.391-.426-.403-.853-.803-1.281-1.203-.142-.132-.143-.174-.006-.317l1.958-2.05 1.337-1.404.656-.69c.019-.02.035-.047.058-.055.047-.017.105-.04.146-.027.034.012.05.073.06.09l-.1.88-.129 1.131-.152 1.324zm3.806 1.02c.064.103.074.201.004.308a.617.617 0 00-.092.404c.012.126-.04.203-.147.27-.837.531-1.67 1.066-2.504 1.6-.262.168-.524.335-.787.501-.104.066-.211.061-.268-.023-.032-.046-.036-.11-.045-.142l.11-.808.245-1.782.27-1.95.263-1.907.1-.71c.002-.019.003-.041.013-.055.026-.033.055-.082.088-.088.036-.006.092.022.115.053.061.082.11.173.164.261l1.955 3.216c.172.284.342.569.516.851zm-4.053-4.904c.031.02.091.041.123.084.049.066.006.128-.045.181l-.68.715-1.982 2.074c-.414.435-.826.872-1.24 1.306-.15.156-.27.156-.426.008-.483-.458-.966-.918-1.45-1.375-.47-.444-.942-.887-1.414-1.33-.063-.06-.113-.125-.106-.217.01-.125.082-.196.225-.22.261-.047.523-.093.785-.138l2.515-.44 2.97-.521.725-.127zm-6.739.632c.466-.319.932-.636 1.399-.953l4.51-3.072c.15-.102.245-.081.32.081.311.666.62 1.333.93 2 .04.086.078.173.119.26.033.07.011.127-.031.19a1.336 1.336 0 00-.138.247c-.033.083-.083.128-.173.144-.664.118-1.327.24-1.99.358l-2.354.423-2.57.462c-.036.006-.073 0-.11 0l-.022-.041c.037-.033.07-.071.11-.099zm-4.69 1.526c-.294-.006-.469-.292-.328-.555.119-.222.251-.436.379-.653.368-.629.738-1.256 1.104-1.885a.659.659 0 01.25-.245c.976-.561 1.95-1.125 2.926-1.687a.638.638 0 01.201-.08.348.348 0 01.354.144.359.359 0 01.034.389c-.147.314-.3.625-.45.937-.28.572-.56 1.143-.837 1.716a.434.434 0 01-.3.256.692.692 0 00-.512.51.36.36 0 01-.249.259c-.802.282-1.603.57-2.404.855-.054.02-.111.026-.167.04zm4.153-1.826a.346.346 0 01.034-.12l1.048-2.297c.218-.478.439-.955.654-1.434.05-.11.123-.165.247-.17.327-.01.654-.027.981-.04l1.93-.073c.226-.01.453-.025.68-.036.162-.007.273.091.274.25.007.097-.055.16-.135.215l-.618.421-3.694 2.513-1.18.804a.533.533 0 01-.088.054c-.07.03-.137-.012-.133-.087zm-1.363 1.65c-.163.263-.328.524-.492.786-.613.98-1.226 1.961-1.84 2.94a.425.425 0 01-.1.123c-.106.076-.247.023-.297-.11-.08-.214-.156-.43-.233-.645l-.669-1.882c-.016-.047-.027-.095-.033-.118.001-.127.043-.181.162-.22.356-.115.712-.228 1.068-.341l2.015-.64.265-.082c.063-.02.126-.047.178.023.047.063.008.115-.024.166zm16.118 2.609l.202 1.156c.006.037.01.075.016.124-.01.05-.021.11-.037.168l-.265.956c-.076.275-.294.34-.514.154-.451-.38-.904-.76-1.357-1.138-.103-.086-.146-.185-.122-.321a.629.629 0 00-.046-.402c-.062-.123-.042-.232.039-.34.37-.496.737-.994 1.106-1.49l.225-.304c.075-.103.174-.153.3-.125.132.03.2.12.222.249l.23 1.313zm-7.564-7.944l-.02-.042c-.027-.06-.038-.13.023-.164a.24.24 0 01.17-.01c.088.027.167.077.25.118l3.362 1.679.597.3c.067.033.12.072.106.156-.014.083-.077.101-.15.114-.808.144-1.615.29-2.422.435l-.079.016c-.023-.015-.067-.032-.095-.064a.804.804 0 00-.597-.303c-.09-.004-.136-.057-.17-.132-.142-.308-.287-.614-.43-.921l-.545-1.182z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.215-15.072c.158-.166.158-.28-.01-.438-.325-.308-.653-.614-.978-.922l-1.508-1.431c-.13-.124-.263-.246-.394-.369-.074-.07-.157-.102-.263-.076a1.03 1.03 0 01-.273.043c-.142-.004-.216.07-.283.178-.555.89-1.113 1.779-1.67 2.668-.272.436-.546.872-.817 1.31-.119.193-.037.355.19.385l1.133.148c.497.064.993.13 1.49.19.241.029.315.095.344.332.022.181.046.362.074.542.018.117.117.198.247.219.06-.04.132-.072.182-.124.298-.308.59-.621.885-.93l1.65-1.725zm11.09 2.319c-.398-.336-.803-.664-1.193-1.008-.163-.144-.325-.203-.536-.136a.547.547 0 01-.418-.034c-.176-.09-.325-.06-.485.044-.758.49-1.52.973-2.28 1.458l-1.358.868c-.112.072-.195.161-.199.302l-.034 1.195a.473.473 0 00.135.394c.248.285.494.573.74.86l.593.684a.327.327 0 00.215.123c.235.027.409-.12.406-.355-.002-.205-.015-.41-.023-.614a.343.343 0 01.125-.282 1.31 1.31 0 01.148-.109l1.643-1.065c.85-.551 1.7-1.104 2.55-1.654.144-.093.212-.217.187-.386-.02-.133-.122-.207-.215-.285zm-7.298.992c-.402-.405-.81-.803-1.215-1.205l-1.799-1.79a.386.386 0 00-.562.028c-.45.475-.901.949-1.352 1.422-.418.437-.834.875-1.255 1.309-.187.191-.184.43.012.608.35.32.689.653 1.033.98.06.058.125.113.187.17a.33.33 0 00.24.095h.196c.266-.014.554-.032.843-.043.489-.02.978-.033 1.467-.056.121-.005.254-.01.36-.06.59-.272 1.174-.557 1.76-.84.175-.084.25-.211.212-.397a.47.47 0 00-.127-.221zm2.478-8.049c.091.14.176.286.263.43.77 1.267 1.543 2.533 2.308 3.803a.49.49 0 00.807.055c.523-.705 1.053-1.406 1.577-2.11a.664.664 0 00.154-.398l.022-.01c-.037-.085-.062-.178-.112-.255-.372-.572-.749-1.142-1.125-1.712-.178-.27-.355-.543-.535-.812-.104-.156-.254-.243-.443-.21-.857.15-1.712.313-2.57.456-.321.053-.54.465-.346.763zm-1.505 3.532l.152-1.324.13-1.13.1-.88c-.01-.018-.027-.079-.061-.09-.041-.014-.099.01-.146.026-.023.008-.04.035-.058.055l-.656.69c-.446.468-.89.937-1.337 1.405l-1.958 2.049c-.137.143-.136.185.006.317.428.4.855.8 1.28 1.203.49.462.979.927 1.468 1.39.136.13.271.26.413.383.032.027.096.047.132.033.036-.014.069-.07.078-.112.019-.088.02-.18.03-.271l.148-1.301c.042-.37.087-.739.129-1.108l.15-1.335zm3.806 1.02c-.174-.283-.344-.568-.516-.852l-1.955-3.216c-.053-.088-.103-.179-.164-.261-.023-.03-.08-.059-.115-.053-.033.006-.062.055-.088.088-.01.014-.01.036-.014.055l-.099.71-.262 1.906-.27 1.951-.247 1.782-.11.808c.01.031.014.096.046.142.057.084.164.09.268.023.263-.166.525-.333.787-.501.834-.534 1.667-1.069 2.504-1.6.107-.067.159-.144.147-.27a.617.617 0 01.092-.404c.07-.107.06-.205-.004-.309zm-4.053-4.904l-.725.127-2.97.521-2.515.44c-.262.045-.524.09-.785.137-.143.025-.215.096-.225.221-.007.092.043.157.106.217.472.443.944.886 1.414 1.33.484.457.967.917 1.45 1.375.155.148.276.148.425-.008.415-.434.827-.871 1.241-1.306l1.982-2.074.68-.715c.05-.053.094-.115.045-.181-.032-.043-.092-.064-.123-.084zm-6.739.632c-.04.028-.073.066-.11.099l.022.041c.037 0 .074.006.11 0l2.57-.462 2.354-.423c.663-.119 1.326-.24 1.99-.358.09-.016.14-.06.173-.144a1.34 1.34 0 01.138-.248c.042-.062.064-.12.03-.19l-.119-.26c-.309-.666-.618-1.333-.929-1.999-.075-.162-.17-.183-.32-.081l-4.51 3.072c-.467.317-.933.634-1.399.953zm-4.69 1.526c.057-.013.114-.02.168-.039.801-.285 1.602-.573 2.404-.855a.36.36 0 00.249-.26.692.692 0 01.512-.51.434.434 0 00.3-.255c.276-.573.558-1.144.836-1.716.152-.312.304-.623.451-.937a.359.359 0 00-.034-.389.348.348 0 00-.354-.144.638.638 0 00-.201.08c-.976.562-1.95 1.126-2.926 1.687a.659.659 0 00-.25.245c-.366.629-.736 1.256-1.104 1.885-.128.217-.26.431-.379.653-.141.263.034.55.329.555zm4.153-1.826c-.004.075.063.117.133.087.031-.014.06-.035.088-.054l1.18-.804 3.694-2.513.618-.421c.08-.054.142-.118.135-.215 0-.159-.112-.257-.274-.25-.227.011-.454.027-.68.036l-1.93.073c-.327.013-.654.03-.981.04-.124.005-.197.06-.247.17-.215.479-.436.956-.654 1.434-.35.766-.7 1.531-1.048 2.297a.346.346 0 00-.034.12zm-1.363 1.65c.032-.05.071-.103.024-.166-.052-.07-.115-.042-.178-.023l-.265.082-2.015.64c-.356.113-.712.226-1.068.341-.119.039-.16.093-.162.22.006.023.017.071.033.118l.67 1.882c.076.215.151.43.232.644.05.134.19.187.296.11a.425.425 0 00.101-.121l1.84-2.94c.164-.263.329-.524.492-.787zm16.118 2.609c-.077-.438-.155-.875-.231-1.313-.022-.129-.09-.22-.222-.25-.126-.027-.225.023-.3.126l-.225.303c-.369.497-.736.995-1.106 1.49-.08.109-.101.218-.039.341.065.128.07.266.046.402-.024.136.02.235.122.32.453.379.906.758 1.357 1.139.22.185.438.121.514-.154l.265-.956c.016-.059.026-.119.037-.168-.006-.049-.01-.087-.016-.124l-.202-1.156zm-7.564-7.944l.545 1.182c.143.307.288.613.43.92.034.076.08.13.17.133.247.01.44.12.597.303.028.032.072.049.095.064l.08-.016c.806-.145 1.613-.291 2.42-.435.074-.013.137-.03.151-.114.014-.084-.04-.123-.106-.156l-.597-.3-3.362-1.68c-.083-.04-.162-.09-.25-.118a.24.24 0 00-.17.011c-.06.034-.05.104-.022.164l.019.042z" fill-rule="evenodd"/>`;
  }
};
export default Dbc;
