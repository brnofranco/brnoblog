import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const getFormattedDate = (date: string) => dayjs(date).utcOffset(-3).format('DD/MM/YYYY - HH:mm');
