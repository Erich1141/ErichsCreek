

export function intDate(date) {
  const reformatDate = new Date(date);

  const dateOnly = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(reformatDate);

  const timeOnly = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).format(reformatDate);

  console.log("Date:", dateOnly);
  console.log("Time:", timeOnly);

  return { dateOnly, timeOnly };
}