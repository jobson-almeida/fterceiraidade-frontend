export default function (value) {
  return new Date((value).substring(6), (value).substring(3, 5) - 1, (value).substring(0, 2));
}