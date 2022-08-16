import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface dustData {
  sidoName: string;
  stationName: string;
  dateTime: string;
  pm10Grade: string;
  pm10Value: string;
  isLiked: boolean;
}

export interface DustState {
  dustDataArr: dustData[];
  likedDust: dustData[];
  myAreaDust: dustData | null;
  initDust: dustData | null;
  error: string | null | undefined;
  loading: boolean;
}

const initialState: DustState = {
  dustDataArr: [],
  likedDust: [],
  myAreaDust: null,
  initDust: null,
  error: undefined,
  loading: false,
};

export const fetchDust = createAsyncThunk<dustData[], string>(
  "fetchDust",
  async (sidoName: string) => {
    try {
      const res = await axios.get(
        "/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
        {
          params: {
            sidoName,
            serviceKey: import.meta.env.VITE_APP_KEY,
            returnType: "json",
            numOfRows: "100",
            pageNo: "1",
            ver: "1.0",
          },
        }
      );
      return res.data.response.body.items.map((cur: any) => {
        return { ...cur, isLiked: false };
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const dustSlice = createSlice({
  name: "dust",
  initialState,
  reducers: {
    // payload: dustData
    setMyArea(state, action) {
      state.myAreaDust = action.payload;
    },
    // payload: dustData
    addLike(state, action) {
      state.likedDust.push({ ...action.payload, isLiked: true });
    },
    // payload: stationName
    removeLike(state, action) {
      const existingDust = state.dustDataArr.find(
        (cur) => cur.stationName === action.payload
      );
      if (!existingDust) return;
      existingDust.isLiked = false;
      state.likedDust = state.likedDust.filter(
        (cur) => cur.stationName !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDust.fulfilled, (state, { payload }) => {
      state.dustDataArr = payload;
      state.loading = false;
    });
    builder.addCase(fetchDust.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(fetchDust.pending, (state) => {
      state.loading = true;
    });
  },
});

export const dustReducer = dustSlice.reducer;

export const { setMyArea, addLike, removeLike } = dustSlice.actions;
