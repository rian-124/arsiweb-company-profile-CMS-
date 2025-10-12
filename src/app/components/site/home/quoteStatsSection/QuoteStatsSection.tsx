import QuoteStats from "./QuoteStats";
import QuoteSlider from "./QuoteSlider";

export default function QuoteStatsSection() {
  return (
    <section className="md:flex md:flex-row flex flex-col transition-all duration-500">
      <div className="md:w-1/2 w-full bg-blue-500 md:p-30 md:pl-40 py-20 px-5 space-y-5 max-h-[27rem]">
        <QuoteSlider />
      </div>
      <div className="md:w-1/2 w-full bg-black px-10 py-20 space-y-3">
        <QuoteStats />
      </div>
    </section>
  );
}