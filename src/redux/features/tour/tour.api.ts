import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTourType: builder.mutation({
      query: (tourTypeData) => ({
        url: "/tour/create-tour-type",
        method: "POST",
        data: tourTypeData,
      }),
    }),
    getTourType: builder.query({
      query: () => ({
        url: "/tour/tour-types",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddTourTypeMutation, useGetTourTypeQuery } = tourApi;
