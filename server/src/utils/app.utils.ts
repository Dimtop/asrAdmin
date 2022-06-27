export const getDateAsMongooseQueryFilter = (date) => {
  const gte = new Date(date);
  gte.setHours(0, 0, 0, 0);
  const lt = new Date(date);
  lt.setHours(23, 59, 59, 59);

  return {
    gte,
    lt,
  };
};

export const transformDateToPreviousYear = (date: Date) => {
  const currentYear = date.getFullYear();
  date.setFullYear(currentYear - 1);
  return date;
};
