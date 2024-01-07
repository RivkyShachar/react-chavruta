// const formatDate = (dateString) => {
//   const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

const formatDate = (dateTimeString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateTimeString);
  const formattedDate = date.toLocaleDateString(undefined, options);
  const formattedTime = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

  return `${formattedDate} ${formattedTime}`;
};




export { formatDate };
