import { default as daysjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

daysjs.extend(relativeTime)
export const formatDate = (date: Date) => daysjs(date).fromNow()