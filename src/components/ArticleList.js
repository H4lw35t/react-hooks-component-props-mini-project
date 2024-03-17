import Article from "./Article";
function Articlelist({posts}) {
  return (
    <main>
      {posts.map((posts, index) => (
        <Article
          key={index} 
          title={posts.title}
          date={posts.date}
          preview={posts.preview}
        />
      ))}
    </main>
  );
}

export default Articlelist;
