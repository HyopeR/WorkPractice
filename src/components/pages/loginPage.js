import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {AppBar} from '../commons/AppBar';
import {useDispatch, useSelector} from 'react-redux';
import {CustomTextInput} from '../commons/CustomTextInput';
import {CustomButton} from '../commons/CustomButton';
import {CustomPageBack} from '../commons/CustomPageBack';
import Block from '../commons/Block';
import {IconButton} from '../commons/IconButton';
import {changeTheme} from '../../redux/actions/themeActions';
import {controlEmail, controlPassword} from '../../services/ControllerServices';
import {failedLogin, logIn} from '../../redux/actions/userActions';
import {CustomText} from '../commons/CustomText';
import {CustomAlertView} from '../commons/CustomAlertView';

const exampleUserList = {
  user: {email: 'user@hotmail.com', password: 'A123bc'},
  admin: {email: 'admin@hotmail.com', password: 'A123bc'},
};

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorMail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const dispatch = useDispatch();

  const themeRepo = useSelector((state) => state.theme);
  const authRepo = useSelector((state) => state.auth);

  const validateData = () => {
    if (email !== undefined || password !== undefined) {
      let checkEmail = controlEmail(email.trim());
      let checkPassword = controlPassword(password.trim());

      if (!checkEmail || !checkPassword) {
        if (!checkEmail) {
          setErrorMail(
            'Email address is invalid.\n  Example: user@hotmail.com ',
          );
        } else {
          setErrorMail('');
        }
        if (!checkPassword) {
          setErrorPassword(
            'Password must be greater than 6 characters.\n  1 uppercase letter,\n  1 lowercase letter,\n  1 number are required.\n  Example: A123bc',
          );
        } else {
          setErrorPassword('');
        }
      } else {
        setErrorMail('');
        setErrorPassword('');
        dispatch(logIn(email, password));
      }
    } else {
      dispatch(failedLogin('Fields cannot be empty.'));
    }
  };

  return (
    <CustomPageBack
      header={
        <AppBar
          title={'Login'}
          rightChildren={
            <IconButton
              iconName={themeRepo.type === 'light' ? 'moon-o' : 'sun-o'}
              iconColor={'#FFF'}
              iconSize={20}
              onPress={() =>
                dispatch(
                  changeTheme(themeRepo.type === 'light' ? 'dark' : 'light'),
                )
              }
            />
          }
        />
      }>
      <View style={styles.formBackCont}>
        <View style={styles.formContainer}>
          <View>
            <CustomTextInput
              text="Email:"
              inputPlaceHolder="Enter email."
              onChangeText={(value) => setEmail(value)}
              value={email}
            />
            {errorEmail !== null ? (
              <CustomText error>{errorEmail}</CustomText>
            ) : null}
          </View>

          <View>
            <CustomTextInput
              text="Password:"
              inputPlaceHolder="Enter password."
              onChangeText={(value) => setPassword(value)}
              value={password}
              secureTextEntry
            />
            {errorPassword !== null ? (
              <CustomText error>{errorPassword}</CustomText>
            ) : null}
          </View>

          {authRepo.loginError !== null ? (
            <CustomAlertView onPress={() => dispatch(failedLogin(null))}>
              {authRepo.loginError}
            </CustomAlertView>
          ) : null}

          <CustomButton
            spinner={authRepo.loading}
            title="Login"
            onPress={() => validateData()}
          />
        </View>
      </View>
      <Block row>
        <CustomButton
          flex
          title="User"
          onPress={() => {
            setEmail(exampleUserList.user.email);
            setPassword(exampleUserList.user.password);
          }}
        />
        <CustomButton
          title="Clear"
          flex
          onPress={() => {
            setEmail('');
            setPassword('');
          }}
        />
        <CustomButton
          title="Admin"
          flex
          onPress={() => {
            setEmail(exampleUserList.admin.email);
            setPassword(exampleUserList.admin.password);
          }}
        />
      </Block>
    </CustomPageBack>
  );
};

const styles = StyleSheet.create({
  formBackCont: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 25,
  },
});

export default LoginPage;
