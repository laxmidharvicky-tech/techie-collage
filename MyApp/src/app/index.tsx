import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const TEAL = "#015844";
const LIGHT_TEAL = "#EAF6F2";
const BG = "#F7FAF9";

const services = [
  {
    name: "All",
    icon: "apps-outline",
  },
  {
    name: "Electrician",
    icon: "flash-outline",
  },
  {
    name: "Plumber",
    icon: "water-outline",
  },
  {
    name: "AC Repair",
    icon: "snow-outline",
  },
  {
    name: "Appliance",
    icon: "hardware-chip-outline",
  },
  {
    name: "More",
    icon: "ellipsis-horizontal-outline",
  },
];

const technicians = [
  {
    name: "Rajesh Kumar",
    job: "Electrician",
    rating: "4.8",
    reviews: "126",
    avatar: "👨🏽‍🔧",
  },
  {
    name: "Sandeep Das",
    job: "Plumber",
    rating: "4.7",
    reviews: "95",
    avatar: "👨🏻‍🔧",
  },
  {
    name: "Amit Mohanty",
    job: "AC Technician",
    rating: "4.9",
    reviews: "110",
    avatar: "👨🏽‍🔧",
  },
  {
    name: "Gourav Nayak",
    job: "Appliance Expert",
    rating: "4.6",
    reviews: "80",
    avatar: "👨🏻‍🔧",
  },
];

