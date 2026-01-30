import Banner from '../../components/Banner/Banner';
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import './Home.css';

const features = [
  {
    icon: '/icon-chat.png',
    altText: 'Chat Icon',
    title: 'You are our #1 priority',
    description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
  },
  {
    icon: '/icon-money.png',
    altText: 'Money Icon',
    title: 'More savings means higher rates',
    description: 'The more you save with us, the higher your interest rate will be!'
  },
  {
    icon: '/icon-security.png',
    altText: 'Security Icon',
    title: 'Security you can trust',
    description: 'We use top of the line encryption to make sure your data and money is always safe.'
  }
];

function Home() {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            altText={feature.altText}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
