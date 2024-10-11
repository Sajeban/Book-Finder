interface FeaturedMediaProps {
  className?: string;
  imageSrc: string;
}

const FeaturedMedia = ({ className = 'w-full h-full', imageSrc }: FeaturedMediaProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Book Image */}
      <img
        src={imageSrc || '/images/bookPlaceHolder.png'}
        className="h-full w-full object-cover"
        alt="Book Image"
      />
    </div>
  );
};

export default FeaturedMedia;
