import React,{useContext, useEffect, useState} from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Context } from "../Context";
import datalanguage from "../Data.json"

const HeaderCategory = () => {
    const { category2, setCategory2 ,darkMode1,languagedheader } = useContext(Context);
   

    console.log("kkkk", languagedheader)

    
    const clickHandler = (item) => {
        setCategory2 (item);
    };


  return (
    <div className={darkMode1 ? "HeaderNewsdark HeaderCategory" : "HeaderCategory"}>
        <Container>
            {languagedheader === "english" && 
                    <ul>
                    <li onClick={() => clickHandler("general")}>
                       {datalanguage.english[0].title}
                    </li>
                    <li onClick={() => clickHandler("general")}>
                    {datalanguage.english[1].title}
    
                    </li>
                    <li onClick={() => clickHandler("business")}>
                    {datalanguage.english[2].title}
                    </li>
                    <li onClick={() => clickHandler("technology")}>
                    {datalanguage.english[3].title}
                    </li>
                    <li onClick={() => clickHandler("health")}>
                    {datalanguage.english[4].title}
    
                    </li>
                    <li onClick={() => clickHandler("sport")}>
                    {datalanguage.english[5].title}
                    </li>
                    <li onClick={() => clickHandler("entertainment")}>
                    {datalanguage.english[6].title}
                    </li>
                </ul>
            }

{languagedheader === "arabic" && 
                    <ul>
                    <li onClick={() => clickHandler("general")}>
                       {datalanguage.arabic[0].title}
                    </li>
                    <li onClick={() => clickHandler("general")}>
                    {datalanguage.arabic[1].title}
    
                    </li>
                    <li onClick={() => clickHandler("business")}>
                    {datalanguage.arabic[2].title}
                    </li>
                    <li onClick={() => clickHandler("technology")}>
                    {datalanguage.arabic[3].title}
                    </li>
                    <li onClick={() => clickHandler("health")}>
                    {datalanguage.arabic[4].title}
    
                    </li>
                    <li onClick={() => clickHandler("sport")}>
                    {datalanguage.arabic[5].title}
                    </li>
                    <li onClick={() => clickHandler("entertainment")}>
                    {datalanguage.arabic[6].title}
                    </li>
                </ul>
            }
    
        </Container>
    </div>
  )
}

export default HeaderCategory