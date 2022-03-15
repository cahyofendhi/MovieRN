import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

interface ProgressDialogProps {
    show: boolean
    dismisable?: boolean,
    onDismiss: () => void
}

const ProgressDialog: React.FC<ProgressDialogProps> = ({show, dismisable = false, onDismiss}) => {
  return (
    <Modal isVisible={show}
      animationIn = 'fadeIn'
      animationOut= 'fadeOut'
    >
      <View style={styles.container} >
        {
            dismisable ?
            <TouchableOpacity onPress={() => {
              console.log('cloooseeee modal');
              onDismiss();
            }}>
              <ProgressContent />
            </TouchableOpacity> :
            <ProgressContent />
        }
      </View>
    </Modal>
  );
};

const ProgressContent: React.FC = () => {
  return (
    <View style={styles.panel}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparant',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: '200',
    paddingTop: 16,
  },
});

export default ProgressDialog;
