export const getAge = (time = Date.now()) => {
  const diff = time - new Date(2004, 6, 23).getTime()
  const age = new Date(diff)
  return Math.abs(age.getUTCFullYear() - 1970)
}