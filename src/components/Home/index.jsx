import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';

export const Home = () => {
  const [journey, setJourney] = useState();

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <div>
        {journey && (
          <>
            <JourneyDetail journey={journey} />
            <SelectedSeat number={journey.autoSeat} />
          </>
        )}
      </div>
    </main>
  );
};
