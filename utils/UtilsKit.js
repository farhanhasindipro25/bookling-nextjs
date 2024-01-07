import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// tailwindcss classNames management
export default function cn(...classnames) {
  return twMerge(clsx(classnames));
}

//format date Ex. - 12 Oct, 2023
export function getDateInDMYFormat(inputDateStr) {
  // Parse the input date string into a JavaScript Date object
  const date = new Date(inputDateStr);

  // Define an array to hold the month abbreviations
  const monthAbbreviations = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the day, month, and year
  const day = date.getDate();
  const month = monthAbbreviations[date.getMonth()];
  const year = date.getFullYear();

  // Create the formatted date string
  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
}
