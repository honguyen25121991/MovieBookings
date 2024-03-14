import * as React from 'react';
import {Text, View, StyleSheet, StatusBar, Image, Alert} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';

const UserAccountScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={'Thông tin tài khoản'}
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/image/avatar.png')}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>HoNguyen</Text>
      </View>

      <View style={styles.profileContainer}>
        <SettingComponent
          icon="user"
          heading="Tài khoản"
          subheading="Thay đổi mật khẩu"
          // subtitle="mật khẩu"
          onPress={() => console.log('Account')}
        />
        <SettingComponent
          icon="setting"
          heading="Cài đặt"
          subheading="Thay đổi màu sắc"
          // subtitle="Permissions"
        />
        <SettingComponent
          icon="dollar"
          heading="Ưu đãi & Giới thiệu"
          subheading="Ưu đãi"
          subtitle="Giới thiệu"
        />
        <SettingComponent
          icon="info"
          heading="Về chúng tôi"
          // subheading="Về phim"
          // subtitle="thêm"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  profileContainer: {
    alignItems: 'center',
    padding: SPACING.space_36,
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  avatarText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_16,
    color: COLORS.White,
  },
});

export default UserAccountScreen;
