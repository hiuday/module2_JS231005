function checkPermutation(s: string, t: string) {
  if (s.length !== t.length) {
    return false;
  }
  const textS: string[] = s.split("").sort();
  const textT: string[] = t.split("").sort();
  return textS === textT;
}
