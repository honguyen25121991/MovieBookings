import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';

const UserAccountScreen = ({navigation}: any) => {
  const [isLogin, setIsLogin] = React.useState(false);
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
      {isLogin ? (
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/image/avatar.png')}
            style={styles.avatarImage}
          />
          <Text style={styles.avatarText}>HoNguyen</Text>
        </View>
      ) : (
        <TouchableHighlight
          style={{
            backgroundColor: COLORS.WhiteRGBA75,
            padding: SPACING.space_16,
            margin: SPACING.space_36,
            borderRadius: 10,
          }}
          onPress={() => {
            setIsLogin(!isLogin);
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableHighlight>
      )}

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
