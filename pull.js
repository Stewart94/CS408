/*jslint node: true, browser: true */

"use strict";
/*jslint node: true, browser: true */

"use strict";
 function checkData(xmlhttp) {
        var data;
        var xmlhttp;
        if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
        if(!xmlhttp.responseType || xmlhttp.resposeType === "text"){
            data = xmlhttp.responseText;
        }
       else if(xmlhttp.responseType === "document"){
           data = xmlhttp.responseXML;
       }
       else{
           data = xmlhttp.response;
       }
       return data;
          
   
   
   xmlhttp.onreadystateschange = function(){
       if(xmlhttp.readyState === 4 || xmlhttp === 0 || xmlhttp === 200){
           console.log(readBody(xmlhttp));
           outputResult();
       }
       else{
           console.log("ALERT");
       }
       
   };
    
    xmlhttp.open("GET","http://ratings.food.gov.uk/OpenDataFiles/FHRS776en-GB.xml", true);
    
    xmlhttp.send(null);
    
   function outputResult() {
    var response = invocation.responseXML;
    var textDiv = document.getElementById("textDiv");
    textDiv.innerHTML += response;
  }
       }