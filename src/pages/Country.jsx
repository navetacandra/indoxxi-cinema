import React from 'react'
import { useParams } from 'react-router-dom';
import CountrySelector from '../common/components/CountrySelector';
import CountrySearch from '../modules/CountrySearch';

function Country() {
    let country_list = ["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Bahamas", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Belize", "Bolivia", "Bosnia", "Herzegovina", "Botswana", "Brazil", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Czechoslovakia", "Denmark", "Dominican Republic", "Ecuador", "Egypt", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Polynesia", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Haiti", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle Of Man", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kosovo", "Laos", "Latvia", "Lebanon", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malaysia", "Malta", "Mauritania", "Mexico", "Monaco", "Montenegro", "Morocco", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nigeria", "North Korea", "Norway", "Pakistan", "Palestine", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of Macedonia", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Serbia", "Serbia", "Montenegro", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Soviet Union", "Spain", "Sri Lanka", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tanzania", "Thailand", "Trinidad", "Tobago", "Tunisia", "Turkey", "Uganda", "UK", "Ukraine", "Uruguay", "USA", "Vanuatu", "Venezuela", "Vietnam", "West Germany", "Yugoslavia"];
    let { country: current } = useParams();
    return (
        <div className="container mt-5">
            {
                !current ? (
                    <div className="row justify-content-center mt-5">
                        {
                            country_list.map((val, key) => (
                                <CountrySelector country={val} key={key} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="row justify-content-start">
                        <CountrySearch country={current} />
                    </div>
                )
            }
        </div>
    )
}

export default Country