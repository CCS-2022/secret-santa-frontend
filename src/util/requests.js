import keycloak from "./keycloak";

const baseFetchUrl = "https://192.168.1.235:8443/";
export default baseFetchUrl;

export async function getRequest() {
  const token = keycloak.token;
  // const token = tokenLoader();
  // console.log(token);
  if (!token) {
    console.error("No valid token available.");
    // You may want to handle this case more explicitly (e.g., redirect to login).
    throw new Error("No valid token available.");
  }

  try {
    const response = await fetch(
      "http://localhost:8080/secret-santa/user/friends",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (!response.ok) {
      console.error("Request failed with status:", response.status);
      // Handle the error (e.g., throw an error or return an error object).
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    // Process and modify data as needed.
    for (let i = 0; i < data.length; i++) {
      data[i].key = i;
    }

    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error (e.g., throw an error or return an error object).
    throw error;
  }
}
