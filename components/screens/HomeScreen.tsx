import { View, StyleSheet } from "react-native";

import { type Props, useTheme } from "react-native-paper";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props: Props) => <Avatar.Icon {...props} icon="folder" />;
export function HomeScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.surface }}>
      <View style={{ width: "100%", padding: 10,flexWrap:"wrap" }}>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        {/* <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
