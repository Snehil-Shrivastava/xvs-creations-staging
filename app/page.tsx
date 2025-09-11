import HomePage from "@/Pages/HomePage";
import RepeatingSVG from "@/SVGs/RepeatingLambdaBg";

export default function Home() {
  return (
    <>
      <RepeatingSVG />
      <div className="lg:max-xl:w-9/10 xl:max-1440p:w-4/5 mx-auto relative top-40">
        <HomePage />
      </div>
    </>
  );
}
