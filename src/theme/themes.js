export const THEMES = {
  LIGHT_THEME: 'lightTheme',
  DARK_THEME: 'darkTheme',
  BLUE_MARBLE_LIGHT_THEME: 'blueMarbleLightTheme',
};

const lightTheme = {
  colors: {
    //app colors
    transparent: '#000000000',
    primary: '#325548',
    secondary: '#838E8A',
    lightGreen: '#F2F2D4',
    ratingStarColor: '#E7C14F',

    // text colors
    darkTextColor: '#242424',
    amountTextColor: '#365C56',
    blackTextColor: '#000000',

    lightTextColor: '#FCF8F3',
    lightTextColor2: '#F3EFE2',
    textColor: '#545751',
    textPlaceHolderColor: '#777777',
    primaryTextColor: '#28443A',

    // background colors
    itemBackground: '#F3F0E7',
    screenBackGround: '#FCF8F3',
    borderColor: '#CCCCCC',
    lightBorderColor: '#E5E5E5',

    //button colors
    buttonBackground: '#FF6363',

    //icon colors
    iconColor: '#333333',

    //separator
    separator: '#242424',
    separatorDarkColor: '#242424',
    separatorLightColor: '#D4D4D4',

    // primary colors
    white: '#ffffff',
    black: '#000000',
    silver: '#CCCCCC',
    disabled: '#CCCCCC',
    lineColor: '#516D63',
  },
};

const darkTheme = {
  colors: {
    //app colors
    transparent: '#000000000',
    primary: '#325548',
    secondary: '#53665F',
    lightGreen: '#F2F2D4',
    ratingStarColor: '#E7C14F',

    // text colors
    darkTextColor: '#FCF8F3',
    amountTextColor: '#FCF8F3',
    blackTextColor: '#FCF8F3',
    lightTextColor: '#FCF8F3',
    lightTextColor2: '#F3EFE2',
    textColor: '#BDBDBD',
    textPlaceHolderColor: '#777777',
    primaryTextColor: '#FCF8F3',

    // background colors
    itemBackground: '#2F3A36',
    screenBackGround: '#242E2A',
    borderColor: '#757575',
    lightBorderColor: '#E5E5E5',

    //button colors
    buttonBackground: '#FF6363',

    //icon colors
    iconColor: '#FCF8F3',

    //separator
    separator: '#757575',
    separatorDarkColor: '#757575',
    separatorLightColor: '#757575',

    // primary colors
    white: '#ffffff',
    black: '#000000',
    silver: '#CCCCCC',
    disabled: '#757575',
    lineColor: '#516D63',
  },
};

export const blueMarbleLightTheme = {
  colors: {
    primary: '#516D8B',
    secondary: 'black',
    //app colors
    transparent: '#000000000',
    ratingStarColor: '#F9D849',

    // text colors
    darkTextColor: '#242424',
    lightTextColor: '#333333',
    textColor: '#545751',
    grayTextColor: '#999999',
    ratingBackground: '#F8F8F8',
    grayTextColor2: '#727272',
    grayTextColor3: '#707070',
    softBlueTextColor: '#516D8B',

    // borderColor
    borderColor: '#E5E5E5',

    //button colors
    buttonBackground: '#FF6363',

    // primary colors
    white: '#ffffff',
    black: '#000000',
    silver: '#CCCCCC',
    disabled: '#CCCCCC',
    lineColor: '#516D63',
    lightGrayishBlueColor: '#F8F9FB',
    red: '#ff0000',

    // background colors
    borderColor: '#CCCCCC',
    borderColor3: '#DDDDDD',
    textPlaceHolderColor: '#777777',

    //button colors
    buttonBackground: '#333333',

    // text Color
    darkText: '#333333',
    mediumText: '#666666',
    lightText: '#999999',
  },
};

export const getLatestAppTheme = themeName => {
  switch (themeName) {
    case THEMES.LIGHT_THEME:
      return lightTheme;
    case THEMES.DARK_THEME:
      return darkTheme;
    case THEMES.BLUE_MARBLE_LIGHT_THEME:
      return blueMarbleLightTheme;
    default:
      return blueMarbleLightTheme;
  }
};
