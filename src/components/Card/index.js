import { Card, Image, Text, Group, CloseButton } from "@mantine/core";

const CardComponent = ({ name, club, click, img }) => {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Card.Section>
        <Image src={img} height={160} alt="Image" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        {/* <Badge color="pink" variant="light">
          On Sale
        </Badge> */}
        <CloseButton aria-label="Close modal" onClick={click} />
      </Group>

      <Text size="sm" color="dimmed">
        {club}
      </Text>
    </Card>
  );
};

export default CardComponent;
