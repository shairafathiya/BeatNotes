"use client";

import { useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  type: "Manggung" | "Latihan" | "Recording";
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState<Event["type"]>("Manggung");

  const addEvent = () => {
    if (!title || !date || !type) return;
    const newEvent: Event = {
      id: Date.now(),
      title,
      date,
      type,
    };
    setEvents([...events, newEvent]);
    setTitle("");
    setDate("");
    setType("Manggung");
  };

  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className=" flex flex-col p-8  mx-auto text-[#3b362f] space-y-8 bg-[#f9f4e8] min-h-screen">
      <h1 className="text-3xl font-bold mb-4">📅 Event Timeline</h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">➕ Tambah Event</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Judul Event"
          className="w-full border p-2 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as Event["type"])}
          className="w-full border p-2 rounded"
        >
          <option value="Manggung">Manggung</option>
          <option value="Latihan">Latihan</option>
          <option value="Recording">Recording</option>
        </select>
        <button
          onClick={addEvent}
          className="bg-[#5f3d3d] text-white px-4 py-2 rounded hover:bg-[#472d2d]"
        >
          Simpan Event
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">📌 Timeline Events</h2>
        <ul className="space-y-4">
          {sortedEvents.map((event) => (
            <li key={event.id} className="bg-white p-4 rounded shadow border-l-4" style={{ borderColor: event.type === "Manggung" ? "#8b0000" : event.type === "Latihan" ? "#006400" : "#1e90ff" }}>
              <div className="font-semibold text-lg">{event.title}</div>
              <div className="text-sm text-gray-600">{event.date} • {event.type}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
