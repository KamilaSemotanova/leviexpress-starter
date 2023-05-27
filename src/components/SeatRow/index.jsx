import React, { useEffect, useState } from 'react';
import './style.css';
import { Seat } from '../Seat';

const testRow = [
  {
    number: 33,
    isOccupied: false,
  },
  {
    number: 29,
    isOccupied: true,
  },
  {
    number: 25,
    isOccupied: false,
  },
];

export const SeatRow = ({ row }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => {
        return <Seat number={seat.number} isOccupied={seat.isOccupied} key={seat.number} />;
      })}
    </div>
  );
};
