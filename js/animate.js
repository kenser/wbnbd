window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function animateStart(){
  window.setTimeout(animateType, 1000);
}
function animateType() {
  $('#nv').html('只要输入“'+ getHash('q') + '”');
  var str = getHash('q')
  var typed = $("#kw").attr("value");
  var toBeType = str[typed.length];
  if(toBeType === undefined) {
    animateMoveToButton();
    return ;
  }
  $("#kw").attr("value", typed + toBeType);
  requestAnimFrame(animateType);
}
function redirect(){
  window.location.href = "http://www.baidu.com/s?wd=" + $('#kw').attr('value') + "&rsv_bp=0&rsv_spt=3";
}
function clickButton(){
  location.hash = '#click=true' 
  $('#nv').html('再按下这里，简单吧。');
  $("#su").addClass('s_btn_h');
  window.setTimeout(redirect, 1000);
}
function animateMoveToButton(){
  var dest = $("#su").offset();
  $("#cursor").css("background", "url(img/mouse_arrow_windows_aero.png)");
  $("#cursor").animate({ left: dest.left + 45, top: dest.top + 16 }, 1000 , "linear", clickButton);
}
function typeStart(){
  var start = $("#cursor").offset();
  $("#cursor").css("background", "url(img/mouse_text_windows_aero.png)");
  $("#cursor").animate({ left: start.left + 4, top: start.top + 4}, 100 , "linear", animateStart);
}
		
window.onload = function(){
  if(getHash('q') === null) {
    $nv = $('#nv');
    $nv.find('.welcome').show();

var clipboard = new Clipboard('#copy');

clipboard.on('success', function(e) {
  console.log(e);
  console.log('success');
});

clipboard.on('error', function(e) {
  console.log('error')
});
    if(location.hash === '#click=true' ) $('#after-ad').show();
    $('#su').click(function() {
      var url = location.protocol + '//' + location.host + '/#q=' + encodeURIComponent($('#kw').attr('value'));
      $nv.find('#generated-url').val(url);
      $nv.find('.welcome').hide();
      $nv.find('.share').show();
    });
  } else {
    $('#nv').html('想知道“'+ getHash('q') + '”是什么？');
    var dest = $(".s_ipt_wr").offset();
    $("#cursor").css("background", "url(img/mouse_arrow_windows_aero.png)");
    $("#cursor").animate({ left: dest.left, top: dest.top }, 1000 , "linear", typeStart);
  }
};

function getHash(name) {
  var hash = location.hash.match(RegExp("[#|&]"+name+'=(.+?)(&|$)'));
  if(hash) return decodeURIComponent(hash[1]);
  else return null;
}

function initGA(){
    window._gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-32754844-2']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
}

function initBDTJ() {
    window._hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?f6b1183b2b2fe89a44597c9b043ab626";
        if(window.location.hash!=null){
            _hmt.push(['_trackEvent', 'search', 'search', 'keyword', window.location.hash]);
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}