// import picture from "../assets/sho_smile.jpg"
import pictureDemo from "../assets/mainPage.png"
import { MemberCardProps } from "./MemberCard"

export default function MemberCard2({name, native, position}: MemberCardProps){
  return(
    <div className="hero row-span-4 max-md:order-1" style={{backgroundImage: `url(${pictureDemo})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col justify-end h-full">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{name}</h1>
          <p className="mb-5">Native: {native}</p>
          <p className="mb-5">Position: {position}</p>
          
        </div>
      </div>
    </div>
  )
}