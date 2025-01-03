import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function ScreenWrapper({ children, withHeader }) {
  return (
    <SafeAreaView style={[styles.container, { paddingVertical: withHeader ? 14 : 20 }]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30, 
    backgroundColor: '#fff', 
  },
});