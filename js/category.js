window.addEventListener('load', function () {
    // 左边滑动初始化
    initLeftSlide();
    // 右边滑动初始化
    initRightSlide();
    // 左侧分类的点击吸顶效果
    ceilingLeft()

});

// 左边滑动初始化
function initLeftSlide() {
    var swiper = new Swiper('.main-left .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
}
// 右边滑动初始化
function initRightSlide() {
    var swiper = new Swiper('.main-right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });

}

// 左侧分类的点击吸顶效果
function ceilingLeft() {
    // 1.获取ul和li
    var ul = document.querySelector('.main-left ul');
    var lis = ul.children;
    // 2.给所有的li添加index索引
    for (var i = 0; i < lis.length; i++) {
        // 使用对象的方法添加
        lis[i].index = i;     
        // setAttribute添加到标签上
        // lis[i].setAttribute('index',i);
    }
    // 3.给所有的li添加点击事件(当需要给很多子元素添加重复事件的时候可以给父元素加事件,捕获到子元素)
    ul.addEventListener('click', function (e) {
        // 4..获取当前点击的li,真正触发事件的是a,需要获取a的父元素
        var li = e.target.parentNode;
        // 5..获取当前点击li的索引
        var index = li.index;
        // 6.获取当前点击li的高度
        var liHeight = li.offsetHeight;
        // 7.计算当前需要位移的距离
        var distanceY = -index * liHeight;
        // 8.计算最大的位移距离
         var maxDistanceY = document.querySelector('.main-left').offsetHeight - ul.offsetHeight;
        // 9 判断当前位移的距离是否大于最大的位移的距离,并进行移动
        if (distanceY > maxDistanceY) {  //获取的值都是负数
            // 如果移动的距离大于最大距离,移动的就离就为当前计算的位移
            // 滑动使用的是swiper创建,活动的时候改变的是类swiper-wrapper的div,所有就设置这个的translate3d(0px, -100.843px, 0px)
            ul.parentNode.parentNode.style.transform = 'translate3d(0px,' + distanceY + 'px, 0px)';
            // 给当前的位移的元素添加一个过渡效果让他慢慢位移
            ul.parentNode.parentNode.style.transitionDuration = '300ms';
        } else {
            // 如果移动的距离小于最大距离就固定移动的高度为最大高度
            ul.parentNode.parentNode.style.transform = 'translate3d(0px,' + maxDistanceY + 'px, 0px)';
            ul.parentNode.parentNode.style.transitionDuration = '300ms';
        }
        // 10. 给所有的li删除active 给当前的li去添加active
        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.remove('active');
        }
        li.classList.add('active');
    });
}

// 将所有方法使用添加到原型中
//   var JDcategory=function () {  }
//   JDcategory.prototype={

//   }