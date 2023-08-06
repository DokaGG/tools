var activeNotificationId = null;

  function showNotification(notificationId) {
    if (activeNotificationId !== null) {
      hideNotification(activeNotificationId);
    }

    var notificationPopup;
    if (notificationId === 1) {
      notificationPopup = document.getElementById("notification-popup1");
    } else if (notificationId === 2) {
      notificationPopup = document.getElementById("notification-popup2");
    }

    if (notificationPopup) {
      notificationPopup.style.display = "block";
      activeNotificationId = notificationId;
    }
  }

  function hideNotification(notificationId) {
    var notificationPopup;
    if (notificationId === 1) {
      notificationPopup = document.getElementById("notification-popup1");
    } else if (notificationId === 2) {
      notificationPopup = document.getElementById("notification-popup2");
    }

    if (notificationPopup) {
      notificationPopup.style.display = "none";
      activeNotificationId = null;
    }
  }

