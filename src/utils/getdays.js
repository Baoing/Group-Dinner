/**
 * 天数 例如传入 14 则返回未来两周的日期
 * @param {*} day
 */
export const getDay = (number) => {
  let days = []

  function getDay(day) {
    let today = new Date()
    let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day
    today.setTime(targetday_milliseconds)
    let tYear = today.getFullYear()
    let tMonth = today.getMonth()
    let tDate = today.getDate()
    tMonth = doHandleMonth(tMonth + 1)
    tDate = doHandleMonth(tDate)
    return {
      day: tDate,
      weekday: getWeek(tYear + "-" + tMonth + "-" + tDate),
      fullTime: tYear + "-" + tMonth + "-" + tDate
    }
  }

  function doHandleMonth(month) {
    let m = month
    if (month.toString().length == 1) {
      m = "0" + month
    }
    return m
  }

  days.splice(0)//请控之前的数据
  for (let i = 0; i < number; i++) {
    days.push(getDay(-i))//-i 代表之前  i代表将来
  }
  return days
}

/**
 * 根据日期字符串获取星期几
 * @param dateString 日期字符串（如：2020-05-02）
 * @returns {String}
 */
function getWeek(dateString) {
  let dateArray = dateString.split("-")
  let date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2])
  return "周" + "日一二三四五六".charAt(date.getDay())
}
