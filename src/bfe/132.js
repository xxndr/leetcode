function angle(time) {
  const [hours, minutes] = time.split(":");
  const minutesAngle = Number(minutes % 60) * 6;
  const hoursAngle = Number(hours % 12) * 30 + Number(minutes * 0.5);
  const [maxAngle, minAngle] = [
    Math.max(hoursAngle, minutesAngle),
    Math.min(hoursAngle, minutesAngle),
  ];
  const diff = maxAngle - minAngle;
  return diff >= 180 ? Math.round(360 - diff) : Math.round(diff);
}
