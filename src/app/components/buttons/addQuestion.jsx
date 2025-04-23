'use client'

import useQuestions from "@/hooks/useQuestion";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";

export default function AddQuestion() {
    const {
        questions,
        add,
        remove,
        editingIndex,
        startEdit,
        editValue,
        setEditValue,
        saveEdit,
    } = useQuestions();

    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {
            add(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="p-6">
            <div className="space-y-3">
                {questions.map((q, i) => (
                    <div key={i} className="flex items-center gap-2">
                        {editingIndex === i ? (
                            <>
                                <span
                                    contentEditable
                                    suppressContentEditableWarning
                                    onInput={(e) => setEditValue(e.currentTarget.textContent || '')}
                                    className="border border-[#8D75F7] rounded w-[934px] h-14 text-gray-700 px-3 py-1 font-light focus:bg-[#EDE9FE] focus:outline-none"
                                >
                                    {editValue}
                                </span>
                                <IoCheckmark
                                    onClick={() => saveEdit(i)}
                                    className="text-[#8D75F7] cursor-pointer hover:text-purple-500"
                                    size={30}
                                />
                            </>
                        ) : (
                            <>
                                <div
                                    className="flex items-center border border-[#8D75F7] rounded w-[934px] h-14 px-3 py-1 text-gray-700 font-light cursor-pointer hover:bg-[#F3F0FD]"
                                    onClick={() => {
                                        setEditValue(q);
                                        startEdit(i);
                                    }}
                                >
                                    {q}
                                </div>
                                <MdModeEditOutline
                                    onClick={() => {
                                        setEditValue(q);
                                        startEdit(i);
                                    }}
                                    className="text-[#717171] cursor-pointer hover:text-gray-400"
                                    size={30}
                                />
                            </>
                        )}
                        <MdDelete
                            onClick={() => remove(i)}
                            className="text-[#717171] cursor-pointer hover:text-gray-400"
                            size={30}
                        />
                    </div>
                ))}

                <div className="flex items-center gap-2 mt-4">
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                        className="border border-[#8D75F7] rounded w-[934px] h-14 px-3 py-1 text-gray-700 font-light focus:bg-[#EDE9FE] focus:outline-none"
                        placeholder="Write your question"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-[#F5F5F5] text-[#717171] px-4 py-2 rounded hover:bg-gray-400 hover:text-white transition font-light cursor-pointer"
                    >
                        + Add question 
                    </button>
                </div>
            </div>
        </div>
    );
};
