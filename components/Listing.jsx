import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import { CATEGORIES, LIVRES } from '../data/data.js';
import Categorie from '../data/categorie.js';
import Livre from '../data/livre.js';
import FilterModal from './FilterModal.jsx';
import BookCard from './BookCard.jsx';

const Listing = () => {
  const [filter, setFilter] = React.useState('');
  const [visibility, setVisibility] = React.useState(false);
  const [listOfBooks, setListOfBooks] = React.useState(LIVRES);

  React.useEffect(() => {
    filterBook();
  }, [filter]);

  function filterBook() {
    if (filter === '') {
      setListOfBooks(LIVRES);
      return;
    }
    const filteredBooks = LIVRES.filter((livre) => {
      return livre.categorieId.filter((id) => id === filter).length > 0;
    });
    setListOfBooks(filteredBooks);
  }

  function close_modal() {
    setVisibility(false);
  }

  function validate_form(filter) {
    setFilter(filter);
    setVisibility(false);
  }

  function searchBook(val) {
    if (val === '' && filter === '') {
      setListOfBooks(LIVRES);
      return;
    }
    let filteredBooks = [];
    if (filter === '') {
      filteredBooks = LIVRES.filter((livre) => {
        return livre.titre.toLowerCase().includes(val.toLowerCase());
      });
    } else {
      filteredBooks = LIVRES.filter((livre) => {
        return (
          livre.titre.toLowerCase().includes(val.toLowerCase()) &&
          livre.categorieId.filter((id) => id === filter).length > 0
        );
      });
    }
    setListOfBooks(filteredBooks);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.mainTitle}>Liste des livres</Text>
      {filter === '' ? (
        <Pressable onPress={() => setVisibility(true)} style={styles.filterBtn}>
          <Text>Filtrer</Text>
        </Pressable>
      ) : (
        <View style={{ flex: 0, flexDirection: 'row' }}>
          <Pressable
            onPress={() => setVisibility(true)}
            style={styles.filterBtn}
          >
            <Text>Filtrer</Text>
          </Pressable>

          <Pressable onPress={() => setFilter('')} style={styles.resetBtn}>
            <Text>Reset</Text>
          </Pressable>
        </View>
      )}

      <View
        style={{
          alignItems: 'center',
          flex: 0,
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={styles.input}
          placeholder='Rechercher un livre'
          onChangeText={(val) => searchBook(val)}
        />
      </View>
      {visibility ? (
        <FilterModal
          modalVisibility={visibility}
          filters={CATEGORIES}
          closeModal={close_modal}
          validateForm={validate_form}
        />
      ) : null}
      <ScrollView>
        {listOfBooks.map((book) => {
          return <BookCard book={book} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  filterBtn: {
    backgroundColor: '#18b1cc',
    color: '#fff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  input: {
    height: 40,
    marginTop: 10,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  resetBtn: {
    backgroundColor: 'red',
    color: '#fff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Listing;
