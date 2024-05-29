import { API_URL } from "$env/static/private";
type Event = {
  event_date: string;
  event_name: string;
  event_city: string;
  event_location: string;
  event_info_link: string;
};

export const load = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const eventList: Event[] = await response
    .json()
    .catch((err) => console.log(err));

  return {
    eventList,
  };
};
