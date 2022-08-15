export const convertVndToUsd = (vnd: number) => {
  return Number((vnd/ 23000).toFixed(1)).toLocaleString()
}