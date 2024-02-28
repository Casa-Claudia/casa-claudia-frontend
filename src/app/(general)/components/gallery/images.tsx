import Image from 'next/image';
import { images } from './data';
import { cn } from '@/utils/cn';

interface Props {
  onClick: (index: number) => void;
}

export default function Images({ onClick }: Props) {
  return (
    <main className="viewpoint bg-khaki py-10 md:py-24">
      <h2 className="text-3xl my-4 mb-4 font-semibold px-4 md:px-16 text-black">Villa viewpoint</h2>
      <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
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
    </main>
  );
}
