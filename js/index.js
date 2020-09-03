charset = 'UTF-8';
$(function () {
  // 点击事件
  // params: 按钮，类名，提交按钮，学历和工作时间
  function tab(btn, className, submitBtn, userCon) {

    $(btn).each(function () {

      var that = this;

      $(that).click(function () {

        $(that).addClass(className).siblings().removeClass(className);

      });

    });

    $(submitBtn).click(function () {

      var $pa = $(this).parent();

      $pa.find(userCon).val($pa.find('.' + className).text())

    });;

  }
  tab('.item span', 'on', '.submit-btn', '.user-con');

  // 证书轮播图
  $(".zs").slide({ mainCell: ".bd ul" });
  // 活动轮播图
  $(".active-img").slide({ mainCell: ".bd ul", effect: "leftLoop", vis: 4 });
  
  // 显示弹窗
  // time: 多少秒之后显示弹窗
  function showDialog(time, dialog) {
    var tId = setInterval(function () {
        $(dialog).show();
        clearInterval(tId);
    }, time);
  }
  showDialog(30000, ".dialog");

  // 关闭弹窗
  $('.close').click(function(){
    $('.dialog').hide();
    // 30s循环弹出
    showDialog(30000, ".dialog");
  });
  // 显示弹窗
  $('.show-dialog').click(function(){
    $('.dialog').show();
  });

  

  // 回到顶部
  $('.black-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});