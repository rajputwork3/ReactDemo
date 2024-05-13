import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "./../Component/SignInScreen"
// import CompanySelectScreen from "../screens/CompanySelectScreen";
// import CompanySelectStaging from "../screens/CompanySelectStaging";
// import RegistrationScreen from "../modules/Auth/RegistrationScreen";
// import { LangContext } from "../components/context";

// import Privacypolicy from "../screens/Privacypolicy";

const Stack = createStackNavigator();
const AuthStackNavigator = (props) => {
//   const i18n = useContext(LangContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        options={{ headerShown: false }}
        component={SignInScreen}
        // initialParams={{ passwordScreen: props.passwordScreen }}
      />

      {/* <Stack.Screen
        name="Privacypolicy"
        component={Privacypolicy}
        options={{
          title: i18n.t("privacyPolicy"),
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#10226A",
          },
        }}
      />

      <Stack.Screen
        name="CompanyScreen"
        options={{ headerShown: false }}
        component={CompanySelectScreen}
      />
      <Stack.Screen
        name="CompanySelectStagingScreen"
        component={CompanySelectStaging}
        options={{
          title: "Configuration",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#10226A",
          },
        }}
      />

      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{
          title: i18n.t("registration"),
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#10226A",
          },
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
