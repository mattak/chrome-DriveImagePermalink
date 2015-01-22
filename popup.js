$(function() {
  chrome.tabs.getSelected(null, function(tab){
    var tablink = tab.url;
    var regexp = new RegExp("/file/d/([^\\/]+)/view");
    var match = regexp.exec(tablink);

    if (match.length > 1) {
      var drivelink = match[1];
      var exportlink = "https://drive.google.com/uc?export=view&id=" + drivelink;
      $("#text").text(exportlink);
      $("#link").attr("href", exportlink);
      $("#link").text(exportlink);
    } else {
      $("#text").text("not drive link");
    }
  });
});

