import { StyleSheet, Image, Platform, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ScreenWrapper from '@/components/ScreenWrapper';

export default function Profile() {
  return (
    <ScreenWrapper withHeader={true}>
      <Text>Yo</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  
});
