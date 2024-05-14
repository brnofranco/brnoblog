import dayjs from 'dayjs';

export const getFormattedDate = (date: string) => dayjs(date).format('DD/MM/YYYY - HH:mm');
