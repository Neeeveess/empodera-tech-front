export function calcBithday(birthdate: Date) {
  const today = new Date()
  const birth = new Date(birthdate)
  const age = today.getFullYear() - birth.getFullYear()

  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    return age - 1
  }

  return age
}
