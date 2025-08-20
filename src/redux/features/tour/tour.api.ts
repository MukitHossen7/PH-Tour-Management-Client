import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTourType: builder.mutation<IResponse<null>, { name: string }>({
      query: (tourTypeData) => ({
        url: "/tour/create-tour-type",
        method: "POST",
        data: tourTypeData,
      }),
      invalidatesTags: ["TOUR_TYPE"],
    }),
    getTourType: builder.query({
      query: () => ({
        url: "/tour/tour-types",
        method: "GET",
      }),
      providesTags: ["TOUR_TYPE"],
    }),
  }),
});

export const { useAddTourTypeMutation, useGetTourTypeQuery } = tourApi;
