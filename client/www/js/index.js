var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        nfc.addNdefListener(onReadNdefTag);
    },
    onDeviceReady: function() {
        var parentElement = document.getElementById('app');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    },
    onreadNdefTag: function(nfcEvent) {
        var parentElement = document.getElementById('app');
        var outputElement = parentElement.querySelector('.output_element');

        outputElement.innerHtml = "Read NFC tag with contents: " + JSON.stringify(nfcEvent);
    }
};