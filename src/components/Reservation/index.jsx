import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useParams,
} from 'react-router-dom';
import './style.css';

export const Reservation = () => {
  const [reservation, setReservation] = useState();

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReservation(data.results);
      });
  }, []);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. HAQBAQASf7M</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          {reservation && (
            <>
              <p>{reservation.date}</p>
              <p>
                {reservation.fromCity.name}, {reservation.fromCity.time}
              </p>
              <p>
                {reservation.toCity.name}, {reservation.toCity.time}
              </p>
              <p>{reservation.seatNumber}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
