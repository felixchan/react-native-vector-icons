import fs from 'node:fs';

export default (pkgs: Set<string>) => {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const { dependencies } = packageJson;

  pkgs.forEach((pkg) => {
    if (!dependencies[pkg]) {
      dependencies[pkg] = 'latest';
    }
  });

  if (pkgs.size > 0 && dependencies['react-native-vector-icons']) {
    dependencies['react-native-vector-icons'] = undefined;
    dependencies['@react-native-vector-icons/common'] = 'latest';
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  }
};
