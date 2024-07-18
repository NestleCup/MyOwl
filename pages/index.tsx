import Button from '@/components/Button/Button';
import { Title } from '@/components/Title/Title';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Tag } from '@/components';
export default function Home(): JSX.Element {
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
    </>
  );
}
