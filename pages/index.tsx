import Button from '@/components/Button/Button';
import { Title } from '@/components/Title/Title';
import { Paragraph } from '@/components/Paragraph/Paragraph';
export default function Home(): JSX.Element {
  return (
    <>
      <Title tag="h3">Текст</Title>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
      <Paragraph size="s">Маленький</Paragraph>
      <Paragraph size="m">Маленький</Paragraph>
      <Paragraph size="l">Маленький</Paragraph>
    </>
  );
}
