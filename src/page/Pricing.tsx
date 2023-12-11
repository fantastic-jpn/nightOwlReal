import PriceCard from "../components/PriceCard";
import OriginalTitle from "../components/Title";


export default function PricingPage(){
  return(
    <div id="price" className="mt-12">
      <OriginalTitle title2="PRICE" />
      
      <div className="flex justify-center">

      <div className="grid md:grid-row-3 lg:grid-cols-3 w-[80vw] gap-6 m-20">
        <PriceCard title="shit" price={100} description={["chinchin", "korosu", "kaere"]}/>
        <PriceCard title="shit2" price={102} description={["chinchin", "gaiaku", "kaere"]}/>
        <PriceCard title="shit3" price={104} description={["chinchin", "gomi", "kaere"]}/>
      </div>
      </div>
    </div>
  )
}