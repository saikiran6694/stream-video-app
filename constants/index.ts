export const sidebarLinks = [
  {
    imgURL: "/icons/Home.svg",
    route: "/",
    label: "Home",
  },

  {
    imgURL: "/icons/upcoming.svg",
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    imgURL: "/icons/previous.svg",
    route: "/previous",
    label: "Previous",
  },
  {
    imgURL: "/icons/Video.svg",
    route: "/recordings",
    label: "Recordings",
  },
  {
    imgURL: "/icons/add-personal.svg",
    route: "/personal-room",
    label: "Personal Room",
  },
];

export function getCurrentTime() {
  const now = new Date();
  const options: any = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Kolkata",
  };
  return now.toLocaleString("en-US", options);
}

export function getCurrentDate() {
  // Get current date in UTC
  var now = new Date();

  // Convert to IST (UTC+5:30)
  var IST_offset = 330 * 60 * 1000; // Offset in milliseconds
  var IST_date = new Date(now.getTime() + IST_offset);

  // Define days and months arrays
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day, date, and year
  var day = days[IST_date.getDay()];
  var date = IST_date.getDate();
  var month = months[IST_date.getMonth()];
  var year = IST_date.getFullYear();

  // Construct the date string
  var currentDate = day + ", " + month + " " + date + ", " + year;

  return currentDate;
}
