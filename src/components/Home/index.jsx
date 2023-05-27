import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SeatPicker } from '../SeatPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const navigate = useNavigate();

  const handleJourneyChange = (journey) => {
    setJourney(journey);
    console.log(journey);
  };

  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => navigate(`/reservation/${data.results.reservationId}`));

    console.log('ahoj');
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <div>
        {journey && (
          <>
            <JourneyDetail journey={journey} />
            <SeatPicker
              seats={journey.seats}
              journeyId={journey.journeyId}
              key={journey.autoSeat}
            />
            <button className="reservation_btn" onClick={handleBuy}>
              Rezervovat
            </button>
          </>
        )}
      </div>
    </main>
  );
};
