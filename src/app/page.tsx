import HomeCard2 from '@/components/HomeCard2';
import BgColorBackground from '@/components/BgColorBackground';

export default function Home() {
  return (
    <div className="container relative">
      <BgColorBackground />
      <div className={`container relative pb-16 pt-10 md:py-16 lg:pb-28 lg:pt-8`}>
        <HomeCard2 />
      </div>
    </div>
  );
}
