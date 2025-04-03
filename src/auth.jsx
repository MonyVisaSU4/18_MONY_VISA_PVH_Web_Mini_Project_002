import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginService } from "../service/login-service";
// import Register from "../service/register-service";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const {email, password} = credentials;
        const res = await LoginService(
          { 
            email,
            password
          }
        )
        // console.log("Res is: ", res)
        // console.log("Token: ", res.payload.token)
        return res
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      const { token } = props;
      return token.token.user;
    },
  },
  strategy: "jwt",
})

// export const { register } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         username: {},
//         email: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         const {username, email, password} = credentials;
//         const res = await Register(
//           { 
//             username,
//             email,
//             password
//           }
//         )
//         // console.log("Res is: ", res)
//         // console.log("Token: ", res.payload.token)
//         return res
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt(token) {
//       return token;
//     },
//     async session(props) {
//       const { token } = props;
//       return token.token.user;
//     },
//   },
//   strategy: "jwt",
// })