self.port.on("count", function(count) {
    var c = count;
    if (c > 0){
    var a = 100*$(document).height()/c;
    $(document).ready(function(){
     $('body,html').animate({ scrollTop: $(document).height() }, a , "linear"); 
    });
    }
    if (c <= 0){
    $(document).ready(function(){
     $('*').stop(1,1);
     $('*').clearQueue();
    });
    } 
    console.log(count);
});
