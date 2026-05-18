import { useEffect, useState } from "react";
import { getGuests, getGuest } from "./components/api";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGuests() {
      try {
        setLoading(true);
        setError(null);

        const guestsFromApi = await getGuests();
        setGuests(guestsFromApi);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGuests();
  }, []);

  useEffect(() => {
    async function fetchSelectedGuest() {
      try {
        setLoading(true);
        setError(null);

        const guestFromApi = await getGuest(selectedGuestId);
        setSelectedGuest(guestFromApi);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (selectedGuestId) {
      fetchSelectedGuest();
    } else {
      setSelectedGuest(null);
    }
  }, [selectedGuestId]);

  return (
    <main>
      <h1>Guest List</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {selectedGuest ? (
        <GuestDetails
          guest={selectedGuest}
          onBack={() => setSelectedGuestId(null)}
        />
      ) : (
        <GuestList guests={guests} onSelectGuest={setSelectedGuestId} />
      )}
    </main>
  );
}
