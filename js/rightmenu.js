// let rmf = {};
// rmf.showRightMenu = function(isTrue, x=0, y=0){
//     let $rightMenu = $('#rightMenu');
//     $rightMenu.css('top',x+'px').css('left',y+'px');

//     if(isTrue){
//         $rightMenu.show();
//     }else{
//         $rightMenu.hide();
//     }
// }
// rmf.switchDarkMode = function(){
//     const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
//     if (nowMode === 'light') {
//         activateDarkMode()
//         saveToLocal.set('theme', 'dark', 2)
//         GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
//     } else {
//         activateLightMode()
//         saveToLocal.set('theme', 'light', 2)
//         GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
//     }
//     // handle some cases
//     typeof utterancesTheme === 'function' && utterancesTheme()
//     typeof FB === 'object' && window.loadFBComment()
//     window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
// };
// rmf.switchReadMode = function(){
//     const $body = document.body
//     $body.classList.add('read-mode')
//     const newEle = document.createElement('button')
//     newEle.type = 'button'
//     newEle.className = 'fas fa-sign-out-alt exit-readmode'
//     $body.appendChild(newEle)

//     function clickFn () {
//         $body.classList.remove('read-mode')
//         newEle.remove()
//         newEle.removeEventListener('click', clickFn)
//     }

//     newEle.addEventListener('click', clickFn)
// }

// //复制选中文字
// rmf.copySelect = function(){
//     document.execCommand('Copy',false,null);
//     //这里可以写点东西提示一下 已复制
// }

// //回到顶部
// rmf.scrollToTop = function(){
//     btf.scrollToDest(0, 500);
// }

// // 右键菜单事件
// if(! (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
//     window.oncontextmenu = function(event){
//         $('.rightMenu-group.hide').hide();
//         //如果有文字选中，则显示 文字选中相关的菜单项
//         if(document.getSelection().toString()){
//             $('#menu-text').show();
//         }

//         let pageX = event.clientX + 10;
//         let pageY = event.clientY;
//         let rmWidth = $('#rightMenu').width();
//         let rmHeight = $('#rightMenu').height();
//         if(pageX + rmWidth > window.innerWidth){
//             pageX -= rmWidth+10;
//         }
//         if(pageY + rmHeight > window.innerHeight){
//             pageY -= pageY + rmHeight - window.innerHeight;
//         }



//         rmf.showRightMenu(true, pageY, pageX);
//         return false;
//     };

//     window.addEventListener('click',function(){rmf.showRightMenu(false);});
// }
let kk = {};
kk.showRightMenu = function(isTrue, x=0, y=0){
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top',x+'px').css('left',y+'px');

    if(isTrue){
        $rightMenu.show();
    }else{
        $rightMenu.hide();
    }
}

let rmWidth = $('#rightMenu').width();
let rmHeight = $('#rightMenu').height();
window.oncontextmenu = function(event){
    let pageX = event.clientX + 10;	//加10是为了防止显示时鼠标遮在菜单上
    let pageY = event.clientY;
    
    // 鼠标默认显示在鼠标右下方，当鼠标靠右或考下时，将菜单显示在鼠标左方\上方
    if(pageX + rmWidth > window.innerWidth){
        pageX -= rmWidth;
    }
    if(pageY + rmHeight > window.innerHeight){
        pageY -= rmHeight;
    }
    
    kk.showRightMenu(true, pageY, pageX);
    return false;
};

window.onclick = function(){kk.showRightMenu(false);}	//隐藏菜单

$('#menu-backward').on('click',function(){window.history.back();});
$('#menu-forward').on('click',function(){window.history.forward();});
$('#menu-refresh').on('click',function(){window.location.reload();});

kk.switchDarkMode = function(){
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};

kk.switchReadMode = function(){
    const $body = document.body
    $body.classList.add('read-mode')
    const newEle = document.createElement('button')
    newEle.type = 'button'
    newEle.className = 'fas fa-sign-out-alt exit-readmode'
    $body.appendChild(newEle)

    function clickFn () {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
    }

    newEle.addEventListener('click', clickFn)
}

kk.backToTop = function(){
    // for Safari
    document.body.scrollTop = 0; 
    // for chrome, edge ...
    document.documentElement.scrollTop = 0;
}

// 黑暗模式
$('#menu-darkmode').on('click',kk.switchDarkMode);
// 阅读模式
$('#menu-readmode').on('click',kk.switchReadMode);
// 返回本站主页
$('#menu-home').on('click',function(){window.location.href = window.location.origin;});
// 返回顶部
$('#menu-backTop').on('click',function(){kk.backToTop();});
// 主题切换暂时未实现，因为没有找到好看的主题 hhh
// kk.switchTheme=function(load=false){
//     //空字符串表示butterfly原版主题（即不加载css）
//     //FallGuys.css是我自己的魔改主题，需替换
//     let themes = ['FallGuys.css',''];
//     let vTheme = parseInt(localStorage.getItem('visitor-theme'));
//     if(!vTheme){
//         vTheme = load?0:1;
//     }else{
//         vTheme += load?0:1;
//         vTheme%=themes.length;
//     }
//     localStorage.setItem('visitor-theme',vTheme)
//     let themesrc = ''
//     if(themes[vTheme]){
//         themesrc += window.location.origin+'/css/dorakika/'+themes[vTheme];
//     }
//     //css引入时link标签添加属性tag="theme"
//     $(document.head).find('[tag="theme"]')[0].href = themesrc;
// };


// window.onload = function(){kk.switchTheme(true);}	//页面加载时，通过缓存加载主题