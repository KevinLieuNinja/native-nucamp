import React, { Component } from "react";
import Directory from "../components/DirectoryComponent";
import CampsiteInfo from "../components/CampsiteInfoComponent";
import Home from "../components/HomeComponent";
import About from "../components/AboutComponent";
import Contact from "../components/ContactComponent";
import SafeAreaView from "react-native-safe-area-view";
import Reservation from "./ReservationComponent";
import Login from "../components/LoginComponent";
import Favorites from "./FavoritesComponent";
import NetInfo from "@react-native-community/netinfo";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import {
  fetchCampsites,
  fetchComments,
  fetchPromotions,
  fetchPartners,
} from "../redux/ActionCreators";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

const mapDispatchToProps = {
  fetchCampsites,
  fetchComments,
  fetchPartners,
  fetchPromotions,
};

//  ALL THE NAVIGATION CREATORS //

const DirectoryNavigator = createStackNavigator(
  {
    Directory: {
      screen: Directory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  { Home: { screen: Home } },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  { About: { screen: About } },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="info-circle"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ReservationNavigator = createStackNavigator(
  { Reservation: { screen: Reservation } },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="tree"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const FavoritesNavigator = createStackNavigator(
  { Favorites: { screen: Favorites } },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="heart"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  { Contact: { screen: Contact } },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="address-card"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const LoginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#563dd",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="Sign-in"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Image
              source={require("./images/logo.png")}
              style={styles.drawerImage}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}>NuCamp</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

// THE INDEX FOR ALL THE NAVIGATIONS //

const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="Sign-in"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Directory: {
      screen: DirectoryNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        drawerLabel: "Reserve Campsite",
        drawerIcon: ({ tintColor }) => (
          <Icon name="tree" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        drawerLabel: "My Favorite Campsites",
        drawerIcon: ({ tintColor }) => (
          <Icon name="heart" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "#cec8ff",
    contentComponent: CustomDrawerContentComponent,
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  componentDidMount() {
    this.props.fetchCampsites();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchPartners();

    NetInfo.fetch().then((connectionInfo) => {
      Platform.os === "ios"
        ? Alert.alert("Initial Network Connectivity Type:", connectionInfo.type)
        : ToastAndroid.show(
            "Initial Network Connectivity Type:" + connectionInfo.type,
            ToastAndroid.LONG
          );
    });

    this.unsubscribeNetInfo = NetInfo.addEventListener((connectionInfo) => {
      this.handleConnectivityChange(connectionInfo);
    });
  }

  componentWillUnmount() {
    this.unsubscribeNetInfo();
  }

  handleConnectivityChange = (connectionInfo) => {
    let connectionMsg = "your on a connected network.";
    switch (connectionInfo.type) {
      case "none":
        connectionMsg = "no network";
        break;
      case "unknown":
        connectionMsg = "Unknown connectivity";
        break;
      case "cellular":
        connectionMsg = "Connected via celluarly";
        break;
      case "wifi":
        connectionMsg = "Connected via wifi";
        break;
    }
    Platform.OS === "ios"
      ? Alert.alert(" Connection changed:", connectionMsg)
      : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#5637DD",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
});

export default connect(null, mapDispatchToProps)(Main);
