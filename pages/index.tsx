import Button from '@/components/Button/Button';
import { Title } from '@/components/Title/Title';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Tag } from '@/components';
import Rating from '@/components/Rating/Rating';
import { useState } from 'react';
import { withLayout } from '@/Layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(2);

  return (
    <>
      <Title tag="h3">Текст</Title>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
      <Paragraph>Маленький</Paragraph>
      <Paragraph size="m">Маленький</Paragraph>
      <Paragraph>Маленький</Paragraph>
      <Tag size="small" color="ghost">
        hh.ru
      </Tag>
      <Tag size="medium" color="red">
        hh.ru
      </Tag>
      <Tag size="small" color="grey">
        HH.ru
      </Tag>
      <Tag size="medium" color="green">
        HH.ru
      </Tag>
      <Tag size="medium" color="primary">
        HH.ru
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
