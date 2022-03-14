/* eslint-disable require-jsdoc */
import {format} from 'date-fns';

function dateFormat(value: string): string {
  try {
    const date = new Date(value);
    return format(date, 'dd/MM/yyyy');
  } catch (e) {
    return value;
  }
}

function currencyFormat(num: number) {
  if (num != null) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    return '$0';
  }
}

function formatNumber(num: number) {
  if (num != null) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    return '0';
  }
}

export {
  dateFormat,
  currencyFormat,
  formatNumber,
};
