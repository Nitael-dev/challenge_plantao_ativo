export const favoriteVerify = (id: number, state: string[]) => {
  return !!state?.find((val) => val === String(id));
}
