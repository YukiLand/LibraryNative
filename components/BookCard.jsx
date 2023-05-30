import { StyleSheet, Text, View, Image } from 'react-native';
import { CATEGORIES } from '../data/data.js';

const Livre = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: props.book.imageUrl }} style={styles.image} />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>{props.book.titre}</Text>
        <Text style={styles.description}>
          {props.book.description.substring(0, 80)}...
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        {props.book.categorieId.map((id) => {
          const categorie = CATEGORIES.find((categorie) => categorie.id === id);
          return (
            <Text
              style={[
                styles.categories,
                { backgroundColor: categorie.couleur },
              ]}
              key={categorie.id}
            >
              {categorie.genre}
            </Text>
          );
        })}
      </View>

      <View style={{ alignItems: 'center' }}>
        {props.book.enCours ? (
          <Text style={[styles.inProgress, styles.progressTrue]}>En cours</Text>
        ) : (
          <Text style={[styles.inProgress, styles.progressFalse]}>Terminé</Text>
        )}
      </View>
      {props.book.tomes > 1 ? (
        <View style={{ alignItems: 'center' }}>
          <Text>Nombre de tomes : {props.book.tomes}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: 350,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 5,
    paddingLeft: 5,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  description: {
    fontSize: 14,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  categories: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
  },
  inProgress: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  progressTrue: {
    backgroundColor: '#18b1cc',
    color: '#fff',
  },
  progressFalse: {
    backgroundColor: '#e74c3c',
    color: '#fff',
  },
});

export default Livre;
