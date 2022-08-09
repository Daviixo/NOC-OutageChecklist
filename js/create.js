function createTemplate() {

    try{

        // First, let's get the value of the items
    
    var serviceDisruption = document.getElementById("servicedisruption").value;
    var incidentOwner = document.getElementById("incidentowner").value;
    var nocInteractionOwner = document.getElementById("nocinteractionowner").value;
    var nocNotification = document.getElementById("nocnotification").value;
    var frtInteractionOwner = document.getElementById("frtinteractionowner").value;
    var frtNotification = document.getElementById("frtnotification").value;
    var jiraTicket = document.getElementById("jiraticket").value;
    var incidentSlackChannel = document.getElementById("incidentslackchannel").value;
    var incidentDescription = document.getElementById("incidentdescription").value;
    var ivrChangesOwner = document.getElementById("ivrchangesowner").value;
    var ivrImplementation = document.getElementById("ivrimplementation").value;
    var ivrRemoved = document.getElementById("ivrremoved").value;
    var agentMessagingOwner = document.getElementById("agentmessagingowner").value;
    var agentMessaging = document.getElementById("agentmessaging").value;

    //Getting the 1st date/time 

    var getDate = document.getElementById("dateTime").value;

    var date = new Date(getDate);
    currentMonth = date.getMonth();
    date = date.toString();

    splitDate = date.split(" ");

    //Splitting the date

    splitWeekDay = splitDate[0].replace(",","");
    splitMonth = splitDate[1];
    splitDay = splitDate[2];
    splitYear = splitDate[3];
    splitTime = splitDate[4];
    splitTimezone = splitDate[5];

    // Let's now divide our time

    finalTime = splitDate[4].split(":");
    splitHour = finalTime[0];
    splitMinutes = finalTime[1];
    splitMinutesOne = splitMinutes[0];
    splitMinutesTwo = splitMinutes[1];

    finalSplitMinutes = splitMinutesOne + splitMinutesTwo;

    var d = new Date(splitYear,currentMonth,splitDay,splitHour,finalSplitMinutes);
    var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    var mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    var da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
    var wd = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);
    var ti = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: true, minute: '2-digit'}).format(d);

    var finalFirstDate = mo + " " + da + ", " + ye + ", " + ti;

    console.log("1st Date: " + mo + " " + da + ", " + ye + ", " + ti);

    // Let's now get our 2nd date/time

    var getDateTwo = document.getElementById("dateTimeTwo").value;

    var dateTwo = new Date(getDateTwo);
    currentMonthTwo = dateTwo.getMonth();
    dateTwo = dateTwo.toString();

    splitDateTwo = dateTwo.split(" ");

    //Splitting the date

    splitWeekDayTwo = splitDateTwo[0].replace(",","");
    splitMonthTwo = splitDateTwo[1];
    splitDayTwo = splitDateTwo[2];
    splitYearTwo = splitDateTwo[3];
    splitTimeTwo = splitDateTwo[4];
    splitTimezoneTwo = splitDateTwo[5];

    // Let's now divide our time

    finalTimeTwo = splitDateTwo[4].split(":");
    splitHourTwo = finalTimeTwo[0];
    splitMinutesTwo = finalTimeTwo[1];
    splitMinutesOneTwo = splitMinutesTwo[0];
    splitMinutesTwoTwo = splitMinutesTwo[1];

    finalSplitMinutesTwo = splitMinutesOneTwo + splitMinutesTwoTwo;

    var dTwo = new Date(splitYearTwo,currentMonthTwo,splitDayTwo,splitHourTwo,finalSplitMinutesTwo);
    var yeTwo = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dTwo);
    var moTwo = new Intl.DateTimeFormat('en', { month: 'long' }).format(dTwo);
    var daTwo = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dTwo);
    var wdTwo = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(dTwo);
    var tiTwo = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: true, minute: '2-digit'}).format(dTwo);

    var finalSecondDate = mo + " " + da + ", " + ye + ", " + ti;

    console.log("2nd Date: " + moTwo + " " + daTwo + ", " + yeTwo + ", " + tiTwo);

    // Let's get our product(s)

    var selected = [];
    for (var option of document.getElementById('products').options)
    {
        if (option.selected) {
            selected.push(" " + option.value);
        }   
    }

    localStorage.setItem("myservicedisruption", serviceDisruption);
    localStorage.setItem("myincidentowner", incidentOwner);
    localStorage.setItem("mynocinteractionowner", nocInteractionOwner);
    localStorage.setItem("mynocnotification", nocNotification);
    localStorage.setItem("myfrtinteractionowner", frtInteractionOwner);
    localStorage.setItem("myfrtnotification", frtNotification);
    localStorage.setItem("myjiraticket", jiraTicket);
    localStorage.setItem("myincidentslackchannel", incidentSlackChannel);
    localStorage.setItem("myincidentdescription", incidentDescription);
    localStorage.setItem("myivrchangesowner", ivrChangesOwner);
    localStorage.setItem("myivrimplementation", ivrImplementation);
    localStorage.setItem("myivrremoved", ivrRemoved);
    localStorage.setItem("myagentmessagingowner", agentMessagingOwner);
    localStorage.setItem("myagentmessaging", agentMessaging);

    // Validate if there's 1+ products

    fixedProducts = fixProducts(selected);

    // This is a console log test to make sure we are getting the correct values. 

    console.log("1st Date selected: " + date)
    console.log("Service disruption: " + serviceDisruption);
    console.log("Incident owner: " + incidentOwner);
    console.log("Products selected:" + fixedProducts)
    console.log("NOC interaction owner: " + nocInteractionOwner);
    console.log("NOC Notification: " + nocNotification);
    console.log("FRT Interaction Owner: " + frtInteractionOwner);
    console.log("FRT Notification: " + frtNotification);
    console.log("Jira Ticket: " + jiraTicket);
    console.log("Incident Slack Channel: " + incidentSlackChannel);
    console.log("Incident Description: " + incidentDescription);
    console.log("IVR Changes Owner: " + ivrChangesOwner);
    console.log("IVR Implementation: " + ivrImplementation);
    console.log("IVR Removed: " + ivrRemoved);
    console.log("Agent Messaging Owner: " + agentMessagingOwner);
    console.log("Agent Messaging: " + agentMessaging);

    // Create dummy notification

    notifyMe();

    // Alright, let's now print our new page. Leaving template below as a guide.

    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    // </head>
    // <body>
        
    // </body>
    // </html>

    var winPrint = window.open('Outage Service Disruption Checklist', 'windowOpenTab', 'scrollbars=yes,resizable=1,width=500,height=900,left=0, top=0');

    winPrint.document.write(
    '<!DOCTYPE html>' + 
    '<html lang="en">' +
    '<head>' + 
    '<style>' +
    'html {' +
        'height: 110%;' +
        'margin-bottom: 0.01em;' +
    '}' +
    '</style>' +
    '<meta charset="UTF-8">' +
    //'<meta http-equiv="X-UA-Compatible" content="IE=edge"' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Outage Service Disruption Checklist</title>' +
    '</head>' +
    '<body>' +
    '<strong><h1>--- Checklist ---</h1></strong><br>' +
    '<strong>Date: </strong>' + finalFirstDate + '<br><strong>Outage Service Disruption: </strong>' + serviceDisruption + 
    '<br><strong>Product(s): </strong>' + fixedProducts + 
    
    // Care Alert section starts
    
    '<br><strong><h2>Care Alert</h2></strong><br>' + 
    '<strong>Inbound Incident Owner: </strong>' + incidentOwner + '<br><strong>Time issue identified: </strong>' + finalFirstDate + '<br>' +

    // NOC/FRT section starts '<strong>xxx</strong>'
    '<br><strong><h2>NOC/FRT Alert</h2></strong><br>' + 
    '<strong>NOC Interaction Owner: </strong>' + nocInteractionOwner + '<br><strong>NOC Notification: </strong>' + nocNotification +
    '<br><strong>FRT Interaction Owner: </strong>' + frtInteractionOwner + '<br><strong>FRT Notification: </strong>' + frtNotification +
    '<br><strong>Jira Ticket: </strong>' + jiraTicket + '<br><strong>Incident Slack Channel: </strong>' + incidentSlackChannel + 
    '<br><strong>Incident Description: </strong>' + incidentDescription + 

    // IVR section starts

    '<br><strong><h2>IVR</h2></strong><br>' + 
    '<strong>IVR Changes Owner: </strong>' + ivrChangesOwner + '<br><strong>IVR Implementation: </strong>' + ivrImplementation + 
    '<strong>IVR Removed: </strong>' + ivrRemoved +

    // Agent Messaging sections starts

    '<br><strong><h2>Agent Messaging</h2></strong><br>' + 
    '<strong>Agent Messaging Owner: </strong>' + agentMessagingOwner + '<br><strong>Agent Messaging: </strong>' + agentMessaging + 

    '<br><br>-------------------<br><br><i><h4>Credits to: David Díaz - SRE</h4></i>' +

    '</body>' +
    '</html>'

    );


    }catch{

        alert("Please make sure all the fields have a value! Thanks :D")

    }

 
}

