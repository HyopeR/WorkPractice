import React, {useEffect} from 'react';
import {AppBar} from '../../commons/AppBar';
import Block from '../../commons/Block';
import {IconButton} from '../../commons/IconButton';
import {CustomText} from '../../commons/CustomText';
import {CustomPageBack} from '../../commons/CustomPageBack';
import {FlatList, RefreshControl} from 'react-native';
import {getAllUsers} from '../../../redux/actions/usersActions';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const UsersPage = ({navigation}) => {
  const dispatch = useDispatch();
  const usersRepo = useSelector((state) => state.users);
  const {colors} = useTheme();

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}) => {
    return (
      <Block key={item.id} flex={1} center>
        <CustomText>{item.email}</CustomText>
      </Block>
    );
  };

  return (
    <CustomPageBack
      hasListView
      header={
        <AppBar
          title={'Users'}
          leftChildren={
            <IconButton
              iconName={'th-list'}
              iconColor={'#FFF'}
              iconSize={20}
              onPress={() => navigation.openDrawer()}
            />
          }
        />
      }>
      <Block flex={1}>
        {usersRepo.loaded && usersRepo.data.length < 1 ? (
          <CustomText>Kayıtlı kullanıcı bulunamadı.</CustomText>
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                colors={[colors.primary]}
                refreshing={usersRepo.loading}
                onRefresh={() => dispatch(getAllUsers())}
              />
            }
            data={usersRepo.data}
            renderItem={renderItem}
            ListFooterComponent={() => null}
            ListHeaderComponent={() => (
              <Block flex={1} center>
                <CustomText style={{fontSize: 24}}>All User List</CustomText>
              </Block>
            )}
          />
        )}
      </Block>
    </CustomPageBack>
  );
};

export default UsersPage;
