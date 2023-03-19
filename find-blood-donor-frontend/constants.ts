export const API_URL: string = 'http://localhost:4500/'
export const SIGNUP_URL: string = 'http://localhost:4500/user/signup'
export const LOGIN_URL: string = 'http://localhost:4500/user/login'
export const USER_URL: string = 'http://localhost:4500/user'
// the format is in yyyy/mm/dd
export function getDaysUntilDate(dateStr: string): number {
  const [year, month, day] = dateStr.split("/").map((str) => parseInt(str, 10));
  const date = new Date(year, month - 1, day);
  const diffMs = date.getTime() - new Date().getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return diffDays;
}
// takes a string of input containing yyyy/mm/dd add 3 months to it
export function addThreeMonthsToDate(dateStr: string): string {
  console.log(dateStr)
  const [year, month, day] = dateStr.split("-").map((str) => parseInt(str, 10));

  // Create a new date object from the input string
  const date = new Date(year, month - 1, day);

  // Add three months to the date
  date.setMonth(date.getMonth() + 3);

  // Format the new date back into the "yyyy-mm-dd" format
  const newDateStr =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0");
  console.log(newDateStr)
  return newDateStr;
}



