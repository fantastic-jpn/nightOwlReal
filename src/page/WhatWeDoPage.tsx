
import ListCard from "../components/listCard"
import OriginalTitle from "../components/Title"


export default function WhatWeDoPage(){

  const listwords = {
    "first-col": {"num": ["No.1", "No.2"], "description": ["Build up your language skills","Build up confidence for you to master your language"]},
    "sec-col": {"num": ["No.3", "No.4"], "description": ["Teaching daily Japanese/English with our native speakers","Creating bonds and new friendship who have the same goals"]},
    "third-col":{"num": ["No.5", "No.6"], "description": ["Create a fun environment for you to learn faster","Helping your language skills ready for most situation"]}
  }

  return(
    <div className="flex flex-col justify-center items-center mb-12" id="dopage">

      <OriginalTitle title1="WHAT" title2="WE DO"/>

      <div className="sample m-32">
        #video right here!!!
      </div>

      <div className="flex flex-col w-full justify-center items-center h-full">
        
        <ListCard num={listwords["first-col"].num} description={listwords["first-col"].description}/>

        <ListCard num={listwords["sec-col"].num} description={listwords["sec-col"].description} />

        <ListCard num={listwords["third-col"].num} description={listwords["third-col"].description} />

      </div>

    </div>
  )
}