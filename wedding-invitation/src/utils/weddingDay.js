export function getWeddingDayState(weddingDateStr, now = new Date()) {
  const wedding = new Date(weddingDateStr + 'T00:00:00')
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const weddingDay = new Date(wedding.getFullYear(), wedding.getMonth(), wedding.getDate())

  if (today.getTime() < weddingDay.getTime()) return 'before'
  if (today.getTime() === weddingDay.getTime()) return 'today'
  return 'after'
}

export function getCountdownTarget(dateStr, timeStr = '00:00') {
  const [y, m, d] = dateStr.split('-').map(Number)
  const [hh, mm] = timeStr.split(':').map(Number)
  return new Date(y, m - 1, d, hh, mm, 0)
}

export function getCountdownParts(targetDate, now = new Date()) {
  let diff = Math.max(0, targetDate.getTime() - now.getTime())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff -= days * 24 * 60 * 60 * 1000
  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff -= hours * 60 * 60 * 1000
  const minutes = Math.floor(diff / (1000 * 60))
  diff -= minutes * 60 * 1000
  const seconds = Math.floor(diff / 1000)
  return { days, hours, minutes, seconds, complete: targetDate.getTime() <= now.getTime() }
}
