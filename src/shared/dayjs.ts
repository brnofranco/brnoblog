import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/pt-br';

dayjs.extend(utc);
dayjs.locale('pt-br');

export const getFormattedDate = (date: string) => dayjs(date).utcOffset(-3).format('DD [de] MMMM [de] YYYY [às] HH:mm');
