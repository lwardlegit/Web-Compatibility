
/*
goal is to
*/
var SitePros=" ";
var ImprovementTips=" ";
var header = $("header");
var img = $("img");



$(document).ready(function() {
    alert("Ready!");

//CHECK FOR ALT TEXT
    if($("header:has(alt)")){
      SitePros+="alt text is included in header.";
    }else{
      ImprovementTips+="You should include alternative text in your header.";
    }

    if($("img:has(alt)")){
      SitePros+="alt text is included in img.";
    }else{
      ImprovementTips+="You should include alternative text in your images.";
    }
//CHECK FOR TAB INDEX
    if($("document:has(tabIndex)")){
      SitePros+="site has tabing index.";
    }else{
      ImprovementTips+="You should add the tabIndex class to your elements.";
    }

//CHECK FOR CSS ELEMENTS THAT MIGHT CAUSE VISUAL DISTRACTIONS
      if($( "body" ).css( "background-color")=== $("p").css("text-color")){
        ImprovementTips+=" body text and background color should not be the same";
      }else {
        SitePros+="the background is not the same color as the text";
      }
});

$(document).ready(function() {
  alert("Here's what we liked: "+SitePros);
  alert("Here's what you can work on "+ImprovementTips);
});
