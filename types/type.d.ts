import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: any;
  containerStyle?: any;
  inputStyle?: any;
  iconStyle?: any;
  className?: string;
}

declare interface GoogleInputProps {
  icon?: string;
  initialLocation?: string;
  containerStyle?: any;
  textInputBackgroundColor?: string;
  handlePress: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface Ride {
  origin_address: string;
  destination_address: string;
  origin_latitude: number;
  origin_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  ride_time: number;
  fare_price: number;
  payment_status: string;
  driver_id: number;
  user_id: string;
  created_at: string;
  driver: {
    first_name: string;
    last_name: string;
    car_seats: number;
  };
}

declare interface Driver {
  id: number;
  name: string;
  car_model: string;
  profile_image_url: string;
  car_image_url: string;
  latitude: number;
  longitude: number;
  rating: number;
  price?: string;
}

declare interface MarkerData {
  latitude: number;
  longitude: number;
  name: string;
  car_model: string;
  id: number;
  profile_image_url: string;
  car_image_url: string;
  rating: number;
  price?: string;
}

declare interface MapData {
  userLatitude: number | null;
  userLongitude: number | null;
  address: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
}
