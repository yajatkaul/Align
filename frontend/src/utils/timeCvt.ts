// @ts-nocheck
export const convertToIST = (isoDateString) => {
  // Create a new Date object from the ISO date string
  const date = new Date(isoDateString);

  // Convert the date to IST by adding 5 hours and 30 minutes
  const istOffset = 5 * 60 + 30; // IST is UTC+5:30
  const utcOffset = date.getTimezoneOffset(); // Returns the time-zone offset in minutes
  const istTime = new Date(date.getTime() + (istOffset + utcOffset) * 60000);

  // Format the date and time in a readable format
  const formattedDate = istTime.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedTime = istTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return `${formattedDate} ${formattedTime}`;
};

// Example usage
const isoDateString = "2024-07-17T19:55:53.109Z";
const istDateTime = convertToIST(isoDateString);
