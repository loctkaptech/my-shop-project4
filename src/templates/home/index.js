import { Box, Grid } from '@mui/material';
import BgImage from 'assets/images/1059-1440x600.jpg';
import CategoryCard from 'components/CategoryCard';
import PageSectionContent from 'components/PageSectionContent';
import PageSectionTitle from 'components/PageSectionTitle';
import ProductCard from 'components/ProductCard';
import SliderReactSlick from 'components/SliderReactSlick';
import Image from 'next/image';

const HomeTemplate = ({ latestProducts = [], categories = [] }) => {
  const displayedCategories =
    categories.length >= 5 ? categories : categories.slice(0, 5);

  return (
    <div>
      <Box sx={{ mt: 4 }}>
        <PageSectionContent>
          <SliderReactSlick isSingle>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Box
                key={item}
                sx={{ aspectRatio: { xs: '1/1', sm: '4 / 3', md: '16 / 5' } }}
              >
                <Image
                  style={{ borderRadius: '7px' }}
                  src={BgImage}
                  layout='responsive'
                  alt='random image'
                />
              </Box>
            ))}
          </SliderReactSlick>
        </PageSectionContent>
      </Box>

      <Box sx={{ mt: 4 }}>
        <PageSectionTitle title='Latest products' />
        <PageSectionContent>
          <SliderReactSlick>
            {latestProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </SliderReactSlick>
        </PageSectionContent>
      </Box>

      <Box sx={{ mt: 4 }}>
        <PageSectionTitle title='Featured products' />
        <PageSectionContent>
          <SliderReactSlick>
            {latestProducts.map((item) => (
              <ProductCard key={item} item={item} />
            ))}
          </SliderReactSlick>
        </PageSectionContent>
      </Box>

      <Box sx={{ mt: 4 }}>
        <PageSectionTitle title='Hot categories' />
        <PageSectionContent>
          <Grid container spacing={4}>
            {displayedCategories.map((category, idx) => {
              if (idx < 2) {
                return (
                  <Grid key={category.id} item xs={12} md={6}>
                    <CategoryCard category={category} />
                  </Grid>
                );
              }
              return (
                <Grid key={category.id} item xs={12} md={4}>
                  <CategoryCard />
                </Grid>
              );
            })}
          </Grid>
        </PageSectionContent>
      </Box>

      <Box sx={{ mt: 4 }}>
        <PageSectionTitle title='On sale' />
        <PageSectionContent>
          <SliderReactSlick>
            {latestProducts.map((item) => (
              <ProductCard key={item} item={item} />
            ))}
          </SliderReactSlick>
        </PageSectionContent>
      </Box>
    </div>
  );
};

export default HomeTemplate;
