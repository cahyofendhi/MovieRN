import {format} from 'date-fns';

export function dateFormat(value: string): string {
  try {
    var date = new Date(value);
    return format(date, 'dd/MM/yyyy');
  } catch (e) {
    return value;
  }
}
