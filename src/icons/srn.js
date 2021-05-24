const Srn = {
  symbol: 'srn',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#1c1c1c" r="16"/><path d="M15.715 13.433c.306.125.612.062.857 0 .184.624.49 1.185.795 1.434-.183 1.56-.734 2.121-1.346 2.121-.856 0-1.285-1.809-1.285-2.12.184-.125.735-.5.98-1.435zm-.918 5.489c.368-.312.612-.811.918-1.622.245.125.612.062.857 0 .184.873.367 1.435.795 1.684-.122.998-.734 1.684-1.285 1.684-.795 0-1.162-1.247-1.285-1.746zm-4.895 1.933c.245-.312.245-.81.123-1.746.183.062.367.062.49 0 .366.873.672 1.434 1.162 1.746.061.437 0 .936-.184.998-.673.312-1.285-.499-1.59-.998zm-2.57-1.684c.123 0 .184 0 .306.063.429 1.122 1.163 1.746 1.163 1.746.245.499.367.998.183.998-.55.062-.979-.312-1.407-1.123.061-.187 0-.312-.245-1.684zm-1.652 0c.612 2.62 1.775 2.495 1.714 2.37-.245-.436-.49-.623-.735-.81-.55-.562-.979-1.747-.979-1.56zm7.465 1.684c.429-.312.49-.998.551-1.87.245.061.55.061.734 0 .123.56.306 1.371.857 1.746-.061.686-.245 1.06-.673 1.122-.306.125-1.163.125-1.469-.998zm-5.262-1.933c.245-.312.306-.811.367-1.497.184.062.429.062.55 0 .184.81.49 1.31.858 1.56.122 1.309 0 1.746-.245 1.746-.55 0-1.285-1.186-1.53-1.81zm-1.897 0c0-.125.061-.936.123-1.497h.244c.306 1.185.735 1.56.735 1.56.306 1.434.306 1.808.06 1.683-.55-.187-.978-1.247-1.162-1.746zm4.895 0c.306-.25.49-.686.612-1.497.306.124.612.062.796 0 .183.81.49 1.31.918 1.56 0 .685-.062 1.808-.918 1.62-.735-.186-1.346-1.434-1.408-1.683zm-.55-.187c-.735 0-1.163-1.186-1.163-1.56.367-.374.55-1.06.734-2.245.123.062.306.062.49 0 .061 1.31.428 1.871.734 2.183-.122 1.06-.428 1.622-.795 1.622zm-3.794-1.56c.122-.25.122-.312.49-2.245h.305c0 1.31.367 1.933.551 2.183-.061.686.061 1.622-.49 1.622-.244 0-.55-.312-.856-1.56zm-1.224-2.183c.184.063.061 1.684.306 2.246 0 0 0 1.559-.122 1.434-.918-1.123-.306-3.742-.184-3.68zm7.343 2.183c.428-.312.673-.998 1.04-2.245.245.062.55.062.734 0 .123.935.367 1.622.857 2.12-.122.998-.612 1.685-1.224 1.685-.979 0-1.346-1.373-1.407-1.56zm-5.018-2.432c.49-.187.796-1.248.857-1.373a.367.367 0 00.49 0c0 .811.244 1.186.428 1.31-.184 1.06-.429 2.308-.98 2.308-.489 0-.734-1.123-.795-2.245zm-1.53 2.307c-.428 0-.55-1.621-.428-2.307 0 0 .367-.562.612-1.373.061 0 .184.063.245 0-.061.811.061 1.186.183 1.373 0 0-.305 2.307-.611 2.307zm4.651-2.307c.245-.125.734-.811.979-1.435.245.125.49.125.795.062.123.687.306 1.123.735 1.373-.184 1.122-.551 2.245-1.346 2.245-.735 0-1.102-1.497-1.163-2.245zm.55-1.684c-.366.998-.734 1.559-1.223 1.559-.612 0-.673-1.31-.673-1.435.49-.374.856-1.122 1.162-1.746h.429c-.123.935.122 1.372.306 1.622zm-2.998-1.56c-.306.873-.183 1.31-.06 1.622-.49 1.247-.735 1.56-1.102 1.56-.367-.063-.367-.812-.245-1.435.367-.25 1.163-1.684 1.163-1.747zm-1.774.063c.183-.063-.49.873-.428 1.31.06.623-.674 1.684-.735 1.621-.244-.062.245-2.308 1.163-2.931zm8.689 1.497c-.184.686-.429 1.559-1.469 1.559-.55-.062-.856-.81-.979-1.435.612-.436.918-1.185 1.102-1.746.183.062.49.062.673 0 .122.935.428 1.372.673 1.622zm-8.322-1.685c.122-.062.918-1.122 1.346-1.122.245.062-.428.686-.367.998-.184.312-1.04 1.87-1.346 1.87-.245 0-.245-.81.367-1.746zm15.053 7.735c-.062.935-.062 1.434.122 1.746-.245.5-.918 1.248-1.59.998-.246-.062-.246-.561-.185-.998.551-.312.918-.935 1.163-1.746.122.062.306.062.49 0zm2.447 0c.061.062.184.062.306-.063-.245 1.373-.306 1.497-.245 1.685-.428.81-.856 1.122-1.407 1.122-.245 0-.122-.436.184-.998 0 0 .734-.623 1.162-1.746zm.98 1.622c-.246.249-.49.374-.674.81-.061.125 1.102.25 1.713-2.37-.122-.187-.49.998-1.04 1.56zm-7.038-1.622c0 .748.184 1.434.551 1.871-.306 1.06-1.162 1.06-1.468.998-.429-.125-.551-.499-.673-1.123.489-.436.734-1.185.856-1.746.245.062.49.062.734 0zm5.507-1.747c0 .749.062 1.248.368 1.497-.245.624-1.04 1.81-1.53 1.81-.245 0-.367-.437-.245-1.747.367-.25.673-.874.857-1.56a.562.562 0 00.55 0zm2.203.125c0 .5 0 1.31.123 1.497-.245.5-.673 1.56-1.163 1.747-.306.062-.245-.312.061-1.685 0 0 .429-.436.735-1.559zm-5.446-.125c.123.874.245 1.31.612 1.497-.06.312-.734 1.56-1.407 1.684-.857.188-.918-.998-.918-1.621.428-.25.734-.811.918-1.56.184.063.49.125.795 0zm2.326-.187c-.062.374-.551 1.56-1.163 1.56-.367 0-.673-.624-.795-1.622.306-.25.673-.873.734-2.183a.664.664 0 00.49 0c.244 1.123.428 1.871.734 2.245zm2.141-2.245c.306 1.933.367 1.996.49 2.245-.306 1.185-.612 1.56-.857 1.56-.55 0-.428-.998-.49-1.622.245-.25.551-.873.551-2.183.123.062.184 0 .306 0zm1.285 2.245c.306-.499.184-2.12.306-2.245.184-.063.734 2.682-.183 3.68-.123.125-.123-1.435-.123-1.435zM18.53 14.93c.184 1.247.49 1.933 1.04 2.245-.061.187-.55 1.56-1.407 1.56-.673.062-1.04-.749-1.224-1.685.428-.498.734-1.185.857-2.12.122.062.428.062.734 0zm5.079-1.56c0 .125.367 1.186.795 1.497 0 1.06-.306 2.246-.795 2.246-.551 0-.796-1.185-.98-2.308.184-.187.429-.624.429-1.372a.585.585 0 00.55-.063zm2.753 1.373c.061.686-.061 2.307-.367 2.245-.306 0-.612-2.308-.612-2.308.123-.187.245-.623.184-1.31a.183.183 0 00.245 0c.244.811.55 1.373.55 1.373zm-5.996-1.373c.244.562.673 1.248 1.04 1.435-.061.749-.49 2.245-1.163 2.245-.918.063-1.162-1.06-1.346-2.245.367-.25.612-.748.673-1.372.245.062.55.062.796-.063zm1.53 1.186c-.429.062-.796-.5-1.224-1.497.244-.25.428-.749.306-1.622.183.062.306.062.428 0 .367.686.734 1.372 1.162 1.684 0 .187-.06 1.435-.673 1.435zm1.957-1.497c.062-.25.184-.687-.183-1.622h.245c0 .062.856 1.56 1.162 1.746.123.686.123 1.373-.245 1.435-.305 0-.55-.312-.979-1.56zm2.08-.188c.062-.436-.55-1.372-.489-1.31.98.624 1.347 2.87 1.163 2.932-.061.063-.734-1.06-.673-1.622zm-7.77 1.685c-.918.062-1.163-.811-1.346-1.497.306-.188.612-.749.673-1.622.183.062.49.062.673 0 .183.561.49 1.31.979 1.684-.061.748-.367 1.372-.98 1.435zm5.69-4.304c.306 0 1.224 1.06 1.285 1.122.674.998.674 1.747.429 1.747-.367 0-1.163-1.56-1.346-1.871.06-.312-.612-.998-.368-.998zm-13.584.187c-.122.374-.183.748 0 .935-.367.749-.979 1.81-1.53 1.747-.611-.125-.122-1.56-.06-1.684.367-.187 1.223-1.372 1.53-1.372.183.062.06.374.06.374zm2.876-.062c0 .374.062.81.367.997-.244.749-.734 1.747-1.53 1.685-.55-.063-.672-.998-.55-1.685.55-.187 1.04-1.372 1.407-1.372.306 0 .306.312.306.375zm8.69.997c.122-.187.122-.56 0-.935 0-.062-.123-.374.06-.374.306 0 1.163 1.185 1.53 1.372.061.125.55 1.56-.061 1.684-.612.062-1.163-1.06-1.53-1.747zm-3.244 0c.245-.187.306-.623.367-.997 0-.063 0-.375.306-.375.306-.062.918 1.185 1.408 1.372.183.811.06 1.622-.551 1.685-.857.124-1.285-.998-1.53-1.685zm-2.57-1.372c.612 0 .612 1.185 1.102 1.435 0 .312-.184 1.684-1.163 1.684-.857 0-1.04-1.123-1.101-1.684.734-.312.49-1.435 1.162-1.435z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.285-18.567c-.244.935-.795 1.31-.979 1.434 0 .312.429 2.121 1.285 2.121.612 0 1.163-.561 1.346-2.12-.306-.25-.611-.811-.795-1.435-.245.062-.55.125-.857 0zm-.918 5.489c.123.499.49 1.746 1.285 1.746.551 0 1.163-.686 1.285-1.684-.428-.25-.611-.81-.795-1.684-.245.062-.612.125-.857 0-.306.81-.55 1.31-.918 1.622zm-4.895 1.933c.306.5.918 1.31 1.591.998.184-.062.245-.561.184-.998-.49-.312-.796-.873-1.163-1.746-.122.062-.306.062-.49 0 .123.935.123 1.434-.122 1.746zm-2.57-1.684c.245 1.372.306 1.497.245 1.684.428.811.857 1.185 1.407 1.123.184 0 .062-.499-.183-.998 0 0-.734-.624-1.163-1.746-.122-.063-.183-.063-.306-.063zm-1.652 0c0-.187.429.998.98 1.56.244.187.489.374.734.81.06.125-1.102.25-1.714-2.37zm7.465 1.684c.306 1.123 1.163 1.123 1.469.998.428-.062.612-.436.673-1.122-.55-.375-.734-1.186-.857-1.747-.183.062-.49.062-.734 0-.061.873-.122 1.56-.55 1.871zm-5.262-1.933c.245.623.98 1.809 1.53 1.809.245 0 .367-.437.245-1.747-.368-.25-.674-.748-.857-1.56-.122.063-.367.063-.55 0-.062.687-.123 1.186-.368 1.498zm-1.897 0c.184.499.612 1.56 1.163 1.746.245.125.245-.25-.061-1.684 0 0-.429-.374-.735-1.56H6.11a28.168 28.168 0 00-.123 1.498zm4.895 0c.062.25.673 1.497 1.408 1.684.856.187.918-.936.918-1.622-.429-.25-.735-.748-.918-1.56-.184.063-.49.125-.796 0-.122.812-.306 1.248-.612 1.498zm-.55-.187c.367 0 .673-.562.795-1.622-.306-.312-.673-.873-.734-2.183-.184.062-.367.062-.49 0-.183 1.185-.367 1.871-.734 2.245 0 .374.428 1.56 1.163 1.56zm-3.794-1.56c.306 1.248.612 1.56.857 1.56.55 0 .428-.936.49-1.622-.185-.25-.552-.873-.552-2.183h-.306c-.367 1.933-.367 1.996-.49 2.245zm-1.224-2.183c-.122-.062-.734 2.557.184 3.68.122.125.122-1.434.122-1.434-.245-.562-.122-2.183-.306-2.246zm7.343 2.183c.061.187.428 1.56 1.407 1.56.612 0 1.102-.687 1.224-1.685-.49-.498-.734-1.185-.857-2.12-.183.062-.49.062-.734 0-.367 1.247-.612 1.933-1.04 2.245zm-5.018-2.432c.061 1.122.306 2.245.796 2.245.55 0 .795-1.247.979-2.308-.184-.124-.429-.499-.429-1.31a.367.367 0 01-.489 0c-.061.125-.367 1.186-.857 1.373zm-1.53 2.307c.307 0 .612-2.307.612-2.307-.122-.187-.244-.562-.183-1.373-.061.063-.184 0-.245 0a5.84 5.84 0 01-.612 1.373c-.122.686 0 2.307.429 2.307zm4.651-2.307c.061.748.428 2.245 1.163 2.245.795 0 1.162-1.123 1.346-2.245-.429-.25-.612-.686-.735-1.373-.306.063-.55.063-.795-.062-.245.624-.734 1.31-.979 1.435zm.55-1.684c-.183-.25-.428-.687-.305-1.622h-.429c-.306.624-.673 1.372-1.162 1.746 0 .125.061 1.435.673 1.435.49 0 .857-.561 1.224-1.56zm-2.998-1.56h-.244c0 .063-.796 1.497-1.163 1.747-.122.623-.122 1.372.245 1.434.367 0 .612-.312 1.101-1.56-.122-.31-.245-.748.061-1.62zm-1.774.063c-.918.623-1.407 2.869-1.163 2.931.061.063.796-.998.735-1.622-.062-.436.611-1.372.428-1.31zm8.689 1.497c-.245-.25-.55-.687-.673-1.622a1.24 1.24 0 01-.673 0c-.184.561-.49 1.31-1.102 1.746.123.624.429 1.373.98 1.435 1.04 0 1.284-.873 1.468-1.56zm-8.322-1.685c-.612.936-.612 1.747-.367 1.747.306 0 1.162-1.56 1.346-1.871-.061-.312.612-.936.367-.998-.428 0-1.224 1.06-1.346 1.122zm15.053 7.735c-.184.062-.368.062-.49 0-.245.81-.612 1.434-1.163 1.746-.06.437-.06.936.184.998.673.25 1.346-.499 1.591-.998-.184-.312-.184-.81-.122-1.746zm2.447 0c-.428 1.123-1.162 1.746-1.162 1.746-.306.562-.429.998-.184.998.55 0 .979-.312 1.407-1.122-.06-.188 0-.312.245-1.685-.122.125-.245.125-.306.063zm.98 1.622c.55-.562.917-1.747 1.04-1.56-.612 2.62-1.775 2.495-1.714 2.37.184-.436.428-.561.673-.81zm-7.038-1.622c-.244.062-.49.062-.734 0-.122.561-.367 1.31-.856 1.746.122.624.244.998.673 1.123.306.062 1.162.062 1.468-.998-.367-.437-.55-1.123-.55-1.871zm5.507-1.747a.562.562 0 01-.55 0c-.184.686-.49 1.31-.857 1.56-.122 1.31 0 1.746.245 1.746.49 0 1.285-1.185 1.53-1.809-.306-.25-.368-.748-.368-1.497zm2.203.125h-.244c-.306 1.123-.735 1.56-.735 1.56-.306 1.372-.367 1.746-.06 1.684.489-.188.917-1.248 1.162-1.747-.123-.187-.123-.998-.123-1.497zm-5.446-.125c-.306.125-.611.063-.795 0-.184.749-.49 1.31-.918 1.56 0 .623.061 1.809.918 1.621.673-.124 1.346-1.372 1.407-1.684-.367-.187-.49-.623-.612-1.497zm2.326-.187c-.306-.374-.49-1.122-.735-2.245a.664.664 0 01-.49 0c-.06 1.31-.427 1.933-.733 2.183.122.998.428 1.622.795 1.622.612 0 1.101-1.186 1.163-1.56zm2.141-2.245c-.122 0-.183.062-.306 0 0 1.31-.306 1.933-.55 2.183.06.624-.062 1.622.49 1.622.244 0 .55-.375.856-1.56-.123-.25-.184-.312-.49-2.245zm1.285 2.245s0 1.56.123 1.435c.917-.998.367-3.743.183-3.68-.122.125 0 1.746-.306 2.245zM18.53 14.93c-.306.062-.612.062-.734 0-.123.935-.429 1.622-.857 2.12.184.936.55 1.747 1.224 1.685.857 0 1.346-1.373 1.407-1.56-.55-.312-.856-.998-1.04-2.245zm5.079-1.56a.585.585 0 01-.551.063c0 .748-.245 1.185-.428 1.372.183 1.123.428 2.308.979 2.308.49 0 .795-1.185.795-2.246-.428-.311-.795-1.372-.795-1.497zm2.753 1.373s-.306-.562-.55-1.373a.183.183 0 01-.245 0c.061.687-.061 1.123-.184 1.31 0 0 .306 2.308.612 2.308.306.062.428-1.56.367-2.245zm-5.996-1.373c-.245.125-.551.125-.796.063-.061.624-.306 1.123-.673 1.372.184 1.185.428 2.308 1.346 2.245.673 0 1.102-1.496 1.163-2.245-.367-.187-.796-.873-1.04-1.435zm1.53 1.186c.611 0 .672-1.248.672-1.435-.428-.312-.795-.998-1.162-1.684-.122.062-.245.062-.428 0 .122.873-.062 1.372-.306 1.622.428.998.795 1.559 1.223 1.497zm1.957-1.497c.429 1.247.674 1.559.98 1.559.367-.062.367-.749.244-1.435-.306-.187-1.162-1.684-1.162-1.746h-.245c.367.935.245 1.372.183 1.622zm2.08-.188c-.06.562.613 1.685.674 1.622.184-.062-.184-2.308-1.163-2.931-.06-.063.551.873.49 1.31zm-7.77 1.685c.612-.063.918-.687.979-1.435-.49-.374-.796-1.123-.98-1.684a1.237 1.237 0 01-.672 0c-.061.873-.367 1.434-.673 1.622.183.686.428 1.559 1.346 1.497zm5.69-4.304c-.244 0 .429.686.368.998.183.312.979 1.87 1.346 1.87.245 0 .245-.748-.429-1.746-.06-.062-.979-1.122-1.285-1.122zm-13.584.187s.123-.312-.06-.374c-.307 0-1.163 1.185-1.53 1.372-.062.125-.551 1.56.06 1.684.551.062 1.163-.998 1.53-1.747-.183-.187-.122-.56 0-.935zm2.876-.062c0-.063 0-.375-.306-.375-.367 0-.856 1.185-1.407 1.372-.122.687 0 1.622.55 1.685.796.062 1.286-.936 1.53-1.685-.305-.187-.367-.623-.367-.997zm8.69.997c.366.687.917 1.81 1.529 1.747.612-.125.122-1.56.061-1.684-.367-.187-1.224-1.372-1.53-1.372-.183 0-.06.312-.06.374.122.374.122.748 0 .935zm-3.244 0c.245.687.673 1.81 1.53 1.685.612-.063.734-.874.55-1.685-.489-.187-1.1-1.434-1.407-1.372-.306 0-.306.312-.306.375-.06.374-.122.81-.367.997zm-2.57-1.372c-.673 0-.428 1.123-1.162 1.435.06.561.244 1.684 1.101 1.684.98 0 1.163-1.372 1.163-1.684-.49-.25-.49-1.435-1.102-1.435z" fill-rule="evenodd"/>`;
  }
};
export default Srn;
