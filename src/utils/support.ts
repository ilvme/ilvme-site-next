// 使用dayjs进行时间格式化
// 参数time可以是时间戳、Date对象或时间字符串
// format参数遵循dayjs的格式化规则，默认格式为'YYYY-MM-DD HH:mm:ss'
import dayjs from "dayjs";

export const formatTime = (time: string | number | Date | dayjs.Dayjs | null | undefined, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(time).format(format);
}

export const formatDate = (time: string | number | Date | dayjs.Dayjs | null | undefined, format = 'YYYY-MM-DD') => {
    return dayjs(time).format(format);
}