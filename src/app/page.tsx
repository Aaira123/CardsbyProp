import Catogories from "./components/Catogories";

export default function Home() {
  return (
   <div>
    <h1 className= "text-6xl text-orange-300 text-center bg-slate-600 rounded-2xl">Delicious Fast FOOD </h1>
    <Catogories />
    <h1 className=" mt-6 h-16 text-orange-300 text-center pt-5 bg-slate-600"> &copy; All right reserved</h1>
   </div>
  );
}
