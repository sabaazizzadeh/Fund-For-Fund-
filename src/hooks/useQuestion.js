import { useState } from 'react';

export default function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const add = (text) => {
    if (!text.trim()) return;
    setQuestions([...questions, text.trim()]);
  };

  const remove = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditValue(questions[index]);
  };

  const saveEdit = (index) => {
    if (!editValue.trim()) return;
    const updated = [...questions];
    updated[index] = editValue.trim();
    setQuestions(updated);
    setEditingIndex(null);
    setEditValue("");
  };

  return {
    questions,
    add,
    remove,
    editingIndex,
    startEdit,
    editValue,
    setEditValue,
    saveEdit,
  };}