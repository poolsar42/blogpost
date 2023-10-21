const Post = ({
  media,
  link,
  title,
  author,
  authorLink,
  date,
  type,
  category,
}) => {
  return (
    <div
      className="col-4 blog-p-card--post col-medium-2"
      style={{
        border: 0,
        borderTop: "3px solid #77216F",
        borderRadius: "0.2rem",
        boxShadow: "0 0 10px 2px rgb(0 0 0 / 0.25)",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <div
        className="blog-p-card__content u-no-margin l-site"
        style={{ border: 0, minHeight: "100%", overflow: "hidden" }}
      >
        <p className="u-no-margin u-no-padding">{category}</p>
        <hr
          style={{
            borderTop: "1px dotted",
            backgroundColor: "#fff",
            marginTop: "15px",
            marginBottom: "15px",
            width: "105%",
            left: "-2.5%",
          }}
        />
        <a href={link} rel="noreferrer" target="_blank">
          <img
            className="p-card__image"
            alt=""
            height="185"
            width="330"
            src={media}
          />
        </a>

        <h4 className="u-no-padding">
          <a href={link} rel="noreferrer" target="_blank">
            {title}
          </a>
        </h4>
        <footer className="l-footer--sticky">
          <p className="u-no-padding p-heading--6">
            By{" "}
            <a href={authorLink} rel="noreferrer" target="_blank">
              {author}
            </a>{" "}
            on {date}
          </p>
          <hr
            style={{
              borderTop: "1px dotted",
              backgroundColor: "#fff",
              marginTop: "15px",
              marginBottom: "15px",
              width: "105%",
              left: "-2.5%",
            }}
          />
          <p className="u-no-padding u-no-margin">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Post;
