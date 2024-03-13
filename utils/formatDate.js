export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Adding 1 because months are zero-based
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  if (day) {
    return formattedDate;
  } else {
    return "";
  }
}
