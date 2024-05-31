export const indonesianDateStringToDate = (
  indonesianDateString: string,
): Date => {
  // Indonesian month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  // Split the date string into day, month, and year
  const [day, monthName, year] = indonesianDateString.split(" ");

  // Find the index of the month name in the array
  const monthIndex = months.indexOf(monthName);

  // Create a new Date object
  const date = new Date(Number(year), monthIndex, Number(day));

  return date;
};

export const isYesterday = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

export const isTomorrow = (date: Date): boolean => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return date.toDateString() === tomorrow.toDateString();
};

export const isThisWeek = (date: Date): boolean => {
  const today = new Date();
  const endOfWeek = new Date();
  endOfWeek.setDate(endOfWeek.getDate() + 7);
  return date >= today && date <= endOfWeek;
};
