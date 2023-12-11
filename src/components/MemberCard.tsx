// import picture from "../assets/kota.jpg"
import pictureDemo from "../assets/mainPage.png"

export type descriptionProps = {
  native: string, 
  position: string,
}

export type MemberCardProps = {
  name: string,
} & descriptionProps

export default function MemberCard({name, native, position}: MemberCardProps){
  
  return(
      <div className="hero bg-base-200 row-span-2">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={pictureDemo} className=" rounded-lg shadow-2xl min-w-[0px] max-w-[200px]" />
      <div>
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="pb-6">Native: {native}</p>
        <p className="pb-6">position: {position}</p>
      </div>
    </div>
  </div>
  )
}