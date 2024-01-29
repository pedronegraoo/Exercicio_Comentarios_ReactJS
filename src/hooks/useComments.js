import { useState } from "react";

function useComments() {
  const [arrayComments, setArrayComments] = useState(() => {
    const storeComment = localStorage.getItem("ExercicioComentarios");

    if (!storeComment) return [];
    return JSON.parse(storeComment);
  });

  function addComment({ email, comment, dataAtual }) {
    const id = Math.floor(Math.random() * 1000000);
    const comments = { id, email, comment, dataAtual };

    setArrayComments((state) => {
      const newState = [comments, ...state];
      localStorage.setItem("ExercicioComentarios", JSON.stringify(newState));
      return newState;
    });
  }

  function removeComment(id) {
    setArrayComments((state) => {
      const newState = state.filter((item) => item.id != id);
      localStorage.setItem("ExercicioComentarios", JSON.stringify(newState));
      return newState;
    });
  }

  return { arrayComments, addComment, removeComment };
}

export default useComments;
