import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  ScrollView,
} from 'react-native';

const FilterModal = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Modal animationType='slide' visible={props.modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choisir une catégorie </Text>
            <View style={styles.actions}>
              <ScrollView>
                <Pressable
                  style={
                    ([styles.button],
                    {
                      backgroundColor: 'blue',
                      marginBottom: 10,
                      padding: 10,
                    })
                  }
                  onPress={() => props.validateForm('')}
                >
                  <Text style={styles.textStyle}>Tous</Text>
                </Pressable>
                {props.filters.map((filter) => {
                  return (
                    <Pressable
                      key={filter.id}
                      style={
                        ([styles.button],
                        {
                          backgroundColor: filter.couleur,
                          marginBottom: 10,
                          padding: 10,
                        })
                      }
                      onPress={() => props.validateForm(filter.id)}
                    >
                      <Text style={styles.textStyle}>{filter.genre}</Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.closeModal()}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonValidate: {
    backgroundColor: 'green',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  actions: {
    flexDirection: 'row',
    width: '100%',
  },
});

export default FilterModal;
