$(function() {
  chrome.tabs.getSelected(null, function(tab){
    var tablink = tab.url;
    var regexp = new RegExp("/file/d/([^\\/]+)/(view|edit)");
    var match = regexp.exec(tablink);

    if (match && match.length > 1) {
      var drivelink = match[1];
      var exportlink = "https://drive.google.com/uc?id=" + drivelink + "&authuser=0&ext=.png";
      $("#text_original").text(exportlink);

      $("#text_hatena").text("[" + exportlink + ":image:w600]");
      $("#text_hatena").select();

      $("#text_jira").text("!" + exportlink + "|width=600!");
      $("#text_jira").select();

      $("#link").attr("href", exportlink);
      $("#link").text(exportlink);
      document.execCommand('copy')
    } else {
      $("#text_original").text("not drive link");
      $("#text_hatena").text("not drive link");
    }
  });
});

