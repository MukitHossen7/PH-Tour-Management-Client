import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation<IResponse<null>, FormData>({
      query: (formData) => ({
        url: "/division/create",
        method: "POST",
        data: formData,
      }),
      invalidatesTags: ["DIVISION"],
    }),

    getDivision: builder.query({
      query: () => ({
        url: "/division",
        method: "GET",
      }),
      providesTags: ["DIVISION"],
    }),
  }),
});

export const { useAddDivisionMutation, useGetDivisionQuery } = divisionApi;
