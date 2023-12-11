
type PriceCardProps = {
  title: string,
  price: number,
  description: string[],
}

export default function PriceCard({title, price, description}: PriceCardProps){
  return(
    <div className="flex flex-col bg-normal mg-5 rounded-2xl min-h-min lg:h-[60vh]">
      <span className=" text-center text-6xl bg-clip-text bg-dark-gray text-transparent">
        {title}
      </span>

      <span className="text-center text-6xl">
        ${price}
      </span>

      <span className="flex flex-col justify-center items-center h-full">
        {description.map((des, index) =>(
          <div className="collapse bg-lighter-gray hover:bg-dark-gray hover:text-normal">
            <input type="radio" name="my-accordion-1"/>
              <div className="collapse-title text-7xl text-center">ARIMOTO</div>
              <div className="collapse-content" key={index}>{des}</div>
          </div>
        ))}
      </span>
    </div>
  )
}