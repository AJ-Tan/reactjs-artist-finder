import { useState } from 'react';
import ItemContainer from './mainsection3_components/ItemContainer';

const MainSection3 = () => {
  const [itemList, setItemList] = useState([
    {
      fontawesomeIcon: 'fa-solid fa-magnifying-glass',
      heading: 'Find your artist',
      description: 'Use our search engine to find any artist easily',
    },
    {
      fontawesomeIcon: 'fa-solid fa-calendar-days',
      heading: 'Book and pay',
      description: 'Schedule your artist and pay safely here',
    },
    {
      fontawesomeIcon: 'fa-solid fa-champagne-glasses',
      heading: 'Enjoy the show!',
      description: "Sit back and relax knowing it's all done",
    },
  ]);

  return (
    <section className="main-section-3">
      <h3 className="main-section-3-heading">How It Works</h3>

      <div className="items-container">
        {itemList.map((item) => (
          <ItemContainer {...item} />
        ))}
      </div>

      <p className="more-info">
        More info{' '}
        <span className="text--bold more-info-icon">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </p>
    </section>
  );
};
export default MainSection3;
