// Importerer useParams-hooken fra react-router-dom
// useParams brukes for å hente URL-parametere (f.eks :slug)
import { useEffect } from 'react'
import { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Category(){

    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    
    
    const [apiData, setApiData] = useState([])
    const [spritesImg, setSpritesImg] = useState([])
    const { slug } = useParams()

    console.log("Denne kommer fra category", apiEndpoint)

    const getSingleData = async()=>{
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug)
        const data = await response.json()
        setApiData(data)
    
    }

    console.log("Cat", apiData, apiEndpoint)

    useEffect(()=>{
        getSingleData()
        // setSpritesImg(Object.keys(apiData?.sprites))
    },[slug])

    console.log("mine bilder",spritesImg)

    return (
        <main>
             <h1>{apiData?.name}</h1>
             <section>
                <h2>Bilder</h2>
                {/* {spritesImg?.map((item) => <img src={apiData?.sprites?.front_default} alt={apiData?.name} />)} */}
                {/* <img src={apiData? + spritesImg?.map(item => item)} alt={apiData?.name} /> */}
                <img src={apiData?.sprites?.front_default} alt={apiData?.name} />
             </section>

        </main>
       
    )
}
