import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import "react-native-gesture-handler";
import { Svg, Polygon } from "react-native-svg";

//constants
import { images, icons, COLORS, FONTS, SIZES } from "../constants";

const Home = () => {
  //Dummmy Data for UI
  const [trending, setTrending] = React.useState([
    {
      id: 0,
      name: "Nike Air Zoom Pegasus 36",
      img: images.nikePegasus36,
      bgColor: "#BF012C",
      type: "🏃 RUNNING",
      price: "2,965.42",
      sizes: [6, 7, , 8, 9, 10],
    },
    {
      id: 1,
      name: "Nike Metcon 5",
      img: images.nikeMetcon5Black,
      bgColor: "#D39C67",
      type: "🏋️ TRAINING",
      price: "2,149.86",
      sizes: [6, 7, , 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: "Nike Air Zoom Kobe 1 Proto",
      img: images.nikeZoomKobe1Proto,
      bgColor: "#7052A0",
      type: "🏀 BASKETBALL",
      price: "3,169.05",
      sizes: [6, 7, , 8, 9],
    },
  ]);

  //renderItemFunction
  function renderTrendingShoes(item, index) {
    //renderTrendingStyle
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: SIZES.padding };
    }

    return (
      <TouchableOpacity
        style={{
          height: 240,
          width: 180,
          justifyContent: "center",
          marginHorizontal: SIZES.base,
          ...trendingStyle,
        }}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>
        {/*Card container*/}
        <View
          style={[
            {
              flex: 1,
              justifyContent: "flex-end",
              marginTop: SIZES.base,
              borderRadius: 10,
              marginRight: SIZES.padding,
              paddingLeft: SIZES.radius,
              paddingRight: SIZES.padding,
              paddingBottom: SIZES.radius,
              backgroundColor: item.bgColor,
            },
            styles.trendingShadow,
          ]}
        >
          {/*Image, Description, Price*/}
          <View style={{ height: "35%", justifyContent: "space-between" }}>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              {item.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {item.price}
            </Text>
          </View>
        </View>

        {/* Svg */}
        <View
          style={{
            position: "absolute",
            top: 26,
            right: 0,
            width: "95%",
            height: "100%",
          }}
        >
          <Svg height="100%" width="86%">
            <Polygon points="0,0 160,0 160,80" fill="white" />
          </Svg>
        </View>

        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 50,
            right: 0,
            width: "98%",
            height: 80,
            transform: [{ rotate: "-15deg" }],
          }}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View styles={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}
      >
        🔥 TRENDING
      </Text>

      {/* Trending section */}
      <View style={{ height: 260, marginTop: SIZES.radius }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderTrendingShoes(item, index)}
        />
      </View>

      {/*Recently Viewed*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trendingShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 9,
  },
});

export default Home;
