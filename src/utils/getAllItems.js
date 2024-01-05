export default async function getAllItems() {
  const res = await fetch(
    "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
  );

    return res.json()
}
