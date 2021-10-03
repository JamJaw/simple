/* works-slider ***************************************************************/
$(function(){
	if (window.matchMedia('(max-width: 480px)').matches) {
		$('.slider').slick({
            autoplay: true, //自動でスクロール
            autoplaySpeed: 1500, //自動再生のスライド切り替えまでの時間を設定
            speed: 2000, //スライドが流れる速度を設定
            arrows: false,
            centerMode: true,
            centerPadding: '25%',
        });
	} else if (window.matchMedia('(min-width:480px)').matches) {
        $('.slider').slick({
            autoplay: true, //自動でスクロール
            autoplaySpeed: 1500, //自動再生のスライド切り替えまでの時間を設定
            speed: 2000, //スライドが流れる速度を設定
            arrows: false,
            centerMode: true,
            centerPadding: '34.5%',
        });
}})

$(function(){

    /* first-slider ****************************************************************************/
    $('.first-slider').slick({
        autoplay: true, //自動でスクロール
        autoplaySpeed: 1500, //自動再生のスライド切り替えまでの時間を設定
        speed: 2000, //スライドが流れる速度を設定
        fade:true,
        arrows: false,
    });

    /* menu-nav *****************************************************************************/
    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
    });
    /**modal *******************************************************************/ 
    $(".openbtn1").click(function(){
        $(".menu-nav").toggleClass('open-modal');
        $(".openbtn1").toggleClass('openbtn1-color');
    })

});