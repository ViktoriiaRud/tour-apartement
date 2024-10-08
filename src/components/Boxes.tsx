import React from 'react';
import Box from './Box';

const Boxes: React.FC = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Box
            heading='For Renters'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </Box>
          <Box
            heading='For Property Owners'
            backgroundColor='bg-rose-100'
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-rose-500',
            }}
          >
            List your properties and reach potential tenants. Rent short or long
            term.
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Boxes;