export const getById = (url) => {
  const urlSplit = url.split("/");
  return urlSplit[urlSplit.length - 2];
};

export const buttonStyles = {
  color: "#E5B13A",
  backgroundColor: "black",
  border: "2px solid #E5B13A"
};