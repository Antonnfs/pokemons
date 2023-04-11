import "./App.scss";
import AppRouter from "./routes/AppRouter";
import MainWrapper from "./wrappers/MainWrapper";

export default function App() {
   return (
      <MainWrapper>
         <AppRouter />
      </MainWrapper>
   );
}
