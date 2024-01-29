import style from "./cardcomment.module.css";

function CardComment({ email, dataAtual, comment, onRemove }) {
  return (
    <div className={style.boxComment}>
      <h4>{email}</h4>
      <p>Em {dataAtual}</p>
      <p>{comment}</p>
      <button onClick={onRemove} className={style.btnRemove}>
        X
      </button>
    </div>
  );
}

export default CardComment;
