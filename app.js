
/*
goal is to
*/
var SitePros=" ";
var ImprovementTips=" ";
var header = $("header");
var img = $("img");

alert("ready");

document.addEventListener('DOMContentLoaded', function() {
    alert("Ready!");


    if(header.class.contains("alt")){
      SitePros+="alt text is included in header.";
    }else{
      ImprovementTips+="You should include alternative text in your header."
    }

    if(img.class.contains("alt")){
      SitePros+="alt text is included in img.";
    }else{
      ImprovementTips+="You should include alternative text in your images."
    }

    alert("Here's what we liked: "+SitePros+" however, you should work to improve: "+ImprovementTips);


}, false);
