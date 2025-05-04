import React from "react";

const CountryDropdown = ({ countries, onSelectCountry }) => {
    return (
        <ul>
            {countries.length > 0 ? (
                countries.map((item) => (
                    <li className="cursor-pointer my-5 px-5" key={item.id} onClick={() => onSelectCountry(item)}>
                        {item.country}
                    </li>
                ))
            ) : (
                <li>No countries available</li>
            )}
        </ul>
    );
};

export default CountryDropdown;