const popularServices = [
  {
    name: "AC Installation",
    price: "₹799",
    rating: "4.8",
    reviews: "125",
    icon: "snow-outline",
  },
  {
    name: "AC Cleaning",
    price: "₹499",
    rating: "4.9",
    reviews: "148",
    icon: "snow-outline",
  },
  {
    name: "Tap Repair",
    price: "₹199",
    rating: "4.8",
    reviews: "98",
    icon: "water-outline",
  },
  {
    name: "Fan Installation",
    price: "₹299",
    rating: "4.7",
    reviews: "86",
    icon: "sync-outline",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>

        {/* =================================================
                         HEADER
        ================================================= */}

        <View style={styles.header}>
          <View style={styles.headerLeft}>

            <Text style={styles.greeting}>
              Good evening 🌙
            </Text>

            <Text style={styles.userName}>
              Laxmidhar
            </Text>

            <TouchableOpacity style={styles.location}>
              <Ionicons
                name="location"
                size={13}
                color={TEAL}
              />

              <Text style={styles.locationText}>
                Nayapalli, Bhubaneswar, Odisha
              </Text>

              <Ionicons
                name="chevron-down"
                size={11}
                color="#899590"
              />
            </TouchableOpacity>

          </View>

          <View style={styles.headerRight}>

            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#26332F"
              />

              <View style={styles.notificationBadge} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.profile}>
              <Text style={styles.profileEmoji}>
                👨🏻
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* =================================================
                         MAIN CONTENT
        ================================================= */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >

          {/* SEARCH */}

          <View style={styles.searchBox}>

            <Ionicons
              name="search-outline"
              size={20}
              color="#62706B"
            />

            <TextInput
              style={styles.searchInput}
              placeholder="Search for a service"
              placeholderTextColor="#9AA6A2"
            />

            <TouchableOpacity>
              <Ionicons
                name="mic-outline"
                size={20}
                color={TEAL}
              />
            </TouchableOpacity>

          </View>


          {/* =================================================
                       REFER & EARN
          ================================================= */}

          <View style={styles.referCard}>

            <View style={styles.referTextContainer}>

              <Text style={styles.referSmall}>
                Invite Friends &
              </Text>

              <Text style={styles.referTitle}>
                Earn ₹100
              </Text>

              <Text style={styles.referDescription}>
                You get ₹100 in Wallet
              </Text>

              <Text style={styles.referDescription}>
                Your friend gets ₹100 OFF
              </Text>

              <TouchableOpacity style={styles.inviteButton}>
                <Text style={styles.inviteButtonText}>
                  Invite Now
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={12}
                  color="#FFFFFF"
                />
              </TouchableOpacity>

            </View>

            <View style={styles.giftContainer}>

              <Text style={styles.gift}>
                🎁
              </Text>

              <Text style={styles.coins}>
                🪙 🪙
              </Text>

            </View>

            <TouchableOpacity style={styles.shareButton}>
              <Ionicons
                name="share-social-outline"
                size={16}
                color={TEAL}
              />
            </TouchableOpacity>

          </View>


          {/* =================================================
                         SERVICE CATEGORIES
          ================================================= */}

          <View style={styles.serviceContainer}>

            {services.map((service, index) => (

              <TouchableOpacity
                key={service.name}
                style={styles.serviceItem}
                activeOpacity={0.7}
              >

                <View
                  style={[
                    styles.serviceIcon,
                    index === 0 && styles.serviceIconActive,
                  ]}
                >

                  <Ionicons
                    name={service.icon as any}
                    size={21}
                    color={
                      index === 0
                        ? "#FFFFFF"
                        : TEAL
                    }
                  />

                </View>

                <Text
                  style={[
                    styles.serviceName,
                    index === 0 &&
                      styles.serviceNameActive,
                  ]}
                >
                  {service.name}
                </Text>

              </TouchableOpacity>

            ))}

          </View>


          {/* =================================================
                       ACTIVE TECHNICIANS
          ================================================= */}

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Active Technicians Near You
            </Text>

            <TouchableOpacity>
              <Text style={styles.viewAll}>
                View all →
              </Text>
            </TouchableOpacity>

          </View>


          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalContent}
          >

            {technicians.map((person) => (

              <TouchableOpacity
                key={person.name}
                style={styles.technicianCard}
              >

                <View style={styles.avatarContainer}>

                  <Text style={styles.avatar}>
                    {person.avatar}
                  </Text>

                  <View style={styles.onlineDot} />

                </View>

                <Text
                  style={styles.technicianName}
                  numberOfLines={1}
                >
                  {person.name}
                </Text>

                <Text
                  style={styles.technicianJob}
                  numberOfLines={1}
                >
                  {person.job}
                </Text>

                <View style={styles.ratingRow}>

                  <Text style={styles.star}>
                    ★
                  </Text>

                  <Text style={styles.rating}>
                    {person.rating}
                  </Text>

                  <Text style={styles.reviewCount}>
                    ({person.reviews})
                  </Text>

                </View>

                <Text style={styles.available}>
                  ● Available
                </Text>

              </TouchableOpacity>

            ))}

          </ScrollView>


          {/* =================================================
                       POPULAR SERVICES
          ================================================= */}

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Popular Services
            </Text>

            <TouchableOpacity>
              <Text style={styles.viewAll}>
                View all →
              </Text>
            </TouchableOpacity>

          </View>


          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalContent}
          >

            {popularServices.map((service) => (

              <TouchableOpacity
                key={service.name}
                style={styles.popularCard}
                activeOpacity={0.8}
              >

                <View style={styles.serviceImage}>

                  <View style={styles.imageCircle}>
                    <Ionicons
                      name={service.icon as any}
                      size={31}
                      color={TEAL}
                    />
                  </View>

                </View>

                <Text
                  style={styles.popularName}
                  numberOfLines={1}
                >
                  {service.name}
                </Text>

                <Text style={styles.startingText}>
                  Starting from
                </Text>

                <Text style={styles.price}>
                  {service.price}
                </Text>

                <View style={styles.popularRating}>

                  <Text style={styles.star}>
                    ★
                  </Text>

                  <Text style={styles.rating}>
                    {service.rating}
                  </Text>

                  <Text style={styles.reviewCount}>
                    • {service.reviews}
                  </Text>

                </View>

              </TouchableOpacity>

            ))}

          </ScrollView>


          {/* WHY CHOOSE FIXO */}

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Why Choose FIXO?
            </Text>

          </View>

          <View style={styles.features}>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons
                  name="shield-checkmark"
                  size={21}
                  color={TEAL}
                />
              </View>

              <Text style={styles.featureText}>
                Background
                {"\n"}
                Verified
              </Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons
                  name="people"
                  size={21}
                  color={TEAL}
                />
              </View>

              <Text style={styles.featureText}>
                Trusted
                {"\n"}
                Experts
              </Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons
                  name="headset"
                  size={21}
                  color={TEAL}
                />
              </View>

              <Text style={styles.featureText}>
                Quick
                {"\n"}
                Support
              </Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons
                  name="checkmark-circle"
                  size={21}
                  color={TEAL}
                />
              </View>

              <Text style={styles.featureText}>
                Service
                {"\n"}
                Guarantee
              </Text>
            </View>

          </View>


          {/* Bottom spacing */}

          <View style={{ height: 125 }} />

        </ScrollView>


        {/* =================================================
                         FIX NOW BUTTON
        ================================================= */}

        <TouchableOpacity
          style={styles.fixNow}
          activeOpacity={0.85}
        >

          <Ionicons
            name="construct"
            size={19}
            color="#FFFFFF"
          />

          <Text style={styles.fixText}>
            FIX
          </Text>

          <Text style={styles.fixText}>
            NOW
          </Text>

        </TouchableOpacity>


        {/* =================================================
                         BOTTOM NAVIGATION
        ================================================= */}

        <View style={styles.bottomNav}>

          <TouchableOpacity style={styles.navItem}>

            <Ionicons
              name="home"
              size={21}
              color={TEAL}
            />

            <Text style={styles.activeNavText}>
              Home
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.navItem}>

            <Ionicons
              name="grid-outline"
              size={20}
              color="#899590"
            />

            <Text style={styles.navText}>
              Services
            </Text>

          </TouchableOpacity>

 <TouchableOpacity style={styles.navItem}>

            <Ionicons
              name="pricetag-outline"
              size={20}
              color="#899590"
            />

            <Text style={styles.navText}>
              Offers
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.navItem}>

            <Ionicons
              name="calendar-outline"
              size={21}
              color="#899590"
            />

            <Text style={styles.navText}>
              Bookings
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={styles.navItem}>

            <Ionicons
              name="person-outline"
              size={21}
              color="#899590"
            />

            <Text style={styles.navText}>
              Profile
            </Text>

          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}


