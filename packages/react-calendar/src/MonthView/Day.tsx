import { getDayStart, getDayEnd } from '@wojtekmaj/date-utils';

import Tile from '../Tile.js';

import { isWeekend } from '../shared/dates.js';
import {
  formatDay as defaultFormatDay,
  formatLongDate as defaultFormatLongDate,
} from '../shared/dateFormatter.js';

import type { AvailableValue, CalendarType } from '../shared/types.js';
import { isDateIncludedInList } from '../shared/utils.js';

const className = 'react-calendar__month-view__days__day';

type DayProps = {
  /**
   * Type of calendar that should be used. Can be `'gregory`, `'hebrew'`, `'islamic'`, `'iso8601'`. Setting to `"gregory"` or `"hebrew"` will change the first day of the week to Sunday. Setting to `"islamic"` will change the first day of the week to Saturday. Setting to `"islamic"` or `"hebrew"` will make weekends appear on Friday to Saturday.
   *
   * @example 'iso8601'
   */
  calendarType: CalendarType | undefined;
  classes?: string[];
  currentMonthIndex: number;
  /**
   * Function called to override default formatting of day tile labels. Can be used to use your own formatting function.
   *
   * @example (locale, date) => formatDate(date, 'd')
   */
  formatDay?: typeof defaultFormatDay;
  /**
   * Function called to override default formatting of day tile `abbr` labels. Can be used to use your own formatting function.
   *
   * @example (locale, date) => formatDate(date, 'dd MMM YYYY')
   */
  formatLongDate?: typeof defaultFormatLongDate;

  availableDates?: AvailableValue;
} & Omit<
  React.ComponentProps<typeof Tile>,
  'children' | 'formatAbbr' | 'maxDateTransform' | 'minDateTransform' | 'view'
>;

export default function Day({
  calendarType,
  classes = [],
  currentMonthIndex,
  formatDay = defaultFormatDay,
  formatLongDate = defaultFormatLongDate,
  ...otherProps
}: DayProps) {
  const { date, locale, availableDates = [] } = otherProps;

  const classesProps: string[] = [];

  if (classes) {
    classesProps.push(...classes);
  }

  if (isDateIncludedInList(availableDates, date)) {
    classesProps.push(`${className}--weekend`);
  }

  if (className) {
    classesProps.push(className);
  }

  if (isWeekend(date, calendarType)) {
    classesProps.push(`${className}--weekend`);
  }

  if (date.getMonth() !== currentMonthIndex) {
    classesProps.push(`${className}--neighboringMonth`);
  }

  return (
    <Tile
      {...otherProps}
      classes={classesProps}
      formatAbbr={formatLongDate}
      maxDateTransform={getDayEnd}
      minDateTransform={getDayStart}
      view="month"
    >
      {formatDay(locale, date)}
    </Tile>
  );
}
