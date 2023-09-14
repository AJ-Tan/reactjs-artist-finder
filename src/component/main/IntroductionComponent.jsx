import singer from '../../assets/singer.png';
import guitar from '../../assets/guitar.png';

const IntroductionComponent = () => {
  return (
    <section className="introduction-section">
      <section className="form-section">
        <div className="form-container">
          <h2 className="form-heading">
            Book the <span className="header--emphasize">ideal artist</span> for
            your event
          </h2>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault;
              alert('Just a simple 1 page design');
            }}
          >
            <div className="input-container">
              <i className="fa-solid fa-magnifying-glass input-icon"></i>
              <input
                type="text"
                className="input input-type"
                placeholder="Type (e.g. DJ, Band, Singer)"
              />
            </div>

            <div className="input-container">
              <i className="fa-solid fa-location-dot input-icon"></i>
              <input
                type="text"
                className="input input-zip"
                placeholder="Zip code"
              />
            </div>

            <button className="btn-search">SEARCH</button>
          </form>
        </div>
      </section>
      <section className="img-section">
        <img
          className="section-1-img section-1-img1"
          src={singer}
          alt="singer img"
        />
        <img
          className="section-1-img section-1-img2"
          src={guitar}
          alt="guitar img"
        />
      </section>
    </section>
  );
};
export default IntroductionComponent;
