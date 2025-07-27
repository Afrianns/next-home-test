export default async function EditArticle(params: { id: string }) {
  let { id } = await params;

  return (
    <div>
      <h1>This is {id} article</h1>
    </div>
  );
}
