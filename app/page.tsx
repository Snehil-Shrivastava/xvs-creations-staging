import HomePage from "@/Pages/HomePage";
import RepeatingSVG from "@/SVGs/RepeatingLambdaBg";

export default function Home() {
  return (
    <>
      <RepeatingSVG />
      <div className="w-4/5 mx-auto relative top-40">
        <HomePage />
      </div>
    </>
  );
}
