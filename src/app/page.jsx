'use client'

import styles from "./page.module.css";
import { useState } from "react";
import NavBar from "@/components/molecules/navBar/navBar";
import GenerationBtn from "@/components/atoms/generationBtn/generationBtn";
import CountrySpan from "@/components/atoms/countrySpan/countrySpan";
import CitySpan from "@/components/atoms/citySpan/citySpan";
import CityDeskript from "@/components/atoms/infoSpan/cityDeskript";



export default function Home() {
  const [travels, setTravels] = useState([
     {
        country: 'Italy',
        city: 'Rome',
        backgroundSrc: '/bgs/rome_city.jpg',
        deskript: "Rome is the Eternal City, founded in 753 BC, the capital of Italy and the cradle of Western civilization with a rich ancient history.",
        fact: "Rome has more fountains than days in a year—around 2,000, including the famous Trevi Fountain, where over 1.5 million euros in coins are thrown each year to make wishes come true."
     },
     {
        country: 'Australia',
        city: 'Sydney',
        backgroundSrc: '/bgs/sydney_city.jpg',
        deskript: "Sydney sparkles with iconic Opera House sails, harbor cruises, and Bondi Beach surf—perfect for urban adventures and coastal vibes down under.",
        fact: "The Sydney Opera House features over 1 million roof tiles and hosts more than 1,800 performances yearly."
     },
     {
        country: 'UK',
        city: 'London',
        backgroundSrc: '/bgs/london_city.jpg',
        deskript: "London blends royal palaces, world-class museums, and vibrant nightlife—from the Thames to trendy areas like Shoreditch.",
        fact: "London has over 170 museums, many free, including the British Museum with 8 million exhibits."
     },
     {
        country: 'Kyoto',
        city: 'Japan',
        backgroundSrc: '/bgs/kyoto_city.jpg',
        deskript: "Kyoto enchants with ancient temples, cherry blossom gardens, and traditional tea houses—perfect for immersing in Japan's historic soul amid seasonal festivals.",
        fact: "Kyoto boasts over 2,000 temples and shrines, including the iconic golden Kinkaku-ji Pavilion covered in real gold leaf."
     },
     {
        country: 'USA',
        city: 'Denver',
        backgroundSrc: '/bgs/denver_city.jpg',
        deskript: "Denver offers a mix of Rocky Mountain landscapes, craft beer, and street art—a paradise for active rest and festivals.",
        fact: "Denver sits at 1,609 meters (5,280 feet) above sea level, making it the highest major city in the US."
     }
  ]);
  
  const [currentTravel, setCurrentTravel] = useState(0);
  
  function handleGenerate(){
    setCurrentTravel(Math.floor(Math.random() * travels.length));
  }

  return (
    <div style={
      {
        backgroundImage: `url( ${ travels[ currentTravel ].backgroundSrc } )`,
        backgroundPosition: 'center center',
        backgroudnSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    }
    className={styles.page}
    >

      <header className={styles.header}>
        <NavBar />
      </header>


      <main className={styles.main}>
        <div className={styles.travel_info}>
          
          <div className={styles.span_box}>
            <CountrySpan value={ travels[ currentTravel ].country }/>
            <CitySpan value={ travels[ currentTravel ].city }/>
          </div>

          <GenerationBtn handleAction={ handleGenerate }/>
        </div>

        <CityDeskript
          value={ travels[currentTravel].deskript }
          fact={ travels[currentTravel].fact}  
        />
      </main>
    </div>
  );
}