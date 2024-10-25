export const CONSTANTS = {
  API_URL: "http://api.openweathermap.org/data/2.5/forecast?",
  API_KEY: "fd48bdf8a8b87b3c140f17625f4e2d57",
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

export const ROUTE_CONSTANTS = {
  MAIN: "/",
  CARD: "/fullDay",
};
export let dataInfo 
export const handleRequest = (callBack,city) => {
  if(!city){
    city = "Yerevan"
  }
  fetch(`${CONSTANTS.API_URL}q=${city}&appid=${CONSTANTS.API_KEY}&units=metric`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data from API");
      }
      return res.json();
    })
    .then((data) => {
      dataInfo = data
      callBack(data);
    })
    .catch((err) => {
      console.error(err);
      alert("Please try again.");
    })
    .finally(() => {});
};
