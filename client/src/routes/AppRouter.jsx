import { useState } from "react";
import AuthRouter from "./AuthRouter";
import GuestRouter from "./GuestRouter";

export default function AppRouter() {
   const [user, setUser] = useState(true);

   return user ? <AuthRouter /> : <GuestRouter />;
}
