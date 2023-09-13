const MainSection3 = () => {
  return (
    <section className="main-section-3">
      <h3 className="main-section-3-heading">How It Works</h3>

      <div className="items-container">
        <div className="item-container">
          <div className="icon-container icon-c-1">
            <i class="fa-solid fa-magnifying-glass m-s3-icon m-s3-icon1"></i>
          </div>
          <h4 className="item-heading">Find your artist</h4>
          <p className="item-description">
            Use our search engine to find any artist easily
          </p>
        </div>
        <div className="item-container">
          <div className="icon-container icon-c-2">
            <i class="fa-solid fa-calendar-days m-s3-icon m-s3-icon2"></i>
          </div>
          <h4 className="item-heading">Book and pay</h4>
          <p className="item-description">
            Schedule your artist and pay safely here
          </p>
        </div>
        <div className="item-container">
          <div className="icon-container icon-c-3">
            <i class="fa-solid fa-champagne-glasses m-s3-icon m-s3-icon3"></i>
          </div>
          <h4 className="item-heading">Enjoy the show!</h4>
          <p className="item-description">
            Sit back and relax knowing it's all done
          </p>
        </div>
      </div>

      <p className="more-info">
        More info{' '}
        <span className="text--bold more-info-icon">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </p>
    </section>
  );
};
export default MainSection3;
