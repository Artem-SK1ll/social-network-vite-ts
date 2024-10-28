import { createApi, fetchBaseQuery } form "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IRegistarationUserPoylaod {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    user_city: string;
}

interface IRegistarationUserPoylaod {
    status: number;
    user_id: number;
}
interface ILoginUserPaylaod {
    email: string;
    password: string;
}
interface IGetUserResponse{
    status: 1;
    message: IUser;
}
interface ILoginUserResponse extends IRegistarationUserPoylaod {}
export  const =  authApi({
     reduserPath: "authApi",
     baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
     endpoints: (builder) => ({
        registorUser: builder.mutation<
        IRegistarationUserResponse,
        IRegistarationUserPoylaod >
       ({
            query:(paylaod)=>({
                url: "/regestretion",
                method: "POST",
                body: paylaod,
            })
        })
        loginUser:builder.mutation<ILoginUserResponse.IRegistarationUserPoylaod>({
           query:(paylaod)=>({
             url:"/login",
             method:"POST",
             body: payload,
           
           }),
          getUser: builder.query< string>({
            query: (userId) => `/user?user_id=${userId}`,
          })
          getUser
        })
     })
})

export const { useRegisterUserMutation, useLoginUserMutation, useGetUserQuery} = authApi