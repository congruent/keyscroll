var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var { Hotkey } = require("sdk/hotkeys");
var counter = 0;
var showHotKey = Hotkey({
    combo: "f1",
    onPress: function() {
    counter++;
    startScroll();
}
});
var showHotKey = Hotkey({
    combo: "f2",
    onPress: function() {
    startScroll();
    counter--;
}
});

function startScroll(){
        worker = require("sdk/tabs").activeTab.attach({
        contentScriptFile: [data.url("jquery.min.js"), data.url("pagescroll.js")  ]
        });
        worker.port.emit("count",counter);
}

