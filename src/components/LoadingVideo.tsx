export interface LoadingVideoProps {
  className?: string;
  chilClassName?: string;
}

const LoadingVideo = ({ className = '', chilClassName = 'bg-[#1E40AF]' }: LoadingVideoProps) => {
  return (
    <div className="flex justify-center py-64">
      <div
        className={`relative h-20 w-20 ${className} nc-LoadingVideo lds-ellipsis`}
        data-nc-id="LoadingVideo"
      >
        <div
          className={`absolute top-[33px] h-[13px] w-[13px] rounded-full ${chilClassName} left-[8px] animate-lds-ellipsis1`}
        ></div>
        <div
          className={`absolute top-[33px] h-[13px] w-[13px] rounded-full ${chilClassName} left-[8px] animate-lds-ellipsis2`}
        ></div>
        <div
          className={`absolute top-[33px] h-[13px] w-[13px] rounded-full ${chilClassName} left-[32px] animate-lds-ellipsis2`}
        ></div>
        <div
          className={`absolute top-[33px] h-[13px] w-[13px] rounded-full ${chilClassName} left-[56px] animate-lds-ellipsis3`}
        ></div>
      </div>
    </div>
  );
};

export default LoadingVideo;
