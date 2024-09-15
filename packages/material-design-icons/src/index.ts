/**
 * This is a generated file. If you modify it manually, your changes will be lost!
 * Instead, modify the template in `generator-react-native-vector-icons`.
 *
 * MaterialDesignIcons icon set component.
 * Usage: <MaterialDesignIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from '@react-native-vector-icons/common';
import glyphMap from '../glyphmaps/MaterialDesignIcons.json';

const Icon = createIconSet(glyphMap, {
  postscriptName: 'MaterialDesignIcons',
  fontFilename: 'MaterialDesignIcons.ttf',
  fontSource: require('../fonts/MaterialDesignIcons.ttf'), // eslint-disable-line @typescript-eslint/no-require-imports, global-require
});

export default Icon;