function pageLoads(){

    document.getElementById("servicedisruption").innerHTML = localStorage.getItem("myservicedisruption");
    document.getElementById("incidentowner").value = localStorage.getItem("myincidentowner");
    document.getElementById("nocinteractionowner").value = localStorage.getItem("mynocinteractionowner");
    document.getElementById("nocnotification").value = localStorage.getItem("mynocnotification");
    document.getElementById("frtinteractionowner").value = localStorage.getItem("myfrtinteractionowner");
    document.getElementById("frtnotification").value = localStorage.getItem("myfrtnotification");
    document.getElementById("jiraticket").value = localStorage.getItem("myjiraticket");
    document.getElementById("incidentslackchannel").value = localStorage.getItem("myincidentslackchannel");
    document.getElementById("incidentdescription").innerHTML = localStorage.getItem("myincidentdescription");
    document.getElementById("ivrchangesowner").value = localStorage.getItem("myivrchangesowner");
    document.getElementById("ivrimplementation").value = localStorage.getItem("myivrimplementation");
    document.getElementById("ivrremoved").value = localStorage.getItem("myivrremoved");
    document.getElementById("agentmessagingowner").value = localStorage.getItem("myagentmessagingowner");
    document.getElementById("agentmessaging").value = localStorage.getItem("myagentmessaging");

}

function notifyMe() {
    if (Notification.permission !== 'granted')
     Notification.requestPermission();
    else {
     var notification = new Notification('Thanks for using Daviixos Tools!', {
      icon: 'images/caticon.ico',
      body: 'You may click this notification for a surprise :D',
     });
     notification.onclick = function() {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
         };
     }
}

function resetAll(){

    localStorage.clear();
    location.reload();

}

function fixProducts(products){

    var listProducts = products;
    var productsFinal = "";

    var penUltProduct = listProducts[listProducts.length -2];
    var lastProduct = listProducts[listProducts.length -1];
    
    for (i in listProducts){

        if(listProducts.length === 1){
            productsFinal = listProducts[i];

        }else if (listProducts[i] === lastProduct){
            productsFinal = productsFinal + " and" + listProducts[i];

        }else if (listProducts[i] === penUltProduct) {
            productsFinal = productsFinal + listProducts[i];

        }else{
            productsFinal = productsFinal + listProducts[i] + ",";
        }
        
    }

    return productsFinal;

}