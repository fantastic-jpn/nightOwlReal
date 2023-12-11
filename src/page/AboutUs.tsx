import OriginalTitle from "../components/Title"
import MemberCard from "../components/MemberCard"
import MemberCard2 from "../components/MemberCard2"

export default function AboutUs(){
  
  
  return(
    <div id="about" className="mt-10">
    <OriginalTitle title2="ABOUT US" />
    <div className=" flex justify-center">
      <div className="max-lg:flex max-lg:flex-col justify-center lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:gap-3 w-[80vw] m-32 ">
          <MemberCard name="Kota" native="JP/EN" position="Creating system and management" />
        
        
        <MemberCard2 name="Akira"  native="JP/VN/EN" position="CEO"/>
        
        <MemberCard name="Sho" native="JP/EN" position="Creating video contents and management"/>
        <MemberCard name="NACHI" native="JP" position="creating vide contents"/>
        <MemberCard name="YOSHI" native="JP" position="creating systems"/>
        
      
      </div>
    </div>
    </div>
  )
}