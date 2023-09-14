const StepComponent = ({
  fontawesomeIcon,
  heading,
  description,
  iconTheme,
}) => {
  return (
    <article className="step-container">
      <div className={`icon-container ${iconTheme}`}>
        <i className={fontawesomeIcon}></i>
      </div>
      <h4 className="step-heading">{heading}</h4>
      <p className="step-description">{description}</p>
    </article>
  );
};
export default StepComponent;