/* =====================================================
                         STYLES
===================================================== */

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },

  container: {
    flex: 1,
    backgroundColor: BG,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 4,
  },


  /* ================= HEADER ================= */

  header: {
    height: 76,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: BG,
  },

  headerLeft: {
    flex: 1,
  },

  greeting: {
    fontSize: 10,
    color: "#7B8884",
    marginBottom: 2,
  },

  userName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#26332F",
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  locationText: {
    fontSize: 8,
    color: "#7B8884",
    marginLeft: 3,
    marginRight: 3,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  notificationButton: {
    width: 30,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  notificationBadge: {
    position: "absolute",
    right: 2,
    top: 4,
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#FF5C4D",
    borderWidth: 1,
    borderColor: BG,
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#DCEBE6",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  profileEmoji: {
    fontSize: 27,
  },


  /* ================= SEARCH ================= */

  searchBox: {
    height: 44,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "#E5ECE9",
    marginBottom: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 11,
    color: "#26332F",
    marginLeft: 9,
  },


  /* ================= REFER CARD ================= */

  referCard: {
    height: 120,
    backgroundColor: LIGHT_TEAL,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D8ECE6",
    overflow: "hidden",
    flexDirection: "row",
    position: "relative",
  },

  referTextContainer: {
    paddingLeft: 13,
    paddingTop: 12,
    zIndex: 2,
  },

  referSmall: {
    fontSize: 10,
    color: TEAL,
    fontWeight: "700",
  },

  referTitle: {
    fontSize: 21,
    color: "#168B7B",
    fontWeight: "900",
    marginTop: -1,
  },

  referDescription: {
    fontSize: 7,
    color: "#71857F",
    marginTop: 1,
  },

  inviteButton: {
    height: 24,
    paddingHorizontal: 10,
    backgroundColor: TEAL,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 7,
  },

  inviteButtonText: {
    fontSize: 8,
    color: "#FFFFFF",
    fontWeight: "800",
  },

  giftContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 25,
  },

  gift: {
    fontSize: 43,
  },

  coins: {
    fontSize: 13,
    marginTop: -7,
  },

  shareButton: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },


  /* ================= SERVICE CATEGORIES ================= */

  serviceContainer: {
    height: 79,
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EDF2F0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  serviceItem: {
    width: 52,
    alignItems: "center",
  },

  serviceIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: LIGHT_TEAL,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },

  serviceIconActive: {
    backgroundColor: TEAL,
  },

  serviceName: {
    fontSize: 7,
    color: "#687873",
    textAlign: "center",
  },

  serviceNameActive: {
    color: TEAL,
    fontWeight: "800",
  },


  /* ================= SECTION ================= */

  sectionHeader: {
    marginTop: 15,
    marginBottom: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 13,
    color: "#26332F",
    fontWeight: "800",
  },

  viewAll: {
    fontSize: 9,
    color: "#6C7A75",
  },

  horizontalContent: {
    paddingRight: 10,
  },


  /* ================= TECHNICIANS ================= */

  technicianCard: {
    width: 86,
    alignItems: "center",
    marginRight: 10,
  },

  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E1EFEB",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  avatar: {
    fontSize: 34,
  },

  onlineDot: {
    position: "absolute",
    right: 0,
    bottom: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#16B477",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  technicianName: {
    width: 86,
    textAlign: "center",
    fontSize: 8,
    fontWeight: "800",
    color: "#26332F",
    marginTop: 5,
  },

  technicianJob: {
    width: 86,
    textAlign: "center",
    fontSize: 7,
    color: "#7C8985",
    marginTop: 2,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },

  star: {
    color: "#F4A623",
    fontSize: 9,
  },

  rating: {
    fontSize: 7,
    color: "#596762",
    fontWeight: "700",
    marginLeft: 2,
  },

  reviewCount: {
    fontSize: 6,
    color: "#9AA5A1",
    marginLeft: 3,
  },

  available: {
    fontSize: 6,
    color: "#14A36C",
    marginTop: 3,
  },


  /* ================= POPULAR SERVICES ================= */

  popularCard: {
    width: 128,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 7,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#EDF2F0",
  },

  serviceImage: {
    height: 66,
    borderRadius: 9,
    backgroundColor: "#F0F7F5",
    alignItems: "center",
    justifyContent: "center",
  },

  imageCircle: {
    width: 47,
    height: 47,
    borderRadius: 24,
    backgroundColor: "#E1F1EC",
    alignItems: "center",
    justifyContent: "center",
  },

  popularName: {
    fontSize: 9,
    color: "#26332F",
    fontWeight: "800",
    marginTop: 6,
  },

  startingText: {
    fontSize: 6,
    color: "#8A9691",
    marginTop: 2,
  },

  price: {
    fontSize: 11,
    color: TEAL,
    fontWeight: "900",
    marginTop: 1,
  },

  popularRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },


  /* ================= FEATURES ================= */

  features: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EDF2F0",
    minHeight: 91,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  featureItem: {
    alignItems: "center",
    width: 72,
  },

  featureIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: LIGHT_TEAL,
    alignItems: "center",
    justifyContent: "center",
  },

  featureText: {
    textAlign: "center",
    fontSize: 7,
    color: "#687873",
    marginTop: 5,
    lineHeight: 9,
  },


  /* ================= FIX NOW ================= */

  fixNow: {
    position: "absolute",

    right: 18,
    bottom: 88,

    width: 62,
    height: 62,

    borderRadius: 31,

    backgroundColor: TEAL,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 3,
    borderColor: "#FFFFFF",

    elevation: 12,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    zIndex: 50,
  },

  fixText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 0.8,
    lineHeight: 9,
  },


  /* ================= BOTTOM NAV ================= */

  bottomNav: {
    position: "absolute",

    left: 12,
    right: 12,
    bottom: 10,

    height: 66,

    borderRadius: 34,

    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    borderWidth: 1,
    borderColor: "#EDF2F0",

    elevation: 12,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    zIndex: 20,
  },

  navItem: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    fontSize: 7,
    color: "#899590",
    marginTop: 3,
  },

  activeNavText: {
    fontSize: 7,
    color: TEAL,
    fontWeight: "800",
    marginTop: 3,
  },

  navSpace: {
    width: 48,
  },

});
