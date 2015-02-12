$(function() {
  chrome.tabs.getSelected(null, function(tab){
    var tablink = tab.url;
    var regexp = new RegExp("/file/d/([^\\/]+)/(view|edit)");
    var match = regexp.exec(tablink);

    if (match && match.length > 1) {
      var drivelink = match[1];
      var exportlink = "https://drive.google.com/uc?id=" + drivelink + "&ext=.png";
      $("#text").text(exportlink);
      $("#text").select();
      $("#link").attr("href", exportlink);
      $("#link").text(exportlink);
      document.execCommand('copy')
    } else {
      $("#text").text("not drive link");
    }
  });
});

