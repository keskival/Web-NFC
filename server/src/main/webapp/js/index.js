var debugElement = document.getElementById('debug');
var waitingElement = document.getElementById('waiting');
var okElement = document.getElementById('ok');
var outputElement = document.getElementById('output');
var readNFCIndicatorElement = document.getElementById('readNFC');

var app = {
    initialize: function() {
        debugElement.innerHTML = debugElement.innerHTML + 'Initializing...\n';
        document.addEventListener('deviceready', app.onDeviceReady, false);
        debugElement.innerHTML = debugElement.innerHTML + 'Initialized.\n';
    },
    onDeviceReady: function() {
        debugElement.innerHTML = debugElement.innerHTML + 'onDeviceReady.\n';
        waitingElement.setAttribute('style', 'display: none;');
        okElement.setAttribute('style', 'display: block;');

        nfc.addNdefListener(app.onReadNdefTag, app.win, app.fail);

        debugElement.innerHTML = debugElement.innerHTML + 'onDeviceReady done.\n';
    },
    onReadNdefTag: function(nfcEvent) {
        var tag = nfcEvent.tag,
            ndefMessage = tag.ndefMessage;
        debugElement.innerHTML = debugElement.innerHTML + 'onReadNdefTag...\n';
        outputElement.innerHTML = "Read NFC tag with contents: " + JSON.stringify(ndefMessage) + ", payload: " +
            nfc.bytesToString(ndefMessage[0].payload).substring(3);
        readNFCIndicatorElement.setAttribute('style', 'display: block;');
        debugElement.innerHTML = debugElement.innerHTML + 'NDEF tag read.\n';
    },
    win: function() {
        debugElement.innerHTML = debugElement.innerHTML + 'win!';
    },
    fail: function(reason) {
        debugElement.innerHTML = debugElement.innerHTML + 'fail: ' + JSON.stringify(reason);
    }
};
