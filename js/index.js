(function ($) {

    function init(){
        document.getElementById("bgmusic").play();
    }

    /**
     * 初始化swiper插件的函数
     */
    function startUpSwiper() {
        let mySwiper = new Swiper(".swiper-container", {
            direction: "vertical",
            initialSlide: 0,
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素 
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        });
    }
    /**
     * 控制音频的函数
     */
    function controlAudio() {
        $("#music-btn").on("click", function () {
            // 如果存在这个off说明我们需要关闭这个音频
            if ($(this).toggleClass("off").hasClass("off")) {
                $(this).find("audio").get(0).pause();
            } else {
                $(this).find("audio").get(0).play()
            }
        });
    }
    controlAudio();
    startUpSwiper();
    init();

})(jQuery)