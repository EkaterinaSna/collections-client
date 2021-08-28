export function errorHandler(response) {
  console.log(response)
  if (!response.ok) throw new Error(response.status);
  return response;
}