let url = "https://2c21-182-176-157-31.ngrok-free.app/company";

async function fetchData() {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchData();
