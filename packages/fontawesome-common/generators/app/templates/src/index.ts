/**
 * <%= className %> icon set component.
 * Usage: <<%= className %> name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from '@react-native-vector-icons/<%= commonPackage %>';

import metadata from '../glyphmaps/<%= className %>_meta.json';

const Icon = createIconSet(metadata);

export default Icon;
export const { getImageSource, getImageSourceSync } = Icon;
