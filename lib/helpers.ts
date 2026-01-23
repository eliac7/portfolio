export const ValidateString = (
  value: unknown,
  maxLength: number
): value is string => typeof value === "string" && value.length <= maxLength;

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const BirthdayCalculator = () => {
  const birthdate = new Date("1997-05-27T02:30:00");
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - birthdate.getTime();
  const daysOld = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursOld = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesOld = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsOld = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const age = Math.floor(daysOld / 365);

  return {
    daysOld,
    hoursOld,
    minutesOld,
    secondsOld,
    age,
  };
};
