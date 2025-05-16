
import { Text } from 'react-native';
import React from 'react';
import { Colors, Sizes, Fonts, Spacing } from '../../constants';

const Txt = ({
  size = Sizes.medium,
  weight = Fonts.weight.bold,
  color = Colors.secondary,
  textalign = 'center',
  styles,
  mt = Spacing.xsmall ,
  mr = Spacing.xsmall,
  mb = Spacing.xsmall,
  ml  = Spacing.xsmall,
  lh = null,
  children,
}) => {
  const allStyles = [
    { color },
    { fontSize: size },
    { fontWeight: weight.toString() },
    { textAlign: textalign },
    { marginTop: mt },
    { marginRight: mr },
    { marginBottom: mb },
    { marginLeft: ml },
    { lineHeight: lh },
  ];

  return <Text style={[allStyles, styles]}>{children}</Text>;
};

export default Txt;
// ------------------

// import { Text } from 'react-native';
// import React from 'react';
// import { Colors, Sizes, Fonts, Spacing } from '../../constants';

// const Txt = ({
//   size = Sizes.medium,
//   weight = Fonts.weight.bold,
//   color = Colors.secondary,
//   textalign = 'center',
//   style, // ✅ renamed from styles
//   mt = Spacing.xsmall,
//   mr = Spacing.xsmall,
//   mb = Spacing.xsmall,
//   ml = Spacing.xsmall,
//   lh = null,
//   children,
// }) => {
//   const allStyles = [
//     { color },
//     { fontSize: size },
//     { fontWeight: weight.toString() },
//     { textAlign: textalign },
//     { marginTop: mt },
//     { marginRight: mr },
//     { marginBottom: mb },
//     { marginLeft: ml },
//     lh && { lineHeight: lh }, // ✅ optional only if provided
//   ];

//   return <Text style={[...allStyles, style]}>{children}</Text>; // ✅ apply style here
// };

// export default Txt;
