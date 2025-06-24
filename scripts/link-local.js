const { execSync } = require('child_process');
const path = require('path');

try {
  // Build the package
  console.log('Building package...');
  execSync('pnpm build', { stdio: 'inherit' });

  // Create global link
  console.log('Creating global link...');
  execSync('pnpm link --global', { stdio: 'inherit' });

  // Link in playground
  console.log('Linking in playground...');
  process.chdir('./playground/next15');
  execSync('pnpm link --global @phazr/react-custom-cursor', {
    stdio: 'inherit',
  });

  console.log('✅ Local linking complete!');
} catch (error) {
  console.error('❌ Error during linking:', error.message);
}
