import { google } from "googleapis";
import { KEY, SPREADSHEET_ID } from "$env/static/private";

export const load = async () => {
  const sheet = google.sheets({ version: "v4", auth: KEY });

  const eventList = await sheet.spreadsheets.values
    .get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Event",
    })
    .then((res) => {
      //   remove the first two index because it's only label, not the data
      return res.data.values?.slice(2).map((col) => {
        return {
          eventDate: col[0],
          eventName: col[4],
          eventCity: col[3],
          eventLocation: col[2],
          eventInfoLink: col[6],
        };
      });
    });
  return {
    eventList,
  };
};
