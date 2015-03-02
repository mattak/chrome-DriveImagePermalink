$(function() {
  chrome.tabs.getSelected(null, function(tab){
    var tablink = tab.url;
    var regexp = new RegExp("/file/d/([^\\/]+)/(view|edit)");
    var match = regexp.exec(tablink);

    if (match && match.length > 1) {
      var drivelink = match[1];
      var exportlink = "https://drive.google.com/uc?id=" + drivelink + "&ext=.png";
      $("#text_original").text(exportlink);

      $("#text_hatena").text("[" + exportlink + ":image:w600]");
      $("#text_hatena").select();

      $("#link").attr("href", exportlink);
      $("#link").text(exportlink);
      document.execCommand('copy')
    } else {
      $("#text_original").text("not drive link");
      $("#text_hatena").text("not drive link");
    }
  });
});

