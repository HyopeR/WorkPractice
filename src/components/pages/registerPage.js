import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {AppBar} from '../commons/AppBar';
import {useDispatch, useSelector} from 'react-redux';
import {CustomTextInput} from '../commons/CustomTextInput';
import {CustomButton} from '../commons/CustomButton';
import {CustomText} from '../commons/CustomText';
import {CustomIcon} from '../commons/CustomIcon';
import {CustomPageBack} from '../commons/CustomPageBack';
import {IconButton} from '../commons/IconButton';
import {changeTheme} from '../../redux/actions/themeActions';
import {failedRegister, registerUser} from '../../redux/actions/userActions';
import {controlEmail, controlPassword} from '../../services/ControllerServices';
import {CustomAlertView} from '../commons/CustomAlertView';

const RegisterPage = ({navigation}) => {
  const [email, onChangeEmail] = useState('user@hotmail.com');
  const [password, onChangePassword] = useState('A123bc');
  const [errorEmail, setErrorMail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [userType, setType] = useState('user');

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
          setErrorMail(null);
        }
        if (!checkPassword) {
          setErrorPassword(
            'Password must be greater than 6 characters.\n  1 uppercase letter,\n  1 lowercase letter,\n  1 number are required.\n  Example: A123bc',
          );
        } else {
          setErrorPassword(null);
        }
      } else {
        setErrorMail(null);
        setErrorPassword(null);
        dispatch(registerUser(email, password, userType));
      }
    } else {
      dispatch(failedRegister('Fields cannot be empty.'));
    }
  };

  return (
    <CustomPageBack
      header={
        <AppBar
          title={'Register'}
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
              onChangeText={(data) => {
                onChangeEmail(data);
              }}
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
              onChangeText={(data) => {
                onChangePassword(data);
              }}
              value={password}
              secureTextEntry
            />
            {errorPassword !== null ? (
              <CustomText error>{errorPassword}</CustomText>
            ) : null}
          </View>

          <View style={formElementsStyles.inputWrapper}>
            <CustomText style={formElementsStyles.textStyle}>
              User Type:
            </CustomText>

            <View style={formElementsStyles.inputArea}>
              <View style={formElementsStyles.radioButtonWrapper}>
                <TouchableOpacity onPress={() => setType('user')}>
                  <View style={formElementsStyles.radioButtonItem}>
                    <CustomText>User</CustomText>
                    <CustomIcon
                      name={'dot-circle-o'}
                      color={userType === 'user' ? '#4a2' : undefined}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={formElementsStyles.radioButtonWrapper}>
                <TouchableOpacity onPress={() => setType('admin')}>
                  <View style={formElementsStyles.radioButtonItem}>
                    <CustomText>Admin</CustomText>
                    <CustomIcon
                      name={'dot-circle-o'}
                      color={userType === 'admin' ? '#4a2' : undefined}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {authRepo.registerError !== null ? (
            <CustomAlertView onPress={() => dispatch(failedRegister(null))}>
              {authRepo.registerError}
            </CustomAlertView>
          ) : null}

          <CustomButton
            spinner={authRepo.loading}
            title="Register"
            onPress={() => validateData()}
          />
        </View>
      </View>
    </CustomPageBack>
  );
};

const formElementsStyles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    height: 50,
    width: 'auto',
    marginVertical: 5,
    alignItems: 'center',
  },
  textStyle: {
    width: '30%',
  },
  inputArea: {
    width: '70%',
    flexDirection: 'row',
  },
  radioButtonWrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  radioButtonItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
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

export default RegisterPage;
