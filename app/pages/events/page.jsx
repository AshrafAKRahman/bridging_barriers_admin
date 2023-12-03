"use client";
import React, { useEffect, useState } from "react";
console.log(process.env);
const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const apiKey = process.env.EVENTBRITE_API;
        // process.env.EVENTBRITE_API;
        const response = await fetch(
          `https://www.eventbriteapi.com/v3/users/me/?token=${apiKey}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("failed to fetch events");
        }
        const data = await response.json();
        console.log("Response from Eventbrite API:", data);
        setEvents(data.events || []);
      } catch (error) {
        console.log("error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col items-center bg-red-400">
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-green-300">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">{event.name.text}</h2>
            <p>{event.description.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
