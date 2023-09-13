import artistPapers from '../../assets/Artist-Papers.png';
import creter from '../../assets/Creter-s.png';
import eventSeas from '../../assets/events-seas.png';

const MainSection2 = () => {
  return (
    <section className="main-section-2">
      <img src={artistPapers} alt="artist png" className="img-credential" />
      <img src={eventSeas} alt="event seas png" className="img-credential" />
      <img src={creter} alt="creter png" className="img-credential" />
    </section>
  );
};
export default MainSection2;
