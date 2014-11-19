self.port.on("count", function(count) {
    var c = count;
    var a = parseInt(100*$(document).height()/(c+1));

    $(document).ready(function (){
        if (c < 0){
            $('body,html').clearQueue(); 
            console.log("exiting");
            return;
        } 
        $('body,html').stop(true,true); 
        $('body,html').animate({ scrollTop: $(document).height() }, a , "linear"); 
    console.log(count);
    });
});
