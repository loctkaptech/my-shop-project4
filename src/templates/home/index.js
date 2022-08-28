import PageSectionContent from 'components/PageSectionContent';
import PageSectionTitle from 'components/PageSectionTitle';
import SliderReactSlick from 'components/SliderReactSlick';
import React from 'react';

const HomeTemplate = () => {
  return (
    <div>
      <PageSectionTitle title='Latest products' />
      <PageSectionContent>
        <SliderReactSlick list={[1, 2, 3, 4, 5, 6]} />
      </PageSectionContent>
    </div>
  );
};

export default HomeTemplate;
