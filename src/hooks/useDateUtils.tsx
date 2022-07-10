export default function useDateUtils() {
  const today = new Date();

  function cloneDate(date: Date | number): Date {
    return new Date(date);
  }

  function getWeekOfDay(ofDay: Date): Date[] {
    let week: Date[] = [];

    for (let i = 1; i <= 7; i++) {
      let first = ofDay.getDate() - ofDay.getDay() + i;
      let day = new Date(cloneDate(ofDay).setDate(first));
      week.push(day);
    }

    return week;
  }

  function getNearNextDaysByWeeks(weekQnt: number): Date[] {
    let nearDays = [];

    nearDays.push(...getWeekOfDay(today));

    if (weekQnt > 0) {
      for (let i = 0; i < weekQnt; i++) {
        nearDays.push(
          ...getWeekOfDay(getDayByOffset(nearDays[nearDays.length - 1], 1))
        );
      }
    }

    return nearDays;
  }

  function getDayByOffset(day: Date, offset: number) {
    const offsettedDay = new Date(
      cloneDate(day).setDate(day.getDate() + offset)
    );

    return offsettedDay;
  }

  function getNextWeekByDay(byDay: Date): Date[] {
    const weekOfTheDay = getWeekOfDay(byDay);

    const lastDayOfCurrentWeek = weekOfTheDay[weekOfTheDay.length - 1];

    const theFirstDayOfNextWeek = getDayByOffset(lastDayOfCurrentWeek, 1);

    const nextWeek = [...getWeekOfDay(theFirstDayOfNextWeek)];

    return nextWeek;
  }

  return {
    today,
    getDayByOffset,
    getWeekOfDay,
    getNearNextDaysByWeeks,
    getNextWeekByDay,
  };
}
