// 等待页面加载完成之后加载的函数,
window.addEventListener('load', function () {
    // 封装成函数调用
    // /* 头部js */
    // searchGradient();
    // /* 秒杀js */
    // timeDown();
    // // 轮播图
    // slide();

    // 将所有功能放在对象中,直接调用对象里的方法
    jdEffect.searchGradient();
    jdEffect.timeDown();
    jdEffect.slide();

});


// //头部渐变功能
// function searchGradient() {
//     // 1.获取header顶部元素
//     var header = document.querySelector('#header');
//     // 2.给HTML添加一个onscroll事件
//     window.addEventListener('scroll', setScroll);
//     setScroll();
//     //防止突然刷新页面没有触发事件 无法生效背景色
//     function setScroll() {
//         // 3.获取滚动的高度
//         var scrollTop = document.documentElement.scrollTop;
//         // 4.获取轮播图的高度
//         var slideHeight = document.querySelector('#slide').offsetHeight;
//         // 5.计算透明度值 (滚动的高度/轮播图的高度)
//         var opacity = scrollTop / slideHeight;
//         // 6.判断透明的的值
//         if (opacity > 1) {
//             // >1就设置透明度为1
//             header.style.backgroundColor = 'rgba(222, 24, 27, 1)';
//         }
//         else {
//             //<1就设置
//             header.style.backgroundColor = 'rgba(222, 24, 27, ' + opacity + ')';
//         }
//     }
// }
// //秒杀倒计时
// function timeDown() {
//     // 1.得到一个未来事件(new Date 获取到的时间月份是0-11)
//     //getTime()获取到从1970.1.1.00.00到指定的时间的毫秒数
//     var futureTime = Math.floor(new Date(2018, 8, 22, 18, 00, 00).getTime());
//     // 2.获取当前时间
//     //getTime()获取到从1970.1.1.00.00到现在时间的毫秒数
//     var currentTime = Math.floor(new Date().getTime());
//     //3.获取秒杀的秒数
//     var time = (futureTime - currentTime) / 1000;  //得到秒数
//     // 获取秒杀区域的span
//     var spans = document.querySelectorAll('.seckill-time span');
//     // 设置定时器
//     setInterval(setSeckill, 1000);
//     setSeckill();
//     function setSeckill() {
//         // 总秒数减1,执行一次定时器
//         time--;
//         if (time < 0) {
//             //time当前倒计时结束 开启下一段倒计时
//             time = 7200;
//             //当到了时间再次从后台获取下一次倒计时的时间
//         }
//         // 时 总秒数/3600
//         var hour = Math.floor(time / 3600);
//         // 分 5200%3600   1600  总秒数 % 3600 / 60
//         var minute = Math.floor(time % 3600 / 60);
//         // 秒 5200 % 3600 % 60   可以直接%60
//         var second = Math.floor(time % 60);
//         // 4. 分别把时分秒十位个位放到倒计时的时分秒的span上 
//         spans[0].innerHTML = Math.floor(hour / 10);
//         spans[1].innerHTML = Math.floor(hour % 10);
//         spans[3].innerHTML = Math.floor(minute / 10);
//         spans[4].innerHTML = Math.floor(minute % 10);
//         spans[6].innerHTML = Math.floor(second / 10);
//         spans[7].innerHTML = Math.floor(second % 10);
//     }
// }
// // 轮播图
// function slide() {
//     var mySwiper = new Swiper('.swiper-container', {
//         direction: 'horizontal', // 垂直切换选项
//         loop: true, // 循环模式选项
//         autoplay: true,
//         delay: 1000,//1秒切换一次
//         // 如果需要分页器
//         pagination: {
//             el: '.swiper-pagination',
//         }
//     })
// }


var jdEffect = {
    //头部渐变功能
    searchGradient: function () {  // 1.获取header顶部元素
        var header = document.querySelector('#header');
        // 2.给HTML添加一个onscroll事件
        window.addEventListener('scroll', setScroll);
        setScroll();
        //防止突然刷新页面没有触发事件 无法生效背景色
        function setScroll() {
            // 3.获取滚动的高度(兼容处理)
            var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
            // 4.获取轮播图的高度
            var slideHeight = document.querySelector('#slide').offsetHeight;
            // 5.计算透明度值 (滚动的高度/轮播图的高度)
            var opacity = scrollTop / slideHeight;
            // 6.判断透明的的值
            if (opacity > 1) {
                // >1就设置透明度为1
                header.style.backgroundColor = 'rgba(222, 24, 27, 1)';
            }
            else {
                //<1就设置
                header.style.backgroundColor = 'rgba(222, 24, 27, ' + opacity + ')';
            }
        }
    },
    //秒杀倒计时
    timeDown: function () {   // 1.得到一个未来事件(new Date 获取到的时间月份是0-11)
        //getTime()获取到从1970.1.1.00.00到指定的时间的毫秒数
        var futureTime = Math.floor(new Date(2018, 8, 22, 18, 00, 00).getTime());
        // 2.获取当前时间
        //getTime()获取到从1970.1.1.00.00到现在时间的毫秒数
        var currentTime = Math.floor(new Date().getTime());
        //3.获取秒杀的秒数
        var time = (futureTime - currentTime) / 1000;  //得到秒数
        // 获取秒杀区域的span
        var spans = document.querySelectorAll('.seckill-time span');
        // 设置定时器
        setInterval(setSeckill, 1000);
        setSeckill();
        function setSeckill() {
            // 总秒数减1,执行一次定时器
            time--;
            if (time < 0) {
                //time当前倒计时结束 开启下一段倒计时
                time = 7200;
                //当到了时间再次从后台获取下一次倒计时的时间
            }
            // 时 总秒数/3600
            var hour = Math.floor(time / 3600);
            // 分 5200%3600   1600  总秒数 % 3600 / 60
            var minute = Math.floor(time % 3600 / 60);
            // 秒 5200 % 3600 % 60   可以直接%60
            var second = Math.floor(time % 60);
            // 4. 分别把时分秒十位个位放到倒计时的时分秒的span上 
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(minute / 10);
            spans[4].innerHTML = Math.floor(minute % 10);
            spans[6].innerHTML = Math.floor(second / 10);
            spans[7].innerHTML = Math.floor(second % 10);
        }
    },
    //轮番图
    slide: function () {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,
            delay: 1000,//1秒切换一次
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}