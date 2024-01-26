$(function () {
  $(".colorBox").eq(0).css("backgroundColor", "red");
  $(".colorBox").eq(1).css("backgroundColor", "black");
  $(".colorBox").eq(2).css("backgroundColor", "blue");
  $(".colorBox").eq(3).css("backgroundColor", "yellow");
  $(".colorBox").eq(4).css("backgroundColor", "#FFC436");
  // ---------------------
  let sideBarWid = $("#innerSide").innerWidth();
  $("#sideBar").css("left", -sideBarWid);
  $("#sideBar i").click(function () {
    if ($("#sideBar").css("left") == "0px") {
      $("#sideBar").animate({ left: -sideBarWid }, 1000);
    } else {
      $("#sideBar").animate({ left: 0 }, 1000);
    }
  });
  $(".colorBox").click(function (e) {
    let style = $(e.target).css("backgroundColor");
    console.log(style);
    $("p").css("color", style);
  });
  $("#home").click(function () {
    $("#sideBar").css({ left: -sideBarWid });
  });
  $(window).scroll(function () {
    let aboutp = $("#about").offset().top;
    if ($(window).scrollTop() >= aboutp) {
      $("#nav").css("backgroundColor", "rgba(0,0,0,0.7)");
      $("#btnUp").show(1000);
    } else {
      $("#nav").css("backgroundColor", "transparent");
      $("#btnUp").hide(1000);
    }
  });
  $("#btnUp").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
  $("a[href^='#']").click(function (e) {
    let smoooth = $(e.target).attr("href");
    let scrool = $(smoooth).offset().top;
    $("body , html").animate({ scrollTop: scrool }, 1000);
  });
  $("#imgBox").click(function (e) {
    let imgSrc = $(e.target).attr("src");
    $("#home").css("backgroundImage", `url("${imgSrc} ")`);
  });

});
