const Post = ({ media, link, title, author, date, type, categories }) => {
  return (
    <div className="col-4 p-image--shadowed u-equal-height ">
      <div className="p-card u-no-margin--bottom">
        <div className="p-card__content">
          <p className="u-no-padding--bottom ">{categories.join(" and ")}</p>
          <hr className="is-muted" />
          <a href={link} rel="noreferrer" target="_blank">
            <img
              className="p-card__image"
              alt=""
              height="185"
              width="330"
              src={media}
            />
          </a>

          <h4>
            <a href={link} rel="noreferrer" target="_blank">
              {title}
            </a>
          </h4>
          <p className="u-no-padding--bottom">
            By{" "}
            <a href={link} rel="noreferrer" target="_blank">
              {author}
            </a>{" "}
            on {date}
          </p>
          <hr className="is-muted" />
          <p className="u-no-padding--bottom">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
