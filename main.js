// $(document).mousemove(function(e){
//     $('.pointer').css({left:e.pageX, top:e.pageY})
//   })
$(".container").mouseover(function(e){
    console.log("e.pageX", e.pageX, e.pageY)
      $('.butterfly1').css({left:`${e.pageX}px`, top:`${e.pageY}px`})
})

const container = document.getElementsByClassName("container")[0]
container.addEventListener('touchmove', function(e) {
    e.preventDefault();
    console.log("e", e.touches)
    var touch = e.touches[0];
    //alert(touch.pageX + " - " + touch.pageY);
    $('.butterfly1').css({left:`${touch.pageX}px`, top:`${touch.pageY}px`})
    $('.butterfly-2').css({left:`${touch.pageX + 20}px`, top:`${touch.pageY - 10}px`})
}, false);