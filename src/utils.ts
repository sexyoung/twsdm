export function validateEmail(email: unknown): email is string {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

export const setToday = () => {
  const tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0);
  document.cookie = "status=stillToday; expires=" + tomorrow.toString();
};

export const calcBMI = (height: number, weight: number) => {
  return weight / (height / 100) ** 2;
};
