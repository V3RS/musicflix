export const getMVs = async () => {
  const res = await fetch(`/api/mv/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
