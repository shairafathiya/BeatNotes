"use client";

import React, { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
  audio?: string;
  tags: string[];
};

const tagOptions = ["lirik", "chord", "ide", "draft", "selesai"];

export default function NotePage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [audio, setAudio] = useState<string | undefined>();
  const [tags, setTags] = useState<string[]>([]);
  const [filter, setFilter] = useState("");

  const handleAddNote = () => {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
      audio,
      tags,
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
    setAudio(undefined);
    setTags([]);
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const audioURL = URL.createObjectURL(file);
      setAudio(audioURL);
    }
  };

  const handleTagToggle = (tag: string) => {
    setTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className=" bg-[#faf6ee]  flex flex-col">
    <div className="p-8 max-w-4xl mx-auto space-y-8 text-[#3b362f] bg-[#faf6ee] min-h-screen">
      <h1 className="text-3xl font-bold">🎶  Notes </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <input
          type="text"
          placeholder="Judul"
          className="w-full border p-2 rounded"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Isi catatan"
          className="w-full border p-2 rounded"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <div>
          <label className="block mb-1 ">Upload Audio (opsional)</label>
          <input className =" text-amber-800 hover:underline " type="file" accept="audio/*" onChange={handleAudioUpload} />
        </div>
        <div className="flex flex-wrap gap-2">
          {tagOptions.map(tag => (
            <label key={tag} className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={tags.includes(tag)}
                onChange={() => handleTagToggle(tag)}
              />
              <span className="text-sm capitalize">{tag}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleAddNote}
          className="bg-[#5f3d3d] text-white px-4 py-2 rounded hover:bg-[#472d2d]"
        >
          Tambah Catatan
        </button>
      </div>

      {/* FILTER */}
      <div>
        <input
          type="text"
          placeholder="Cari judul..."
          className="w-full border p-2 rounded"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      {/* LIST NOTES */}
      <div className="space-y-4">
        {filteredNotes.map(note => (
          <div
            key={note.id}
            className="bg-white p-4 rounded shadow flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">{note.title}</h2>
              <button
                onClick={() => handleDelete(note.id)}
                className="text-red-500 hover:underline"
              >
                Hapus
              </button>
            </div>
            <p>{note.content}</p>
            {note.audio && (
              <audio controls className="w-full">
                <source src={note.audio} />
                Browser kamu tidak mendukung audio
              </audio>
            )}
            <div className="flex gap-2 text-sm text-gray-600">
              {note.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
