// function showPopup() {
//     document.getElementById("overlay").style.display = "block";
//     document.getElementById("preloader").style.display = "block";
//     document.getElementById("formFrame").src = "https://docs.google.com/forms/d/e/1FAIpQLScyl-WEwe2QQTY4d_dTng_hwfJ2j4q_jV350j0WbG_Cz3EghA/viewform?embedded=true";
//   }
  
//   function hidePopup() {
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById("preloader").style.display = "none";
//     document.getElementById("formFrame").src = "";
//   }
  
//   document.getElementById("formFrame").addEventListener("load", function() {
//     document.getElementById("preloader").style.display = "none";
//   });
  
// First Popup - Google Form
function showPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("preloader").style.display = "block";
  document.getElementById("formFrame").src = "https://docs.google.com/forms/d/e/1FAIpQLScyl-WEwe2QQTY4d_dTng_hwfJ2j4q_jV350j0WbG_Cz3EghA/viewform?embedded=true";
}

function hidePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("preloader").style.display = "none";
  document.getElementById("formFrame").src = "";
}

document.getElementById("formFrame").addEventListener("load", function() {
  document.getElementById("preloader").style.display = "none";
});


// Second Popup - Site Update Notifications
function showPopup2() {
  var popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.style.display = "flex";
  populateNotifications();
}

function hidePopup2() {
  var popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.style.display = "none";
}

function populateNotifications() {
  var notificationList = document.getElementById("notificationList");
  
  // Clear existing notifications
  notificationList.innerHTML = "";
  
  // Sample notifications (replace with your actual notifications)
  var notifications = [
    "Minor update to hash2torrent",
    "Major update to singlish",
    "Working with speed up website"
  ];
  
  // Create and append notification elements
  notifications.forEach(function(notification) {
    var notificationItem = document.createElement("div");
    notificationItem.classList.add("notification");
    
    var notificationIcon = document.createElement("svg");
    notificationIcon.classList.add("notification-icon");
    notificationIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    notificationIcon.setAttribute("width", "16");
    notificationIcon.setAttribute("height", "16");
    notificationIcon.setAttribute("viewBox", "0 0 24 24");
    notificationIcon.setAttribute("fill", "none");
    notificationIcon.setAttribute("stroke", "currentColor");
    notificationIcon.setAttribute("stroke-width", "2");
    notificationIcon.setAttribute("stroke-linecap", "round");
    notificationIcon.setAttribute("stroke-linejoin", "round");
    
    var iconPath = document.createElement("path");
    iconPath.setAttribute("d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9");
    notificationIcon.appendChild(iconPath);
    
    var notificationText = document.createElement("span");
    notificationText.classList.add("notification-text");
    notificationText.textContent = notification;
    
    notificationItem.appendChild(notificationIcon);
    notificationItem.appendChild(notificationText);
    notificationList.appendChild(notificationItem);
  });
}
