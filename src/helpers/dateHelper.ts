import moment, { unitOfTime } from "moment";

type WeekDaysType = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

type WeekDaysOptionsData = {
  label: Capitalize<WeekDaysType>;
  value: WeekDaysType;
};

const DateHelper = {
  weekDaysOptions: <WeekDaysOptionsData[]>[
    {
      label: "Mon",
      value: "mon",
    },
    {
      label: "Tue",
      value: "tue",
    },
    {
      label: "Wed",
      value: "wed",
    },
    {
      label: "Thu",
      value: "thu",
    },
    {
      label: "Fri",
      value: "fri",
    },
    {
      label: "Sat",
      value: "sat",
    },
    {
      label: "Sun",
      value: "sun",
    },
  ],
  getLongWeekDayName: (weekDay: WeekDaysType) => {
    if (weekDay === "mon") return "Monday";
    else if (weekDay === "tue") return "Tuesday";
    else if (weekDay === "wed") return "Wednesday";
    else if (weekDay === "thu") return "Thursday";
    else if (weekDay === "fri") return "Friday";
    else if (weekDay === "sat") return "Saturday";
    return "Sunday";
  },
  get24hTimeFromDate: (date?: string | Date) => {
    return moment(date).format("HH:mm");
  },
  isSameAsToday: (date: string | Date) => {
    const currentDate = moment();

    return moment(date, "DD-MM-YYYY").isSame(currentDate, "day");
  },
  isSameAsAnotherDate: (dateToTest: Date, date: Date) => {
    const currentDate = moment(dateToTest);

    return moment(date, "DD-MM-YYYY").isSame(currentDate, "day");
  },
  getAllDaysInMonth: (month: number, year: number) =>
    Array.from(
      { length: new Date(year, month, 0).getDate() - 1 },
      (_, i) => new Date(year, month, i + 1)
    ),
  getDaysByWeek: (date: Date) => {
    const startDay = moment(date).startOf("isoWeek");
    const endDay = moment(date).endOf("isoWeek").add(1, "days");
    const dates = [];
    for (let index = 1; !startDay.isSame(endDay, "day"); index++) {
      dates.push(startDay.toDate());
      startDay.add(1, "days");
    }
    return dates;
  },
  isCurrentWeek: (date: Date, weekDates: Date[] = []) => {
    const firstDate = weekDates[0];
    const lastDate = weekDates[weekDates.length - 1];
    return (
      date.getTime() <= lastDate.getTime() &&
      date.getTime() >= firstDate.getTime()
    );
  },
  getIfCurrentDateIsAfter: (
    date: Date,
    precision: unitOfTime.StartOf = "days"
  ) => moment().isAfter(date, precision),
  getDifferenceCurrentAndGivenDateInDays: (givenDate?: Date | string) => {
    const givenDateMoment = moment(givenDate);
    if (
      !givenDateMoment.isValid() &&
      (typeof givenDate !== "string" || (givenDate as any) instanceof Date)
    )
      return undefined;
    return moment(givenDateMoment).diff(new Date(), "days") + 1;
  },
};

export { DateHelper };
