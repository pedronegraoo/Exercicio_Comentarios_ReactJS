import style from "./style/app.module.css";
import Form from "./components/form/Form";
import CardComment from "./components/card-comments/CardComment";
import useComments from "./hooks/useComments";

function App() {
  const { arrayComments, addComment, removeComment } = useComments();

  return (
    <>
      <h1>Testando atualiazação</h1>
      <div className={style.container}>
        <div className={style.box}>
          <Form addComment={addComment} />

          {/* Renderizar comentários */}
          <div className={style.bigBoxComment}>
            {arrayComments.length > 0 ? (
              arrayComments.map((comment) => (
                <CardComment
                  key={comment.id}
                  email={comment.email}
                  dataAtual={comment.dataAtual}
                  comment={comment.comment}
                  onRemove={() => removeComment(comment.id)}
                />
              ))
            ) : (
              <p>Seja o primeiro a comentar!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
