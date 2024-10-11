function BgColorBackground() {
  return (
    <div className="absolute inset-x-0 top-0 z-0 flex min-h-0 flex-col overflow-hidden py-32 pl-10">
      <span className="h-80 w-80 rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
      <span className="-mt-10 ml-10 h-80 w-80 rounded-full bg-[#04868b] opacity-20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
    </div>
  );
}

export default BgColorBackground;
