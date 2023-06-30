import React, { useEffect, useState} from 'react'
import './covid.css'

const Covid = () => {

    const[data, setData] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const data = await res.json();
            console.log(data.statewise[5]);
            setData(data.statewise[5]);
        } catch(err) {
            console.log(err);
        }
            
             

    }


    useEffect(() => {
        getCovidData();      
    }, []);  
 
  return (
    <>
        <section>   
            <h2 align="center">🔴 Live</h2>
            <h1 align="center">COVID-19 CRONAVIROUS TRACKER</h1>

            <ul className='parent'>


                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner color1'>
                            <p align='center' className='card__name'><span>0UR</span> COUNTRY</p>
                            <p align='center' className='card__total card__small'>INDIA</p>
                        </div>                     
                    </div>
    
                </li>

                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner color2'>
                            <p align='center' className='card__name'><span>TOTAL</span>RECOVERED</p>
                            <p align='center' className='card__total card__small'>{data.recovered}</p>
                        </div>                     
                    </div>

                    
    
                </li>

                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner color3'>
                            <p align='center' className='card__name'><span>TOTAL</span>CONFIRMED</p>
                            <p align='center' className='card__total card__small'>{data.confirmed}</p>
                        </div>                     
                    </div>

                    
    
                </li>

                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner color4'>
                            <p align='center' className='card__name'><span>TOTAL</span> DEATHS</p>
                            <p align='center' className='card__total card__small'>{data.deaths}</p>
                        </div>                     
                    </div>

                    
    
                </li>

                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner color5'>
                            <p align='center' className='card__name'><span>TOTAL</span> ACTIVE</p>
                            <p align='center' className='card__total card__small'>{data.active}</p>
                        </div>                     
                    </div>

                    
    
                </li>

                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner color6'>
                            <p align='center' className='card__name'><span></span> STATE</p>
                            <p align='center' className='card__total card__small'>{data.state}</p>
                        </div>                     
                    </div>

                    
    
                </li>

                
                

            </ul>
            <div className='qoute'>
                <p align="center">These so-called bleak times are necessary to go through in order to get to a much, much better place.</p>
            </div>

        <div className='btn'>
            <button>Right To Health</button>        
        </div>                   

        </section> 
       
        <div>
                <p align='center'>&#169;GauTam 😊      All rights reserved</p>
            </div>
        
    </>
  )
}

export default Covid