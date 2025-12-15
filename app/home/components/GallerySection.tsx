import Image from 'next/image';

const GallerySection = () => {
  const stampGalleryItems = [
    {
      image: 'https://m.media-amazon.com/images/I/51IzYq3FmfL.jpg',
      text: ''
    },
    {
      image: '/images/image15.jpeg',
      text: ''
    },
    {
      image: 'https://nathanspress.com/wp-content/uploads/2024/06/Rubber-Stamp-Hondal-scaled.webp',
      text: ''
    },
    {
      image: 'https://cpimg.tistatic.com/09660500/b/4/Prime-P-10-Self-Inking-Rubber-Stamp..jpg',
      text: ''
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFJgH-jE2DAgh7V5AefpbSomfk2vjwPwbQg&s',
      text: ''
    },
    {
      image: 'https://printfieldonline.com/wp-content/uploads/2019/06/RubberStamp_blank.jpg',
      text: ''
    },
    {
      image: 'https://fineprinters.in/wp-content/uploads/2017/03/sun_round_st7.png',
      text: ''
    },
    {
      image: 'https://m.media-amazon.com/images/I/51ysxbOXTNL._AC_UF350,350_QL80_.jpg',
      text: ''
    },
    {
      image: 'https://www.trodat.net/fileadmin/_processed_/9/2/csm_printy4911_002cccc131.png',
      text: ''
    },
    {
      image: 'https://m.media-amazon.com/images/I/61IoooUjUuL._AC_UF894,1000_QL80_.jpg',
      text: ''
    },
    {
      image: 'https://m.media-amazon.com/images/I/31VHexS2sGL._AC_UF1000,1000_QL80_.jpg',
      text: ''
    },
    {
      image: 'https://5.imimg.com/data5/AO/KU/QV/SELLER-2413038/common-seal-500x500.jpg',
      text: ''
    },
    {
      image: '/images/image12.jpeg',
      text: ''
    },
    {
      image: '/images/image13.jpeg',
      text: ''
    },
    {
      image: '/images/image14.jpeg',
      text: ''
    },
    
  ];
  // Distribute 15 images across 4 columns: [4, 4, 4, 3]
  const columnIndices = [
    [0, 4, 8, 12],      // Column 1: indices 0, 4, 8, 12
    [1, 5, 9, 13],      // Column 2: indices 1, 5, 9, 13
    [2, 6, 10, 14],     // Column 3: indices 2, 6, 10, 14
    [3, 7, 11]          // Column 4: indices 3, 7, 11
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {columnIndices.map((indices, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {indices.map((itemIndex) => {
              const item = stampGalleryItems[itemIndex];
              const isExternal = item.image.startsWith('http');
              
              return (
                <div key={itemIndex} className="relative overflow-hidden rounded-base hover:shadow-lg transition-shadow duration-300">
                  {isExternal ? (
                    <img
                      src={item.image}
                      alt={`Rubber stamp product ${itemIndex + 1}`}
                      className="h-auto w-full rounded-base object-cover"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={`Rubber stamp product ${itemIndex + 1}`}
                      width={300}
                      height={300}
                      className="h-auto w-full rounded-base object-cover border-2 border-transparent hover:border-gray-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GallerySection



