import React, { useEffect, useState} from "react";
import { fetchEvents } from "../auth/auth";

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedEvents = await fetchEvents();
            setEvents(fetchedEvents.data);
        };

        fetchData();
    }, []);

    return (
        <div>
          <h2>Список событий</h2>
          {events.map((event) => (
            <div key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Дата: {event.date}</p>
              <p>Спикер: {event.speaker}</p>
              <a href={event.link}>Ссылка на событие</a>
            </div>
          ))}
        </div>
      );
};

export default EventList;