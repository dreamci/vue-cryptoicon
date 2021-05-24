const Exp = {
  symbol: 'exp',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FFAA5C"/><path fill="#FFF" d="M26 14.717c-.004.039-.01.077-.01.116-.005 1.22-.01 2.441-.012 3.662l-.004 2.507c0 .08-.007.16-.012.26-.044-.02-.076-.033-.106-.05l-4.654-2.595c-.083-.046-.09-.087-.05-.169.793-1.628.796-3.26.015-4.892-.037-.078-.03-.117.05-.161l4.656-2.613c.039-.022.084-.033.127-.049v3.984zM16.3 5c.078.047.155.097.235.142l9.049 5.085c.034.019.066.04.113.068-.042.027-.07.047-.101.064l-4.618 2.579c-.121.067-.12.066-.2-.048-1.024-1.435-2.428-2.255-4.212-2.463a1.3 1.3 0 00-.16-.01c-.094 0-.13-.036-.13-.135-.001-1.013-.007-2.027-.01-3.04l-.003-2.099c0-.048.011-.095.017-.143h.02zm-.62 22c-.034-.025-.065-.053-.1-.073l-9.117-5.125c-.043-.024-.084-.05-.143-.084.04-.027.066-.048.096-.065 1.53-.855 3.06-1.709 4.59-2.566.092-.052.135-.032.192.047.956 1.326 2.262 2.11 3.901 2.377.167.027.338.04.507.048.096.004.134.03.134.13-.001.897.003 1.794.006 2.69l.005 2.546c0 .025-.007.05-.011.075h-.06zM6 20.45c.005-.03.015-.061.016-.092l.004-1.263.007-2.827.013-4.459.005-.961c0-.028.004-.056.007-.101.044.021.076.034.106.051 1.522.85 3.043 1.7 4.567 2.548.089.049.101.087.057.18-.8 1.641-.796 3.284 0 4.927.065.132.067.131-.063.204-1.528.86-3.056 1.718-4.585 2.575-.039.022-.09.024-.134.035v-.816zm13.473-.93c.163-.573.216-1.15.18-1.736-.042-.718-.22-1.4-.594-2.026-.43-.722-1.052-1.245-1.81-1.625-.2-.101-.222-.05-.103-.3.269-.563.74-.913 1.32-1.137a4.11 4.11 0 011.258-.246.236.236 0 01.16.072 4.994 4.994 0 011.338 2.739c.383 2.607-1.316 5.054-3.954 5.702-2.927.72-5.896-1.082-6.504-3.944-.568-2.679 1.148-5.27 3.708-5.954 1.923-.513 3.629-.104 5.122 1.17l.169.144-.021.032c-.147-.018-.293-.04-.44-.054-.913-.086-1.811-.026-2.682.273a4.465 4.465 0 00-2.508 2.085c-.08.142-.086.143-.24.09a1.31 1.31 0 01-.519-.337 2.747 2.747 0 01-.629-1.039c-.117-.34-.203-.69-.303-1.035-.008-.027-.014-.055-.038-.084-.014.08-.03.158-.042.238-.012.08-.022.16-.03.24-.095.894-.044 1.774.265 2.627.384 1.064 1.107 1.83 2.163 2.296.138.061.138.062.064.188-.391.664-1.004.998-1.761 1.112-.352.053-.704.032-1.063.006.033.013.065.028.098.04 1.73.595 3.63.328 5.061-1.186a6.93 6.93 0 00.938-1.267c.068-.118.073-.119.183-.039.469.342.748.81.94 1.335.179.483.25.985.267 1.496.001.041.004.082.007.123zm6.268 2.212l-9.463 5.249c-.005-.055-.012-.089-.012-.122 0-1.73 0-3.46-.002-5.19 0-.077.023-.105.106-.112 1.84-.152 3.299-.958 4.37-2.423.093-.129.092-.13.23-.053l4.643 2.575c.036.02.072.043.128.076zM15.739 5.036c.003.056.006.09.006.124 0 1.707 0 3.414.002 5.12 0 .08-.012.12-.11.127-1.878.136-3.363.949-4.451 2.443-.086.118-.084.119-.21.049l-4.521-2.51c-.053-.03-.102-.066-.153-.1.052-.036.1-.077.156-.108l9.11-5.056c.051-.028.103-.053.17-.089z"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10-17.283v-3.984c-.043.016-.088.027-.127.049l-4.656 2.613c-.08.044-.087.083-.05.16.781 1.634.778 3.265-.015 4.893-.04.082-.033.123.05.17 1.552.863 3.103 1.73 4.654 2.595.03.016.062.029.106.049.005-.1.012-.18.012-.26l.004-2.507c.003-1.22.007-2.442.012-3.662 0-.039.006-.077.01-.116zM16.3 5h-.02c-.006.048-.017.095-.017.143 0 .7 0 1.4.003 2.099.003 1.013.009 2.027.01 3.04 0 .099.036.135.13.135a1.3 1.3 0 01.16.01c1.784.208 3.188 1.028 4.211 2.463.081.114.08.115.2.048l4.619-2.579c.03-.017.059-.037.101-.064-.047-.028-.08-.05-.113-.068l-9.049-5.085c-.08-.045-.157-.095-.235-.142zm-.62 22h.06c.004-.025.011-.05.011-.075l-.005-2.545c-.003-.897-.007-1.794-.006-2.691 0-.1-.038-.126-.134-.13a4.507 4.507 0 01-.507-.048c-1.639-.266-2.945-1.051-3.9-2.377-.058-.08-.1-.099-.193-.047-1.53.857-3.06 1.711-4.59 2.566-.03.017-.056.038-.096.065.059.035.1.06.143.084l9.116 5.125c.036.02.067.048.101.073zM6 20.45v.817c.045-.011.095-.013.134-.035a4127.01 4127.01 0 004.585-2.575c.13-.073.128-.072.063-.204-.796-1.643-.8-3.286 0-4.928.044-.092.032-.13-.057-.18-1.524-.847-3.045-1.697-4.567-2.547-.03-.017-.062-.03-.106-.051-.003.045-.007.073-.007.1l-.005.962c-.005 1.487-.01 2.973-.013 4.46l-.007 2.826c0 .421-.002.842-.004 1.263 0 .03-.01.062-.016.093zm13.473-.93c-.003-.042-.006-.083-.007-.124-.018-.51-.088-1.013-.266-1.496-.193-.524-.472-.993-.94-1.335-.111-.08-.116-.079-.184.039a6.93 6.93 0 01-.938 1.267c-1.43 1.514-3.332 1.78-5.06 1.185-.034-.011-.066-.026-.099-.04.359.027.711.048 1.063-.005.757-.114 1.37-.448 1.76-1.112.075-.126.075-.127-.063-.188-1.056-.467-1.779-1.232-2.163-2.296-.309-.853-.36-1.733-.266-2.626.009-.08.02-.161.031-.241.013-.08.028-.159.042-.238.024.029.03.057.038.084.1.346.186.696.303 1.035.134.387.338.74.63 1.039.146.15.315.268.517.337.155.053.16.052.24-.09a4.465 4.465 0 012.509-2.085c.87-.299 1.769-.359 2.682-.273.147.014.293.036.44.054l.02-.032-.168-.144c-1.493-1.274-3.199-1.683-5.122-1.17-2.56.684-4.276 3.275-3.708 5.954.608 2.862 3.577 4.664 6.504 3.944 2.638-.648 4.337-3.095 3.954-5.702a4.994 4.994 0 00-1.337-2.74.236.236 0 00-.16-.071 4.11 4.11 0 00-1.259.246c-.58.224-1.051.574-1.32 1.137-.119.25-.098.199.103.3.758.38 1.38.903 1.81 1.625.374.627.552 1.308.595 2.026a5.147 5.147 0 01-.181 1.735zm6.268 2.212c-.056-.033-.092-.056-.128-.076l-4.644-2.575c-.137-.076-.136-.076-.23.053-1.07 1.465-2.528 2.271-4.37 2.423-.082.007-.105.035-.105.113.002 1.73.001 3.459.002 5.189 0 .033.007.067.012.122l9.463-5.25zM15.739 5.036c-.068.036-.12.061-.17.089-3.037 1.685-6.075 3.37-9.111 5.056-.055.031-.104.072-.156.108.05.034.1.07.153.1l4.52 2.51c.127.07.125.069.21-.049 1.089-1.494 2.574-2.307 4.451-2.443.1-.007.11-.047.11-.127V5.16c0-.034-.004-.068-.007-.124z"/>`;
  }
};
export default Exp;
