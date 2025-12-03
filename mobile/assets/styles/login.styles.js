//#region Login Style
// styles/login.styles.js
import { StyleSheet, Dimensions } from "react-native";
import  COLOR_BLOSSOM from "../../constants/ COLOR_BLOSSOM";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:  COLOR_BLOSSOM.background,
    padding: 20,
    justifyContent: "center",
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor:  COLOR_BLOSSOM.background,
  },
  topIllustration: {
    alignItems: "center",
    width: "100%",
  },
  illustrationImage: {
    width: width * 0.75,
    height: width * 0.75,
  },
  card: {
    backgroundColor:  COLOR_BLOSSOM.cardBackground,
    borderRadius: 16,
    padding: 24,
    shadowColor:  COLOR_BLOSSOM.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor:  COLOR_BLOSSOM.border,
    marginTop: -24,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color:  COLOR_BLOSSOM.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color:  COLOR_BLOSSOM.textSecondary,
    textAlign: "center",
  },
  formContainer: {
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color:  COLOR_BLOSSOM.textPrimary,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:  COLOR_BLOSSOM.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor:  COLOR_BLOSSOM.border,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 48,
    color:  COLOR_BLOSSOM.textDark,
  },
  eyeIcon: {
    padding: 8,
  },
  button: {
    backgroundColor:  COLOR_BLOSSOM.primary,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor:  COLOR_BLOSSOM.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color:  COLOR_BLOSSOM.white,
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color:  COLOR_BLOSSOM.textSecondary,
    marginRight: 5,
  },
  link: {
    color:  COLOR_BLOSSOM.primary,
    fontWeight: "600",
  },
});

export default styles;
//#endregion