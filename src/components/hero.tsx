export const Hero = () => {
  return (
    <div className="relative flex w-full justify-center px-8 py-60 text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full border-2 object-cover opacity-60 lg:px-4"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative flex w-full flex-col justify-center gap-4 md:max-w-[600px]">
        <h1 className="text-center text-6xl font-extrabold">
          Create, Explore & Collect Digital Art NFTs
        </h1>
        <p className="text-center">
          Buy and sell NFTs from the world’s top artists. More than 1,000
          premium digital artworks are available to be yours!
        </p>
      </div>
    </div>
  );
};
