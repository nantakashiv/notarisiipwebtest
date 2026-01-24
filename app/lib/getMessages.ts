export async function getMessages(locale: "id" | "en") {
  return (await import(`../messages/${locale}.json`)).default;
}
