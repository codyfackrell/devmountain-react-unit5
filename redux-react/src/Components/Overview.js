import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);

  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>

      <table className="overview-table">
        <tr>
          <td>Borders: </td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e}, `;
                  }
                })
              : "No bordering countries"}
          </td>
        </tr>
        <tr>
          <td>Capital: </td>
          <td>
            {currentDisplay.capital
              ? currentDisplay.capital.map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e}, `;
                  }
                })
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Continents: </td>
          <td>
            {currentDisplay.continents
              ? currentDisplay.continents.map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e}, `;
                  }
                })
              : "N/A"}
          </td>
        </tr>
        <tr>
          <td>Independent: </td>
          <td>{currentDisplay.independent ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>Landlocked: </td>
          <td>{currentDisplay.landlocked ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>UN Member: </td>
          <td>{currentDisplay.unMember ? "Yes" : "No"}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
