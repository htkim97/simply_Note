'use client'

import { Checkbox } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]); // 최종 출력 todo
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(store);
  }, []);


  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setNewTodo('');
    }
  }



  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // 삭제 후 localStorage 업데이트
  }





  console.log(todos.length);


  return (
    <div className="flex h-80">
      <section className="p-4 h-36 basis-3">

        <div className="rounded-2xl backdrop-blur-md bg-white/30 mt-2 p-4 basis-2/3 h-full flex-col flex justify-center items-center">

          <div className="text-2xl">{todos.length}</div>
          <div>Total goals in your Note list.</div>

          <div className="flex gap-3 mt-4">
            <div>Remaining</div>
            <div>Complete</div>
          </div>

        </div>
        <div className="w-96 basis-1/3 h-full">

          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="노트를 입력해주세요."
            className="flex justify-center items-center rounded-2xl backdrop-blur-md bg-white/30 mt-2 h-full w-full p-4"
          />
          <button className="mt-4 bg-blue-600 rounded-lg p-2 text-white" onClick={addTodo}>새 노트</button>
        </div>



      </section>
      <section className="w-96 overflow-auto h-60 mt-4">
        {todos.map((todo, index) => (
          <div className="flex rounded-2xl backdrop-blur-md bg-white/30 mt-2 basis-3">


            <div className="p-6 flex gap-6 basis-2/3">
              <div><Checkbox size="3" color="indigo" /></div>
              <div>{todo}</div>
            </div>
            <div className="flex float-right basis-1/3">
              <button onClick={() => removeTodo(index)}>
                <div className="bg-red-500 p-2 rounded-lg text-gray-200"><FaRegTrashAlt /></div>
              </button>
            </div>

          </div>
        ))}
      </section>

    </div>


  );
}
