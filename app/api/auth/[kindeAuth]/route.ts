
// import { handlers } from "@/app/auth" // Referring to the auth.ts we just created
// export const { GET, POST } = handlers

import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();