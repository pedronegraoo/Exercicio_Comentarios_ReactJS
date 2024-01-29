import style from "./form.module.css";
import { useState, useRef } from "react";

function Form({ addComment }) {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const inputEmail = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    let dataAtual = new Date().toLocaleString();
    // pegando só a data atual
    // let formatDate = dataAtual.toLocaleDateString();
    // pegando só a hora atual
    // let hours = dataAtual.toLocaleTimeString();

    addComment({ email, comment, dataAtual });

    setEmail("");
    setComment("");
    inputEmail.current.focus();
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h3>Seção de Comentários</h3>

      <div>
        <label htmlFor="author">Email</label>
        <input
          type="email"
          name="author"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          ref={inputEmail}
          required
        />
      </div>

      <div>
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="7"
          value={comment}
          onChange={(ev) => setComment(ev.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit">Enviar comentário</button>
    </form>
  );
}

export default Form;
