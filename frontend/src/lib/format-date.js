

export const formatDate = (date) => {
  let newDate = new Date(date);
  return {
    date1: new Date(newDate).toDateString(),
    date2: Intl.DateTimeFormat("de-DE").format(newDate),
  };
};
