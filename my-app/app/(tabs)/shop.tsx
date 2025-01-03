import { Image, StyleSheet, Platform, Text } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';

export default function Shop() {
  return (
    <ScreenWrapper withHeader={true}>
      <Text>Put general things here to manage such as introducing the user to what the loyalty program is and how it works.</Text>
      <Text>Alternatively, make this a shop tab</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
