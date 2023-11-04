import axios from "axios";

export const getData = async () => {
  const data = await axios.get(
    "https://6353ff98ccce2f8c02010974.mockapi.io/api/web-basic/v1/Users"
  );
  return data.data;
};
