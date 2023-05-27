import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';

export const Home = () => {
  const [journey, setJourney] = useState();

  const navigate = useNavigate();

  const handleJourneyChange = (journey) => {
    setJourney(journey);
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
            <SelectedSeat number={journey.autoSeat} />
            <button onClick={handleBuy}>Rezervovat</button>
          </>
        )}
      </div>
    </main>
  );
};
