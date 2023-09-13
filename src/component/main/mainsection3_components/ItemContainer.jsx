const ItemContainer = ({ fontawesomeIcon, heading, description }) => {
  console.log(fontawesomeIcon, heading, description);
  return (
    <article className="item-container">
      <div className="icon-container">
        <i className={fontawesomeIcon}></i>
      </div>
      <h4 className="item-heading">{heading}</h4>
      <p className="item-description">{description}</p>
    </article>
  );
};
export default ItemContainer;
