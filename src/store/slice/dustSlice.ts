import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IDustData {
  sidoName: string;
  stationName: string;
  dataTime: string;
  pm10Grade: string;
  pm10Value: string;
  isLiked: boolean;
}

export interface DustState {
  dustDataArr: IDustData[];
  likedDust: IDustData[];
  myAreaDust: IDustData | null;
  initDust: IDustData | null;
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

export const fetchDust = createAsyncThunk<IDustData[], string>(
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
    // payload: stationName
    setMyArea(state, action) {
      const myArea = state.dustDataArr.find(
        (cur) => cur.stationName === action.payload
      );
      if (!myArea) return;
      state.myAreaDust = myArea;
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
