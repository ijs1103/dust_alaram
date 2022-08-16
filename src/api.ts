import axios from "axios";

export const fetchData = async (sidoName: string) => {
  const res = await axios.get(
    "/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
    {
      params: {
        serviceKey: import.meta.env.VITE_APP_KEY,
        returnType: "json",
        numOfRows: "100",
        pageNo: "1",
        sidoName,
        ver: "1.0",
      },
    }
  );
  return res.data.response.body.items;
};
