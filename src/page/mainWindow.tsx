import SlideShow from "../components/SlideShow"

export default function MainWindow(){
  return(
    <div id="top" className="h-[100%]">
      <SlideShow />
      <div className="flex justify-evenly m-6 max-lg:invisible">
        <div className="text-5xl ">
          ▼
        </div>

        <div className="text-5xl">
          ▼
        </div>
      </div>
    </div>
  )
}