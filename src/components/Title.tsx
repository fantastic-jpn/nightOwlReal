
type OriginalTitleProps ={
  title1?: string,
  title2?: string
}

export default function OriginalTitle({title1,title2}: OriginalTitleProps){
  
  
  return(
    <div className=" text-8xl font-extrabold w-full pl-[10vw] bg-dark-gray">
      <span className="bg-clip-text text-transparent  bg-normal w-full flex flex-col">
        {title1}
        <span>{title2}</span>
      </span>
      
      </div>
  )
}