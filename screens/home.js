import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const [background, setBackground] = useState({
    uri: "https://www.jposter.net/images/products/b5-yourname-c.jpg",
    name: "Your Name: 君の名は",
    stat: "2016 ‧ Animation/Fantasy ‧ 1h 52m",
    desc:
      "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. But things become even more complicated when the boy and girl decide to meet in person."
  });

  const [gallery, setGallery] = useState([
    {
      key: "1",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzYzZ8fnuDOmDN2dmhVFHoPwTZozfcjtlvsf3zdjzfgduLR0jy",
      title: "Avengers: End Game",
      released: "2019 ‧ Action/Sci-fi ‧ 3h 2m",
      desc:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
    },
    {
      key: "2",
      image:
        "https://mangathrill.com/wp-content/uploads/2020/01/ddeeeff1280x720.jpg",
      title: "Kimetsu no Yaiba the Movie: Mugen Train",
      released: "2020 film",
      desc: "A young warrior battles demons aboard a moving passenger train."
    }
  ]);

  const [list, setList] = useState([
    {
      key: "1",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzQxMzE5NzM2NV5BMl5BanBnXkFtZTgwMDQ4NTUyNzE@._V1_.jpg"
    },
    {
      key: "2",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
    },
    {
      key: "3",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Fullmetal_Alchemist_2003.jpg/220px-Fullmetal_Alchemist_2003.jpg"
    }
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get("window");

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc
            });
          }}
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background.uri }}
            style={styles.ImageBg}
            blurRadius={10}
          >
            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder="Search Movies"
                placeholderTextColor="#666"
                style={styles.SearchBox}
              />
              <Feather
                name="search"
                size={22}
                color="#666"
                style={styles.searchBoxIcon}
              />
            </View>

            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10
              }}
            >
              Top Picks this Week
            </Text>
            <View style={styles.carouselContainerView}>
              <Carousel
                style={styles.Carousel}
                // data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>

            <View style={styles.movieInfoContainer}>
              <View>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <FontAwesome5
                  name="play"
                  size={22}
                  color="#02ad94"
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: "white", opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={{ marginHorizontal: 14 }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 24
          }}
        >
          Continue Watching
        </Text>
        <ImageBackground
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/en/1/13/DB_THE_MOVIE_NO._20.jpg"
          }}
          style={{ height: 250, width: "100%", backgroundColor: "#000" }}
          resizeMode="cover"
        >
          <Text style={{ color: "white", padding: 14 }}>
            Dragon Ball Super: Broly
          </Text>
          <TouchableOpacity
            style={{
              ...styles.playIconContainer,
              position: "absolute",
              top: "40%",
              right: "40%"
            }}
          >
            <FontAwesome5
              name="play"
              size={22}
              color="#02ad94"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 36
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            My List
          </Text>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            View All
          </Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          data={list}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 300, width: 200 }}
                />
                <View
                  style={{
                    position: "absolute",
                    height: 5,
                    width: "100%",
                    backgroundColor: "#02ad94",
                    opacity: 0.8
                  }}
                ></View>
                <FontAwesome5
                  name="play"
                  size={38}
                  color="#fff"
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "45%",
                    opacity: 0.9
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 14
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start"
  },
  searchBoxContainer: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center"
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16
  },
  searchBoxIcon: {
    position: "absolute",
    right: 20,
    top: 14
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center"
  },
  Carousel: {
    flex: 1,
    overflow: "visible"
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)"
  },
  carouselText: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold"
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6
  },
  movieStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8
  },
  playIconContainer: {
    background: "#212121",
    padding: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderWidth: 4,
    borderColor: "rgba(2, 173, 148, 0.2)",
    marginBottom: 14
  }
});

export default Home;
