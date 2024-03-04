import Image from 'next/image';
import { images } from './data';
import { cn } from '@/utils/cn';
import { Camera } from 'lucide-react';

interface Props {
  onClick: (index: number) => void;
}

export default function Images({ onClick }: Props) {
  return (
    <main className="viewpoint bg-khaki  px-4 md:px-16 py-10 md:pb-10 md:pt-20" id='gallery'>
      <h2 className="text-3xl mb-4 font-semibold text-black">Villa viewpoint</h2>
      <div className="container mb-10 grid max-h-[500px] overflow-y-auto grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
        {images.map((image, index) => {
          return (
            <div
              onClick={() => onClick(index)}
              className={cn(
                'relative aspect-square h-full w-full cursor-pointer overflow-hidden rounded-md transition-all hover:opacity-50',
                index === 0 && 'col-span-2 row-span-2',
              )}
            >
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={index === 0 ? 800 : 200}
                height={index === 0 ? 800 : 200}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="view-gallery flex md:justify-end justify-center">
        <button className="flex items-center px-5 text-xl text-my-white hover:text-black" onClick={() => onClick(0)}>
          View the full gallery <Camera className="ml-2" />
        </button>
      </div>
    </main>
  );
}
