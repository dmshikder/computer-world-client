import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog">
        <h5>1. Difference between `javascript` and `nodeJS`</h5>
        <p>
          <span className="answer">Answer:</span> <br /> * Javascript can only
          be run in the browsers, whereas We can run Javascript outside the
          browser with the help of NodeJS.
          <br />* Javascript is basically used on the client-side, whereas
          NodeJS is mostly used on the server-side. <br /> * Javascript is
          capable enough to add HTML and play with the DOM, whereas NodeJS does
          not have capability to add HTML tags.
        </p>
      </div>
      <div className="blog">
        <h5>
          2. When should you use `nodejs` and when should you use `mongodb`?
        </h5>
        <p>
          <span className="answer">Answer:</span> Nodejs is a Javascript engine
          that we can write any application we want with. It runs Javascript
          code. It is used to build servers that can respond to web requests.{" "}
          <br /> <br /> MongoDB are a good choice when our data is
          document-centric and doesn't fit well into the schema of a relational
          database, when we need to accommodate massive scale, when we are
          rapidly prototyping.
        </p>
      </div>
      <div className="blog">
        <h5>3. Differences between `sql` and `nosql` databases.</h5>
        <p>
          <span className="answer">Answer:</span> <br /> 1. SQL databases are
          primarily called as Relational Databases, whereas NoSQL database are
          primarily called as non-relational or distributed database. <br /> 2.
          SQL databases are table-based on the other hand NoSQL databases are
          either key-value pairs, document-based, graph databases or wide-column
          stores.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
