export default function (value) {
  
  const k = 1024

  if (value < 1024) {
    return `${value} Bytes`
  } else if (value >= k && value <= (k * k - 1)) {
    return `${(value / k).toString()} KB`
  } else if (value >= k * k && value <= (k * k * k - 1)) {
    return `${(value / (k * k)).toString()} MB`
  } else if (value >= k * k * k && value <= (k * k * k * k - 1)) {
    return `${(value / (k * k * k)).toString()} GB`
  } else if (value >= k * k * k * k) {
    return `${(value / (k * k * k * k)).toString()} TB`
  }
}
