const timeElement = document.querySelector(".time");

function getCurrentDate() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();

  return `${month}, ${day}`;
}

// Update the time element with the current date
timeElement.textContent = getCurrentDate();

