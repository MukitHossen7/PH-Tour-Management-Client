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

    deleteTourType: builder.mutation<IResponse<null>, { id: string }>({
      query: ({ id }) => ({
        url: `/tour/tour-types/${id}`,
        method: "DELETE",
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

    addTour: builder.mutation<IResponse<null>, FormData>({
      query: (tourData) => ({
        url: "/tour/create",
        method: "POST",
        data: tourData,
      }),
      invalidatesTags: ["TOUR"],
    }),
    getAllTours: builder.query({
      query: (params) => ({
        url: "/tour",
        method: "GET",
        params: params,
      }),
      providesTags: ["TOUR"],
    }),
  }),
});

export const {
  useAddTourTypeMutation,
  useGetTourTypeQuery,
  useDeleteTourTypeMutation,
  useAddTourMutation,
  useGetAllToursQuery,
} = tourApi;
