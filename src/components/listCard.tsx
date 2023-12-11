
type ListCardProps = {
  num: string[],
  description: string[]
}

export default function ListCard( {num, description}: ListCardProps){
  return(
    <div className="flex max-md:flex-col justify-evenly items-center w-[80vw] lg:border-solid lg:border-b-4 lg:border-b-dark-gray ">
          <div className="w-full flex justify-center max-md:border-solid max-md:border-b-4 max-md:border-b-dark-gray">
          <p className="w-[300px] p-10 text-center text-transparent bg-clip-text bg-gradient-to-br from-base-100 to-dark-gray text-xl font-extrabold">
            <h1 className="m-auto text-center text-transparent bg-clip-text bg-dark-green text-4xl font-extrabold">{num[0]}</h1>
            {description[0]}
          </p>
          </div>

          <div className="w-full flex justify-center max-md:border-solid max-md:border-b-4 max-md:border-b-dark-gray">
          <p className="w-[300px] p-10 text-center text-transparent bg-clip-text bg-gradient-to-br from-dark-green to-dark-gray text-xl font-extrabold">
            <h1 className="m-auto text-center text-transparent bg-clip-text bg-dark-green text-4xl font-extrabold">{num[1]}</h1>
            {description[1]}
          </p>
          </div>
    </div>
  )
}