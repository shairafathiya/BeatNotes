"use client";

import React, { useState } from "react";

type Song = {
  id: number;
  title: string;
  fileUrl: string;
  genre: string;
  status: string;
  noteId?: number;
};

const genres = ["Pop", "Rock", "Jazz", "Hip-Hop", "Folk"];
const statuses = ["Draft", "Mixing", "Selesai"];

// Dummy notes (seharusnya ini dari state global / API)
const dummyNotes = [
  { id: 1, title: "Ide Lagu A" },
  { id: 2, title: "Lirik Lagu B" },
];

export default function MusicPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [noteId, setNoteId] = useState<number | undefined>();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setTitle(file.name.replace(/\.[^/.]+$/, "")); // auto title dari filename
    }
  };

  const handleAddSong = () => {
    if (!fileUrl || !title) return;

    const newSong: Song = {
      id: Date.now(),
      title,
      fileUrl,
      genre,
      status,
      noteId,
    };

    setSongs([newSong, ...songs]);
    setTitle("");
    setFileUrl(null);
    setGenre("");
    setStatus("");
    setNoteId(undefined);
  };

  return (
    <div className="flex flex-col p-6 gap-2 text-[#3b362f] bg-[#f9f4e8] min-h-screen">
      <h1 className="text-3xl font-bold">🎵 Lagu & Demo</h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <input
          type="file"
          accept="audio/*"
          onChange={handleUpload}
          className="w-full"
        />

        {fileUrl && (
          <>
            <input
              type="text"
              placeholder="Judul lagu"
              className="w-full border p-2 rounded"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <select
              value={genre}
              onChange={e => setGenre(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Pilih Genre</option>
              {genres.map(g => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>

            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Pilih Status</option>
              {statuses.map(s => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <select
              value={noteId ?? ""}
              onChange={e => setNoteId(Number(e.target.value))}
              className="w-full border p-2 rounded"
            >
              <option value="">Terkait Catatan (opsional)</option>
              {dummyNotes.map(note => (
                <option key={note.id} value={note.id}>
                  {note.title}
                </option>
              ))}
            </select>

            <button
              onClick={handleAddSong}
              className="bg-[#5f3d3d] text-white px-4 py-2 rounded hover:bg-[#472d2d]"
            >
              Tambah Lagu
            </button>
          </>
        )}
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {songs.map(song => (
          <div
            key={song.id}
            className="bg-white p-4 rounded shadow flex flex-col gap-2"
          >
            <h2 className="text-xl font-bold">{song.title}</h2>
            <audio controls src={song.fileUrl} className="w-full" />

            <div className="flex gap-4 text-sm text-gray-600">
              <span>🎼 Genre: {song.genre}</span>
              <span>📌 Status: {song.status}</span>
              {song.noteId && (
                <span>
                  📝 Catatan: {dummyNotes.find(n => n.id === song.noteId)?.title}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
