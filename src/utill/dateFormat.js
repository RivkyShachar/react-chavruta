const formatDate = (dateTimeString, language) => {
  const date = new Date(dateTimeString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // Set to false for 24-hour format
  };

  const locale = language === 'he' ? 'he-IL' : undefined;

  const formattedDate = date.toLocaleDateString(locale, options);

  return `${formattedDate}`;
};

export { formatDate };
