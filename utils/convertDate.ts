export const convertDate = (date: string) => {
  const nwDate = new Date(date);
  const months = [
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

  return `${
    months[nwDate.getMonth()]
  } ${nwDate.getDate()}, ${nwDate.getFullYear()}`;
};
