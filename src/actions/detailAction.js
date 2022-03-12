import axios from "axios";
import { getGameDetailsURL, getGameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await axios.get(getGameDetailsURL(id));
  const screenshotData = await axios.get(getGameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    }
  })
}
