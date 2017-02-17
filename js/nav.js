/**
 * Created by 王东阳 on 2017/2/12.
 */



$(function () {
    //设置导航中2级菜单的显示
    $('a:contains(FIX英美社)').mouseenter(function () {
        $('a:contains(FIX英美社)+ul').css('display', 'block')
    });
    $('a:contains(友组作品)').mouseenter(function () {
        $('a:contains(友组作品)+ul').css('display', 'block')
    });
    //设置搜索框的显示隐藏
    $('#search-icon').mouseenter(function () {
        $(this).hide();
        $('#search-input').show()
    });
    $('#search-input').mouseleave(function () {
        $(this).hide();
        $('#search-icon').show()
    });
    //轮播时间
    $('.carousel').carousel({
        interval: 2800
    })
});